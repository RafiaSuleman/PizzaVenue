
import Hero from "./component/hero";
import MenuCategories from "./component/menuCategories";
import StaticCards from "./component/staticCard";
import Deals from "./component/deals";
import Branches from "./component/branches";
import Reviews from "./component/reviews";
import CTA from "./component/cta";
import Marquee from "./component/marqee";
import WhyChooseUs from "./component/whyChooseUs";
export default function Home() {
  return (
   <div>
    <Hero/>
    <Marquee/>
    <MenuCategories/>
    <Deals/>
    <StaticCards/>
    <WhyChooseUs/>
    <Branches/>
    <Reviews/>
    <CTA />
   </div>
  );
}
