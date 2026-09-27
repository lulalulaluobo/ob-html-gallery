export type Lang = "en" | "ja" | "zh";
export type LangSetting = "auto" | Lang;

const en = {
  "plugin.name": "HTML Gallery",
  "ribbon.open": "Open HTML Gallery",
  "command.open": "Open gallery",
  "menu.filterFolder": "HTML Gallery: show only this folder",

  "header.searchPlaceholder": "Search (space-separated terms are ANDed)",
  "header.filters": "Filters",
  "header.sort.mtime": "Recent",
  "header.sort.path": "Folder",
  "header.size.small": "S",
  "header.size.medium": "M",
  "header.size.large": "L",
  "header.size.label": "Thumbnail size",
  "header.folder.all": "All folders",
  "header.folder.label": "Filter by folder",
  "header.folder.clear": "Clear folder filter",
  "header.count": "{n} files",
  "header.countFiltered": "{n} / {total} files",
  "header.indexing": "(indexing...)",
  "header.kinds.hint": "Choose which file types the gallery lists",
  "header.kind.html": "HTML",
  "header.kind.svg": "SVG",
  "header.kind.image": "IMG",
  "header.kind.pdf": "PDF",
  "header.unreferenced": "Unreferenced",
  "header.unreferenced.hint": "Show only files that no note links to",

  "grid.empty": "No files found",
  "grid.noMatch": "No files match the filter",

  "refs.backlinks": "Backlinks",
  "refs.siblings": "Same folder",
  "refs.none": "No references",
  "refs.siblingHint": "Guessed from notes in the same folder (no link found)",
  "refs.backlinkHint": "Notes that link to this file",

  "fallback.badge": "Script-rendered",

  "modal.openDefaultApp": "Open in default app",
  "modal.shareHtml": "Share HTML file…",
  "modal.backlinks": "Backlinks ({n})",
  "modal.siblings": "Same folder ({n})",

  "settings.fileTypes": "File types",
  "settings.includeHtml": "Show HTML files",
  "settings.includeHtml.desc": "List .html and .htm files.",
  "settings.includeSvg": "Show SVG files",
  "settings.includeSvg.desc":
    "List .svg files. Their <title>, <desc> and text are searchable. SVGs are shown as images, so scripts inside them never run.",
  "settings.includeImages": "Show raster images",
  "settings.includeImages.desc":
    "List .png, .jpg, .gif, .webp, .avif and .bmp files. They carry no text, so they are only found by file name and by the notes that link them. A vault full of pasted screenshots will crowd out everything else.",
  "settings.includePdf": "Show PDF files",
  "settings.includePdf.desc":
    "List .pdf files, with the first page as the thumbnail. Text is extracted from the first few pages for search, so scanned PDFs without a text layer are only found by file name. Clicking a card opens Obsidian's PDF viewer.",
  "settings.language": "Language",
  "settings.language.desc": "Language of the plugin UI.",
  "settings.language.auto": "Auto (follow Obsidian)",
  "settings.language.en": "English",
  "settings.language.ja": "日本語",
  "settings.language.zh": "简体中文",
  "settings.thumbnailScripts": "Run scripts in thumbnails",
  "settings.thumbnailScripts.desc":
    "When on, JavaScript runs inside thumbnails so script-rendered HTML shows as is. Slower with many files. The enlarged view always runs scripts regardless of this setting.",
  "settings.thumbnailSize": "Thumbnail size",
  "settings.thumbnailSize.desc": "Minimum card width. Can also be changed from the gallery header.",
  "settings.size.small": "Small",
  "settings.size.medium": "Medium",
  "settings.size.large": "Large",
  "settings.targetFolder": "Target folder",
  "settings.targetFolder.desc": "Only files under this folder are listed. Leave empty for the whole vault.",
  "settings.targetFolder.placeholder": "e.g. tasks",
  "settings.excludeFolders": "Excluded folders",
  "settings.excludeFolders.desc": "Folders to hide from the gallery, one per line.",
  "settings.excludeFolders.placeholder": "e.g.\ntemplates\narchive/old",
  "settings.includeIndex": "Include index.html",
  "settings.includeIndex.desc":
    "index.html / index.htm are usually entry pages to other pages, so they are hidden by default.",

  "menu.addLinkTo": "Add link to {note}",
  "menu.openEnlarged": "Open enlarged view",
  "menu.openInNewTab": "Open in a new tab",
  "menu.copyEmbed": "Copy embed link",
  "menu.copyPath": "Copy path",
  "menu.revealInExplorer": "Reveal in file explorer",
  "menu.openDefaultApp": "Open in default app",
  "menu.shareHtml": "Share HTML file…",

  "card.modified": "Modified",
  "card.pages": "{n} pages",
  "card.noText": "no text",
  "card.noTextHint":
    "No text layer, so this file can only be found by name. Scanned PDFs need OCR, which this plugin does not do.",

  "command.linkIntoNote": "Insert link to a file in this folder",
  "linkModal.placeholder": "Files in this folder that this note does not link to yet",
  "linkModal.navigate": "navigate",
  "linkModal.insert": "insert link",
  "linkModal.dismiss": "dismiss",
  "linkModal.noBacklinks": "no backlinks",
  "notice.linkAdded": "Added a link to {note}",
  "notice.copied": "Copied to clipboard",
  "notice.noActiveNote": "Open a Markdown note first",
  "notice.noCandidates": "Every file in this folder is already linked from this note",
  "notice.shareUnsupported": "This device cannot share HTML files",
  "notice.openExternalFailed": "Could not open this file in another app",
} as const;

