
import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    siteUrl: "https://markup.vip",
  generateRobotsTxt: true,
  exclude: ["/sitemap.xml"], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://markup.vip/sitemap.xml", // <==== Add here
    ],
  },
};

export default withNextIntl(nextConfig);