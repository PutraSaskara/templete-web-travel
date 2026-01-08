import React from 'react';
import { siteConfig } from '../data/site-config';

export default function SEO({ title, description, image, url, type = 'website' }) {
    const siteName = siteConfig.global.siteName;
    const defaultDescription = siteConfig.pages.home.hero.description;
    const defaultImage = siteConfig.pages.home.hero.image;

    const metaTitle = title ? `${title} | ${siteName}` : siteName;
    const metaDescription = description || defaultDescription;
    const metaImage = image || defaultImage;
    // Use window.location.href as fallback if url prop is not provided
    // Optional chaining for safety if specific environments don't have window
    const metaUrl = url || (typeof window !== 'undefined' ? window.location.href : '');

    return (
        <>
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={metaUrl} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={metaUrl} />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaImage} />
        </>
    );
}
