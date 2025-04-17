import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const SEO = ({ title, description }) => {
  const location = useLocation();
  const path = location.pathname;
  const url = `https://www.natanamfoundation.com${path}`;

  // Default metadata for different pages
  const metadata = {
    "/about": {
      title: "About Natanam Foundation | Classical Dance Academy in Bangalore",
      description:
        "Learn about Natanam Foundation, established in 1994 under the guidance of Guru Dr. D Sarvothama Kamath. Discover our rich heritage in teaching Bharatanatyam and classical dance forms in Bangalore.",
    },
    "/jewellery": {
      title: "Classical Dance Jewellery | Natanam Foundation Bangalore",
      description:
        "Explore authentic classical dance jewellery at Natanam Foundation. We offer traditional temple jewellery, bharatanatyam ornaments, and dance accessories for performances.",
    },
    "/": {
      title: "Natanam Foundation - Classical Dance Academy in Bangalore",
      description:
        "Premier classical dance academy in Bangalore teaching Bharatanatyam and other classical dance forms since 1994. Join our classes and discover the art of Indian classical dance.",
    },
  };

  const pageMetadata = metadata[path] || metadata["/"];

  return (
    <Helmet>
      <title>{title || pageMetadata.title}</title>
      <meta name="description" content={description || pageMetadata.description} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title || pageMetadata.title} />
      <meta property="og:description" content={description || pageMetadata.description} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title || pageMetadata.title} />
      <meta name="twitter:description" content={description || pageMetadata.description} />
    </Helmet>
  );
};

export default SEO;
