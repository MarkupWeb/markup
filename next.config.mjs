import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your site URL
  siteUrl: "https://markup.vip",

  // Sitemap generation
  generateRobotsTxt: true,

  // Exclude sitemap from crawling
  exclude: ["/sitemap.xml"], // Ensures the sitemap itself is not listed

  // Robots.txt options
  robotsTxtOptions: {
    // Add your main sitemap explicitly
    additionalSitemaps: [
      "https://markup.vip/sitemap.xml", // Reference to your sitemap
    ],
  },

  // Other Next.js configurations if needed
};

// Export with the next-intl plugin
export default withNextIntl(nextConfig);
