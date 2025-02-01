import React from 'react';
import '../styles/Service1.css';

const ServiceCard = ({ title, description, imageSrc }) => {
  return (
    <div className="service-card">
      <div className="service-card-content">
        <div className="row">
          <div className="col-md-6">
            <div className="service-card-text">
              <h3 className="service-card-title">{title}</h3>
              <p className="service-card-description">{description}</p>
              <button className="learn-more-btn">LEARN MORE</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-card-image">
              <img 
                src={imageSrc} 
                alt={title}
                className="service-card-image-img"
              />
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
      title: "Digital Strategy Consulting",
      description: "Our Digital Strategy Consulting services help businesses align their objectives with the best digital practices. We work closely with you to create strategies that drive sustainable growth and maximize the effectiveness of your digital channels.",
      imageSrc: "/assets/image 1.png"
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