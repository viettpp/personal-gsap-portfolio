import React from 'react';
import '@/styles/Services.css';

const CoreServices: React.FC = () => {
  return (
    <div className="core-services min-h-screen max-w-[20rem] md:max-w-[42rem] lg:max-w-[52rem] xl:max-w-[70rem] 2xl:max-w-[125rem] mx-auto">
      <div className="flex flex-col md:flex-row w-full gap-[3rem] lg:gap-[4rem] xl:gap-[15rem] 2xl:gap-[25rem]">
        <div className="core-services__left">
          <h1 className="title text-[3.75rem] md:text-[5.5rem] lg:text-[7.5rem] xl:text-[8rem] 2xl:text-[11rem] leading-[0.9] mb-4">
            Core<br />S<span className="kelsi text-[3.5rem] md:text-[5rem] lg:text-[7rem] xl:text-[7.5rem] 2xl:text-[10.5rem] relative -left-[0.10em] -mr-[0.20em]">e</span>rvices
          </h1>
          <p className="description text-[1.063rem] md:text-[1rem] lg:text-[1.063rem] xl:text-[1.125rem] 2xl:text-[1.563rem] leading-relaxed mb-1 mr-10 md:mr-[5rem] lg:mr-[10rem] 2xl:mr-[25rem]">
            Responsibly innovative, this is what Viet can do for you without
            getting himself fired from his day job.
          </p>
          <a 
            href="https://standardresume.co/r/QGXQF0QMK16iYfDR7mKqU" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="resume-link text-[0.688rem] xl:text-[0.75rem] 2xl:text-[1rem] underline"
          >
            + WORK RESUME
          </a>
        </div>

        {/* Right section */}
        <div className="core-services__right pr-2">
          <table className="services-table w-full">
            <tbody>
              {/* [TECH] Category */}
              <tr>
                <td rowSpan={3} className="category-cell text-[0.688rem] xl:text-[0.75rem] 2xl:text-[1rem] w-[60px] xl:w-[100px] 2xl:w-[150px]">[TECH]</td>
                <td className="number-cell text-[0.688rem] xl:text-[0.75rem] 2xl:text-[1rem] pl-0 w-[20px]" data-category="[TECH]">01</td>
                <td className="item-cell text-[1.25rem] md:text-[1.375rem] lg:text-[1.625rem] xl:text-[1.75rem] 2xl:text-[2.375rem] pl-4 xl:pl-8 pt-1 pb-4">Tech Strategy</td>
              </tr>
              <tr>
                <td className="number-cell text-[0.688rem] xl:text-[0.75rem] 2xl:text-[1rem] pl-0 pt-4">02</td>
                <td className="item-cell text-[1.25rem] md:text-[1.375rem] lg:text-[1.625rem] xl:text-[1.75rem] 2xl:text-[2.375rem] pl-4 xl:pl-8 pt-5 pb-4 2xl:pt-7 2xl:pb-6">AI/ML Prototypes</td>
              </tr>
              <tr>
                <td className="number-cell text-[0.688rem] xl:text-[0.75rem] 2xl:text-[1rem] pl-0 pt-4">03</td>
                <td className="item-cell text-[1.25rem] md:text-[1.375rem] lg:text-[1.625rem] xl:text-[1.75rem] 2xl:text-[2.375rem] pl-4 xl:pl-8 pt-5 pb-4 2xl:pt-7 2xl:pb-6">Full-Stack</td>
              </tr>

              {/* [BRAND] Category */}
              <tr>
                <td rowSpan={2} className="category-cell text-[0.688rem] xl:text-[0.75rem] 2xl:text-[1rem] pt-4">[BRAND]</td>
                <td className="number-cell text-[0.688rem] xl:text-[0.75rem] 2xl:text-[1rem] pl-0 pt-4" data-category="[BRAND]">04</td>
                <td className="item-cell text-[1.25rem] md:text-[1.375rem] lg:text-[1.625rem] xl:text-[1.75rem] 2xl:text-[2.375rem] pl-4 xl:pl-8 pt-5 pb-4 2xl:pt-7 2xl:pb-6">Brand Design</td>
              </tr>
              <tr>
                <td className="number-cell text-[0.688rem] xl:text-[0.75rem] 2xl:text-[1rem] pl-0 pt-4">05</td>
                <td className="item-cell text-[1.25rem] md:text-[1.375rem] lg:text-[1.625rem] xl:text-[1.75rem] 2xl:text-[2.375rem] pl-4 xl:pl-8 pt-5 pb-4 2xl:pt-7 2xl:pb-6">AI Video Production</td>
              </tr>

              {/* [GROW] Category */}
              <tr>
                <td rowSpan={2} className="category-cell text-[0.688rem] xl:text-[0.75rem] 2xl:text-[1rem] pt-4">[GROW]</td>
                <td className="number-cell text-[0.688rem] xl:text-[0.75rem] 2xl:text-[1rem] pl-0 pt-4" data-category="[GROW]">06</td>
                <td className="item-cell text-[1.25rem] md:text-[1.375rem] lg:text-[1.625rem] xl:text-[1.75rem] 2xl:text-[2.375rem] pl-4 xl:pl-8 pt-5 pb-4 2xl:pt-7 2xl:pb-6">Public Speaking</td>
              </tr>
              <tr>
                <td className="number-cell text-[0.688rem] xl:text-[0.75rem] 2xl:text-[1rem] pl-0 pt-4">07</td>
                <td className="item-cell text-[1.25rem] md:text-[1.375rem] lg:text-[1.625rem] xl:text-[1.75rem] 2xl:text-[2.375rem] pl-4 xl:pl-8 pt-5 pb-4 2xl:pt-7 2xl:pb-6">Startup Mentorship</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CoreServices;