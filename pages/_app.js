import 'public/reset.css';
import 'public/swiper-bundle.min.css';
import 'public/base.css';
import Navbar from 'components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
