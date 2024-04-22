'use client';

import TitleSection from '@/components/ui-kit/TitleSection';
import about from '@/data/about.json';

const About = () => {
  return (
    <section className="section about-bg-m m:about-bg-t l:about-bg-d" id="about">
      <div className="container">
        <TitleSection text={about.title} textAccent={about.titleAccent} />
      </div>
    </section>
  );
};

export default About;
