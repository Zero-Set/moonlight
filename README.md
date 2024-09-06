# moonlight

## やったこと
- nvmをHomebrewからinstallを行った。

```shell
brew reinstall nvm
```

`nvm`って叩いても何も反応がなかったので、
よく読むと、こんな記述が出てきたので
`zsh`を使っているMac民は`~/.zshrc`を修正した。
出力メッセージをよく読めばよいのだが。。。
何年エンジニアもどきをやっているんだ。

```
Add the following to your shell profile e.g. ~/.profile or ~/.zshrc:
  export NVM_DIR="$HOME/.nvm"
  [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
```

- yarnは[公式ページ](https://yarnpkg.com/getting-started/install)を読むと、

```shell
corepack enable
```

をしろとのことだった。`npm`なんかしなくてよかったんだ（2024/9時点）
ちなみにnodeのバージョンはv19.1.0

yarnはversionが1から切り替わらないため、`create-react-app`が動かない。
yarnのversionが上がらないからなのか？？？versionを無理やり上げても
`package.json`が勝手に作られてしまうような挙動に見える（？？）

そこは結局、自力で頑張れということらしいので、appディレクトリを作って頑張るしかなさそう。

## 静的アセットの追加

```shell
mkdir app
cd app
mkdir src
touch src/index.js
touch src/App.js
mkdir public
touch public/index.html
```
これらのコマンドが終わったらファイルを編集した。

### yarnのversionを上げてからの、react系をインストール

yarnのversionを挙げている。

```shell
yarn set version berry
yarn add react react-dom react-scripts
```

`package.json`ができているはずなので
"scripts"という項目の"start"を追加する。

```shell
yarn start
```

いちおうできたけど、どう考えてもあかんやつだと思う。
そこでやり方を変えることにした。

[Vite](https://ja.vitejs.dev/guide/)

```
~/.nvm/versions/node/v19.1.0/bin/npm
```

TypeScriptでないと意味がないので、こちらで

```
npm create vite@latest my-react-app -- --template react-ts
```

### 実行結果
```
Need to install the following packages:
  create-vite@5.5.2
Ok to proceed? (y) y
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'create-vite@5.5.2',
npm WARN EBADENGINE   required: { node: '^18.0.0 || >=20.0.0' },
npm WARN EBADENGINE   current: { node: 'v19.1.0', npm: '8.19.3' }
npm WARN EBADENGINE }

Scaffolding project in /Users/zeroset/Documents/03_Enginerring/13_react/my-react-app...

Done. Now run:

  cd my-react-app
  npm install
  npm run dev

npm notice 
npm notice New major version of npm available! 8.19.3 -> 10.8.3
npm notice Changelog: https://github.com/npm/cli/releases/tag/v10.8.3
npm notice Run npm install -g npm@10.8.3 to update!
npm notice 
```

このコマンド通りに`npm run dev`まで実行すると
以下のURLでローカルでreact-appが立ち上がった。

```
http://localhost:5173/
```


