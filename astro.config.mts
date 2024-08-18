import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  srcDir: "./astro",
  integrations: [
    starlight({
      // https://starlight.astro.build/reference/configuration
      title: "Ada URL",
      social: {
        github: "https://github.com/ada-url/ada",
      },
    }),
  ],
});
