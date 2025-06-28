const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-6 text-center">Privacy Policy</h1>

      <div className="text-lg text-gray-800 max-w-3xl text-justify space-y-6 leading-relaxed">
        <p><span className="italic font-semibold">Effective Date:</span> <span className="text-blue-600">27/06/2025</span></p>

        <p>
          <span className="italic">We value your privacy.</span> This Privacy Policy explains how we collect, use, and protect your personal information when you use our platform and services — including our WhatsApp integration.
        </p>

        <div>
          <h2 className="text-xl font-semibold text-green-700 mb-2">1. Information We Collect</h2>
          <p className="italic text-gray-600">We may collect:</p>

          <p className="font-medium">a. Personal Information</p>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>Name, email, and phone number</li>
            <li>Location (e.g., city or neighborhood)</li>
            <li>Service preferences</li>
            <li>WhatsApp contact for communication</li>
          </ul>

          <p className="font-medium mt-4">b. Usage Information</p>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>Device type and browser</li>
            <li>IP address</li>
            <li>Pages visited and actions taken</li>
          </ul>

          <p className="font-medium mt-4">c. Booking Data</p>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>Services searched or booked</li>
            <li>Interactions with providers</li>
            <li>Feedback or reviews you submit</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-green-700 mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Facilitate bookings</li>
            <li>Send communication via SMS, email, or WhatsApp</li>
            <li>Personalize user experience</li>
            <li>Improve our platform</li>
            <li>Prevent misuse or fraud</li>
            <li>Comply with legal requirements</li>
          </ul>
        </div>

        <p>
          <span className="text-green-700 font-semibold">3. WhatsApp Integration:</span> By using our platform, you agree to receive updates and customer support via WhatsApp. <span className="italic">You may opt out anytime.</span>
        </p>

        <div>
          <h2 className="text-xl font-semibold text-green-700 mb-2">4. How We Share Your Data</h2>
          <ul className="list-disc list-inside ml-4">
            <li>With service providers for bookings</li>
            <li>With tools that help us operate</li>
            <li>With regulators as required by law</li>
          </ul>
          <p className="italic">We never sell your personal data.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-green-700 mb-2">5. Data Security</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Encrypted HTTPS connections</li>
            <li>Access-controlled databases</li>
            <li>Monitoring for unauthorized activity</li>
          </ul>
          <p className="italic">No system is flawless — please protect your data too.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-green-700 mb-2">6. Your Rights</h2>
          <ul className="list-disc list-inside ml-4">
            <li>View the data we hold about you</li>
            <li>Request edits or deletion</li>
            <li>Withdraw consent where applicable</li>
            <li>Opt-out of marketing communications</li>
          </ul>
          <p>Contact us at <a href="mailto:thetechyspace@gmail.com" className="text-blue-600 underline">thetechyspace@gmail.com</a> to exercise your rights.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-green-700 mb-2">7. Cookies and Tracking</h2>
          <p>We use cookies to:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Keep you logged in</li>
            <li>Enhance your experience</li>
            <li>Remember service preferences</li>
          </ul>
          <p className="italic">Manage cookies through your browser settings.</p>
        </div>

        <p><strong className="text-green-700">8. Children’s Privacy:</strong> This platform is not intended for users under 18. We do not knowingly collect children’s data.</p>

        <p><strong className="text-green-700">9. Changes to This Policy:</strong> We may revise this Privacy Policy as needed. You'll be notified of key updates.</p>

        <div>
          <h2 className="text-xl font-semibold text-green-700 mb-2">10. Contact Us</h2>
          <p>
            📧 <a href="mailto:thetechyspace@gmail.com" className="text-blue-600 underline">thetechyspace@gmail.com</a><br />
            📱 <a href="https://wa.me/254705682047" className="text-blue-600 underline">+254 705 682 047</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;