import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/FAQ.css"; 

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
    {
      question: "Vitae congue eu consequat ac felis?",
      answer:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
    },
    {
      question: "Sapien massa morbi risus sagittis tortor?",
      answer:
        "Sapien massa morbi risus sagittis tortor integer. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam.",
    },
  ];

  return (
    <div className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-block ${activeIndex === index ? "active" : ""}`}
          >
            <div className="faq-header" onClick={() => toggleFAQ(index)}>
              <span className="faq-question">{faq.question}</span>
              <span className="faq-toggle">{activeIndex === index ? "−" : "+"}</span>
            </div>
            {activeIndex === index && <div className="faq-content">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;