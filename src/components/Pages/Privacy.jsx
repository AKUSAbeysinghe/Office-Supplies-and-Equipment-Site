import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#F9F9FB] min-h-screen py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-[#FDF2E9] text-[#D97706] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded">
            Legal
          </span>
          <h1 className="font-serif italic text-5xl md:text-6xl text-[#0F172A] leading-tight mt-6">
            Privacy Policy
          </h1>
          <p className="mt-6 text-slate-600 text-lg max-w-2xl mx-auto">
            Your trust matters to us. We are committed to protecting your privacy while delivering exceptional service.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm p-10 md:p-16 space-y-12">
          
          <section>
            <h2 className="font-serif italic text-3xl text-[#0F172A] mb-6">
              1. Information We Collect
            </h2>
            <p className="text-slate-600 leading-relaxed text-[17px]">
              We collect information to provide, improve, and personalize our services. This includes:
            </p>
            <ul className="list-disc list-inside mt-6 space-y-4 text-slate-600 text-[17px]">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and other details you provide when contacting us or placing an order.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, such as pages visited and time spent.</li>
              <li><strong>Cookies and Tracking:</strong> We use cookies to enhance your browsing experience and analyze site performance.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif italic text-3xl text-[#0F172A] mb-6">
              2. How We Use Your Information
            </h2>
            <p className="text-slate-600 leading-relaxed text-[17px]">
              We use your information for the following purposes:
            </p>
            <ul className="list-disc list-inside mt-6 space-y-4 text-slate-600 text-[17px]">
              <li>To process and fulfill your orders.</li>
              <li>To respond to your inquiries and provide customer support.</li>
              <li>To improve our website, products, and overall experience.</li>
              <li>To communicate important updates and offers (with your consent).</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif italic text-3xl text-[#0F172A] mb-6">
              3. Sharing Your Information
            </h2>
            <p className="text-slate-600 leading-relaxed text-[17px]">
              We do not sell your personal information. We may share it only with:
            </p>
            <ul className="list-disc list-inside mt-6 space-y-4 text-slate-600 text-[17px]">
              <li><strong>Trusted Service Providers:</strong> Partners who assist with order fulfillment, shipping, and website analytics.</li>
              <li><strong>Legal Authorities:</strong> When required by law or to protect our rights and safety.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif italic text-3xl text-[#0F172A] mb-6">
              4. Your Rights
            </h2>
            <p className="text-slate-600 leading-relaxed text-[17px]">
              You have the right to:
            </p>
            <ul className="list-disc list-inside mt-6 space-y-4 text-slate-600 text-[17px]">
              <li>Access the personal information we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your data (subject to legal requirements).</li>
              <li>Opt out of marketing communications.</li>
            </ul>
            <p className="mt-6 text-slate-600 text-[17px]">
              To exercise these rights, please contact us at{' '}
              <a href="mailto:privacy@moderna.com" className="text-[#D97706] hover:underline">
                privacy@moderna.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-serif italic text-3xl text-[#0F172A] mb-6">
              5. Data Security
            </h2>
            <p className="text-slate-600 leading-relaxed text-[17px]">
              We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is completely secure.
            </p>
          </section>

          <section>
            <h2 className="font-serif italic text-3xl text-[#0F172A] mb-6">
              6. Cookies
            </h2>
            <p className="text-slate-600 leading-relaxed text-[17px]">
              Our website uses cookies to improve your experience. You can manage your cookie preferences through your browser settings. For more details, please see our{' '}
              <Link to="/cookie-policy" className="text-[#D97706] hover:underline">
                Cookie Policy
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="font-serif italic text-3xl text-[#0F172A] mb-6">
              7. Changes to This Policy
            </h2>
            <p className="text-slate-600 leading-relaxed text-[17px]">
              We may update this Privacy Policy occasionally. Any changes will be posted here with an updated effective date.
            </p>
          </section>

          <section>
            <h2 className="font-serif italic text-3xl text-[#0F172A] mb-6">
              8. Contact Us
            </h2>
            <p className="text-slate-600 leading-relaxed text-[17px]">
              If you have any questions about this Privacy Policy, please reach out to us:
            </p>
            <p className="mt-6 text-slate-600 text-[17px]">
              Moderna.<br />
              [Your Company Address]<br />
              Email: <a href="mailto:privacy@moderna.com" className="text-[#D97706] hover:underline">privacy@moderna.com</a>
            </p>
          </section>

          <div className="pt-8 border-t border-gray-200 text-center">
            <p className="text-slate-500 text-sm">
              <strong>Effective Date:</strong> July 01, 2026
            </p>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center px-10 py-4 bg-[#0F172A] text-white font-medium rounded-full hover:bg-slate-800 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;