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
            {/* [ME] Category */}
            <tr>
              <td rowSpan={4} className="category-cell">[ME]</td>
              <td className="number-cell">01</td>
              <td className="item-cell">Presentations</td>
            </tr>
            <tr>
              <td className="number-cell">02</td>
              <td className="item-cell">Podcast</td>
            </tr>
            <tr>
              <td className="number-cell">03</td>
              <td className="item-cell">Facilitation</td>
            </tr>
            <tr>
              <td className="number-cell">04</td>
              <td className="item-cell">Mentorship</td>
            </tr>

            {/* [DEV] Category */}
            <tr>
              <td rowSpan={4} className="category-cell">[DEV]</td>
              <td className="number-cell">05</td>
              <td className="item-cell">Web Development</td>
            </tr>
            <tr>
              <td className="number-cell">06</td>
              <td className="item-cell">App Development</td>
            </tr>
            <tr>
              <td className="number-cell">07</td>
              <td className="item-cell">Machine Learning</td>
            </tr>
            <tr>
              <td className="number-cell">08</td>
              <td className="item-cell">Generative AI</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoreServices;