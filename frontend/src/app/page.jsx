import HeroSection from "@/component/Home/Herosection";
import Footer from "@/component/Home/Footer";
import Information from "@/component/Home/Information";

function Home() {
  return(
    <section>
      <HeroSection />
      <Information></Information>
      <Footer></Footer>
    </section>
  );
};

export default Home;