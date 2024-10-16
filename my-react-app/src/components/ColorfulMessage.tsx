// tsの定義が必要
interface MyComponentProps {
    color: string;
    children: string;
}
// 分割代入
export const ColorfulMessage = ({ color, children }: MyComponentProps) => {
    const contentStyle = { color };
    // 囲まないと Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? (13:12)
    return <p style={contentStyle}>{children}</p>;
};
