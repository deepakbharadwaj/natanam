import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const SEO = () => {
  const location = useLocation();
  const path = location.pathname;
  const url = `https://www.natanamfoundation.com${path}`;

  return (
    <Helmet>
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
