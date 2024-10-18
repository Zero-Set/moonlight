import './styles.css';

import { useEffect, useState } from 'react';
// 外部に公開する場合はdefault exportのほうがいいらしい。
import { ColorfulMessage } from './components/ColorfulMessage';

export const App = () => {
    // State, use系の関数は一番上の階層でしか呼べません。
    // フック
    const [num, setNum] = useState(0);
    const [isShowFace, setIsShowFace] = useState(true);

    // 関数を定義する。
    const onClickButton = () => alert('!');
    const onClickCountUp = () => {
        // より早くできるらしい
        setNum((prev) => prev + 1);
    };
    const onClickToggle = () => {
        setIsShowFace(!isShowFace);
    };
    // これはむやみやたらに使わないこと。
    useEffect(() => {
        if (num > 0) {
            if (num % 3 === 0) {
                isShowFace || setIsShowFace(true);
            } else {
                isShowFace && setIsShowFace(false);
            }
        }
        // 依存配列に影響がある時、この関数が実行されるらしい。
    }, [num]);

    // 囲まないと Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? (13:12)
    return (
        <div>
            <h1>こんにちはー</h1>
            <ColorfulMessage color="blue">こんばんはだよ</ColorfulMessage>
            <ColorfulMessage color="red">
                頭が良くなる本を買ったよ。
            </ColorfulMessage>
            <button onClick={onClickButton}>早く読めよ</button>
            <ColorfulMessage color="red">
                俺ね、今度後輩と合コンにいくんだよね。
            </ColorfulMessage>
            <ColorfulMessage color="blue">
                おじさんが合コンとかいうなよ。寄り合いって言えよ。
            </ColorfulMessage>
            <button onClick={onClickCountUp}>count up</button>
            <p>{num}</p>
            <button onClick={onClickToggle}>on/off</button>
            {isShowFace && <p>😭</p>}
        </div>
    );
};
