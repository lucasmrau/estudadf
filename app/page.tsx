import AboutComponent from '@/components/AboutComponent';
import ContactComponent from '@/components/ContactComponent';
import FooterComponent from '@/components/FooterComponent';
import MainComponent from '@/components/mainComponent';

export default function Home() {
  return (
    <>
      <MainComponent />
      <AboutComponent />
      <ContactComponent />
      <FooterComponent />
    </>
  );
}
