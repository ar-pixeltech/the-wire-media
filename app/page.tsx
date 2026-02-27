import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
// import { getAppConfigurationsService } from "@/modules/app-configuration/app-configuration.service";

// import { cache } from "react";
// So it doesn't hit DB every request. FOR Configuration data that doesn't change often, we can cache it in memory. This is a simple approach and works well for small datasets. For larger datasets or more complex caching needs, consider using an external caching solution like Redis.
// export const getAppConfig = cache(async () => {
//   // Simulate fetching from database
//   const configurations = await getAppConfigurationsService();
//   return configurations;
// });

export default async function Home() {

  // const config = await getAppConfigurationsService();

  return (
    <main>
      {/* <Header /> */}
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
      {/* <Footer /> */}
    </main>
  );
}