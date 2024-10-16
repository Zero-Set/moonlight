# Moonlight

## 概要

このリポジトリは React でポートフォリオを作ろうとした人の奮闘記である。

## やったこと

- nvm を Homebrew から install を行った。

- nvm を Homebrew から install を行った。

```shell
brew reinstall nvm
```

`nvm`って叩いても何も反応がなかったので、
よく読むと、こんな記述が出てきたので
`zsh`を使っている Mac 民は`~/.zshrc`を修正した。
`zsh`を使っている Mac 民は`~/.zshrc`を修正した。
出力メッセージをよく読めばよいのだが。。。
何年エンジニアもどきをやっているんだ。

```
Add the following to your shell profile e.g. ~/.profile or ~/.zshrc:
  export NVM_DIR="$HOME/.nvm"
  [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
```

- yarn は[公式ページ](https://yarnpkg.com/getting-started/install)を読むと、

```shell
corepack enable
```

をしろとのことだった。`npm`なんかしなくてよかったんだ（2024/9 時点）
ちなみに node のバージョンは v19.1.0
をしろとのことだった。`npm`なんかしなくてよかったんだ（2024/9 時点）
ちなみに node のバージョンは v19.1.0

yarn は version が 1 から切り替わらないため、`create-react-app`が動かない。
yarn の version が上がらないからなのか？？？version を無理やり上げても
yarn は version が 1 から切り替わらないため、`create-react-app`が動かない。
yarn の version が上がらないからなのか？？？version を無理やり上げても
`package.json`が勝手に作られてしまうような挙動に見える（？？）

そこは結局、自力で頑張れということらしいので、app ディレクトリを作って頑張るしかなさそう。
そこは結局、自力で頑張れということらしいので、app ディレクトリを作って頑張るしかなさそう。

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

### yarn の version を上げてからの、react 系をインストール

### yarn の version を上げてからの、react 系をインストール

yarn の version を挙げている。
yarn の version を挙げている。

```shell
yarn set version berry
yarn add react react-dom react-scripts
```

`package.json`ができているはずなので
"scripts"という項目の"start"を追加する。

```shell
yarn start
```

# Vite に変更する。

# Vite に変更する。

いちおうできたけど、どう考えてもあかんやつだと思う。
そこでやり方を変えることにした。

[Vite](https://ja.vitejs.dev/guide/)

```
~/.nvm/versions/node/v19.1.0/bin/npm
```

TypeScript でないと意味がないので、こちらで
TypeScript でないと意味がないので、こちらで

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
npm notice
npm notice New major version of npm available! 8.19.3 -> 10.8.3
npm notice Changelog: https://github.com/npm/cli/releases/tag/v10.8.3
npm notice Run npm install -g npm@10.8.3 to update!
npm notice
```

このコマンド通りに`npm run dev`まで実行すると
以下の URL でローカルで react-app が立ち上がった。

```
http://localhost:5173/
```

というわけで yarn app を削除することになりました。

# で次どうしたらいいんだい？

web hosting しないとどうしようもない。
Firebase CLI を入れないといかん。

```shell
npm install -g firebase-tools
```

多分、データ収集に同意しろと言われるので許可しておく。

```shell
> firebase login
i  Firebase optionally collects CLI and Emulator Suite usage and error reporting information to help improve our products. Data is collected in accordance with Google's privacy policy (https://policies.google.com/privacy) and is not used to identify you.

? Allow Firebase to collect CLI and Emulator Suite usage and error reporting information? (Y/n)
```

GCP の firebase ログインを実施、ログインできたことは以下のコマンドで確認

```
❯ firebase projects:list
✔ Preparing the list of your Firebase projects
┌──────────────────────┬──────────────┬────────────────┬──────────────────────┐
│ Project Display Name │ Project ID   │ Project Number │ Resource Location ID │
├──────────────────────┼──────────────┼────────────────┼──────────────────────┤
│ xxx                  │ xxx          │ project_number │ [Not specified]      │
└──────────────────────┴──────────────┴────────────────┴──────────────────────┘

1 project(s) total.
```

参考：https://firebase.google.com/docs/hosting/github-integration?hl=ja

# ローカル PC の環境構築

StackBlitz で書いてはみたが、コードをこちらの gitHub に上げられないことがわかってきたので
（設定でどうにかできるのかもしれないが）
やはり自分のところで書こうと思ってきた。

## ESLint Prettier

```
npm install eslint prettier eslint-config-prettier eslint-plugin-prettier --save-dev
```

- eslint-config-prettier Prettier と ESLint の競合を防ぐ
- eslint-plugin-prettier ESLint から Prettier を実行するためのプラグイン

## Props

components をつくるらしい。
これは src ディレクトリ配下に作成するのが正しい。
Root ディレクトリだとハマる。
