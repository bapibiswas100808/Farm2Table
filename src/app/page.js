import Aboutus from "./Pages/Homepage/Aboutus/Aboutus";
import Banner from "./Pages/Homepage/Banner/Banner";
import Benefits from "./Pages/Homepage/Benefits/Benefits";
import Contact from "./Pages/Homepage/Contact/Contact";
import FarmerSpotlight from "./Pages/Homepage/FarmerSpotlight/FarmerSpotlight";
import HowItWorks from "./Pages/Homepage/HowItWorks/HowItWorks";
import ProductCategories from "./Pages/Homepage/ProductCategories/ProductCategories";
import Testimonial from "./Pages/Homepage/Testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <Aboutus></Aboutus>
      <FarmerSpotlight></FarmerSpotlight>
      <ProductCategories></ProductCategories>
      <HowItWorks></HowItWorks>
      <Benefits></Benefits>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </>
  );
}
