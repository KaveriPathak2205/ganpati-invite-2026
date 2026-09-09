import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Schedule from "./components/Schedule";
import Location from "./components/Location";
import AartiLyrics from "./components/AartiLyrics";
import PhotoWall from "./components/PhotoWall";
import Footer from "./components/Footer";
import SectionDivider from "./components/SectionDivider";

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Schedule />
        <SectionDivider />
        <Location />
        <SectionDivider />
        <AartiLyrics />
        <SectionDivider />
        <PhotoWall />
      </main>
      <Footer />
    </div>
  );
}
