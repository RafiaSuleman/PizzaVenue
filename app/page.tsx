
import Hero from "./component/hero";
import MenuCategories from "./component/menuCategories";
import StaticCards from "./component/staticCard";
import Deals from "./component/deals";
import Branches from "./component/branches";
import Reviews from "./component/reviews";
import CTA from "./component/cta";
export default function Home() {
  return (
   <div>
    <Hero/>
    <MenuCategories/>
    <StaticCards/>
    <Deals/>
    <Branches/>
    <Reviews/>
    <CTA />
   </div>
  );
}
