
import Hero from "../components/Hero";
import Features from "../components/Features";
import DownloadSection from "../components/DownloadSection";
import Layout from "../Layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Features />

      <DownloadSection />
    </Layout>
  );
};

export default HomePage;
