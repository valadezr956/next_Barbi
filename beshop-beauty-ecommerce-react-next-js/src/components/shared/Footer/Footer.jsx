import footerNavData from 'data/footer/footerNav';
import paymentMethodData from 'data/footer/payment';
import socialData from 'data/social';
import Link from 'next/link';
import { NavCol } from './NavCol/NavCol';

export const Footer = () => {
  const footerLogo = '/assets/img/footer-logo.svg';

  const footerNav = [...footerNavData];
  const footerSocial = [...socialData];
  const paymentMethods = [...paymentMethodData];

  return (
    <>
      {/* <!-- BEGIN FOOTER --> */}
      <footer className='footer'>
        <div className='wrapper'>
          <div className='footer-top'>
            <div className='footer-top__social'>
              <span>Find us here:</span>
              <ul>
                {footerSocial.map((social, index) => (
                  <li key={index}>
                    <a href={social.path}>
                      <i className={social.icon}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='footer-top__logo'>
              <Link href='/'>
                <a>
                  <img src={footerLogo} className='js-img' alt='' />
                </a>
              </Link>
            </div>

            <div className='footer-nav__col'>
              <span className='footer-nav__col-title'>Contact</span>
              <ul>
                <li>
                  <i className='icon-map-pin'></i> 5500 McPherson Rd, Laredo, TX
                  78041, USA
                </li>
                <li>
                  <i className='icon-smartphone'></i>
                  <div className='footer-nav__col-phones'>
                    <a href='tel:+19564800848'>+1 956 480 0848</a>
                  </div>
                </li>
                <li>
                  <i className='icon-mail'></i>
                  <a href='mailto:info@beshop.com'>ana648@hotmail.com</a>
                </li>
              </ul>
            </div>          
          </div>
          <div className='footer-copy'>
            <span>&copy; All rights reserved. BeShop 2020</span>
          </div>
        </div>
      </footer>
      {/* <!-- FOOTER EOF   --> */}
    </>
  );
};
