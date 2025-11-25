import Link from 'next/link';
import Image from 'next/image';
import RegistrationForm from './RegistrationForm';

export default function AARVAM25Page() {
  // Inline data: no external fetch
  const data = {
    tagline: 'Curiosity → Connection → Creation',
    description:
      "Karur's premier 24‑hour student design challenge with mentorship, competition, and real‑world opportunities.",
    location: 'Karur',
    pricePerHeadINR: 750,
    teamSize: 5,
    enrolledTeams: 130,
    registrationWindowDaysLeft: 16,
    progressPct: 75,
    schedule: [
      { label: 'Bootcamp', date: '2025-11-08', endDate: '2025-11-12' },
      { label: 'Problem Statements Release', date: '2025-11-15' },
      { label: 'Hack Start', date: '2025-11-17' },
      { label: 'Hack End', date: '2025-11-18' },
    ],
    mentors: [
      { name: 'Nishok S', role: 'CMO of Nipk Technology', image: 'https://res.cloudinary.com/ddpbtvesl/image/upload/v1763894038/Rectangle_1127_fbaiyd.png' },
      { name: 'Prashanth M', role: 'CEO of Nipk Technology', image: 'https://res.cloudinary.com/ddpbtvesl/image/upload/v1763894103/Rectangle_1128_nrf78r.png' },
      { name: 'Dinesh M', role: 'Full Stack developer', image: 'https://res.cloudinary.com/ddpbtvesl/image/upload/v1763894038/Rectangle_1129_zeru9b.png' },
      { name: 'Shyam Prasath S', role: 'Graphical Designer', image: 'https://res.cloudinary.com/ddpbtvesl/image/upload/v1763894039/Rectangle_1130_swqq9i.png' },
      { name: 'Nitheesh kumar S', role: '3D generalist', image: 'https://res.cloudinary.com/ddpbtvesl/image/upload/v1763894039/Rectangle_1131_tpuunt.png' },
      { name: 'Aravind', role: 'CEO of Sequonce', image: 'https://res.cloudinary.com/ddpbtvesl/image/upload/v1763894039/Rectangle_1132_vddjaj.png' },
    ],
    judges: [
      { name: 'Naveen Kumar', role: 'SDE II', image: 'https://res.cloudinary.com/ddpbtvesl/image/upload/v1763923428/Rectangle_1139_dpsgq5.png' },
      { name: 'Ajith Selvaraju', role: 'Founder & CEO N Kisi', image: 'https://res.cloudinary.com/ddpbtvesl/image/upload/v1763923428/Rectangle_1149_gyxfsr.png' },
      { name: 'Dr. M. Ramkumar', role: 'HOD-CSEB, KIOT', image: 'https://res.cloudinary.com/ddpbtvesl/image/upload/v1763923428/Rectangle_1140_qukqcn.png' },
      { name: 'A. Sekar', role: 'Head - Incubation, KIOT', image: 'https://res.cloudinary.com/ddpbtvesl/image/upload/v1763923428/Rectangle_1142_vsapnq.png' },
      { name: 'Saravanan', role: 'Human Resource', image: 'https://res.cloudinary.com/ddpbtvesl/image/upload/v1763923428/Rectangle_1143_lhzfea.png' },
    ],
  };

  const mentors = data.mentors;
  const judges = data.judges;

  return (
    <div className="bg-[#0B111D] text-white w-full">

      {/* ================= HEADER ================= */}
      <header className="w-full bg-[#0B111D]/80 backdrop-blur border-b border-white/10 fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">

          <a href="/" className="flex items-center gap-3">
            <Image 
              src="https://res.cloudinary.com/ddpbtvesl/image/upload/v1764093372/Group_333_wictko.png" 
              alt="AARVAM '25" 
              width={120} 
              height={40} 
              className="h-10 w-auto"
            />
          </a>

          <nav className="hidden md:flex gap-8 text-sm text-slate-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#learnthon" className="hover:text-white">Learnthon</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#mentors" className="hover:text-white">Mentors</a>
            <a href="#judges" className="hover:text-white">Judges</a>
            <a href="#prizes" className="hover:text-white">Prizes</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>

          <a
            href="#registration"
            className="px-5 py-2 bg-orange-600 hover:bg-orange-500 rounded-xl text-sm font-semibold shadow-orange-500/20 shadow"
          >
            Register
          </a>

        </div>
      </header>

      {/* ================= MAIN CONTENT ================= */}
      <div className="pt-28">
        <div className="mx-auto max-w-7xl px-6 py-16 space-y-32">

          {/* ================= HERO ================= */}
          <section id="hero" className="grid gap-14 lg:grid-cols-2 items-start">
            <div className="space-y-7">
              <div className="inline-flex rounded-xl border border-orange-500/20 bg-orange-500/5 px-5 py-2 text-sm font-medium tracking-wide text-orange-400">
                24–Hour Design Challenge
              </div>

              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                <span className="block">AARVAM '25</span>
                <span className="block text-orange-500">Designathon</span>
              </h1>

              <p className="text-lg leading-relaxed text-slate-300 max-w-prose">
                {data.tagline} — {data.description}
              </p>

              <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-200">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-4 py-1">
                  👥 Team Size: {data.teamSize}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-4 py-1">
                  📍 {data.location}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-4 py-1">
                  💰 ₹{data.pricePerHeadINR}/head
                </span>
              </div>

              <div className="flex flex-wrap gap-4 pt-3">
                <a href="#registration" className="rounded-xl bg-orange-600 hover:bg-orange-500 px-8 py-5 text-base font-semibold shadow-sm shadow-orange-600/30 transition">
                  Register Now — ₹{data.pricePerHeadINR }/Head
                </a>
                <a href="#learnthon" className="rounded-xl bg-white/10 hover:bg-white/15 px-8 py-5 text-base font-semibold transition">
                  Learnthon Info
                </a>
              </div>

              <div className="flex flex-wrap gap-10 pt-4 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2">
                  👥 {data.teamSize} Members/Team (Fixed)
                </span>
                <span className="inline-flex items-center gap-2">
                  🗓️ 20 Dec – 21 Dec 2025
                </span>
              </div>
            </div>

            {/* RIGHT SIDE — Registration Stats */}
            <div className="space-y-8">
              {/* Live Registration */}
              <div className="rounded-3xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur border border-white/10 p-8 flex flex-col gap-6 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">

                <div className="flex items-start justify-between">
                  <h2 className="text-2xl font-bold">Live Registration</h2>
                  <span className="h-3 w-3 rounded-full bg-green-500 shadow-[0_0_8px_2px_rgba(34,197,94,0.6)]"></span>
                </div>

                <div className="text-6xl font-extrabold text-orange-500">
                  {data.enrolledTeams}
                </div>

                <p className="text-slate-300 text-sm">Teams registered and counting</p>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Registration Window</span>
                    <span>{data.registrationWindowDaysLeft} days left</span>
                  </div>

                  <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-orange-500" style={{ width: `${data.progressPct}%` }} />
                  </div>
                </div>
              </div>

              {/* Updates */}
              <div className="rounded-3xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur border border-white/10 p-8 flex flex-col gap-5 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">

                <h2 className="text-xl font-bold flex items-center gap-2">• Live Updates</h2>

                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✔</span> Registration open — secure your spot!
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✔</span> Learnthon bootcamp: 8th to 12th
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">⏱</span> Problem statements release: 16th
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ABOUT */}
          <section id="about" className="space-y-10">
            <div className="space-y-4 text-center">
              <h2 className="text-4xl font-extrabold">About the Event</h2>
              <div className="h-1 w-24 bg-orange-500 rounded mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Left Column - Description */}
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-slate-300">
                  AARVAM '25 is a transformative 24-hour design challenge that brings together college students for an immersive journey from learning to creation. Experience a unique blend of education, competition, and real-world opportunity.
                </p>

                <p className="text-base leading-relaxed text-slate-300">
                  Through our comprehensive Learnthon bootcamp and intense onsite challenge, participants gain hands-on experience with UI/UX design principles while competing for internships and prizes.
                </p>

                <a href="#registration" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold text-base">
                  Join the challenge <span>↗</span>
                </a>
              </div>

              {/* Right Column - Info Cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-3">
                  <div className="text-2xl">📅</div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-bold text-white">Dates</h3>
                    <p className="text-xs text-slate-400">20 Dec - 21 Dec</p>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-3">
                  <div className="text-2xl">📍</div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-bold text-white">Venue</h3>
                    <p className="text-xs text-slate-400">Karur Branch</p>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-3">
                  <div className="text-2xl">👥</div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-bold text-white">Team Size</h3>
                    <p className="text-xs text-slate-400">5 Members</p>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-3">
                  <div className="text-2xl">🎖️</div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-bold text-white">Fee</h3>
                    <p className="text-xs text-slate-400">₹750/head</p>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* LEARNTHON */}
          <section id="learnthon" className="space-y-10">
            <div className="space-y-3 text-center">
              <h2 className="text-4xl font-extrabold">UI & UX <span className="text-orange-500">Learnthon</span></h2>
              <p className="text-slate-400 font-medium">Dec 8th to 12th — Live + Recorded</p>
            </div>

            <div className="rounded-3xl border-4 border-blue-400 bg-[#0B111D] p-8 md:p-12 space-y-8">
              
              <div className="flex flex-col items-center gap-3 text-center">
                <span className="text-4xl">📖</span>
                <h3 className="text-2xl font-bold text-white">Comprehensive Bootcamp</h3>
              </div>

              <p className="text-base leading-relaxed text-slate-300 text-center max-w-prose mx-auto">Master the fundamentals of UI/UX design through our intensive bootcamp. Learn from industry experts and complete hands-on projects to earn your Learnthon certificate.</p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-lg bg-white/10 border-2 border-orange-400 p-4 space-y-2">
                  <div className="text-xs font-bold text-white uppercase tracking-wide">Understanding Basics</div>
                  <ul className="text-xs text-slate-300 space-y-1">
                    <li>• What is UI & UX</li>
                    <li>• Design thinking</li>
                    <li>• User-centered design</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-white/10 border-2 border-orange-400 p-4 space-y-2">
                  <div className="text-xs font-bold text-white uppercase tracking-wide">Foundations of Research</div>
                  <ul className="text-xs text-slate-300 space-y-1">
                    <li>• User research</li>
                    <li>• Competitor analysis</li>
                    <li>• Creating user personas</li>
                    <li>• User journey mapping</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-white/10 border-2 border-orange-400 p-4 space-y-2">
                  <div className="text-xs font-bold text-white uppercase tracking-wide">UI Design</div>
                  <ul className="text-xs text-slate-300 space-y-1">
                    <li>• Color theory</li>
                    <li>• Typography</li>
                    <li>• Iconography</li>
                    <li>• Design systems</li>
                    <li>• Mockups</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-white/10 border-2 border-orange-400 p-4 space-y-2">
                  <div className="text-xs font-bold text-white uppercase tracking-wide">Prototyping</div>
                  <ul className="text-xs text-slate-300 space-y-1">
                    <li>• Interactive prototypes</li>
                    <li>• Micro-interactions</li>
                    <li>• Figma / Adobe XD</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-white/10 border-2 border-orange-400 p-4 space-y-2">
                  <div className="text-xs font-bold text-white uppercase tracking-wide">Wireframing</div>
                  <ul className="text-xs text-slate-300 space-y-1">
                    <li>• Low-fidelity sketches</li>
                    <li>• Information architecture</li>
                    <li>• Layout planning</li>
                    <li>• User flows</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-white/10 border-2 border-orange-400 p-4 space-y-2">
                  <div className="text-xs font-bold text-white uppercase tracking-wide">Usability Testing</div>
                  <ul className="text-xs text-slate-300 space-y-1">
                    <li>• Testing with users</li>
                    <li>• Identifying issues</li>
                    <li>• Iteration & refinement</li>
                  </ul>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent my-8" />

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white text-center">Benefits</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-lg bg-white/10 border-2 border-orange-400 p-4 space-y-2">
                    <div className="text-xl">🎯</div>
                    <div className="text-xs font-bold text-white">Strong Foundations</div>
                    <p className="text-xs text-slate-300">Build clear UI/UX basics before the main Designathon.</p>
                  </div>

                  <div className="rounded-lg bg-white/10 border-2 border-orange-400 p-4 space-y-2">
                    <div className="text-xl">🧠</div>
                    <div className="text-xs font-bold text-white">Problem-Solving Clarity</div>
                    <p className="text-xs text-slate-300">Learn research, analysis, and user needs understanding.</p>
                  </div>

                  <div className="rounded-lg bg-white/10 border-2 border-orange-400 p-4 space-y-2">
                    <div className="text-xl">💪</div>
                    <div className="text-xs font-bold text-white">Design Confidence</div>
                    <p className="text-xs text-slate-300">Master wireframing, layout planning, and Figma tools.</p>
                  </div>

                  <div className="rounded-lg bg-white/10 border-2 border-orange-400 p-4 space-y-2">
                    <div className="text-xl">🏭</div>
                    <div className="text-xs font-bold text-white">Industry Workflow</div>
                    <p className="text-xs text-slate-300">Work like real designers with structured processes.</p>
                  </div>

                  <div className="rounded-lg bg-white/10 border-2 border-orange-400 p-4 space-y-2">
                    <div className="text-xl">🏆</div>
                    <div className="text-xs font-bold text-white">Grand Finale Access</div>
                    <p className="text-xs text-slate-300">Certificate grants access to the Grand Finale round.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-red-500/20 border-2 border-red-400 p-6">
                <div className="font-bold text-red-200 mb-2">Certificate Requirement</div>
                <p className="text-sm text-slate-300">Complete the Capstone Project to unlock your Learnthon Certificate – a proof of your skills, consistency, and dedication, and a powerful addition to your design portfolio.</p>
              </div>

              <div className="flex justify-center">
                <a href="#registration" className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-8 py-3 text-sm font-bold border-2 border-slate-900 hover:bg-slate-100 transition">
                  Enroll with Team Registration
                </a>
              </div>
            </div>
          </section>

          {/* PROCESS */}
          <section id="process" className="space-y-16">
            <div className="space-y-4 text-center">
              <h2 className="text-4xl font-extrabold">Process & Timeline</h2>
              <div className="h-1 w-32 bg-orange-500 rounded mx-auto" />
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline center line */}
              <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500/0 via-orange-500 to-orange-500/0" />

              <div className="space-y-0">
                {/* Registration Phase - Left */}
                <div className="grid grid-cols-2 gap-8 items-start pb-12">
                  <div className="rounded-2xl border-2 border-orange-400 bg-white/5 p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-orange-400 font-bold text-2xl">🗓️</span>
                      <h3 className="text-base font-bold text-orange-400">Registration Phase (Nov 17–3 Dec)</h3>
                    </div>
                    <p className="text-sm text-slate-300">Teams of 5 register through the official link and complete payment. After confirmation, teams receive instructions and Learnthon access details.</p>
                  </div>
                  <div className="flex justify-start">
                    <div className="w-4 h-4 rounded-full bg-orange-500 ring-4 ring-orange-500/30 translate-x-[-1.5rem] translate-y-6" />
                  </div>
                </div>

                {/* Registration Closes - Right */}
                <div className="grid grid-cols-2 gap-8 items-start pb-12">
                  <div className="flex justify-end">
                    <div className="w-4 h-4 rounded-full bg-orange-500 ring-4 ring-orange-500/30 translate-x-[1.5rem] translate-y-6" />
                  </div>
                  <div className="rounded-2xl border-2 border-orange-400 bg-white/5 p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-orange-400 font-bold text-2xl">⏱️</span>
                      <h3 className="text-base font-bold text-orange-400">Registration Closes (3 Dec)</h3>
                    </div>
                    <p className="text-sm text-slate-300">Last chance to register. After this date, no new registrations will be accepted.</p>
                  </div>
                </div>

                {/* Learnthon Week - Left */}
                <div className="grid grid-cols-2 gap-8 items-start pb-12">
                  <div className="rounded-2xl border-2 border-orange-400 bg-white/5 p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-orange-400 font-bold text-2xl">📚</span>
                      <h3 className="text-base font-bold text-orange-400">Learnthon Week (8–12 Dec)</h3>
                    </div>
                    <p className="text-sm text-slate-300">A 5-day UI/UX Learnthon covers design basics, research, wireframes, and Figma essentials. This ensures every team enters the Designathon with strong fundamentals.</p>
                  </div>
                  <div className="flex justify-start">
                    <div className="w-4 h-4 rounded-full bg-orange-500 ring-4 ring-orange-500/30 translate-x-[-1.5rem] translate-y-6" />
                  </div>
                </div>

                {/* Problem Statement Reveal - Right */}
                <div className="grid grid-cols-2 gap-8 items-start pb-12">
                  <div className="flex justify-end">
                    <div className="w-4 h-4 rounded-full bg-orange-500 ring-4 ring-orange-500/30 translate-x-[1.5rem] translate-y-6" />
                  </div>
                  <div className="rounded-2xl border-2 border-orange-400 bg-white/5 p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-orange-400 font-bold text-2xl">📋</span>
                      <h3 className="text-base font-bold text-orange-400">Problem Statement (Dec 16)</h3>
                    </div>
                    <p className="text-sm text-slate-300">On 16th morning, teams receive five real-world problem statements. Each team selects one and begins research, ideation, and planning.</p>
                  </div>
                </div>

                {/* 24–Hour Design Sprint - Left */}
                <div className="grid grid-cols-2 gap-8 items-start pb-12">
                  <div className="rounded-2xl border-2 border-orange-400 bg-white/5 p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-orange-400 font-bold text-2xl">⚡</span>
                      <h3 className="text-base font-bold text-orange-400">24 Hours Design Sprint (Dec 20–21)</h3>
                    </div>
                    <p className="text-sm text-slate-300">Teams work for 24 hours to research, design, prototype, and prepare their final slides.This sprint tests creativity, teamwork, and time management.</p>
                  </div>
                  <div className="flex justify-start">
                    <div className="w-4 h-4 rounded-full bg-orange-500 ring-4 ring-orange-500/30 translate-x-[-1.5rem] translate-y-6" />
                  </div>
                </div>

                {/* Mentorship & Review Sessions - Right */}
                <div className="grid grid-cols-2 gap-8 items-start pb-12">
                  <div className="flex justify-end">
                    <div className="w-4 h-4 rounded-full bg-orange-500 ring-4 ring-orange-500/30 translate-x-[1.5rem] translate-y-6" />
                  </div>
                  <div className="rounded-2xl border-2 border-orange-400 bg-white/5 p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-orange-400 font-bold text-2xl">👥</span>
                      <h3 className="text-base font-bold text-orange-400">Mentorship Sessions</h3>
                    </div>
                    <p className="text-sm text-slate-300">Industry mentors guide teams with feedback and help refine ideas. These reviews ensure teams stay aligned with the problem statement.</p>
                  </div>
                </div>

                {/* Submission & Jury Evaluation - Left */}
                <div className="grid grid-cols-2 gap-8 items-start">
                  <div className="rounded-2xl border-2 border-orange-400 bg-white/5 p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-orange-400 font-bold text-2xl">🏆</span>
                      <h3 className="text-base font-bold text-orange-400">Submission & Evaluation</h3>
                    </div>
                    <p className="text-sm text-slate-300">Teams submit their final designs, prototype link, and presentation deck before the deadline. The jury reviews all submissions and scores teams based on clarity, creativity, design quality, and overall execution.</p>
                  </div>
                  <div className="flex justify-start">
                    <div className="w-4 h-4 rounded-full bg-orange-500 ring-4 ring-orange-500/30 translate-x-[-1.5rem] translate-y-6" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* MENTORS */}
          <section id="mentors" className="space-y-10">
            <div className="space-y-3">
              <h2 className="text-4xl font-extrabold">Our Mentors</h2>
              <p className="text-slate-400 text-sm">Learn from industry experts</p>
              <div className="h-1 w-24 bg-orange-500 rounded" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4">
              {mentors.map((m) => (
                <div key={m.name} className="group rounded-xl border border-white/10 bg-white/5 flex flex-col">
                  <div className="w-full flex items-center justify-center bg-[#0B111D] p-3">
                    {m.image ? (
                      <Image
                        src={m.image}
                        alt={m.name}
                        width={152} // 76*2 for sharper display
                        height={228} // 114*2 maintaining aspect ratio
                        className="rounded-md object-contain max-h-56 transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="h-40 w-24 flex items-center justify-center rounded-md bg-orange-600 text-white text-xl font-bold">
                        {m.name[0]}
                      </div>
                    )}
                  </div>
                  <div className="px-4 pb-4 space-y-1">
                    <div className="text-sm font-semibold text-slate-200 truncate">{m.name}</div>
                    <div className="text-xs text-slate-400 leading-snug line-clamp-2">{m.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* JUDGES */}
          <section id="judges" className="space-y-10">
            <div className="space-y-3">
              <h2 className="text-4xl font-extrabold">Our Judges</h2>
              <p className="text-slate-400 text-sm">Evaluated by distinguished professionals</p>
              <div className="h-1 w-24 bg-orange-500 rounded" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4">
              {judges.map((j) => (
                <div key={j.name} className="group rounded-xl border border-white/10 bg-white/5 flex flex-col">
                  <div className="w-full flex items-center justify-center bg-[#0B111D] p-3">
                    {j.image ? (
                      <Image
                        src={j.image}
                        alt={j.name}
                        width={152}
                        height={228}
                        className="rounded-md object-contain max-h-56 transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="h-40 w-24 flex items-center justify-center rounded-md bg-indigo-600 text-white text-xl font-bold">
                        {j.name[0]}
                      </div>
                    )}
                  </div>
                  <div className="px-4 pb-4 space-y-1">
                    <div className="text-sm font-semibold text-slate-200 truncate">{j.name}</div>
                    <div className="text-xs text-slate-400 leading-snug line-clamp-2">{j.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>


          {/* PRIZES */}
          <section id="prizes" className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-extrabold">Prizes & Rewards</h2>
              <div className="h-1 w-24 bg-orange-500 rounded" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-orange-600/30 to-orange-500/10 p-8 flex flex-col gap-3">
                <span className="text-sm font-semibold bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full w-fit">
                  Winner
                </span>
                <div className="text-4xl font-extrabold">₹10,000</div>
                <ul className="text-xs text-slate-300 space-y-1">
                  <li>• Cash Prize: ₹10,000</li>
                  <li>• Cybernaut Internship — 6 months</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-600/30 to-indigo-500/10 p-8 flex flex-col gap-3">
                <span className="text-sm font-semibold bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full w-fit">
                  Runner-up
                </span>
                <div className="text-4xl font-extrabold">₹5,000</div>
                <ul className="text-xs text-slate-300 space-y-1">
                  <li>• Cash Prize: ₹5,000</li>
                  <li>• Cybernaut Internship — 3 months</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-5 gap-4 text-xs">
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">Special Awards</div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">Cybernaut Kit</div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">Certificates</div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">Food Included</div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                Category-specific recognition
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl font-extrabold">Terms & Conditions</h2>
              <div className="h-1 w-24 bg-orange-500 rounded" />
            </div>

            <div className="space-y-10 text-sm text-slate-300 leading-relaxed">
              <p>
                <span className="font-bold text-orange-300">No Refund Policy:</span>{" "}
                All registration fees are strictly non-refundable under any circumstance.
              </p>

              <p>
                <span className="font-bold text-orange-300">Team Requirement:</span>{" "}
                Participation is allowed only for teams consisting of exactly five members.
                Teams with fewer members will not be permitted.
              </p>

              <p>
                <span className="font-bold text-orange-300">Learnthon Completion:</span>{" "}
                Participants must either attend the Learnthon sessions or watch the recordings
                and submit their prototype in order to receive the Learnthon Certificate and 
                the Grand Finale Entry Pass.
              </p>

              <p>
                <span className="font-bold text-orange-300">Mandatory On-Site Presence:</span>{" "}
                All five members of the team are required to be physically present at the venue 
                for the entire 24-hour Grand Finale event.
              </p>

              <p>
                <span className="font-bold text-orange-300">ID Verification:</span>{" "}
                Every participant must bring a valid college ID card along with their Grand Finale Ticket Pass.
              </p>

              <p>
                <span className="font-bold text-orange-300">Original Work:</span>{" "}
                All ideas, designs, prototypes, and final submissions must be original 
                and created during the event period. Plagiarism will lead to disqualification.
              </p>

              <p>
                <span className="font-bold text-orange-300">Event Checkpoints:</span>{" "}
                Teams are expected to attend all checkpoints and judging rounds 
                to remain eligible for evaluation and final prizes.
              </p>

              <p>
                <span className="font-bold text-orange-300">Bring Your Own Devices:</span>{" "}
                Participants must bring their own laptops, chargers, and any required tools 
                needed for their project.
              </p>

              <p>
                <span className="font-bold text-orange-300">Code of Conduct:</span>{" "}
                Any form of misconduct, harassment, or violation of event rules will result 
                in immediate disqualification and removal from the venue.
              </p>

              <p>
                <span className="font-bold text-orange-300">Final Authority:</span>{" "}
                All decisions made by Cybernaut EdTech regarding judging, rules, 
                and event management are final and binding on all participants.
              </p>
            </div>
          </section> 


          {/* REGISTRATION */}
          <section id="registration" className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl font-extrabold">Team Registration</h2>
              <div className="h-1 w-24 bg-orange-500 rounded" />
            </div>

            <p className="text-sm text-slate-300 max-w-prose">
              Enter accurate details. Confirmation & instructions will be sent
              to the captain email.
            </p>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <RegistrationForm />
            </div>

            <div className="text-xs text-slate-500 -mt-3">
              By registering, you agree to onsite conduct and originality rules.
            </div>
          </section>

          <Link href="/Events" className="text-sm text-orange-400 hover:underline -mt-6 block">
            ← Back to Events
          </Link>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#060A14] border-t border-white/10 text-white mt-32">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-orange-600 rounded-xl flex items-center justify-center font-bold">A</div>
              <span className="text-lg font-semibold">AARVAM '25</span>
            </div>
            <p className="text-sm text-slate-400">Curiosity → Connection → Creation</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-slate-200">Contact</h3>
            <p className="text-sm text-slate-400">📍 Cybernaut Edtech, Karur Branch</p>
            <p className="text-sm text-slate-400">📞 6382055035</p>
            <p className="text-sm text-slate-400">📧 support@cybernaut.co.in</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-slate-200">Navigation</h3>
            <p className="text-sm text-slate-400"><a href="#about">About</a></p>
            <p className="text-sm text-slate-400"><a href="#learnthon">Learnthon</a></p>
            <p className="text-sm text-slate-400"><a href="#process">Process</a></p>
            <p className="text-sm text-slate-400"><a href="#registration">Register</a></p>
          </div>

        </div>
      </footer>
    </div>
  );
}
