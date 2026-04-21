import { useState } from "react";

export default function PageRenderer({ page, mode }: { page: any; mode: "edit" | "proxy" }) {
    const [cart, setCart] = useState<any[]>([]);

    const addToCart = (product: any) => {
        setCart((prev) => [...prev, product]);
    };

    const total = cart.reduce((sum, p) => sum + p.price, 0);

    return (

        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", background: 'white' }}>
            {/* Banner */}
            <div style={{ marginBottom: "20px" }}>
                <img
                    src={page.banner.image}
                    alt={page.banner.heading}
                    style={{ width: "100%", borderRadius: "12px" }}
                />
                <h1 style={{ fontSize: "28px", marginTop: "10px" }}>{page.banner.heading}</h1>
            </div>

            {/* Products */}
            <div style={{ display: "flex", gap: "16px", marginBottom: "20px" }}>
                {page.products.map((p: any) => (
                    <div
                        key={p.id}
                        style={{
                            border: "1px solid #ccc",
                            padding: "12px",
                            borderRadius: "8px",
                            flex: "1",
                        }}
                    >
                        <h2 style={{ fontSize: "18px" }}>{p.title}</h2>
                        <p>${p.price}</p>
                        <button
                            onClick={() => addToCart(p)}
                            style={{
                                marginTop: "8px",
                                background: "#0070f3",
                                color: "white",
                                border: "none",
                                padding: "6px 12px",
                                borderRadius: "4px",
                                cursor: "pointer",
                            }}
                        >
                            Add to cart
                        </button>
                    </div>
                ))}
            </div>

            {/* Cart summary */}
            <div
                style={{
                    border: "1px solid #ccc",
                    padding: "12px",
                    borderRadius: "8px",
                    marginBottom: "20px",
                }}
            >
                <h2 style={{ fontSize: "18px", marginBottom: "8px" }}>Cart Summary</h2>
                <p>Total items: {cart.length}</p>
                <p>Total price: ${total}</p>
            </div>

            {/* Nếu là edit thì có thêm nút View */}
            {mode === "edit" && (
                <a
                    href={`/proxy/${page.id}`}
                    style={{
                        display: "inline-block",
                        background: "green",
                        color: "white",
                        padding: "8px 16px",
                        borderRadius: "6px",
                        textDecoration: "none",
                    }}
                >
                    View
                </a>
            )}
        </div>


    );
}
