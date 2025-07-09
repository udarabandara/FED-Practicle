import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 px-6 py-6 sm:py-6 flex flex-col gap-8 items-center sm:items-start bg-gray-50">
        <Slider/>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
