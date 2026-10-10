
import Hero from "./component/hero";
import MenuCategories from "./component/menuCategories";
import StaticCards from "./component/staticCard";
import Deals from "./component/deals";
import Branches from "./component/branches";
import Reviews from "./component/reviews";
import CTA from "./component/cta";
import Marquee from "./component/marqee";
export default function Home() {
  return (
   <div>
    <Hero/>
    <Marquee/>
    <MenuCategories/>
    <Deals/>
    <StaticCards/>
    <Branches/>
    
    <Reviews/>
    <CTA />
   </div>
  );
}
