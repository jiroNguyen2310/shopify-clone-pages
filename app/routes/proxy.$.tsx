import type { LoaderFunctionArgs } from "@remix-run/node";
import { authenticate } from "app/shopify.server";

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  try {
    const { admin, liquid } = await authenticate.public.appProxy(request);

    const url = new URL(request.url);
    const shop = url.searchParams.get("shop");
    const pageId = params["*"] || '2';

    const forwardedProto =
      request.headers.get("x-forwarded-proto") ?? "https";
    const host = request.headers.get("host");

    if (!host) {
      throw new Error("Missing host header");
    }

    const appDomain = `${forwardedProto}://${host}`;
    const pageData = 'test pageData';

    const html = generateProxyHtml(appDomain, pageId, pageData)

    return liquid(html)
  } catch (error) {
    console.error("❌ Error loading page:", error);
    throw new Response("Internal server error", { status: 500 });
  }
};


const generateProxyHtml = (
  appDomain: string,
  pageId: string,
  pageData: string): string => {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Blue Box</title>
  </head>
  <body>
    <div id="blue-box"></div>

    <script id="blue-init" type="application/json">
 ${JSON.stringify({
    mode: "preview",
    pageId,
    pageData: pageData ?? null
  })}    
      </script>

    <!-- Load script từ app domain -->
    <script src="${appDomain}/blue-box.js" defer></script>
  </body>
</html>`;
};