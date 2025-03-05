import React from 'react';
import '@/styles/Services.css';

const CoreServices: React.FC = () => {
  return (
    <div className="core-services">
      {/* Left section */}
      <div className="core-services__left">
        <h1 className="title">
          Core<br />S<span className="kelsi">e</span>rvices
        </h1>
        <p className="description">
          Responsibly innovative, this is what Viet can do for you without
          getting himself fired from his day job.
        </p>
        <a href="#" className="resume-link">
          + WORK RESUME
        </a>
      </div>

      {/* Right section - replaced the old .services-block with a table */}
      <div className="core-services__right">
        <table className="services-table">
          <tbody>
            {/* [TECH] Category */}
            <tr>
              <td rowSpan={3} className="category-cell">[TECH]</td>
              <td className="number-cell">01</td>
              <td className="item-cell">Tech Advisory & Strategy</td>
            </tr>
            <tr>
              <td className="number-cell">02</td>
              <td className="item-cell">AI/ML Prototypes</td>
            </tr>
            <tr>
              <td className="number-cell">03</td>
              <td className="item-cell">Full-Stack Development</td>
            </tr>

            {/* [BRAND] Category */}
            <tr>
              <td rowSpan={2} className="category-cell">[BRAND]</td>
              <td className="number-cell">04</td>
              <td className="item-cell">Brand Identity & Design</td>
            </tr>
            <tr>
              <td className="number-cell">05</td>
              <td className="item-cell">Generative Video Production</td>
            </tr>


            {/* [GROW] Category */}
            <tr>
              <td rowSpan={2} className="category-cell">[GROW]</td>
              <td className="number-cell">06</td>
              <td className="item-cell">Public Speaking Engagement</td>
            </tr>
            <tr>
              <td className="number-cell">07</td>
              <td className="item-cell">Startup Mentorship</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoreServices;