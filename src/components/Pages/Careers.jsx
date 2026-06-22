import React from 'react';

const openPositions = [
  {
    title: "Senior Product Designer",
    department: "Design",
    location: "Mumbai • Full-time",
    type: "Full Time"
  },
  {
    title: "E-commerce Marketing Manager",
    department: "Marketing",
    location: "Remote • Full-time",
    type: "Full Time"
  },
  {
    title: "Customer Experience Specialist",
    department: "Operations",
    location: "Mumbai • Hybrid",
    type: "Full Time"
  },
  {
    title: "Content Writer (Lifestyle & Design)",
    department: "Marketing",
    location: "Remote",
    type: "Contract"
  }
];

export default function CareersPage() {
  return (
    <div className="bg-[#F9F9FB] min-h-screen">
      {/* Hero Header */}
      <section className="pt-24 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <span className="bg-[#FDF2E9] text-[#D97706] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded">
            Join the Movement
          </span>
          
          <h1 className="font-serif italic text-5xl md:text-6xl lg:text-7xl text-[#0F172A] leading-[1.05] mt-6">
            Build the future<br />of beautiful work.
          </h1>
          
          <p className="mt-8 text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">
            We're looking for passionate people who believe good design can change how we work.
          </p>
        </div>
      </section>

      {/* Values / Why Us */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Design Obsessed", desc: "Every detail matters. We obsess over beauty and functionality." },
            { title: "Human Centered", desc: "We put people first — both our customers and our team." },
            { title: "Grow Boldly", desc: "Big ownership, fast learning, and meaningful impact from day one." }
          ].map((value, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl">
              <div className="text-4xl mb-4">0{i+1}</div>
              <h3 className="text-2xl font-semibold text-[#0F172A] mb-3">{value.title}</h3>
              <p className="text-slate-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-serif italic text-4xl md:text-5xl text-[#0F172A]">
              Open Roles
            </h2>
            <p className="text-slate-500">We’re growing — join us.</p>
          </div>

          <div className="space-y-6">
            {openPositions.map((job, index) => (
              <div 
                key={index}
                className="group flex flex-col md:flex-row md:items-center justify-between bg-[#F9F9FB] hover:bg-white border border-transparent hover:border-slate-100 p-8 md:p-10 rounded-3xl transition-all duration-300"
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-medium text-[#0F172A] group-hover:text-slate-900 transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-slate-500 mt-2">
                    {job.department} • {job.location}
                  </p>
                </div>
                
                <div className="flex items-center gap-6 mt-6 md:mt-0">
                  <span className="text-sm px-4 py-2 bg-white rounded-full border border-slate-200">
                    {job.type}
                  </span>
                  <a 
                    href="#apply"
                    className="font-medium flex items-center gap-2 text-slate-700 hover:text-[#0F172A] transition-colors"
                  >
                    Apply Now →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* No openings note */}
          <div className="text-center mt-16 text-slate-500">
            Don't see your role? We're always looking for great people.<br />
            Send us your resume at <a href="mailto:careers@moderna.com" className="text-[#0F172A] hover:underline">careers@moderna.com</a>
          </div>
        </div>
      </section>

      {/* Culture / Perks */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24">
        <div className="text-center mb-16">
          <h2 className="font-serif italic text-4xl md:text-5xl text-[#0F172A]">
            What you can expect
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            "Competitive salary & equity",
            "Premium health insurance",
            "Flexible work hours",
            "Learning & growth budget",
            "Beautiful studio environment",
            "Quarterly team offsites",
            "Top-tier equipment setup",
            "Unlimited coffee & snacks"
          ].map((perk, i) => (
            <div key={i} className="flex items-start gap-4 bg-white p-8 rounded-3xl">
              <div className="text-2xl mt-1">✦</div>
              <p className="text-lg text-slate-700">{perk}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-24">
        <div className="bg-[#0F172A] text-white rounded-3xl p-12 md:p-20 text-center">
          <h2 className="font-serif italic text-4xl md:text-5xl leading-tight">
            Ready to design a better way of working?
          </h2>
          <p className="mt-6 text-slate-300 max-w-md mx-auto">
            Send your resume and a short note about why you want to join Moderna.
          </p>
          
          <a 
            href="mailto:careers@moderna.com"
            className="mt-10 inline-block bg-white text-[#0F172A] font-medium px-10 py-4 rounded-full hover:bg-slate-100 transition-colors"
          >
            Apply via Email
          </a>
        </div>
      </section>
    </div>
  );
}