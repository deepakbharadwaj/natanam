import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../styles/Costumes.css";
// Import costume images
import costume1 from "../assets/costume1.webp";
import costume2 from "../assets/costume2.webp";
import costume3 from "../assets/costume3.webp";
import costume4 from "../assets/costume4.webp";
import costume5 from "../assets/costume5.webp";
import costume6 from "../assets/costume6.webp";
import costume7 from "../assets/costume7.webp";
import costume8 from "../assets/costume8.webp";
import costume9 from "../assets/costume9.webp";
import costume10 from "../assets/costume10.webp";
import costume11 from "../assets/costume11.webp";
import costume12 from "../assets/costume12.webp";
import costume13 from "../assets/costume13.webp";
import costume14 from "../assets/costume14.webp";
import costume15 from "../assets/costume15.webp";
import costume16 from "../assets/costume16.webp";
import costume17 from "../assets/costume17.webp";
import costume18 from "../assets/costume18.webp";
import costume19 from "../assets/costume19.webp";
import costume20 from "../assets/costume20.webp";
import costume21 from "../assets/costume21.webp";
import costume22 from "../assets/costume22.webp";
import costume23 from "../assets/costume23.webp";

const scrollToCategory = (category) => {
  const element = document.getElementById(category);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Costumes = () => {
  const [selectedType, setSelectedType] = useState("rent");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredCostumes, setFilteredCostumes] = useState([]);

  {
    /*const quickLinks = [
    { id: 1, name: 'Traditional', image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=500' },
    { id: 2, name: 'Practice', image: 'https://images.unsplash.com/photo-1596944946054-85b4b97c6a5f?w=500' },
    { id: 3, name: 'Performance', image: 'https://images.unsplash.com/photo-1596944924487-3c7f13d0374d?w=500' },
    { id: 4, name: 'Silk Saree', image: 'https://images.unsplash.com/photo-1596944924456-139d3f4a9a51?w=500' }
  ];*/
  }

  const costumes = {
    rent: [
      // Age Group 4-10
      {
        id: 1,
        name: "Kids performance costume",
        image: costume7,
        //category: "traditional",
        ageGroup: "6-10",
        material: "Semi Kanchi Silks",
        //colors: ["Pink", "Gold", "Green"],
        //sizes: ["4Y", "6Y", "8Y", "10Y"],
        available: 2,
        price: "₹400/day",
      },
      {
        id: 2,
        name: "Kids performance costume",
        image: costume8,
        // category: "practice",
        ageGroup: "6-10",
        material: "Semi Kanchi Silks",
        available: 2,
        price: "₹400/day",
      },
      {
        id: 3,
        name: "Kids performance costume",
        image: costume9,
        //category: "performance",
        ageGroup: "6-10",
        material: "Semi Kanchi Silks",
        available: 2,
        price: "₹400/day",
      },
      {
        id: 4,
        name: "Kids performance costume",
        image: costume14,
        category: "traditional",
        ageGroup: "6-10",
        material: "Pure Silk",
        sizes: ["28", "30", "32"],
        available: 12,
        price: "₹400/day",
      },
      {
        id: 5,
        name: "Kids Performance Costume",
        image: costume20,
        category: "traditional",
        ageGroup: "6-10",
        material: "Pure Silk",
        available: 1,
        price: "₹500/day",
      },
      {
        id: 6,
        name: "Kids Performance Costume",
        image: costume21,
        category: "traditional",
        ageGroup: "6-10",
        material: "Semi Kanchi",
        available: 2,
        price: "₹400/day",
      },
      {
        id: 7,
        name: "Kids Performance Costume",
        image: costume22,
        category: "traditional",
        ageGroup: "6-10",
        material: "China Silk",
        available: 2,
        price: "₹400/day",
      },
      {
        /*
        id: 5,
        name: "Kids Bharatanatyam Basic",
        category: "practice",
        ageGroup: "4-10",
        material: "Cotton Silk",
        colors: ["Orange", "Red"],
        sizes: ["4Y", "6Y", "8Y", "10Y"],
        available: 6,
        price: "₹1,500/day",
        image: "costume11.webp"
      },
      */
      },

      // Age Group 11-20
      {
        id: 8,
        name: "Bharatanatyam/Kuchupudi Costume ",
        image: costume10,
        category: "traditional",
        ageGroup: "11-35",
        material: "Semi Silk",
        available: 20,
        price: "₹600/day",
      },
      {
        id: 9,
        name: "Performance with pant Costume",
        image: costume11,
        category: "practice",
        ageGroup: "11-35",
        material: "Silk",
        available: 20,
        price: "₹600/day",
      },
      {
        id: 10,
        name: "Navadurga Costume",
        image: costume12,
        category: "performance",
        ageGroup: "11-35",
        material: "Devi Costumes",
        available: 1,
        price: "₹600/day",
      },
      {
        id: 11,
        name: "Bharatantyam Costume Set",
        image: costume15,
        category: "traditional",
        ageGroup: "11-35",
        material: "Pure Silk",
        available: 1,
        price: "₹800/day",
      },
      {
        id: 12,
        name: "Classical Dance Set",
        image: costume1,
        category: "performance",
        ageGroup: "11-35",
        material: "Semi Kanchi Silk",
        available: 2,
        price: "₹600/day",
      },
      {
        id: 13,
        name: "Classical Dance Set",
        image: costume2,
        category: "performance",
        ageGroup: "11-35",
        material: "Polyester",
        available: 6,
        price: "₹500/day",
      },
      {
        id: 14,
        name: "Classical Dance Set",
        image: costume3,
        category: "performance",
        ageGroup: "11-35",
        material: "Raw Silk",
        available: 8,
        price: "₹600/day",
      },
      {
        id: 15,
        name: "Classical Dance Set",
        image: costume4,
        category: "performance",
        ageGroup: "11-35",
        material: "Net top with georgette attachments",
        colors: ["Purple", "Pink"],
        sizes: ["XS", "S", "M", "L"],
        available: 10 + 1,
        price: "₹500/day",
      },
      {
        id: 16,
        name: "Performance Ready Set",
        image: costume5,
        category: "performance",
        ageGroup: "11-35",
        material: "Raw Silk Pant with brocade",
        available: 4,
        price: "₹500/day",
      },
      {
        id: 17,
        name: "Performance Ready Set",
        image: costume6,
        category: "performance",
        ageGroup: "11-35",
        material: "Poly Silk",
        available: 12,
        price: "₹500/day",
      },
      {
        id: 18,
        name: "Performance Ready Set",
        image: costume16,
        category: "performance",
        ageGroup: "11-35",
        material: "Chiffon Georgette Skirt with brocade long blouse",
        available: 8,
        price: "₹500/day",
      },
      {
        id: 19,
        name: "Performance Ready Set",
        image: costume17,
        category: "performance",
        ageGroup: "11-35",
        material: "Balloon pant and strech blouse with net",
        available: 4,
        price: "₹500/day",
      },
      {
        id: 20,
        name: "Performance Ready Set",
        image: costume19,
        category: "performance",
        ageGroup: "11-35",
        material: "Cotton Silk",
        available: 18,
        price: "₹600/day",
      },
      {
        id: 21,
        name: "Classical Dance Set",
        image: costume18,
        category: "performance",
        ageGroup: "11-35",
        material: "Semi Kanchi Silk",
        available: 2,
        price: "₹600/day",
      },
      {
        id: 22,
        name: "Classical Dance Set",
        image: costume23,
        category: "performance",
        ageGroup: "11-35",
        material: "Semi Kanchi Silk",
        available: 2,
        price: "₹600/day",
      },

      // Age Group 20+
      {
        id: 22,
        name: "Assorted Skirt costume",
        image: costume13,
        category: "performance",
        ageGroup: "35+",
        material: "Semi Silk",
        available: 5,
        price: "₹600/day",
      },
      {
        /*
        id: 15,
        name: "Traditional Silk Set",
        image:costume2,
        category: "traditional",
        ageGroup: "35+",
        material: "Pure Kanchipuram Silk",
        colors: ["Red", "Green", "Blue"],
        sizes: ["M", "L", "XL"],
        available: 4,
        price: "₹4,000/day",
      },
      {
        id: 16,
        name: "Premium Practice Wear",
        category: "practice",
        ageGroup: "35+",
        material: "Cotton Silk",
        colors: ["Pink", "Blue", "Yellow"],
        sizes: ["S", "M", "L"],
        available: 6,
        price: "₹1,500/day",
        image: "costume19.webp"
      },
      {
        id: 17,
        name: "Arangetram Special Set",
        category: "performance",
        ageGroup: "25+",
        material: "Pure Silk",
        colors: ["Red", "Gold"],
        sizes: ["S", "M", "L"],
        available: 2,
        price: "₹5,000/day",
        image: "costume20.webp"
      },
      {
        id: 18,
        name: "Professional Dance Set",
        category: "traditional",
        ageGroup: "25+",
        material: "Silk Blend",
        colors: ["Green", "Gold", "Maroon"],
        sizes: ["M", "L", "XL"],
        available: 3,
        price: "₹3,800/day",
        image: "costume21.webp"
      */
      },
    ],
    purchase: [
      {
        id: 1,
        name: "Kids performance costume",
        image: costume7,
        //category: "traditional",
        ageGroup: "6-10",
        material: "Semi Kanchi Silks",
        //colors: ["Pink", "Gold", "Green"],
        //sizes: ["4Y", "6Y", "8Y", "10Y"],
        available: 2,
        price: "₹400/day",
      },
      {
        id: 2,
        name: "Kids performance costume",
        image: costume8,
        // category: "practice",
        ageGroup: "6-10",
        material: "Semi Kanchi Silks",
        available: 2,
        price: "₹400/day",
      },
      {
        id: 3,
        name: "Kids performance costume",
        image: costume9,
        //category: "performance",
        ageGroup: "6-10",
        material: "Semi Kanchi Silks",
        available: 2,
        price: "₹400/day",
      },
      {
        id: 4,
        name: "Kids performance costume",
        image: costume14,
        category: "traditional",
        ageGroup: "6-10",
        material: "Pure Silk",
        sizes: ["28", "30", "32"],
        available: 12,
        price: "₹400/day",
      },
      {
        id: 5,
        name: "Kids Performance Costume",
        image: costume20,
        category: "traditional",
        ageGroup: "6-10",
        material: "Pure Silk",
        available: 1,
        price: "₹500/day",
      },
      {
        id: 6,
        name: "Kids Performance Costume",
        image: costume21,
        category: "traditional",
        ageGroup: "6-10",
        material: "Semi Kanchi",
        available: 2,
        price: "₹400/day",
      },
      {
        id: 7,
        name: "Kids Performance Costume",
        image: costume22,
        category: "traditional",
        ageGroup: "6-10",
        material: "China Silk",
        available: 2,
        price: "₹400/day",
      },
      {
        /*
        id: 5,
        name: "Kids Bharatanatyam Basic",
        category: "practice",
        ageGroup: "4-10",
        material: "Cotton Silk",
        colors: ["Orange", "Red"],
        sizes: ["4Y", "6Y", "8Y", "10Y"],
        available: 6,
        price: "₹1,500/day",
        image: "costume11.webp"
      },
      */
      },

      // Age Group 11-20
      {
        id: 8,
        name: "Bharatanatyam/Kuchupudi Costume ",
        image: costume10,
        category: "traditional",
        ageGroup: "11-35",
        material: "Semi Silk",
        available: 20,
        price: "₹600/day",
      },
      {
        id: 9,
        name: "Performance with pant Costume",
        image: costume11,
        category: "practice",
        ageGroup: "11-35",
        material: "Silk",
        available: 20,
        price: "₹600/day",
      },
      {
        id: 10,
        name: "Navadurga Costume",
        image: costume12,
        category: "performance",
        ageGroup: "11-35",
        material: "Devi Costumes",
        available: 1,
        price: "₹600/day",
      },
      {
        id: 11,
        name: "Bharatantyam Costume Set",
        image: costume15,
        category: "traditional",
        ageGroup: "11-35",
        material: "Pure Silk",
        available: 1,
        price: "₹800/day",
      },
      {
        id: 12,
        name: "Classical Dance Set",
        image: costume1,
        category: "performance",
        ageGroup: "11-35",
        material: "Semi Kanchi Silk",
        available: 2,
        price: "₹600/day",
      },
      {
        id: 13,
        name: "Classical Dance Set",
        image: costume2,
        category: "performance",
        ageGroup: "11-35",
        material: "Polyester",
        available: 6,
        price: "₹500/day",
      },
      {
        id: 14,
        name: "Classical Dance Set",
        image: costume3,
        category: "performance",
        ageGroup: "11-35",
        material: "Raw Silk",
        available: 8,
        price: "₹600/day",
      },
      {
        id: 15,
        name: "Classical Dance Set",
        image: costume4,
        category: "performance",
        ageGroup: "11-35",
        material: "Net top with georgette attachments",
        colors: ["Purple", "Pink"],
        sizes: ["XS", "S", "M", "L"],
        available: 10 + 1,
        price: "₹500/day",
      },
      {
        id: 16,
        name: "Performance Ready Set",
        image: costume5,
        category: "performance",
        ageGroup: "11-35",
        material: "Raw Silk Pant with brocade",
        available: 4,
        price: "₹500/day",
      },
      {
        id: 17,
        name: "Performance Ready Set",
        image: costume6,
        category: "performance",
        ageGroup: "11-35",
        material: "Poly Silk",
        available: 12,
        price: "₹500/day",
      },
      {
        id: 18,
        name: "Performance Ready Set",
        image: costume16,
        category: "performance",
        ageGroup: "11-35",
        material: "Chiffon Georgette Skirt with brocade long blouse",
        available: 8,
        price: "₹500/day",
      },
      {
        id: 19,
        name: "Performance Ready Set",
        image: costume17,
        category: "performance",
        ageGroup: "11-35",
        material: "Balloon pant and strech blouse with net",
        available: 4,
        price: "₹500/day",
      },
      {
        id: 20,
        name: "Performance Ready Set",
        image: costume19,
        category: "performance",
        ageGroup: "11-35",
        material: "Cotton Silk",
        available: 18,
        price: "₹600/day",
      },
      {
        id: 21,
        name: "Classical Dance Set",
        image: costume18,
        category: "performance",
        ageGroup: "11-35",
        material: "Semi Kanchi Silk",
        available: 2,
        price: "₹600/day",
      },
      {
        id: 22,
        name: "Classical Dance Set",
        image: costume23,
        category: "performance",
        ageGroup: "11-35",
        material: "Semi Kanchi Silk",
        available: 2,
        price: "₹600/day",
      },

      // Age Group 20+
      {
        id: 22,
        name: "Assorted Skirt costume",
        image: costume13,
        category: "performance",
        ageGroup: "35+",
        material: "Semi Silk",
        available: 5,
        price: "₹600/day",
      },
      {
        /*
        id: 15,
        name: "Traditional Silk Set",
        image:costume2,
        category: "traditional",
        ageGroup: "35+",
        material: "Pure Kanchipuram Silk",
        colors: ["Red", "Green", "Blue"],
        sizes: ["M", "L", "XL"],
        available: 4,
        price: "₹4,000/day",
      },
      {
        id: 16,
        name: "Premium Practice Wear",
        category: "practice",
        ageGroup: "35+",
        material: "Cotton Silk",
        colors: ["Pink", "Blue", "Yellow"],
        sizes: ["S", "M", "L"],
        available: 6,
        price: "₹1,500/day",
        image: "costume19.webp"
      },*/
      },
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScroll = (ageGroup, direction) => {
    const safeAgeGroup = ageGroup.replace("+", "plus");
    const container = document.querySelector(`.costumes-grid-${safeAgeGroup}`);
    const scrollAmount = 300;
    if (container) {
      if (direction === "prev") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
      setTimeout(() => checkScroll(ageGroup), 500);
    }
  };

  const checkScroll = (ageGroup) => {
    const safeAgeGroup = ageGroup.replace("+", "plus");
    const container = document.querySelector(`.costumes-grid-${safeAgeGroup}`);
    if (container) {
      const hasLeftScroll = container.scrollLeft > 0;
      const hasRightScroll = container.scrollLeft < container.scrollWidth - container.clientWidth;
      const hasCards = container.children.length > 0;

      const prevArrow = container.parentElement.querySelector(".nav-arrow.prev");
      const nextArrow = container.parentElement.querySelector(".nav-arrow.next");

      if (prevArrow) prevArrow.style.display = hasLeftScroll && hasCards ? "flex" : "none";
      if (nextArrow) nextArrow.style.display = hasRightScroll && hasCards ? "flex" : "none";
    }
  };

  useEffect(() => {
    const filtered = (costumes[selectedType] || []).filter((costume) => {
      return selectedCategory === "all" || costume.category === selectedCategory.toLowerCase();
    });
    setFilteredCostumes(filtered);
  }, [selectedType, selectedCategory]);

  useEffect(() => {
    const ageGroups = ["6-10", "11-35", "35+"];
    const containers = [];

    ageGroups.forEach((ageGroup) => {
      checkScroll(ageGroup);
      const container = document.querySelector(`.costumes-grid-${ageGroup.replace("+", "plus")}`);
      if (container) {
        const scrollHandler = () => checkScroll(ageGroup);
        container.addEventListener("scroll", scrollHandler);
        containers.push({ container, handler: scrollHandler });
      }
    });

    return () => {
      containers.forEach(({ container, handler }) => {
        container.removeEventListener("scroll", handler);
      });
    };
  }, [filteredCostumes]);

  const renderAgeGroup = (ageGroup, title) => (
    <div className="age-group-section">
      <div className="age-label">
        <span>{title}</span>
      </div>
      <div className="costumes-scroll-container">
        <div className="nav-arrow prev" onClick={() => handleScroll(ageGroup, "prev")}>
          <FaChevronLeft />
        </div>

        <div className={`costumes-grid costumes-grid-${ageGroup.replace("+", "plus")}`}>
          {filteredCostumes
            .filter((costume) => costume.ageGroup === ageGroup)
            .map((costume) => (
              <div className="costume-card" key={costume.id} id={costume.category}>
                <div className="costume-image">
                  <img src={costume.image} alt={costume.name} />
                  <div className="costume-overlay">
                    <div className="costume-details">
                      <p className="material">Material: {costume.material}</p>
                      {costume.colors && (
                        <div className="colors">
                          <p>Available Colors:</p>
                          <div className="color-dots">
                            {costume.colors.map((color) => (
                              <span
                                key={color}
                                className="color-dot"
                                style={{ backgroundColor: color.toLowerCase() }}
                                title={color}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                      {costume.sizes && <p className="sizes">Sizes: {costume.sizes.join(", ")}</p>}
                      <p className="quantity">Available: {costume.available} pieces</p>
                      <p className="price">{costume.price}</p>
                    </div>
                  </div>
                </div>
                <h3 className="costume-name">{costume.name}</h3>
              </div>
            ))}
        </div>

        <div className="nav-arrow next" onClick={() => handleScroll(ageGroup, "next")}>
          <FaChevronRight />
        </div>
      </div>
    </div>
  );

  return (
    <div className="costumes-page">
      <div className="costume-banner">
        <p className="costume-text">
          Choose from a range of over <span className="highlight">100+</span> Bharathanatyam and
          Semi Classical costumes & accessories for different age groups
        </p>
      </div>

      {/*<div className="quick-selection">
        <h2>Quick Selection</h2>
        <div className="quick-circles">
          {quickLinks.map(link => (
            <div 
              key={link.id} 
              className={`quick-circle ${selectedCategory === link.name.toLowerCase() ? 'active' : ''}`}
              onClick={() => {
                setSelectedCategory(link.name.toLowerCase());
                scrollToCategory(link.name.toLowerCase());
              }}
            >
              <img src={link.image} alt={link.name} />
              <span>{link.name}</span>
            </div>
          ))}
        </div>
      </div>
  */}

      <div className="costume-banner second-banner">
        <p className="costume-text">
          A. You can visit Natanam Foundation,{" "}
          <span className="highlight">Horamavu (Bangalore)</span> and choose your costumes.
        </p>
        <p className="costume-text">
          B. Send a picture of the dancer and get the costume delivered to your place
        </p>
      </div>

      <div className="filter-section">
        <div className="type-filters">
          <button
            className={`filter-btn ${selectedType === "rent" ? "active" : ""}`}
            onClick={() => setSelectedType("rent")}
          >
            Rent
          </button>
          <button
            className={`filter-btn ${selectedType === "purchase" ? "active" : ""}`}
            onClick={() => setSelectedType("purchase")}
          >
            Purchase
          </button>
        </div>
      </div>

      <div className="costumes-container">
        {renderAgeGroup("6-10", "Age 6-10 Years")}
        {renderAgeGroup("11-35", "Age 11-35 Years")}
        {renderAgeGroup("35+", "Age 35+ Years")}
      </div>
    </div>
  );
};

export default Costumes;
