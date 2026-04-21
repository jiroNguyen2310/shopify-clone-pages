export default function Banner({ image, title, subtitle }: any) {
    return (
        <div
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "350px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: "#fff",
                position: "relative",
                padding: "10px",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.4)",
                    borderRadius: "8px",
                }}
            />
            <div
                style={{
                    position: "relative",
                    zIndex: 1,
                    maxWidth: "80%",
                }}
            >
                <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "10px" }}>
                    {title}
                </h1>
                <p style={{ fontSize: "1.25rem" }}>{subtitle}</p>
            </div>
        </div>
    );
}
