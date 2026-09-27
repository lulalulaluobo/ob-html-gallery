import { App, arrayBufferToBase64, Notice, Platform, TFile } from "obsidian";
import { t } from "./i18n";
import { ArtifactKind } from "./kinds";

type AppWithDefaultApp = App & { openWithDefaultApp?: (path: string) => unknown };

interface MobileNativePlugins {
  Filesystem?: {
    writeFile(options: { path: string; data: string; directory: "CACHE" }): Promise<unknown>;
    getUri(options: { path: string; directory: "CACHE" }): Promise<{ uri: string }>;
  };
  Share?: {
    share(options: { title: string; files: string[] }): Promise<unknown>;
  };
}

function mobileNativePlugins(): MobileNativePlugins | undefined {
  return (window as Window & { Capacitor?: { Plugins?: MobileNativePlugins } }).Capacitor?.Plugins;
}

function nativeShareBridge(): Required<MobileNativePlugins> | null {
  const plugins = mobileNativePlugins();
  if (
    typeof plugins?.Filesystem?.writeFile !== "function" ||
    typeof plugins.Filesystem.getUri !== "function" ||
    typeof plugins.Share?.share !== "function"
  ) return null;
  return { Filesystem: plugins.Filesystem, Share: plugins.Share };
}

function cacheFileName(file: TFile): string {
  let hash = 2166136261;
  for (const byte of new TextEncoder().encode(file.path)) {
    hash = Math.imul(hash ^ byte, 16777619);
  }
  return `html-gallery-${(hash >>> 0).toString(36)}.${file.extension}`;
}

export type ExternalOpenMode = "default-app" | "share";

/** Use Obsidian's file opener when present; mobile can share an HTML file otherwise. */
export function externalOpenMode(app: App, kind: ArtifactKind): ExternalOpenMode | null {
  if (typeof (app as AppWithDefaultApp).openWithDefaultApp === "function") return "default-app";
  if (!Platform.isDesktopApp && kind === "html" && (nativeShareBridge() || typeof navigator.share === "function")) {
    return "share";
  }
  return null;
}

export async function openExternally(app: App, file: TFile, kind: ArtifactKind): Promise<void> {
  const mode = externalOpenMode(app, kind);
  if (!mode) return;

  try {
    if (mode === "default-app") {
      await (app as AppWithDefaultApp).openWithDefaultApp?.(file.path);
      return;
    }

    const data = await app.vault.readBinary(file);
    const nativeBridge = nativeShareBridge();
    if (nativeBridge) {
      const { Filesystem, Share } = nativeBridge;
      const path = cacheFileName(file);
      await Filesystem.writeFile({ path, data: arrayBufferToBase64(data), directory: "CACHE" });
      const { uri } = await Filesystem.getUri({ path, directory: "CACHE" });
      await Share.share({ title: file.basename, files: [uri] });
      return;
    }

    const sharedFile = new File([data], file.name, { type: "text/html" });
    if (navigator.canShare && !navigator.canShare({ files: [sharedFile] })) {
      new Notice(t("notice.shareUnsupported"));
      return;
    }
    await navigator.share({ files: [sharedFile], title: file.basename });
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") return;
    new Notice(t("notice.openExternalFailed"));
  }
}
