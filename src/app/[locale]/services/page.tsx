import Link from 'next/link';
import Image from 'next/image';

function Services({ params }) {
  const { locale } = params;

  return (
    <section id="services" className="py-16 pt-[120px] bg-gray-100">
      <div className="container">
        <h1 className="text-3xl font-bold mb-6">
          {locale === 'ar' ? 'خدماتنا' : 'Our Services'}
        </h1>
        <p className="mb-4">
          {locale === 'ar'
            ? 'نقدم مجموعة واسعة من خدمات التسويق لمساعدتك في تحقيق النجاح في السوق التنافسية اليوم.'
            : 'We offer a wide range of marketing services to help your business thrive in today’s competitive landscape.'}
        </p>

        {/* Service Section */}
        <div className="service-section">
          <h2 className="text-2xl font-semibold mb-4">
            {locale === 'ar' ? 'التسويق الرقمي' : 'Digital Marketing'}
          </h2>
          <p className="mb-4">
            {locale === 'ar'
              ? 'تشمل خدماتنا في التسويق الرقمي تحسين محركات البحث، إعلانات الدفع لكل نقرة، والتسويق عبر وسائل التواصل الاجتماعي.'
              : 'Our digital marketing services include SEO, PPC, and social media marketing to boost your online presence.'}
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            {locale === 'ar' ? 'العلامة التجارية' : 'Branding'}
          </h2>
          <p className="mb-4">
            {locale === 'ar'
              ? 'نساعد الشركات على تأسيس هوية علامة تجارية قوية والوصول إلى جمهورها المستهدف بشكل فعال.'
              : 'We help businesses establish a strong brand identity and reach their target audience effectively.'}
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            {locale === 'ar' ? 'الإعلان' : 'Advertising'}
          </h2>
          <p className="mb-4">
            {locale === 'ar'
              ? 'تم تصميم استراتيجيات الإعلان لدينا لتعظيم عائد الاستثمار الخاص بك وزيادة المبيعات من خلال حملات مستهدفة.'
              : 'Our advertising strategies are designed to maximize your ROI and drive sales through targeted campaigns.'}
          </p>

          {/* Add some internal linking for SEO */}
          <p className="mt-6">
            {locale === 'ar' ? (
              'للحصول على مزيد من المعلومات، تحقق من مدونتنا أو قم بزيارة صفحة من نحن.'
            ) : (
              <>
                For more insights, check out our{' '}
                <Link href="/blog">
                  <Link href={"/blog"} className="text-blue-600 underline">Blog</Link>
                </Link>{' '}
                or visit our{' '}
                <Link href="/about">
                  <Link href={"/blog"} className="text-blue-600 underline">About Us</Link>
                </Link>{' '}
                page.
              </>
            )}
          </p>
        </div>

        {/* Image Example */}
        <div className="mt-8">
          <Image
            src={locale === 'ar' ? '/path-to-your-service-image-ar.jpg' : '/path-to-your-service-image.jpg'}
            alt={locale === 'ar' ? 'خدمات التسويق' : 'Marketing Services'}
            width={1200}
            height={800}
            priority={false} // Lazy load images
          />
        </div>

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": locale === 'ar' ? "خدمات التسويق" : "Marketing Services",
              "provider": {
                "@type": "Organization",
                "name": process.env.NEXT_PUBLIC_COMPANY_NAME || "Your Company Name",
                "url": "https://markup.vip",
                "logo": "https://markup.vip/path-to-logo.png"
              },
              "description": locale === 'ar' ? "خدمات التسويق المخصصة التي نقدمها." : "Tailored marketing services we offer.",
              "offers": {
                "@type": "AggregateOffer",
                "offerCount": "3",
                "lowPrice": "50.00",
                "highPrice": "300.00",
                "priceCurrency": "USD",
                "offers": [
                  {
                    "@type": "Offer",
                    "url": "https://markup.vip/services/digital-marketing",
                    
                    "itemOffered": {
                      "@type": "Service",
                      "name": locale === 'ar' ? "خدمة التسويق الرقمي" : "Digital Marketing Service",
                    }
                  },
                  {
                    "@type": "Offer",
                    "url": "https://markup.vip/services/branding",
                    
                    "itemOffered": {
                      "@type": "Service",
                      "name": locale === 'ar' ? "خدمة العلامة التجارية" : "Branding Service",
                    }
                  }
                ]
              }
            })
          }}
        />
      </div>
    </section>
  );
}

export default Services;
