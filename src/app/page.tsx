import Header from "@/components/Header"; // Import the Header component
import Hero from "@/components/Hero"; // Import the Hero component

const Home = () => {
  return (
    <>
      {/* Header remains sticky at the top */}
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
};

export default Home;