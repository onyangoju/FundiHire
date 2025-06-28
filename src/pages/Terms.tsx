const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-red-100 to-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-extrabold text-red-700 mb-6 text-center drop-shadow">
        Terms and Conditions
      </h1>

      <div className="text-lg text-red-800 max-w-3xl text-justify space-y-8 leading-relaxed">
        <p>
          <strong className="text-red-600 italic">📜 Terms and Conditions</strong><br />
          Last Updated: <span className="font-semibold">27/06/2025</span>
        </p>

        <p>
          By accessing or using our platform, you <span className="font-semibold">agree</span> to these terms. Please read them <span className="underline">carefully</span>. Violating them may result in immediate account action.
        </p>

        <p><strong className="text-red-600">1. Introduction</strong><br />
          This platform connects users with verified fundis for home services. These Terms apply to all users — clients and providers alike.
        </p>

        <p><strong className="text-red-600">2. Eligibility</strong><br />
          You must be 18+ and legally capable of entering contracts to use this platform.
        </p>

        <p><strong className="text-red-600">3. Service Listings</strong><br />
          Providers are solely responsible for accurate listings. Misleading details may lead to suspension.
        </p>

        <div>
          <p><strong className="text-red-600">4. Bookings & Payments</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li>All bookings must go through our platform or its WhatsApp integration.</li>
            <li>Payment terms must be clear — upfront, post-service, etc.</li>
            <li>We’re not liable for issues with third-party payments unless handled via our system.</li>
          </ul>
        </div>

        <div>
          <p><strong className="text-red-600">5. User Conduct</strong></p>
          <p>You agree <span className="italic">not to:</span></p>
          <ul className="list-disc list-inside space-y-1">
            <li>Engage in illegal, abusive, or misleading behavior.</li>
            <li>Impersonate others or misrepresent services.</li>
            <li>Harass, threaten, or spam other users.</li>
          </ul>
          <p className="mt-2">Violations may lead to permanent removal without notice.</p>
        </div>

        <p><strong className="text-red-600">6. Ratings & Reviews</strong><br />
          Keep reviews honest and respectful. We reserve the right to remove fake or abusive feedback.
        </p>

        <p><strong className="text-red-600">7. WhatsApp Integration</strong><br />
          You consent to receive messages regarding your activity on the platform, unless you opt out.
        </p>

        <div>
          <p><strong className="text-red-600">8. Limitation of Liability</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li>We are not responsible for service completion or quality.</li>
            <li>We are not liable for delays, damages, or disputes outside our system.</li>
          </ul>
          <p>We do take user feedback seriously and may act on repeat offenders.</p>
        </div>

        <p><strong className="text-red-600">9. Account Termination</strong><br />
          We reserve the right to ban users who violate these terms or harm the platform's integrity.
        </p>

        <p><strong className="text-red-600">10. Privacy</strong><br />
          Your data is protected per our <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a>. We don’t share data without your consent — unless required by law.
        </p>

        <p><strong className="text-red-600">11. Changes to Terms</strong><br />
          We may revise these Terms at any time. Continued use after updates means you accept them.
        </p>

        <p><strong className="text-red-600">12. Contact Us</strong><br />
          Questions? Reach us at <a href="mailto:thetechyspace@gmail.com" className="text-blue-700 underline">thetechyspace@gmail.com</a> or call <span className="font-semibold">+254 705 682 047</span>.
        </p>
      </div>
    </div>
  );
};

export default Terms;