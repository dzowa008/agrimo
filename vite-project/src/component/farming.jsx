import React from 'react';
import '../styles/Farming.css'; // **Verify this path is correct**

function Farming() {
  return (
    <div className="container-fluid app-container">
      <div className="SMartart">
        <div className="hoyo-class">
          <span className="our-history-badge">Our History</span>
          <h1 className="display-4">Farming have been since <br />1866</h1>
        </div>

        <p className="lead">
          There are many variations of passages of Lorem Ipsum available, but the majority
          have suffered alteration in some form, by injected humour, or randomised words
          which don't look even.
        </p>
      </div>

      <div className="timeline-section">
        <div className="timeline-container">
          <div className="timeline-item">
            <div className="timeline-year">1987</div>
            <div className="timeline-dot"></div>
            <div className="timeline-event">
              <h5>Open my Farm</h5>
              <p>Corrupti ut consequatuor magni minusi iusto eos consectetur similique minus culpa odio temporibus.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">1995</div>
            <div className="timeline-dot"></div>
            <div className="timeline-event">
              <h5>Farm Remodelacion</h5>
              <p>Majority have suffered alteration in some form by injected humor culpa corporis veritatis odit.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">2000</div>
            <div className="timeline-dot"></div>
            <div className="timeline-event">
              <h5>Grainfarmers Formed</h5>
              <p>Always parties but trying sie shewing of moment minus Velit ratione hic corporis veritatis odit.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-year">1910</div>
            <div className="timeline-dot"></div>
            <div className="timeline-event">
              <h5>Start of Agriculture</h5>
              <p>Consequatur magni Corrupti ut minusi iusto eos consectetur similique minus culpa odio temporibus.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Farming;