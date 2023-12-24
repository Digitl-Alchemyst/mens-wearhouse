import { styleGuide } from '#/constants';
import Image from 'next/image';
import React from 'react';

const guides = styleGuide;

function OccasionsGuide() {
  return (
    <>
      {guides.map((guide) => (
        <div key={guide.id} className='flex flex-col space-y-3'>
          <div className='flex flex-col space-y-2'>
            <h3 className='text-2xl'>{guide.title}</h3>
            <p className='text-base font-light'>{guide.heading}</p>
          </div>
          <div className='flex items-center space-x-4'>
            <div>
              <Image
                src={`/styles/${guide.mainImg}`}
                width={420}
                height={420}
                alt='image'
              />
            </div>
            <div className='flex space-x-4'>
              {guide.outfits.map((outfit) => (
                <div key={outfit.id}>
                  <Image
                    src={`/styles/${outfit.img}`}
                    width={400}
                    height={400}
                    alt='outfit image'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default OccasionsGuide;

// <h2>{outfit.sweater.title}</h2>
// <p>{outfit.sweater.price}</p>
// <h2>{outfit.coat.title}</h2>
// <p>{outfit.coat.price}</p>
// <h2>{outfit.shirt.title}</h2>
// <p>{outfit.shirt.price}</p>
// <h2>{outfit.pants.title}</h2>
// <p>{outfit.pants.price}</p>
// <h2>{outfit.shoes.title}</h2>
// <p>{outfit.shoes.price}</p>
// <h2>{outfit.accessory.title}</h2>
// <p>{outfit.accessory.price}</p>
