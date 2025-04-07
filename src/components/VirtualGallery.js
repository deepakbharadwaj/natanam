import React, { useState, useEffect, useRef } from "react";
import ResponsiveImage from "./ResponsiveImage";
import { useInView } from "react-intersection-observer";
import "../styles/VirtualGallery.css";

/**
 * VirtualGallery component that only renders visible images
 * and implements efficient scrolling for image-heavy galleries
 */
const VirtualGallery = ({
  images,
  itemHeight = 300,
  itemsPerRow = { mobile: 1, tablet: 2, desktop: 3 },
  spacing = 16,
  className = "",
}) => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [containerWidth, setContainerWidth] = useState(0);
  const [itemsPerRowCurrent, setItemsPerRowCurrent] = useState(3);
  const containerRef = useRef(null);

  // Calculate responsive grid layout
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;

      const width = containerRef.current.clientWidth;
      setContainerWidth(width);

      if (width < 480) {
        setItemsPerRowCurrent(itemsPerRow.mobile);
      } else if (width < 768) {
        setItemsPerRowCurrent(itemsPerRow.tablet);
      } else {
        setItemsPerRowCurrent(itemsPerRow.desktop);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [itemsPerRow]);

  // Calculate total height
  const totalRows = Math.ceil(images.length / itemsPerRowCurrent);
  const totalHeight = totalRows * (itemHeight + spacing) - spacing;

  // Virtual scroll implementation
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const scrollTop = container.scrollTop;
      const viewportHeight = container.clientHeight;

      // Calculate which items are visible with buffer
      const startRow = Math.floor(scrollTop / (itemHeight + spacing)) - 1;
      const endRow = Math.ceil((scrollTop + viewportHeight) / (itemHeight + spacing)) + 1;

      const startIndex = Math.max(0, startRow * itemsPerRowCurrent);
      const endIndex = Math.min(images.length, endRow * itemsPerRowCurrent);

      const visibleItemsArray = [];
      for (let i = startIndex; i < endIndex; i++) {
        visibleItemsArray.push({
          ...images[i],
          virtualIndex: i,
        });
      }

      setVisibleItems(visibleItemsArray);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial calculation
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [images, itemHeight, spacing, itemsPerRowCurrent]);

  // Position items in the virtual grid
  const getItemStyle = (index) => {
    const row = Math.floor(index / itemsPerRowCurrent);
    const col = index % itemsPerRowCurrent;

    const itemWidth = (containerWidth - spacing * (itemsPerRowCurrent - 1)) / itemsPerRowCurrent;

    return {
      position: "absolute",
      top: row * (itemHeight + spacing),
      left: col * (itemWidth + spacing),
      width: itemWidth,
      height: itemHeight,
    };
  };

  return (
    <div
      ref={containerRef}
      className={`virtual-gallery-container ${className}`}
      style={{ height: "100%", overflow: "auto" }}
    >
      <div
        className="virtual-gallery-content"
        style={{ height: totalHeight, position: "relative" }}
      >
        {visibleItems.map((item) => (
          <div
            key={item.id || item.virtualIndex}
            className="virtual-gallery-item"
            style={getItemStyle(item.virtualIndex)}
          >
            <ResponsiveImage
              src={item.src || item.image}
              alt={item.alt || item.name || `Gallery item ${item.virtualIndex + 1}`}
              className="virtual-gallery-image"
            />
            {item.name && <div className="virtual-gallery-caption">{item.name}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualGallery;
