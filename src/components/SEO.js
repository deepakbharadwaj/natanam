import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const SEO = ({ title, description }) => {
  const location = useLocation();
  const path = location.pathname;
  const url = `https://www.natanamfoundation.com${path}`;

  // Default metadata for all routes
  const metadata = {
    "/": {
      title: "Natanam Foundation - Classical Dance Academy in Bangalore",
      description:
        "Premier classical dance academy in Bangalore teaching Bharatanatyam and Kuchipudi since 1994. Join our classes and discover the art of Indian classical dance under expert guidance.",
      keywords:
        "classical dance, bharatanatyam, dance academy bangalore, indian classical dance, dance classes",
    },
    "/about": {
      title: "About Natanam Foundation | Classical Dance Academy in Bangalore",
      description:
        "Learn about Natanam Foundation, established in 1994 under the guidance of Guru Dr. D Sarvothama Kamath. Discover our rich heritage in teaching Bharatanatyam and classical dance forms.",
      keywords:
        "natanam foundation history, dance academy bangalore, classical dance training, bharatanatyam classes",
    },
    "/founder": {
      title: "Founder - Guru Dr. D Sarvothama Kamath | Natanam Foundation",
      description:
        "Meet our founder Guru Dr. D Sarvothama Kamath and learn about his vision for classical dance education and cultural preservation through Natanam Foundation.",
      keywords:
        "Guru D Sarvothama Kamath, dance guru bangalore, classical dance master, bharatanatyam guru",
    },
    "/classes": {
      title: "Classical Dance Classes | Natanam Foundation Bangalore",
      description:
        "Join our comprehensive classical dance training programs in Bharatanatyam and Kuchipudi. Classes for beginners to advanced levels, exam preparation, and professional training.",
      keywords:
        "dance classes bangalore, bharatanatyam classes, classical dance training, dance courses",
    },
    "/costumes": {
      title: "Classical Dance Costumes | Natanam Foundation",
      description:
        "Explore our collection of traditional dance costumes for rent and purchase. Authentic Bharatanatyam costumes, accessories, and dance wear for performances.",
      keywords:
        "dance costumes bangalore, bharatanatyam costume rental, classical dance wear, dance accessories",
    },
    "/jewellery": {
      title: "Classical Dance Jewellery | Natanam Foundation Bangalore",
      description:
        "Discover our exquisite collection of classical dance jewellery. Traditional temple jewellery, bharatanatyam ornaments, and dance accessories available for rent and purchase.",
      keywords:
        "dance jewellery bangalore, temple jewellery, bharatanatyam jewellery, classical dance ornaments",
    },
    "/examinations": {
      title: "Dance Examinations & Certification | Natanam Foundation",
      description:
        "Get certified in classical dance through our structured examination system. Affiliated with Bangiya Sangeet Parishad, offering recognized dance certifications.",
      keywords:
        "dance certification, classical dance exams, bharatanatyam certification, dance diploma",
    },
    "/festivals": {
      title: "Classical Dance Festivals & Events | Natanam Foundation",
      description:
        "Participate in our classical dance festivals, cultural events, and performances. Experience the rich tradition of Indian classical dance in Bangalore.",
      keywords:
        "dance festivals bangalore, classical dance events, cultural programs, dance performances",
    },
    "/events": {
      title: "Dance Events & Performances | Natanam Foundation",
      description:
        "Stay updated with our latest dance events, performances, workshops, and cultural programs. Join us in celebrating the art of classical dance.",
      keywords: "dance events bangalore, classical performances, cultural events, dance workshops",
    },
    "/gallery": {
      title: "Dance Gallery & Performances | Natanam Foundation",
      description:
        "View our gallery of classical dance performances, events, and student achievements. Experience the journey of our dancers through visual storytelling.",
      keywords:
        "dance gallery, performance photos, classical dance images, bharatanatyam performances",
    },
    "/upcomings": {
      title: "Upcoming Dance Events | Natanam Foundation Bangalore",
      description:
        "Discover upcoming dance performances, workshops, and cultural events at Natanam Foundation. Stay connected with the classical dance community.",
      keywords: "upcoming dance events, classical performances, dance workshops, cultural programs",
    },
    "/contact": {
      title: "Contact Natanam Foundation | Classical Dance Academy",
      description:
        "Get in touch with Natanam Foundation in Bangalore. Enquire about dance classes, performances, costume rentals, or visit our academy.",
      keywords:
        "contact dance academy, bangalore dance classes, classical dance training, dance academy location",
    },
  };

  const pageMetadata = metadata[path] || metadata["/"];

  return (
    <Helmet>
      <title>{title || pageMetadata.title}</title>
      <meta name="description" content={description || pageMetadata.description} />
      <meta name="keywords" content={pageMetadata.keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title || pageMetadata.title} />
      <meta property="og:description" content={description || pageMetadata.description} />
      <meta property="og:site_name" content="Natanam Foundation" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title || pageMetadata.title} />
      <meta name="twitter:description" content={description || pageMetadata.description} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Natanam Foundation" />

      {/* Region and Language */}
      <meta name="geo.region" content="IN-KA" />
      <meta name="geo.placename" content="Bangalore" />
      <meta name="geo.position" content="12.9716;77.5946" />
      <meta name="ICBM" content="12.9716, 77.5946" />
    </Helmet>
  );
};

export default SEO;
