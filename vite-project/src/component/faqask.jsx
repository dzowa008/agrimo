import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/faqask.css" // Import Bootstrap CSS

const FAQSection = () => {
  const [openGeneral, setOpenGeneral] = useState(1); // State to manage open/close for General Questions
  const [openOther, setOpenOther] = useState(0); // State to manage open/close for Other Questions

  const generalQuestions = [
    {
      id: 1,
      question: 'What is Agricultural Biotechnology?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
    },
    {
      id: 2,
      question: 'Can the products be applied during rainy season?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 3,
      question: 'What vegetables can I grow in my hothouse?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
  ];

  const otherQuestions = [
    {
      id: 4,
      question: 'What is modern agriculture?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
    },
    {
      id: 5,
      question: 'What are the 2 main types of farming?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 6,
      question: 'What are the different types of greenhouse?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
  ];

  return (
    <section className="faq-section py-5">
      <div className="container">
        <div className="row">
          {/* General Questions Column */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="d-flex align-items-center mb-2 hoyoo">
              <span className="icon-badge me-1"></span>
              <p className="most-ask mb-0">Most Ask</p>
            </div>
            <h2 className="section-title mb-4">General Questions</h2>
            <div className="accordion" id="generalAccordion">
              {generalQuestions.map((item) => (
                <div className="accordion-item custom-accordion-item mb-3" key={item.id}>
                  <h2 className="accordion-header" id={`headingGeneral${item.id}`}>
                    <button
                      className={`accordion-button custom-accordion-button ${openGeneral === item.id ? '' : 'collapsed'}`}
                      type="button"
                      onClick={() => setOpenGeneral(openGeneral === item.id ? null : item.id)}
                      aria-expanded={openGeneral === item.id ? 'true' : 'false'}
                      aria-controls={`collapseGeneral${item.id}`}
                    >
                      <span className="question-number">{`0${item.id}.`}</span> {item.question}
                    </button>
                  </h2>
                  <div
                    id={`collapseGeneral${item.id}`}
                    className={`accordion-collapse collapse ${openGeneral === item.id ? 'show' : ''}`}
                    aria-labelledby={`headingGeneral${item.id}`}
                    data-bs-parent="#generalAccordion"
                  >
                    <div className="accordion-body custom-accordion-body">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Questions Column */}
          <div className="col-lg-6">
            <div className="d-flex align-items-center mb-2 hoyoo">
              <span className="icon-badge me-2"></span>
              <p className="people-know mb-0">People Know</p>
            </div>
            <h2 className="section-title mb-4">Other Questions</h2>
            <div className="accordion" id="otherAccordion">
              {otherQuestions.map((item) => (
                <div className="accordion-item custom-accordion-item mb-3" key={item.id}>
                  <h2 className="accordion-header" id={`headingOther${item.id}`}>
                    <button
                      className={`accordion-button custom-accordion-button ${openOther === item.id ? '' : 'collapsed'}`}
                      type="button"
                      onClick={() => setOpenOther(openOther === item.id ? null : item.id)}
                      aria-expanded={openOther === item.id ? 'true' : 'false'}
                      aria-controls={`collapseOther${item.id}`}
                    >
                      <span className="question-number">{`0${item.id}.`}</span> {item.question}
                    </button>
                  </h2>
                  <div
                    id={`collapseOther${item.id}`}
                    className={`accordion-collapse collapse ${openOther === item.id ? 'show' : ''}`}
                    aria-labelledby={`headingOther${item.id}`}
                    data-bs-parent="#otherAccordion"
                  >
                    <div className="accordion-body custom-accordion-body">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;