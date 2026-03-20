import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* NAV */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10">
        <h1 className="text-xl font-semibold tracking-widest">AUTOSERVICE</h1>
        <div className="flex gap-6 text-sm text-white/70">
          <Link href="/auth/signin">Sign In</Link>
          <Link href="/auth/register" className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-medium">Get Started</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-8 py-16">
        <div className="bg-gradient-to-r from-[#2b1d14] to-[#4b3326] rounded-3xl p-10 flex flex-col lg:flex-row items-center justify-between">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Automotive Service <br /> Management Platform
            </h1>
            <p className="text-white/70 mb-6">
              Connect customers with trusted auto service centers. Streamline operations, manage appointments, and deliver exceptional service experiences.
            </p>
            <div className="flex gap-4">
              <Link href="/auth/register" className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold">Join as Customer</Link>
              <Link href="/auth/signin" className="border border-white/30 px-6 py-3 rounded-xl">Sign In</Link>
            </div>
          </div>

          <img
            src="/auto1.jpg"
            alt="car"
            className="w-[500px] mt-10 lg:mt-0"
          />
        </div>
      </section>

      {/* IMAGE SHOWCASE */}
      <section className="px-8 py-16 bg-[#0a0a0a]">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Connect with Garages and Mechanics Instantly</h2>
            <p className="text-white/70 mb-8 text-lg">
              Our platform bridges gap between vehicle owners, garages, and professional mechanics. Using a map-based system, customers can easily locate nearby garages or trusted mechanics in real time, no matter where they are.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <p className="text-lg font-semibold text-yellow-500 mb-2">Smart Location-Based Matching</p>
                <p className="text-white/60 text-sm">Find nearest service provider instantly. Whether it&apos;s a minor issue or an urgent repair, our platform helps you connect quickly and efficiently.</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <p className="text-lg font-semibold text-yellow-500 mb-2">Seamless Communication</p>
                <p className="text-white/60 text-sm">Reach out directly to garages and mechanics to get updates, request services, or coordinate assistance—all through a single, intuitive interface.</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <p className="text-lg font-semibold text-yellow-500 mb-2">Reliable & Convenient</p>
                <p className="text-white/60 text-sm">Eliminate hassle of searching for help during breakdowns or accidents. Our system ensures you know exactly who is nearby, ready to assist, making vehicle care faster and safer.</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <p className="text-lg font-semibold text-yellow-500 mb-2">Designed for Everyone</p>
                <p className="text-white/60 text-sm">Whether you&apos;re a car owner in need of help or a garage looking to expand your reach, our platform provides an easy-to-use, reliable system to connect and collaborate.</p>
              </div>
            </div>
          </div>
          <img
            src="/auto2.jpg"
            alt="auto service"
            className="rounded-2xl w-full h-[300px] object-cover"
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-8 py-16">
        <h2 className="text-3xl font-semibold mb-10 text-white">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Collaborate with Garages", icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0v-8a2 2 0 00-2-2H6a2 2 0 00-2 2v8m14 0h-2" /></svg>, desc: "Connect with trusted service partners" },
            { title: "Scan Location", icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, desc: "Find nearby automotive services" },
            { title: "Manage Mechanics", icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>, desc: "Easy team management for garages" }
          ].map((service) => (
            <div key={service.title} className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-2xl border border-white/10 hover:border-yellow-500/30 hover:from-white/15 hover:to-white/8 transition-all duration-300">
              <div className="text-3xl mb-3">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
              <p className="text-white/60 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LUXURY SHOWCASE */}
      <section className="px-8 py-16 bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a]">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="/auto3.jpg"
            alt="luxury automotive"
            className="rounded-2xl w-full h-[300px] object-cover"
          />
          <div>
            <h2 className="text-4xl font-bold mb-6">Digital Automotive Solutions</h2>
            <p className="text-white/70 mb-8 text-lg">
              Transforming how customers access automotive services through a seamless, user-friendly digital platform.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-8 py-16 bg-[#111]">
        <h2 className="text-3xl font-semibold mb-10 text-white">Everything You Need for Auto Service Excellence</h2>
        <p className="text-xl text-white/70 mb-12 max-w-4xl mx-auto text-center">
          Our comprehensive platform connects customers, mechanics, and service centers for seamless automotive service experiences.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Location-Based Discovery", icon: "📍", desc: "Find nearby service centers with GPS integration, real-time distance calculations, and service availability filtering." },
            { title: "Real-Time Tracking", icon: "📊", desc: "Track service progress in real-time with detailed status updates, estimated completion times, and progress notifications." },
            { title: "Secure Payments", icon: "💳", desc: "Multiple payment options including cash, card, mobile money, and insurance with secure transaction processing and payment tracking." },
            { title: "Rating & Reviews", icon: "⭐", desc: "Interactive 1-10 star rating system with detailed reviews, customer feedback management, and performance analytics." },
            { title: "Smart Notifications", icon: "🔔", desc: "Real-time notifications for service updates, appointment reminders, payment confirmations, and important announcements." },
            { title: "Analytics Dashboard", icon: "📈", desc: "Comprehensive analytics for performance tracking, business insights, customer satisfaction metrics, and growth analytics." }
          ].map((feature) => (
            <div key={feature.title} className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/60 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BUSINESS NETWORK */}
      <section className="px-8 py-16 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Business Network</h2>
          <p className="text-white/70 mb-12 text-lg">
            Partner with us and grow your automotive service business
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/auth/apply-garage"
              className="group bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-slate-600/30"
            >
              <div className="flex items-center justify-center mb-4">
                <svg className="w-10 h-10 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0v-8a2 2 0 00-2-2H6a2 2 0 00-2 2v8m14 0h-2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Register Garage</h3>
              <p className="text-white/90 mb-4">List your service center and reach thousands of customers</p>
              <div className="flex items-center justify-center text-yellow-400">
                <span>Get Started</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5-5m0 0h-2.5M7 7l5 5m0 0l-5-5m0 0H7" />
                </svg>
              </div>
            </Link>
            <Link
              href="/auth/apply-mechanic"
              className="group bg-gradient-to-r from-stone-700 to-stone-800 hover:from-stone-800 hover:to-stone-900 text-white p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-stone-600/30"
            >
              <div className="flex items-center justify-center mb-4">
                <svg className="w-10 h-10 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 2.924 0 1.756-2.924-2.924-1.756-2.924H6.675c-.896 0-1.692.692-2.924H4.23c-.896 0-1.692.692-2.924H2.187a.692.692 0 00-.493.97l-.892.892c-.305.21-.503.326-.788.326H1.5a3 3 0 00-3 3V17a2 2 0 002 2h15a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h15a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h15a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Join as Mechanic</h3>
              <p className="text-white/90 mb-4">Connect with garages and start your career</p>
              <div className="flex items-center justify-center text-yellow-400">
                <span>Apply Now</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5-5m0 0h-2.5M7 7l5 5m0 0l-5-5m0 0H7" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">AutoService</h3>
              <p className="text-white/70 mb-4">
                Connecting customers with trusted automotive service centers through innovative technology and seamless experiences.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/auth/signin" className="text-white/70 hover:text-white transition-colors">Sign In</Link></li>
                <li><Link href="/auth/register" className="text-white/70 hover:text-white transition-colors">Register</Link></li>
                <li><Link href="/auth/forgot-password" className="text-white/70 hover:text-white transition-colors">Forgot Password</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Business</h4>
              <ul className="space-y-2">
                <li><Link href="/auth/apply-garage" className="text-white/70 hover:text-white transition-colors">Register Garage</Link></li>
                <li><Link href="/auth/apply-mechanic" className="text-white/70 hover:text-white transition-colors">Join as Mechanic</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
            <p>&copy; 2024 AutoService Management Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}