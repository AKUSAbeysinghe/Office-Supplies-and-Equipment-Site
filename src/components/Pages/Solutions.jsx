import React, { useState } from 'react';
import { Receipt, Truck, Users, Leaf } from 'lucide-react';
import SolutionImage from "../../assets/Mains/basement office.jpg";

// ====================== HERO SECTION ======================
const ModernaBusinessHero = () => {
  return (
    <section className="w-full min-h-[500px] bg-[#0d1527] text-white flex items-center justify-center p-6 md:p-12 lg:p-20">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-6">
          {/* Badge */}
          <span className="bg-[#241c15] text-[#ff7315] text-xs font-bold tracking-widest uppercase px-3 py-1 rounded">
            For Business
          </span>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-[68px] font-serif leading-[1.1] tracking-tight text-slate-100">
            Outfit your team, <br />
            <span className="italic font-normal">at any scale.</span>
          </h1>

          {/* Subtitle Paragraph */}
          <p className="text-slate-400 text-lg md:text-xl max-w-xl font-normal leading-relaxed">
            From three-person studios to global headquarters, Moderna for Business
            consolidates procurement into a single trusted partner.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4 w-full sm:w-auto">
            <button className="bg-[#ff7315] hover:bg-[#e0620f] text-white font-medium px-8 py-4 rounded-full transition-colors duration-200 shadow-md whitespace-nowrap">
              Open an Account
            </button>
            <button className="border border-slate-700 hover:border-slate-500 bg-transparent text-white font-medium px-8 py-4 rounded-full transition-colors duration-200 whitespace-nowrap">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[580px] aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={SolutionImage}
              alt="Premium office desk layout with devices"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// ====================== FEATURES SECTION ======================
const ProcurementFeatures = () => {
  const features = [
    {
      icon: <Receipt className="w-6 h-6 text-[#ff7315]" />,
      title: 'Trade Pricing',
      description: 'Volume discounts unlocked at every tier of spend.',
    },
    {
      icon: <Truck className="w-6 h-6 text-[#ff7315]" />,
      title: 'Next-Day Delivery',
      description: 'Across continental US, with white-glove for furniture.',
    },
    {
      icon: <Users className="w-6 h-6 text-[#ff7315]" />,
      title: 'Dedicated Manager',
      description: 'A single point of contact for your entire workspace.',
    },
    {
      icon: <Leaf className="w-6 h-6 text-[#ff7315]" />,
      title: 'Sustainable Procurement',
      description: 'Carbon-tracked orders and FSC-certified materials.',
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl lg:text-[42px] font-serif font-normal text-[#0d1527] mb-12 tracking-tight">
        A procurement partner, not a checkout page.
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border border-slate-100 bg-white rounded-2xl p-8 flex flex-col items-start justify-between min-h-[220px] transition-shadow duration-200 hover:shadow-sm"
          >
            {/* Icon Container */}
            <div className="mb-6">
              {feature.icon}
            </div>
            {/* Text Content */}
            <div className="flex-1 flex flex-col justify-end">
              <h3 className="text-lg font-semibold text-[#0d1527] mb-2 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-normal">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ====================== FAQ SECTION ======================
const FrequentlyAskedQuestions = () => {
  const faqs = [
    {
      question: 'Who qualifies for a business account?',
      answer: 'Any registered business with a verifiable EIN. Approval typically takes one business day.',
    },
    {
      question: 'Is there a minimum order?',
      answer: 'No minimums on consumables. Furniture orders over $5,000 qualify for white-glove installation at no charge.',
    },
    {
      question: 'Can we set up automated reordering?',
      answer: "Yes — pick a cadence per SKU and we'll deliver on schedule with adjustable thresholds.",
    },
    {
      question: 'Do you offer net-30 invoicing?',
      answer: 'Net-30 and net-60 terms are available after a short underwriting review.',
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
      {/* Section Title */}
      <h2 className="text-4xl md:text-[42px] font-serif font-normal text-[#0d1527] mb-16 tracking-tight">
        Frequently asked
      </h2>

      {/* FAQ List Container */}
      <div className="flex flex-col">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="py-8 first:pt-0 border-b border-slate-200 last:border-b-0"
          >
            {/* Question */}
            <h3 className="text-lg font-bold text-[#0d1527] mb-3 tracking-tight">
              {faq.question}
            </h3>

            {/* Answer */}
            <p className="text-slate-500 text-base font-normal leading-relaxed max-w-4xl">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

// ====================== CONTACT FORM SECTION ======================
const ProcurementContactForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    workEmail: '',
    teamSize: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add your actual submission logic here (API call, etc.)
    alert('Thank you! A specialist will reach out soon.');
  };

  return (
    <section className="w-full bg-white py-12 px-4 md:px-12 lg:px-20 max-w-7xl mx-auto">
      {/* Dark Main Container */}
      <div className="w-full bg-[#0d1527] rounded-[32px] p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Typography & Links */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-12 lg:space-y-24">
          <div className="space-y-4">
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-serif font-normal text-white tracking-tight">
              Let's talk procurement.
            </h2>
            {/* Subtitle */}
            <p className="text-slate-400 text-base md:text-lg font-normal leading-relaxed max-w-md">
              Share a few details about your team and a specialist will reach out within one business day.
            </p>
          </div>

          {/* Footer Navigation Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm md:text-base">
            <span className="text-slate-500 font-normal">Prefer to browse?</span>
            <a href="#furniture" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1 font-normal">
              Furniture <span className="text-xs">→</span>
            </a>
            <a href="#tech" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1 font-normal">
              Tech <span className="text-xs">→</span>
            </a>
            <a href="#writing" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1 font-normal">
              Writing <span className="text-xs">→</span>
            </a>
          </div>
        </div>

        {/* Right Column: Form Inputs */}
        <div className="lg:col-span-6 w-full max-w-lg lg:ml-auto">
          <form onSubmit={handleSubmit} className="space-y-4 flex flex-col items-start">
            {/* Company Name Input */}
            <input
              type="text"
              name="companyName"
              placeholder="Company name"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full bg-[#1b253b] text-white placeholder-slate-500 rounded-full px-6 py-4 outline-none border border-transparent focus:border-slate-700 transition-colors duration-200 text-base font-normal"
              required
            />

            {/* Work Email Input */}
            <input
              type="email"
              name="workEmail"
              placeholder="Work email"
              value={formData.workEmail}
              onChange={handleChange}
              className="w-full bg-[#1b253b] text-white placeholder-slate-500 rounded-full px-6 py-4 outline-none border border-transparent focus:border-slate-700 transition-colors duration-200 text-base font-normal"
              required
            />

            {/* Team Size Input */}
            <input
              type="text"
              name="teamSize"
              placeholder="Team size"
              value={formData.teamSize}
              onChange={handleChange}
              className="w-full bg-[#1b253b] text-white placeholder-slate-500 rounded-full px-6 py-4 outline-none border border-transparent focus:border-slate-700 transition-colors duration-200 text-base font-normal"
              required
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-2 bg-[#ff7315] hover:bg-[#e0620f] text-white font-medium px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-colors duration-200 shadow-md whitespace-nowrap"
            >
              Request access
              <span className="text-sm font-bold">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// ====================== MAIN PAGE COMPONENT ======================
const ModernaBusinessPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <ModernaBusinessHero />
      <ProcurementFeatures />
      <FrequentlyAskedQuestions />
      <ProcurementContactForm />
    </div>
  );
};

export default ModernaBusinessPage;