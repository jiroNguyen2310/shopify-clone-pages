import { performAction } from "./actionHandler";

export default function ButtonComp({ label, action, url, style }: any) {
    return (
        <button onClick={() => performAction(action, url)} style={style as React.CSSProperties}>
            {label}
        </button>
    );
}
