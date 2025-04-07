import React from "react";
import PropTypes from "prop-types";

const ResponsiveImage = ({
  src,
  alt,
  className,
  sizes = "(max-width: 400px) 400px, (max-width: 800px) 800px, 1200px",
}) => {
  const nameWithoutExt = src.split(".").slice(0, -1).join(".");
  const extension = src.split(".").pop();

  return (
    <picture className={className}>
      {/* WebP sources */}
      <source
        type="image/webp"
        srcSet={`
          ${nameWithoutExt}-small.webp 400w,
          ${nameWithoutExt}-medium.webp 800w,
          ${nameWithoutExt}-large.webp 1200w
        `}
        sizes={sizes}
      />
      {/* Fallback sources */}
      <source
        srcSet={`
          ${nameWithoutExt}-small.${extension} 400w,
          ${nameWithoutExt}-medium.${extension} 800w,
          ${nameWithoutExt}-large.${extension} 1200w
        `}
        sizes={sizes}
      />
      {/* Fallback image */}
      <img src={`${nameWithoutExt}-medium.${extension}`} alt={alt} loading="lazy" />
    </picture>
  );
};

ResponsiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  sizes: PropTypes.string,
};

export default ResponsiveImage;
