# ことはじめ
概念を理解、手を動かして学べ

# なぜ、JSか（別に他も同じかもしれない）
環境構築
    習得者が少ない
    フロントエンドの言語としてまずハズレはないだろう。
    バックエンドもできるぞ
    仮想DOMを使う
    パッケージマネージャ
    - npmを使います
    ES2015
    モジュールバンドラー
    - Webpackが主流でしたが、Viteを使います。
    トランスバイラ

## Document Object Model
### これまで
直接操作

### これから
JavaScript上で仮想DOMを操作する

## Package manager
### これまで
１つのファイルに全ての処理を

### これから
依存関係を解決する
importが明示的にわかる

package.json
package-lock.json
node_modules GitHubにあげない

## ECMA
ES2015が転換期だということだけ頭に入れておこう
毎年1回発表する
ES6=ES2015（西暦で呼ぶ方が）和暦やめない？


- let,const（こっち）を用いた変数宣言
- アローファンクション
- Class
- 分割代入
- template
- spread
- Promise

## モジュールバンドラ
ファイルを1つにまとめる

## トランスパイラ
（トランスコンパイラ）
対応してないブラウザがあるので、
実行するときに古い記法に変換すりゃいいんじゃね？

昔はそれでも結構大変だった

# Single Page Application
ちらつきがなくなる
ページ遷移がスムーズになる（表示速度）
コンポーネント分割が容易になる

## allow

const a = func(()=>{})
```
const tbs_shinjin = ['urano', 'kaira', 'virginia'];
const nameArr2 = tbs_shinjin.map((nm) => {
  return nm;
});
console.log(nameArr2);
```

truthy