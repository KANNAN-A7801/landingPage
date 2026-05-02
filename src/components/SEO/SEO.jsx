import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * SEO Component - Reusable across all pages
 * Implements per-page title, meta description, canonical URL, 
 * Open Graph tags, and optional JSON-LD structured data.
 */
const SEO = ({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = '/logo512.png',
  schema,
  children
}) => {
  const siteName = 'Garuda Career';
  const baseUrl = 'https://garudacareer.com';
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;

  return (
    <Helmet>
      {/* Primary Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />

      {/* JSON-LD Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}

      {children}
    </Helmet>
  );
};

export default SEO;
