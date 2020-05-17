import App from "./App.svelte";

var params = new URLSearchParams(window.location.search);

const app = new App({
  target: document.body,
  hydrate: true,
  props: {
    name: params.get("name") || "World",
  },
});

window.app = app;

export default app;