export type I18nKey = keyof typeof en;

const ja: Record<I18nKey, string> = {
  "plugin.name": "HTML Gallery",
  "ribbon.open": "HTML Gallery を開く",
  "command.open": "ギャラリーを開く",
  "menu.filterFolder": "HTML Gallery: このフォルダで絞り込む",

  "header.searchPlaceholder": "検索（スペース区切りで AND）",
  "header.filters": "絞り込み",
  "header.sort.mtime": "更新順",
  "header.sort.path": "フォルダ順",
  "header.size.small": "小",
  "header.size.medium": "中",
  "header.size.large": "大",
  "header.size.label": "サムネイルのサイズ",
  "header.folder.all": "すべてのフォルダ",
  "header.folder.label": "フォルダで絞り込む",
  "header.folder.clear": "フォルダの絞り込みを解除",
  "header.count": "{n} 件",
  "header.countFiltered": "{n} / {total} 件",
  "header.indexing": "（索引作成中）",
  "header.kinds.hint": "一覧に出すファイル形式を選ぶ",
  "header.kind.html": "HTML",
  "header.kind.svg": "SVG",
  "header.kind.image": "画像",
  "header.kind.pdf": "PDF",
  "header.unreferenced": "未参照",
  "header.unreferenced.hint": "どのノートからも参照されていないファイルだけを表示",

  "grid.empty": "ファイルが見つかりません",
  "grid.noMatch": "条件に一致するファイルはありません",

  "refs.backlinks": "バックリンク",
  "refs.siblings": "同フォルダ",
  "refs.none": "参照なし",
  "refs.siblingHint": "リンクが見つからないため、同じフォルダのノートから推測",
  "refs.backlinkHint": "このファイルにリンクしているノート",

  "fallback.badge": "スクリプト描画",

  "modal.openDefaultApp": "既定のアプリで開く",
  "modal.shareHtml": "HTML ファイルを共有…",
  "modal.backlinks": "バックリンク（{n}）",
  "modal.siblings": "同フォルダ（{n}）",

  "settings.fileTypes": "対象のファイル形式",
  "settings.includeHtml": "HTML を表示",
  "settings.includeHtml.desc": ".html と .htm を一覧に出します。",
  "settings.includeSvg": "SVG を表示",
  "settings.includeSvg.desc":
    ".svg を一覧に出します。<title> / <desc> / テキスト要素が検索対象になります。画像として表示するので、SVG 内のスクリプトは実行されません。",
  "settings.includeImages": "画像（PNG / JPEG など）を表示",
  "settings.includeImages.desc":
    ".png / .jpg / .gif / .webp / .avif / .bmp を一覧に出します。テキストを持たないため、ファイル名と参照ノートからしか探せません。ノートに貼った画像が多い保管庫では、成果物が埋もれます。",
  "settings.includePdf": "PDF を表示",
  "settings.includePdf.desc":
    ".pdf を一覧に出し、1ページ目をサムネイルにします。検索用に先頭数ページからテキストを抽出するため、テキスト層のないスキャンPDFはファイル名でしか探せません。カードをクリックすると Obsidian の PDF ビューアで開きます。",
  "settings.language": "言語",
  "settings.language.desc": "プラグイン UI の表示言語。",
  "settings.language.auto": "自動（Obsidian の設定に従う）",
  "settings.language.en": "English",
  "settings.language.ja": "日本語",
  "settings.language.zh": "简体中文",
  "settings.thumbnailScripts": "サムネイル内のスクリプトを有効にする",
  "settings.thumbnailScripts.desc":
    "オンにすると一覧のサムネイルでも JavaScript を実行し、JS で描画する HTML もそのまま表示されます。件数が多いと重くなります。拡大表示では設定に関係なく常に有効です。",
  "settings.thumbnailSize": "サムネイルのサイズ",
  "settings.thumbnailSize.desc": "カードの最小幅を変えます。ギャラリーのヘッダーからも切り替えられます。",
  "settings.size.small": "小",
  "settings.size.medium": "中",
  "settings.size.large": "大",
  "settings.targetFolder": "対象フォルダ",
  "settings.targetFolder.desc": "このフォルダ配下のファイルだけを一覧します。空なら保管庫全体が対象です。",
  "settings.targetFolder.placeholder": "例: tasks",
  "settings.excludeFolders": "除外フォルダ",
  "settings.excludeFolders.desc": "一覧から除くフォルダを改行区切りで指定します。",
  "settings.excludeFolders.placeholder": "例:\ntemplates\narchive/old",
  "settings.includeIndex": "index.html を一覧に含める",
  "settings.includeIndex.desc": "index.html / index.htm は他ページへの入口であることが多いため、既定では除いています。",

  "menu.addLinkTo": "{note} にリンクを追加",
  "menu.openEnlarged": "拡大表示を開く",
  "menu.openInNewTab": "新しいタブで開く",
  "menu.copyEmbed": "埋め込みリンクをコピー",
  "menu.copyPath": "パスをコピー",
  "menu.revealInExplorer": "ファイルエクスプローラーで表示",
  "menu.openDefaultApp": "既定のアプリで開く",
  "menu.shareHtml": "HTML ファイルを共有…",

  "card.modified": "更新",
  "card.pages": "{n}ページ",
  "card.noText": "テキストなし",
  "card.noTextHint":
    "テキスト層が無いため、ファイル名でしか検索できません。スキャンPDFには OCR が必要ですが、このプラグインでは行いません。",

  "command.linkIntoNote": "このフォルダのファイルへのリンクを挿入",
  "linkModal.placeholder": "このノートからまだリンクしていない、同じフォルダのファイル",
  "linkModal.navigate": "移動",
  "linkModal.insert": "リンクを挿入",
  "linkModal.dismiss": "閉じる",
  "linkModal.noBacklinks": "バックリンクなし",
  "notice.linkAdded": "{note} にリンクを追加しました",
  "notice.copied": "クリップボードにコピーしました",
  "notice.noActiveNote": "先に Markdown ノートを開いてください",
  "notice.noCandidates": "このフォルダのファイルはすべてこのノートからリンク済みです",
  "notice.shareUnsupported": "この端末では HTML ファイルを共有できません",
  "notice.openExternalFailed": "別のアプリでファイルを開けませんでした",
};

