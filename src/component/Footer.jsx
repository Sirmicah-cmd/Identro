export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-2xl font-bold">
              Identro
            </h3>

            <p className="mt-4 text-slate-400">
              Fast, secure and reliable digital identity
              and business registration services.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Services
            </h4>

            <ul className="space-y-2 text-slate-400">
              <li>NIN Services</li>
              <li>BVN Services</li>
              <li>CAC Registration</li>
              <li>TIN Registration</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Contact
            </h4>

            <ul className="space-y-2 text-slate-400">
              <li>Abuja, Nigeria</li>
              <li>support@identro.ng</li>
              <li>+234 XXX XXX XXXX</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-500">
          © {new Date().getFullYear()} Identro.
          All rights reserved.
        </div>

      </div>

    </footer>
  );
}