import React, { useState } from "react";
import SEO from "./SEO";
import "../styles/Jewellery.css";

const Jewellery = () => {
  const [activeTab, setActiveTab] = useState("rent");
  const [selectedCategory, setSelectedCategory] = useState("temple");

  const scrollToCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const categories = [
    {
      id: "temple",
      image: "/images/jewellery/temple-category.webp",
      name: "Temple Jewellery",
      items: [
        {
          id: "t1",
          name: "Nethi Chutti",
          image: "/images/jewellery/nethichutti.webp",
          rentPrice: "₹800/day",
          purchasePrice: "₹8,000",
          material: "Gold Plated",
          description: "Traditional temple design with intricate work",
        },
        {
          id: "t2",
          name: "Temple Jadai",
          image: "/images/jewellery/jadai.webp",
          rentPrice: "₹1,200/day",
          purchasePrice: "₹12,000",
          material: "Gold Plated",
          description: "Classic temple hair accessory",
        },
      ],
    },
    {
      id: "maram",
      image: "/images/jewellery/maram-category.webp",
      name: "Maram Jewellery",
      items: [
        {
          id: "m1",
          name: "Maram Necklace",
          image: "/images/jewellery/maram-necklace.webp",
          rentPrice: "₹1,000/day",
          purchasePrice: "₹10,000",
          material: "Maram Work",
          description: "Traditional maram work necklace",
        },
        {
          id: "m2",
          name: "Maram Headpiece",
          image: "/images/jewellery/maram-head.webp",
          rentPrice: "₹900/day",
          purchasePrice: "₹9,000",
          material: "Maram Work",
          description: "Elegant maram design headpiece",
        },
      ],
    },
    {
      id: "kemp",
      image: "/images/jewellery/kemp-category.webp",
      name: "Kemp Jewellery",
      items: [
        {
          id: "k1",
          name: "Kemp Necklace Set",
          image: "/images/jewellery/kemp-necklace.webp",
          rentPrice: "₹1,500/day",
          purchasePrice: "₹15,000",
          material: "Kemp Stones",
          description: "Traditional kemp stone necklace set",
        },
        {
          id: "k2",
          name: "Kemp Bangles",
          image: "/images/jewellery/kemp-bangles.webp",
          rentPrice: "₹700/day",
          purchasePrice: "₹7,000",
          material: "Kemp Stones",
          description: "Classic kemp stone bangles",
        },
      ],
    },
    {
      id: "stone",
      image: "/images/jewellery/stone-category.webp",
      name: "Stone Jewellery",
      items: [
        {
          id: "s1",
          name: "Stone Work Set",
          image: "/images/jewellery/stone-set.webp",
          rentPrice: "₹1,300/day",
          purchasePrice: "₹13,000",
          material: "Stone Work",
          description: "Elegant stone work complete set",
        },
        {
          id: "s2",
          name: "Stone Earrings",
          image: "/images/jewellery/stone-earrings.webp",
          rentPrice: "₹500/day",
          purchasePrice: "₹5,000",
          material: "Stone Work",
          description: "Designer stone work earrings",
        },
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Classical Dance Jewellery | Natanam Foundation Bangalore"
        description="Explore authentic classical dance jewellery at Natanam Foundation. We offer traditional temple jewellery, bharatanatyam ornaments, and dance accessories for performances."
      />
      <section className="jewellery-main">
        <div className="category-showcase">
          {categories.map((cat) => (
            <div
              className={`category-card ${selectedCategory === cat.id ? "active" : ""}`}
              key={cat.id}
              onClick={() => scrollToCategory(cat.id)}
            >
              <div className="category-image">
                <img src={cat.image} alt={cat.name} />
                <div className="category-overlay">
                  <h3>{cat.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="jewellery-tabs">
          <button
            className={`tab-btn ${activeTab === "rent" ? "active" : ""}`}
            onClick={() => setActiveTab("rent")}
          >
            Rent Collection
          </button>
          <button
            className={`tab-btn ${activeTab === "purchase" ? "active" : ""}`}
            onClick={() => setActiveTab("purchase")}
          >
            Purchase Collection
          </button>
        </div>

        {categories.map((category) => (
          <div className="jewellery-section" id={category.id} key={category.id}>
            <h2 className="section-title">{category.name}</h2>
            <div className="jewellery-grid">
              {category.items.map((item) => (
                <div className="jewellery-card" key={item.id}>
                  <div className="jewellery-image">
                    <img src={item.image} alt={item.name} />
                    <div className="hover-info">
                      <div className="jewellery-details">
                        <h4>{item.name}</h4>
                        <p className="material">{item.material}</p>
                        <p className="description">{item.description}</p>
                        <div className="specifications">
                          <p>Weight: {item.weight}</p>
                          <p>Size: {item.dimensions}</p>
                        </div>
                        <p className="price">
                          {activeTab === "rent" ? item.rentPrice : item.purchasePrice}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="jewellery-info">
                    <h3>{item.name}</h3>
                    <p className="visible-price">
                      {activeTab === "rent" ? item.rentPrice : item.purchasePrice}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Jewellery;
