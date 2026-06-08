export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <div>
          <h1 className="text-2xl font-bold text-blue-600">
            Identro
          </h1>
        </div>

        <nav className="hidden md:flex gap-8">
          <a href="#services" className="hover:text-blue-600">
            Services
          </a>

          <a href="#process" className="hover:text-blue-600">
            Process
          </a>

          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </nav>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
          Get Started
        </button>

      </div>
    </header>
  );
}