# HTML Gallery（Obsidian プラグイン）

このプロジェクトは [violetyk/obsidian-html-gallery](https://github.com/violetyk/obsidian-html-gallery) を基に開発したフォークです。元プロジェクトの機能を引き継ぎ、簡体字中国語 UI、モバイル端末で HTML をブラウザーなどに共有する機能、モバイル向けの折りたたみ式フィルターを追加しています。著作権とライセンスについては [LICENSE](LICENSE) をご覧ください。

保管庫内の HTML ファイルをカード形式で表示し、必要に応じて SVG・画像・PDF も一覧できます。検索、フォルダー絞り込み、並び替え、参照元ノートの確認にも対応しています。

## BRAT でインストール

1. Obsidian の「設定 → コミュニティプラグイン」で [BRAT](https://github.com/TfTHacker/obsidian42-brat) をインストールして有効にします。
2. コマンドパレットから **BRAT: Add a beta plugin for testing** を実行します。
3. `lulalulaluobo/ob-html-gallery` を入力し、プラグインを追加します。
4. 「設定 → コミュニティプラグイン」で **HTML Gallery** を有効にします。

インストール済みプラグイン一覧では、リポジトリ名ではなく **HTML Gallery** という名前で表示されます。このフォークは元プロジェクトと同じプラグイン ID `html-gallery` を使うため、同じ保管庫に両方を同時に入れることはできません。

## モバイルでの利用

ギャラリー上部には検索欄と「絞り込み」ボタンが表示されます。ボタンをタップすると、フォルダー・並び替え・ファイル形式などの設定が開きます。HTML の共有ではシステムの共有メニューからブラウザーなどを選べます。共有されるのは HTML ファイルのみで、別ファイルの CSS・JavaScript・画像は含まれません。

詳しい説明は[中国語 README](README.md)をご覧ください。
