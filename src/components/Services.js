import React from 'react';
import '../styles/Service.css';

const ServiceCard = ({ title, description, imageSrc }) => {
  return (
    <div className="service-card">
      <div className="service-card-content">
        <div className="row">
          <div className="col-md-6">
            <div className="service-card-image">
              <img 
                src={imageSrc} 
                alt={title}
                className="service-card-image-img"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-card-text">
              <h3 className="service-card-title">{title}</h3>
              <p className="service-card-description">{description}</p>
              <button className="learn-more-btn">LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Web & Mobile App Development",
      description: "Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.",
      imageSrc: "/assets/image 2.png"
    }
  ];

  return (
    <section className="service-section">
      <div className="service-list">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            imageSrc={service.imageSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;