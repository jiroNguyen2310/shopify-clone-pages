import React from "react";
import { createRoot } from "react-dom/client";
import BuilderApp from "./components/BuilderApp";

export function getInitData() {
    const el = document.getElementById("blue-init");
    if (el?.textContent) {
        try {
            return JSON.parse(el.textContent);
        } catch {
            return {};
        }
    }
    return {};
}

const target = document.getElementById("blue-box");
if (target) {
    const root = createRoot(target);
    root.render(<BuilderApp initData={getInitData()} />);
}
