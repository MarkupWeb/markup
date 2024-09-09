"use client";

import config from "./config.json";
import { plainify } from "./textConverter";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl"; // Assuming you're using next-intl for localization

const SeoMeta = ({
  title,
  meta_title,
  image,
  description,
  canonical,
  noindex,
}: {
  title?: string;
  meta_title?: string;
  image?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
}) => {
  const { meta_image, meta_author, meta_title_en, meta_title_ar, meta_description_en, meta_description_ar } = config.metadata;
  const { base_url } = config.site;
  const pathname = usePathname();
  const locale = useLocale(); // Get current locale (e.g., "en" or "ar")

  // Use the correct metadata based on the locale
  const isArabic = locale === "ar";
  const translatedTitle = isArabic
    ? plainify(meta_title_ar || title)
    : plainify(meta_title_en || title);
  const translatedDescription = isArabic
    ? plainify(description || meta_description_ar)
    : plainify(description || meta_description_en);

  return (
    <>
      {/* title */}
      <title>{translatedTitle}</title>

      {/* canonical url */}
      {canonical && <link rel="canonical" href={canonical} itemProp="url" />}

      {/* noindex robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* meta-description */}
      <meta name="description" content={translatedDescription} />

      {/* author from config.json */}
      <meta name="author" content={meta_author} />

      {/* og-title */}
      <meta property="og:title" content={translatedTitle} />

      {/* og-description */}
      <meta property="og:description" content={translatedDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${base_url}/${pathname.replace("/", "")}`} />

      {/* twitter-title */}
      <meta name="twitter:title" content={translatedTitle} />

      {/* twitter-description */}
      <meta name="twitter:description" content={translatedDescription} />

      {/* og-image */}
      <meta property="og:image" content={`${base_url}${image ? image : meta_image}`} />

      {/* twitter-image */}
      <meta name="twitter:image" content={`${base_url}${image ? image : meta_image}`} />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
};

export default SeoMeta;
