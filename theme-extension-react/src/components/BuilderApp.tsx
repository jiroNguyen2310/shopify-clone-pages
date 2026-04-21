import React, { useState } from "react";

type initDataType = {
    mode?: "preview" | "live";
    pageId?: string;
    pageData?: any;
}

export default function BuilderApp({ initData }: { initData: initDataType }) {
    const [blocks, setBlocks] = useState<string[]>([]);
    const { mode, pageId, pageData } = initData;
    console.log('mode', mode)
    console.log('pageId', pageId)

    return (
        <div style={{ border: "10px solid #0d7f1c99", padding: "16px", borderRadius: 8 }}>
            <h3>Blue Box Builder</h3>
            <p>Page ID: {pageId}</p>
            <p>Mode: {mode}</p>
            <p>Shop SHOP</p>
            <p>Page Data: {JSON.stringify(pageData)}</p>
            <button onClick={() => setBlocks([...blocks, `Block ${blocks.length + 1}`])}>
                + Add Block
            </button>
            <div style={{ marginTop: 8 }}>
                {blocks.map((b, i) => (
                    <div key={i} style={{ background: "rgba(13, 13, 238, 1)", margin: "4px 0", padding: "8px" }}>
                        {b}
                    </div>
                ))}
            </div>
        </div>
    );
}
