import 'react-responsive-carousel/lib/styles/carousel.min.css';

import About from '@/components/About';
import Admission from '@/components/Admission';
import ContactUs from '@/components/ContactUs';
// eslint-disable-next-line import/no-named-as-default
import Facilities from '@/components/Facilities';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Home from '@/components/Home';
import LifeIn from '@/components/LifeIn';
import Parent from '@/components/Parent';
import Staff from '@/components/Staff';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main meta={<Meta title="Brilliant Impact Academy" description="" />}>
      <Home />
      <About />
      <Staff />
      <LifeIn />
      <Facilities />
      <Admission />
      <Gallery />
      <Parent />
      <ContactUs />
      <Footer />
    </Main>
  );
};

export default Index;
