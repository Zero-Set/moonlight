// アプリ全体のエントリポイント
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// namedの形
import App from './App';

const rootElement = document.getElementById('root');
// 非nullにしないといかんとのこと
const root = createRoot(rootElement!);

// jsx記法
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
