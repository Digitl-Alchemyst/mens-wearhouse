import { InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { RiFacebookBoxLine, RiPinterestLine, RiTiktokLine, RiYoutubeLine } from 'react-icons/ri';
import { PiArrowBendLeftUpBold } from 'react-icons/pi';

const Footer = () => {
  return (
    <footer className='w-full bg-mwblack-700 p-8 text-mwblack-100'>
      <div className='container mx-auto flex flex-col items-start justify-between md:flex-row'>
        {/* Company */}
        <div className='mb-8 md:mb-0'>
          <h2 className='mb-4 text-lg font-bold'>Company</h2>
          <ul>
            <li>The MW Story</li>
            <li>Careers</li>
            <li>Investor Relations</li>
            <li>Store Locator</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className='mb-8 md:mb-0'>
          <h2 className='mb-4 text-lg font-bold'>Customer Service</h2>
          <ul>
            <li>Help & FAQs</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Track My Order</li>
            <li>Contact Us</li>
            <li>Feedback</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className='mb-8 md:mb-0'>
          <h2 className='mb-4 text-lg font-bold'>Quick Links</h2>
          <ul>
            <li>Gift Cards</li>
            <li>Perfect Fit Rewards</li>
            <li>Threadworthy Blog</li>
            <li>All Brands</li>
            <li>Jos.A.Bank Clothiers</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className='mb-8 md:mb-0'>
          <h2 className='mb-4 text-lg font-bold'>Follow</h2>
          <div className='flex flex-col space-y-2'>
            <a
              href='https://www.twitter.com/menswearhouse'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-x-2'
            >
              <TwitterLogoIcon />
              Twitter
            </a>
            <a
              href='https://www.facebook.com//pages/Mens-Wearhouse/199928852452'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-x-2'
            >
              <RiFacebookBoxLine />
              Facebook
            </a>
            <a
              href='https://www.instagram.com/MensWearhouse'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-x-2'
            >
              <InstagramLogoIcon />
              Instagram
            </a>
            <a
              href='https://www.youtube.com/user/MensWearhouse'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-x-2'
            >
              <RiYoutubeLine />
              YouTube
            </a>
            <a
              href='https://www.pinterest.com/menswearhouse/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-x-2'
            >
              <RiPinterestLine />
              Pinterest
            </a>
            <a
              href='https://www.tiktok.com/@menswearhouse?lang=en'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-x-2'
            >
              <RiTiktokLine />
              TikTok
            </a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className='md:ml-8'>
          <div className='mb-4'>
            <input
              type='email'
              placeholder='Email Address'
              className='w-full rounded border border-mwblack-200 p-2 focus:outline-none'
            />
          </div>
          <div className='mb-4'>
            <input
              type='tel'
              placeholder='Phone Number'
              className='w-full rounded border border-mwblack-200 p-2 focus:outline-none'
            />
          </div>
          <div className='flex items-center space-x-1 px-4 py-2'>
            <PiArrowBendLeftUpBold />
            <p className=' text-white'>
              Sign up for texts and get $20 off $100+ instantly!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer