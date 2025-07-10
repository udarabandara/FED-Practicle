import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider"
import WelcomeSection from "../components/WelcomeSection"
import Service from "../components/Services"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"
import LogoSection from "../components/LogoSection"
import News from "../components/News";

export default function Home() {
  return (
    <div className="w-full flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 py-6 sm:py-6 flex flex-col gap-20 items-center sm:items-start bg-white">
        <Slider/>
        <WelcomeSection/>
        <Service />
        <Stats/>
        <Testimonials/>
        <LogoSection/>
        <News/>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
