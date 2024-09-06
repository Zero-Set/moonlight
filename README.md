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
