import React from 'react';
import '../styles/Members.css';

const Members = () => {
    const members = [
    {
      name: "Priya Sharma",
      experience: "15 years of Bharatanatyam experience",
      image: "https://images.pexels.com/photos/8285524/pexels-photo-8285524.jpeg"
    },
    {
      name: "Meera Krishnan",
      experience: "12 years of classical dance expertise",
      image: "https://images.pexels.com/photos/8285589/pexels-photo-8285589.jpeg"
    },
    {
      name: "Anjali Patel",
      experience: "10 years of performance experience",
      image: "https://images.pexels.com/photos/8285610/pexels-photo-8285610.jpeg"
    },
    {
      name: "Kavita Menon",
      experience: "8 years of teaching excellence",
      image: "https://images.pexels.com/photos/8285183/pexels-photo-8285183.jpeg"
    },
    {
      name: "Riya Kumar",
      experience: "11 years of dance journey",
      image: "https://images.pexels.com/photos/8285204/pexels-photo-8285204.jpeg"
    },
    {
      name: "Divya Nair",
      experience: "9 years of stage performance",
      image: "https://images.pexels.com/photos/8285498/pexels-photo-8285498.jpeg"
    },
    {
      name: "Lakshmi Iyer",
      experience: "14 years of classical training",
      image: "https://images.pexels.com/photos/8285576/pexels-photo-8285576.jpeg"
    },
    {
      name: "Sanjana Reddy",
      experience: "7 years of dedication to dance",
      image: "https://images.pexels.com/photos/8285623/pexels-photo-8285623.jpeg"
    },
    {
      name: "Maya Pillai",
      experience: "13 years of artistic excellence",
      image: "https://images.pexels.com/photos/8285642/pexels-photo-8285642.jpeg"
    },
    {
      name: "Anita Desai",
      experience: "10 years of dance mastery",
      image: "https://images.pexels.com/photos/8285688/pexels-photo-8285688.jpeg"
    },
    {
      name: "Pooja Hegde",
      experience: "8 years of classical expertise",
      image: "https://images.pexels.com/photos/8285701/pexels-photo-8285701.jpeg"
    }
];
return (
    <section className="members" id="members">
      <div className="section-title">
        <h2>Our Members</h2>
        <div className="title-decoration"></div>
      </div>
      <div className="members-grid">
        {members.map((member, index) => (
          <div className="member-card" key={index}>
            <div className="member-image">
              <img src={member.image} alt={member.name} />
              <div className="member-info">
                <h3>{member.name}</h3>
                <p>{member.experience}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Members;