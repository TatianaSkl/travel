'use client';

import { FC } from 'react';
import { SliderGallery } from '@/components/modules';
import { TitleSection } from '@/components/ui-kit';
import gallery from '@/data/gallery.json';

const Gallery: FC = () => {
  return (
    <section
      className="section gallery-bg-m m:gallery-bg-t l:gallery-bg-d"
      id="gallery"
      aria-labelledby="gallerySectionTitle"
    >
      <div className="container l:px-0">
        <div className="mb-6 m:mx-auto m:w-[464px] m:mb-[72px] l:w-[657px] l:mr-auto l:ml-0 l:mb-6 l:pl-6">
          <TitleSection
            id="gallerySectionTitle"
            text={gallery.title}
            textAccent={gallery.titleAccent}
          />
        </div>
        <SliderGallery />
      </div>
    </section>
  );
};

export default Gallery;