const zh: Record<I18nKey, string> = {
  "plugin.name": "HTML 图库",
  "ribbon.open": "打开 HTML 图库",
  "command.open": "打开图库",
  "menu.filterFolder": "HTML 图库：仅显示此文件夹",

  "header.searchPlaceholder": "搜索（空格分隔的词语需同时匹配）",
  "header.filters": "筛选",
  "header.sort.mtime": "最近更新",
  "header.sort.path": "文件夹",
  "header.size.small": "小",
  "header.size.medium": "中",
  "header.size.large": "大",
  "header.size.label": "缩略图大小",
  "header.folder.all": "所有文件夹",
  "header.folder.label": "按文件夹筛选",
  "header.folder.clear": "清除文件夹筛选",
  "header.count": "{n} 个文件",
  "header.countFiltered": "{n} / {total} 个文件",
  "header.indexing": "（正在建立索引…）",
  "header.kinds.hint": "选择图库要显示的文件类型",
  "header.kind.html": "HTML",
  "header.kind.svg": "SVG",
  "header.kind.image": "图片",
  "header.kind.pdf": "PDF",
  "header.unreferenced": "未被引用",
  "header.unreferenced.hint": "仅显示没有笔记链接到的文件",

  "grid.empty": "没有找到文件",
  "grid.noMatch": "没有文件符合筛选条件",

  "refs.backlinks": "反向链接",
  "refs.siblings": "同文件夹",
  "refs.none": "没有引用",
  "refs.siblingHint": "未找到链接；根据同一文件夹中的笔记推测",
  "refs.backlinkHint": "链接到此文件的笔记",

  "fallback.badge": "脚本渲染页面",

  "modal.openDefaultApp": "用默认应用打开",
  "modal.shareHtml": "分享 HTML 文件…",
  "modal.backlinks": "反向链接（{n}）",
  "modal.siblings": "同文件夹（{n}）",

  "settings.fileTypes": "文件类型",
  "settings.includeHtml": "显示 HTML 文件",
  "settings.includeHtml.desc": "列出 .html 和 .htm 文件。",
  "settings.includeSvg": "显示 SVG 文件",
  "settings.includeSvg.desc":
    "列出 .svg 文件。可搜索其中的 <title>、<desc> 和文本内容。SVG 以图片方式显示，其中的脚本不会运行。",
  "settings.includeImages": "显示图片文件",
  "settings.includeImages.desc":
    "列出 .png、.jpg、.gif、.webp、.avif 和 .bmp 文件。图片没有可搜索的文本，只能通过文件名和引用它的笔记找到；如果库中有很多粘贴的截图，目标文件可能会被淹没。",
  "settings.includePdf": "显示 PDF 文件",
  "settings.includePdf.desc":
    "列出 .pdf 文件，并将第一页用作缩略图。搜索会提取前几页的文本；没有文本层的扫描件只能通过文件名找到。点击卡片会在 Obsidian 的 PDF 阅读器中打开。",
  "settings.language": "语言",
  "settings.language.desc": "插件界面的显示语言。",
  "settings.language.auto": "自动（跟随 Obsidian）",
  "settings.language.en": "English",
  "settings.language.ja": "日本語",
  "settings.language.zh": "简体中文",
  "settings.thumbnailScripts": "在缩略图中运行脚本",
  "settings.thumbnailScripts.desc":
    "开启后，缩略图中的 JavaScript 会运行，依赖脚本渲染的 HTML 页面也能正常显示。文件较多时会更慢。放大预览始终会运行脚本。",
  "settings.thumbnailSize": "缩略图大小",
  "settings.thumbnailSize.desc": "设置卡片的最小宽度，也可以在图库顶部切换。",
  "settings.size.small": "小",
  "settings.size.medium": "中",
  "settings.size.large": "大",
  "settings.targetFolder": "目标文件夹",
  "settings.targetFolder.desc": "仅显示此文件夹下的文件。留空则显示整个库。",
  "settings.targetFolder.placeholder": "例如：任务",
  "settings.excludeFolders": "排除的文件夹",
  "settings.excludeFolders.desc": "每行填写一个要从图库中隐藏的文件夹。",
  "settings.excludeFolders.placeholder": "例如：\n模板\n归档/旧文件",
  "settings.includeIndex": "包含 index.html",
  "settings.includeIndex.desc": "index.html / index.htm 通常是其他页面的入口，因此默认隐藏。",

  "menu.addLinkTo": "在 {note} 中添加链接",
  "menu.openEnlarged": "放大预览",
  "menu.openInNewTab": "在新标签页中打开",
  "menu.copyEmbed": "复制嵌入链接",
  "menu.copyPath": "复制路径",
  "menu.revealInExplorer": "在文件浏览器中显示",
  "menu.openDefaultApp": "用默认应用打开",
  "menu.shareHtml": "分享 HTML 文件…",

  "card.modified": "修改时间",
  "card.pages": "{n} 页",
  "card.noText": "无文本",
  "card.noTextHint":
    "文件没有文本层，只能通过文件名找到。扫描版 PDF 需要 OCR，本插件不会进行 OCR。",

  "command.linkIntoNote": "插入同文件夹文件的链接",
  "linkModal.placeholder": "此笔记尚未链接的同文件夹文件",
  "linkModal.navigate": "上下移动",
  "linkModal.insert": "插入链接",
  "linkModal.dismiss": "关闭",
  "linkModal.noBacklinks": "没有反向链接",
  "notice.linkAdded": "已添加指向 {note} 的链接",
  "notice.copied": "已复制到剪贴板",
  "notice.noActiveNote": "请先打开一个 Markdown 笔记",
  "notice.noCandidates": "此文件夹中的文件都已被当前笔记链接",
  "notice.shareUnsupported": "此设备无法分享 HTML 文件",
  "notice.openExternalFailed": "无法在其他应用中打开此文件",
};

const dictionaries: Record<Lang, Record<I18nKey, string>> = { en, ja, zh };

let current: Lang = "en";

/** Detect from Obsidian's own language: it sets the lang attribute on the document root */
export function detectLang(): Lang {
  const locale = (document.documentElement.lang || navigator.language || "").toLowerCase();
  if (locale.startsWith("ja")) return "ja";
  if (locale.startsWith("zh")) return "zh";
  return "en";
}

export function setLang(setting: LangSetting): void {
  current = setting === "auto" ? detectLang() : setting;
}

export function getLang(): Lang {
  return current;
}

/** Return the translated string, replacing placeholders such as {n} from vars */
export function t(key: I18nKey, vars?: Record<string, string | number>): string {
  let text = dictionaries[current][key] ?? en[key] ?? key;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      text = text.replace(new RegExp(`\\{${k}\\}`, "g"), String(v));
    }
  }
  return text;
}
