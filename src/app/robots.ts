import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "Claude-Web", "Anthropic-AI"],
        allow: "/",
      },
    ],
    sitemap: "https://contractorfinanceinstitute.com/sitemap.xml",
  };
}
