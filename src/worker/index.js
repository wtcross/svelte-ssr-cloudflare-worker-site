import App from "./_ssr.js"; // generated
import HTML from "../client/index.html";
import { getAssetFromKV } from "@cloudflare/kv-asset-handler";

addEventListener("fetch", (event) => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  const url = new URL(event.request.url);

  if (url.pathname === "/") {
    const name = url.searchParams.get("name") || "World";
    const props = { name };
    const ssr = App.render(props);

    let inject_head = ssr.head || "";
    if (ssr.css && ssr.css.code) {
      inject_head += `<style>${ssr.css.code}</style>`;
    }

    const output =
      // inject SSR'd header & body contents
      HTML.replace(/_INJECT_HEAD_/g, inject_head).replace(
        /_INJECT_BODY_/g,
        ssr.html
      );

    return new Response(output, {
      status: 200,
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
  }

  try {
    return await getAssetFromKV(event);
  } catch (e) {
    let pathname = new URL(event.request.url).pathname;
    return new Response(`"${pathname}" not found`, {
      status: 404,
      statusText: "not found",
    });
  }
}
