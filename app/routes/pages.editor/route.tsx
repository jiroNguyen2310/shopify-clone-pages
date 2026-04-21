import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import PageRenderer from "app/components/PageRenderer/PageRenderer";
export const pages: Record<string, any> = {
    "1": {
        id: "1",
        title: "Landing Page Demo",
        banner: {
            image: "https://via.placeholder.com/1200x400",
            heading: "Welcome to Our Shop!",
        },
        products: [
            { id: "p1", title: "Product 1", price: 100 },
            { id: "p2", title: "Product 2", price: 200 },
            { id: "p3", title: "Product 3", price: 300 },
        ],
    },
    "2": {
        id: "2",
        title: "Second Page",
        banner: {
            image: "https://via.placeholder.com/1200x400/ff0000/ffffff",
            heading: "Hot Deals Today!",
        },
        products: [
            { id: "p4", title: "Product 4", price: 150 },
            { id: "p5", title: "Product 5", price: 250 },
        ],
    },
};

export async function loader({ }: LoaderFunctionArgs) {
    const page = pages["1"];
    if (!page) throw new Response("Not Found", { status: 404 });
    return page;
}

export default function EditPage() {
    const page = useLoaderData<typeof loader>();
    return <PageRenderer page={page} mode="edit" />;
}
