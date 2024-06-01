import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";
import SectionHeaders from "./components/layout/SectionHeader";

export default function Home() {
  return (
    <>
      <Hero/>
      <HomeMenu/>
      <section className="text-center my-8">
        <SectionHeaders
        subHeader={'Our story'}
        mainHeader={'About us'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
        <p>
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
        </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders 
        sunHeader={'Don\'t hesitate'}
        mainHeader={'Contact us'}/>
        <div className="mt-8 relative">
        <a className="text-2xl underline text-gray-500" href="tel:+380660375234">
          +38 066 037 52 34
        </a>
        <p className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          St. 68 Desantnykiv 10, Mykolaiv, Mykolaiv region, 54000
        </p>
        </div>
      </section>
    </>
  );
}
