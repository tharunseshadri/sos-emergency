// EmergencyContacts.js
import React from 'react';
import './EmergencyContacts.css';

function EmergencyContacts() {
  const emergencyContacts = [
    {
      category: "Police Stations",
      contacts: [
        { name: "Police Control Room", number: "100" },
        { name: "Local Police Station 1", number: "044-24839999" },
        { name: "Local Police Station 2", number: "044-24839998" },
        { name: "Women Helpline", number: "1091" }
      ]
    },
    {
      category: "Hospitals",
      contacts: [
        { name: "Ambulance", number: "108" },
        { name: "Government Hospital", number: "044-28532333" },
        { name: "Apollo Hospital", number: "044-28290200" },
        { name: "Medical Emergency", number: "102" }
      ]
    },
    {
      category: "Fire Stations",
      contacts: [
        { name: "Fire Emergency", number: "101" },
        { name: "Local Fire Station 1", number: "044-28554444" },
        { name: "Local Fire Station 2", number: "044-28554445" },
        { name: "Disaster Management", number: "1070" }
      ]
    }
  ];

  const handleCall = (number) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <div className="emergency-contacts-page">
      <h1>Emergency Contacts</h1>
      
      <div className="emergency-categories">
        {emergencyContacts.map((category, index) => (
          <div key={index} className="category-section">
            <h2>{category.category}</h2>
            <div className="contacts-grid">
              {category.contacts.map((contact, contactIndex) => (
                <div key={contactIndex} className="contact-card">
                  <div className="contact-info">
                    <span className="contact-icon">
                      {category.category === "Police Stations" ? "👮‍♂️" : 
                       category.category === "Hospitals" ? "🏥" : "🚒"}
                    </span>
                    <h3>{contact.name}</h3>
                    <p className="phone-number">{contact.number}</p>
                  </div>
                  <button 
                    className="call-button"
                    onClick={() => handleCall(contact.number)}
                  >
                    <span className="call-icon">📞</span>
                    Call Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmergencyContacts;
