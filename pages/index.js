import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";
import GalleryCarousel from "../components/GalleryCarousel";
import Services from "../components/Services";
import ContactUs from "../components/ContactUs";

const Home = () => {
  return (
    <>
      <Head>
        <title>Ajay</title>
        <meta name="description" content="Ajay work to do" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="DIAMOND ROOFING"
        title="Trusted Roofing Professionals in Your Area"
      >
        We offer personalized roofing services with a well-trained staff,
        providing free quotes and roof condition reports. Our commitment to
        customer satisfaction is reflected in our policy of not leaving until
        the job meets your expectations. With over 20 years of experience in
        both residential and commercial roofing, we have built a strong
        reputation in Melbourne.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="A Legacy of Excellence"
        title="OUR RECENT WORKS"
        id="gallery"
      >
        With over two decades of experience in residential and commercial
        roofing, we've built a reputation in Melbourne that speaks for itself.
      </SectionTitle>
      <GalleryCarousel />

      <SectionTitle pretitle="Service Beyond Expectations" title="OUR SERVICES">
        DIAMOND ROOFING OFFERS TOP OF THE LINE SERVICES BACKED BY INDUSTRY
        LEADING WARRANTIES TO KEEP YOUR HOME SAFE.
      </SectionTitle>
      <Services />

      <SectionTitle pretitle="Need Help? Open a Ticket" title="Contact Us">
        Our support team will get back to you ASAP via email.
      </SectionTitle>
      <ContactUs />
      {/* <Cta /> */}
      <Footer />
      <PopupWidget />
    </>
  );
};

export default Home;
