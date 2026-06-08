import {
  Fingerprint,
  Search,
  RefreshCw,
  CreditCard,
  Building2,
  FileText,
  Briefcase,
  BadgeCheck,
  ShieldCheck,
} from "lucide-react";

/* =========================
   SERVICES DATA
========================= */
const services = [
  {
    title: "NIN Registration",
    description: "Register and obtain your National Identification Number.",
    icon: Fingerprint,
  },
  {
    title: "NIN Retrieval",
    description: "Recover your NIN quickly and securely.",
    icon: Search,
  },
  {
    title: "NIN Modification",
    description: "Update your personal information on NIN records.",
    icon: RefreshCw,
  },
  {
    title: "BVN Services",
    description: "BVN verification and retrieval support.",
    icon: CreditCard,
  },
  {
    title: "CAC Registration",
    description: "Register your business or company easily.",
    icon: Building2,
  },
  {
    title: "CAC Annual Returns",
    description: "File annual returns and stay compliant.",
    icon: FileText,
  },
  {
    title: "CAC Modification",
    description: "Update company information.",
    icon: Briefcase,
  },
  {
    title: "TIN Registration",
    description: "Obtain your Tax Identification Number.",
    icon: BadgeCheck,
  },
  {
    title: "IPE Clearance",
    description: "Fast and secure clearance processing.",
    icon: ShieldCheck,
  },
];

/* =========================
   HOME PAGE
========================= */
export default function Home() {
  return (
    <main className="bg-slate-50 text-slate-900">

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900 text-white py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold">
            Identro Digital Services
          </h1>

          <p className="mt-6 text-slate-300 max-w-2xl mx-auto">
            Fast, secure and reliable identity and business registration services in Nigeria.
          </p>

      <div className="mt-10 flex justify-center gap-4">

           {/* LOGIN */}
          <a
            href="https://checkmyninbvn.com.ng/auth/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold hover:bg-gray-200 transition inline-block">
              Login
            </span>
          </a>

            {/* REGISTER */}
            <a
              href="https://checkmyninbvn.com.ng/auth/register"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition inline-block">
                Register
              </span>
            </a>

          </div>

        </div>
      </section>

      {/* TRUST BAR */}

      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-5">

          <div className="grid md:grid-cols-4 gap-4 text-center">

            <div>✅ Secure Processing</div>
            <div>⚡ Fast Delivery</div>
            <div>🛡️ Trusted Support</div>
            <div>📄 Compliance Services</div>

          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <h2 className="text-4xl font-bold text-blue-600">5000+</h2>
              <p className="mt-2 text-gray-600">Requests Processed</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <h2 className="text-4xl font-bold text-blue-600">98%</h2>
              <p className="mt-2 text-gray-600">Customer Satisfaction</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <h2 className="text-4xl font-bold text-blue-600">24/7</h2>
              <p className="mt-2 text-gray-600">Support</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <h2 className="text-4xl font-bold text-blue-600">100%</h2>
              <p className="mt-2 text-gray-600">Secure Handling</p>
            </div>

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Our Services</h2>
            <p className="mt-4 text-gray-600">
              Everything you need in one platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="bg-white border rounded-3xl p-8 shadow-sm hover:shadow-xl transition hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">How It Works</h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Simple steps to complete your request quickly and securely.
          </p>

          <div className="mt-16 grid md:grid-cols-4 gap-6 text-left">

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold">1. Select Service</h3>
              <p className="text-sm text-gray-600 mt-2">
                Choose the service you need.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold">2. Submit Details</h3>
              <p className="text-sm text-gray-600 mt-2">
                Provide required information.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold">3. Processing</h3>
              <p className="text-sm text-gray-600 mt-2">
                We verify and process your request.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold">4. Completion</h3>
              <p className="text-sm text-gray-600 mt-2">
                Receive your result securely.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 text-white py-20 text-center">

        <h2 className="text-4xl font-bold">
          Ready to Get Started?
        </h2>

        <p className="mt-4 text-slate-300">
          Submit your request and let Identro handle the rest.
        </p>

        <button className="mt-8 px-8 py-4 bg-blue-600 rounded-xl font-semibold">
          Start Request
        </button>
         <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-500">
          © {new Date().getFullYear()} Identro.
          All rights reserved.
        </div>


      </section>

    </main>
    
  );
}