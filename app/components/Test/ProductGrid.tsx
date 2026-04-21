import React, { useState } from "react";

interface Product {
    id: string;
    title: string;
    price: string;
    imageSrc: string;
}

interface CartItem extends Product {
    quantity: number;
}

export default function ProductGrid({ products }: { products: Product[] }) {
    const [cart, setCart] = useState<CartItem[]>([]);

    const handleAdd = (product: Product) => {
        setCart((prev) => {
            const existing = prev.find((c) => c.id === product.id);
            if (existing) {
                return prev.map((c) =>
                    c.id === product.id ? { ...c, quantity: c.quantity + 1 } : c
                );
            } else {
                return [...prev, { ...product, quantity: 1 }];
            }
        });
    };

    const parsePrice = (price: string) => parseFloat(price.replace("$", ""));
    const total = cart.reduce((sum, item) => sum + parsePrice(item.price) * item.quantity, 0);

    const gridStyle: React.CSSProperties = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "16px",
        padding: "12px",
    };
    const itemStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        border: "1px solid #7fa0e4ff",
        borderRadius: "8px",
        overflow: "hidden",
    };
    const imgStyle: React.CSSProperties = {
        width: "100%",
        height: "150px",
        objectFit: "cover",
    };

    return (
        <div>
            <div style={gridStyle}>
                {products.map((p) => (
                    <div key={p.id} style={itemStyle}>
                        <img src={p.imageSrc} alt={p.title} style={imgStyle} />
                        <div style={{ padding: "12px" }}>
                            <h4 style={{ margin: "0 0 4px 0", fontSize: "15px", fontWeight: 600 }}>
                                {p.title}
                            </h4>
                            <div style={{ marginBottom: "12px", fontSize: "14px", color: "#111827" }}>
                                {p.price}
                            </div>
                            <button
                                style={{
                                    padding: "6px 8px",
                                    borderRadius: "4px",
                                    background: "#007b5e",
                                    color: "#fff",
                                    border: "none",
                                    cursor: "pointer",
                                }}
                                onClick={() => handleAdd(p)}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Cart summary */}
            <div style={{ padding: "12px" }}>
                <h3>🛒 Shopping Cart</h3>
                {cart.length === 0 && <p>Your cart is empty</p>}
                {cart.map((item) => (
                    <div key={item.id}>
                        {item.title} x {item.quantity} = $
                        {(parsePrice(item.price) * item.quantity).toFixed(2)}
                    </div>
                ))}
                {cart.length > 0 && (
                    <div style={{ marginTop: "8px", fontWeight: 600 }}>Total: ${total.toFixed(2)}</div>
                )}
            </div>
        </div>
    );
}
