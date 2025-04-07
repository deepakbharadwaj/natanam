import React, { useState} from 'react';
import '../styles/Jewellery.css';

const Jewellery = () => {
    const [activeTab, setActiveTab] = useState('rent');
    const [selectedCategory, setSelectedCategory] = useState('temple');
  
    const scrollToCategory = (categoryId) => {
      setSelectedCategory(categoryId);
      const element = document.getElementById(categoryId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

  const categories = [
    {
      id: 'temple',
      image: '/images/jewellery/temple-category.jpg',
      name: 'Temple Jewellery',
      items: [
        {
          id: 't1',
          name: "Nethi Chutti",
          image: "/images/jewellery/nethichutti.jpg",
          rentPrice: "₹800/day",
          purchasePrice: "₹8,000",
          material: "Gold Plated",
          description: "Traditional temple design with intricate work"
        },
        {
          id: 't2',
          name: "Temple Jadai",
          image: "/images/jewellery/jadai.jpg",
          rentPrice: "₹1,200/day",
          purchasePrice: "₹12,000",
          material: "Gold Plated",
          description: "Classic temple hair accessory"
        }
      ]
    },
    {
      id: 'maram',
      image: '/images/jewellery/maram-category.jpg',
      name: 'Maram Jewellery',
      items: [
        {
          id: 'm1',
          name: "Maram Necklace",
          image: "/images/jewellery/maram-necklace.jpg",
          rentPrice: "₹1,000/day",
          purchasePrice: "₹10,000",
          material: "Maram Work",
          description: "Traditional maram work necklace"
        },
        {
          id: 'm2',
          name: "Maram Headpiece",
          image: "/images/jewellery/maram-head.jpg",
          rentPrice: "₹900/day",
          purchasePrice: "₹9,000",
          material: "Maram Work",
          description: "Elegant maram design headpiece"
        }
      ]
    },
    {
      id: 'kemp',
      image: '/images/jewellery/kemp-category.jpg',
      name: 'Kemp Jewellery',
      items: [
        {
          id: 'k1',
          name: "Kemp Necklace Set",
          image: "/images/jewellery/kemp-necklace.jpg",
          rentPrice: "₹1,500/day",
          purchasePrice: "₹15,000",
          material: "Kemp Stones",
          description: "Traditional kemp stone necklace set"
        },
        {
          id: 'k2',
          name: "Kemp Bangles",
          image: "/images/jewellery/kemp-bangles.jpg",
          rentPrice: "₹700/day",
          purchasePrice: "₹7,000",
          material: "Kemp Stones",
          description: "Classic kemp stone bangles"
        }
      ]
    },
    {
      id: 'stone',
      image: '/images/jewellery/stone-category.jpg',
      name: 'Stone Jewellery',
      items: [
        {
          id: 's1',
          name: "Stone Work Set",
          image: "/images/jewellery/stone-set.jpg",
          rentPrice: "₹1,300/day",
          purchasePrice: "₹13,000",
          material: "Stone Work",
          description: "Elegant stone work complete set"
        },
        {
          id: 's2',
          name: "Stone Earrings",
          image: "/images/jewellery/stone-earrings.jpg",
          rentPrice: "₹500/day",
          purchasePrice: "₹5,000",
          material: "Stone Work",
          description: "Designer stone work earrings"
        }
      ]
    }
  ];

 
  return (
    <section className="jewellery-main">
      <div className="category-showcase">
        {categories.map(cat => (
          <div 
            className={`category-card ${selectedCategory === cat.id ? 'active' : ''}`}
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
          className={`tab-btn ${activeTab === 'rent' ? 'active' : ''}`}
          onClick={() => setActiveTab('rent')}
        >
          Rent Collection
        </button>
        <button 
          className={`tab-btn ${activeTab === 'purchase' ? 'active' : ''}`}
          onClick={() => setActiveTab('purchase')}
        >
          Purchase Collection
        </button>
      </div>

      {categories.map(category => (
        <div className="jewellery-section" id={category.id} key={category.id}>
          <h2 className="section-title">{category.name}</h2>
          <div className="jewellery-grid">
            {category.items.map(item => (
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
                        {activeTab === 'rent' ? item.rentPrice : item.purchasePrice}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="jewellery-info">
                  <h3>{item.name}</h3>
                  <p className="visible-price">
                    {activeTab === 'rent' ? item.rentPrice : item.purchasePrice}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Jewellery;