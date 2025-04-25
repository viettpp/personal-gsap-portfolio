import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Contact from "@/components/Contact"
{/* import NavigationDock from "@/components/NavigationDock" */} // Uncomment this line to enable the Navigation Dock

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      {/* <NavigationDock /> *//* Uncomment this line to enable the Navigation Dock */}
    </>
  )
}

export default Home