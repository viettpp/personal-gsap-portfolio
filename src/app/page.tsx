import Header from "@/components/Header"; // Import the Header component
import Hero from "@/components/Hero"; // Import the Hero component
import About from "@/components/About"; // Import the About component

const Home = () => {
  return (
    <>
      {/* Header remains sticky at the top */}
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
};

export default Home;