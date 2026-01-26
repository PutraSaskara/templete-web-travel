import { siteConfig } from '../data/site-config';

/**
 * SEO Component using React 19 native head hoisting feature
 * React 19 automatically hoists <title>, <meta>, and <link> tags to <head>
 * 
 * @param {Object} props
 * @param {string} props.title - Page title
 * @param {string} props.description - Page description
 * @param {string} props.image - Open Graph image URL
 * @param {string} props.url - Canonical URL (required for proper SEO)
 * @param {string} props.type - Open Graph type (default: 'website')
 * @param {string} props.keywords - SEO keywords
 * @param {boolean} props.noindex - Whether to prevent indexing
 * @param {Object} props.structuredData - JSON-LD structured data
 */
export default function SEO({
    title,
    description,
    image,
    url,
    type = 'website',
    keywords,
    noindex = false,
    structuredData
}) {
    const siteName = siteConfig.global.siteName;
    const siteUrl = siteConfig.global.siteUrl || '';
    const defaultDescription = siteConfig.pages.home.hero.description;
    const defaultImage = siteConfig.pages.home.hero.image;

    const metaTitle = title ? `${title} | ${siteName}` : siteName;
    const metaDescription = description || defaultDescription;

    // Ensure image URL is absolute
    const metaImage = image || defaultImage;
    const absoluteImage = metaImage?.startsWith('http')
        ? metaImage
        : `${siteUrl}${metaImage}`;

    // URL must be passed as prop to avoid hydration mismatch
    const metaUrl = url || siteUrl;
    const canonicalUrl = metaUrl;

    // Default structured data for organization
    const defaultStructuredData = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "name": siteName,
        "url": siteUrl,
        "description": metaDescription,
        "logo": absoluteImage
    };

    const jsonLd = structuredData || defaultStructuredData;

    return (
        <>
            {/* Primary Meta Tags - React 19 hoists these to <head> */}
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            {/* Robots */}
            <meta
                name="robots"
                content={noindex ? "noindex, nofollow" : "index, follow"}
            />

            {/* Keywords (if provided) */}
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Canonical URL */}
            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:url" content={metaUrl} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={absoluteImage} />
            <meta property="og:image:alt" content={metaTitle} />
            <meta property="og:locale" content="id_ID" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={metaUrl} />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={absoluteImage} />
            <meta name="twitter:image:alt" content={metaTitle} />

            {/* Structured Data (JSON-LD) for rich snippets */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </>
    );
}
