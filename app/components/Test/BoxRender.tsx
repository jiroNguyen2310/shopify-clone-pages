import Banner from "./Banner";
import ProductGrid from "./ProductGrid";

export default function BoxRender({ data }: { data: any }) {
    return (
        <div style={{ background: "white" }}>
            {data.heroBanner && <Banner {...data.heroBanner} />}
            {data.products && <ProductGrid products={data.products} />}
        </div>
    );
}
