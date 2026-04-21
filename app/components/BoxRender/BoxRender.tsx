import './BoxRender.scss'
import React, { useState } from "react";
import { Box, Card } from "@shopify/polaris";

interface Product {
    id: string;
    title: string;
    price: string; // ví dụ "$24.00"
    imageSrc: string;
}

interface CartItem extends Product {
    quantity: number;
}

export const BoxRender: React.FC = () => {
    const [toastMessage, setToastMessage] = useState("");
    const [cart, setCart] = useState<CartItem[]>([]);

    const products = [
        {
            id: "1",
            title: "Classic Tee",
            price: "$24.00",
            imageSrc: "https://product.hstatic.net/200000033444/product/2_16cef488252749f0856eb1bae253d072_grande.jpg",
        },
        {
            id: "2",
            title: "Modern Jacket",
            price: "$89.00",
            imageSrc: "https://product.hstatic.net/200000033444/product/2_50df14d782a74e07826c456cc2078502_grande.jpg",
        },
        {
            id: "3",
            title: "Sneakers",
            price: "$59.00",
            imageSrc: "https://product.hstatic.net/200000033444/product/2_542fa8df617648fba144071a9cb6cebb_grande.jpg",
        },
        {
            id: "4",
            title: "Denim Shorts",
            price: "$39.00",
            imageSrc: "https://product.hstatic.net/200000033444/product/2_9506988cf54340e6bb1ba451763daab4_grande.jpg",
        },
    ];

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

    const contentStyle: React.CSSProperties = {
        padding: "12px",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
    };

    const titleStyle: React.CSSProperties = {
        margin: "0 0 4px 0",
        fontSize: "15px",
        fontWeight: 600,
    };

    const priceStyle: React.CSSProperties = {
        marginBottom: "12px",
        fontSize: "14px",
        color: "#111827",
    };

    const buttonRow: React.CSSProperties = {
        marginTop: "auto",
        display: "flex",
        gap: "8px",
    };

    const buttonStyle: React.CSSProperties = {
        flex: 1,
        padding: "6px 8px",
        borderRadius: "4px",
        border: "1px solid #d1d5db",
        background: "#f9fafb",
        cursor: "pointer",
    };

    const primaryButtonStyle: React.CSSProperties = {
        ...buttonStyle,
        background: "#007b5e",
        color: "#fff",
        border: "none",
    };

    const handleAdd = (product: Product) => {
        // thêm vào cart
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
        setToastMessage(`Added ${product.title}`);
        setTimeout(() => setToastMessage(""), 2000);
    };

    const handleRemove = (id: string) => {
        setCart((prev) => prev.filter((c) => c.id !== id));
    };

    const parsePrice = (price: string) => parseFloat(price.replace("$", ""));

    const total = cart.reduce(
        (sum, item) => sum + parsePrice(item.price) * item.quantity,
        0
    );

    return (
        <Box width="100%" padding={'400'}>

            <div style={{ background: 'white' }}>

                <div
                    style={{
                        backgroundImage:
                            'url(https://file.hstatic.net/200000033444/file/monkstrap_2048x2048.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: '350px',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        color: '#fff',
                        position: 'relative',
                        padding: '10px'
                    }}
                >
                    {/* lớp mờ overlay */}
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundColor: 'rgba(0,0,0,0.4)',
                            borderRadius: '8px',
                        }}
                    />
                    {/* nội dung chữ */}
                    <div
                        style={{
                            position: 'relative',
                            zIndex: 1,
                            maxWidth: '80%',
                        }}
                    >
                        <h1
                            style={{
                                fontSize: '3rem',
                                fontWeight: 'bold',
                                marginBottom: '10px',
                            }}
                        >
                            Chào mừng bạn đến với Tech Store
                        </h1>
                        <p style={{ fontSize: '1.25rem' }}>
                            Khám phá những sản phẩm công nghệ mới nhất
                        </p>
                    </div>
                </div>

                <div style={gridStyle}>
                    {products.map((p) => (
                        <div key={p.id} style={itemStyle}>
                            <img src={p.imageSrc} alt={p.title} style={imgStyle} />
                            <div style={contentStyle}>
                                <h4 style={titleStyle}>{p.title}</h4>
                                <div style={priceStyle}>{p.price}</div>
                                <div style={buttonRow}>
                                    <button style={buttonStyle}>View</button>
                                    <button
                                        style={primaryButtonStyle}
                                        onClick={() => handleAdd(p)}
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ padding: "12px" }}>
                    <h3 style={{ margin: "0 0 8px 0" }}>🛒 Shopping Cart</h3>
                    {cart.length === 0 && <p>Your cart is empty</p>}
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: "8px",
                            }}
                        >
                            <div>
                                {item.title} x {item.quantity}
                            </div>
                            <div>
                                {(parsePrice(item.price) * item.quantity).toFixed(2)}{" "}
                                <button
                                    onClick={() => handleRemove(item.id)}
                                    style={{
                                        marginLeft: "8px",
                                        border: "none",
                                        background: "transparent",
                                        color: "red",
                                        cursor: "pointer",
                                    }}
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                    ))}
                    {cart.length > 0 && (
                        <div style={{ marginTop: "8px", fontWeight: 600 }}>
                            Total: ${total.toFixed(2)}
                        </div>
                    )}
                </div>

                {toastMessage && <div className="toast">✅ {toastMessage}</div>}
                <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .toast {
          position: fixed;
          bottom: 16px;
          right: 16px;
          background: #333;
          color: #fff;
          padding: 8px 12px;
          border-radius: 4px;
          animation: slideIn 0.3s ease;
        }
      `}</style>
            </div>



        </Box>
    );
};
