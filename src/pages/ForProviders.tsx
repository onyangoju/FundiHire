const SupportForFundis = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-orange-50 to-white px-6 py-12 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold text-orange-700 mb-8 text-center drop-shadow-md">
        🧰 Support for Fundis & Service Providers
      </h1>

      <div className="text-lg text-gray-800 max-w-3xl text-justify space-y-8 leading-relaxed">
        <p className="italic">
          We’re here to support your hustle. Whether you're a carpenter, cleaner, plumber, tutor, or creative —
          <span className="font-semibold text-orange-700"> FundiHire is built for you.</span> We help you connect with clients, grow your brand, and get paid smoothly.
        </p>

        <div>
          <h2 className="text-xl font-bold text-green-700 mb-3">📞 Need Help With?</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Setting up or updating your profile</li>
            <li>Receiving bookings and responding to clients</li>
            <li>Managing your availability and service area</li>
            <li>Using WhatsApp for communication</li>
            <li>Payment or withdrawal issues</li>
            <li>Removing bad reviews or reporting abuse</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-green-700 mb-3">📲 How to Reach Us</h2>
          <p>
            <span className="font-semibold">💬 WhatsApp Support</span><br />
            📱 <a href="https://wa.me/254705682047" className="text-blue-700 underline">+254 705 682 047</a><br />
            <span className="text-sm text-gray-600">Available Mon–Sat, 8:00am – 6:00pm (EAT)</span>
          </p>
          <p className="mt-4">
            <span className="font-semibold">📧 Email Support</span><br />
            ✉️ <a href="mailto:thetechyspace@gmail.com" className="text-blue-700 underline">thetechyspace@gmail.com</a><br />
            <span className="text-sm text-gray-600">We reply within 1–2 business days</span>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-green-700 mb-3">❓ FAQs for Providers</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>How do I register as a fundi?</strong><br />
              Click “<span className="text-orange-600 font-semibold">For Provider</span>” on the homepage or message us. We’ll guide you through setup and verification.
            </li>
            <li>
              <strong>How do I receive bookings?</strong><br />
              Clients will message or request bookings directly — you'll have full control to accept or decline.
            </li>
            <li>
              <strong>Is there a fee to join?</strong><br />
              No fees right now! We may introduce optional premium features later — but we’ll always keep it transparent.
            </li>
            <li>
              <strong>Can I offer more than one service?</strong><br />
              Yes! List all your skills — being multi-talented increases your hire chances.
            </li>
            <li>
              <strong>How do I get more bookings?</strong><br />
              <ul className="list-disc list-inside ml-4 text-gray-700 space-y-1">
                <li>Keep your profile polished and up to date</li>
                <li>Respond quickly on WhatsApp</li>
                <li>Maintain good reviews and professional communication</li>
                <li>Share your booking link on social platforms</li>
              </ul>
            </li>
            <li>
              <strong>How do I update my profile or service area?</strong><br />
              Reach out via WhatsApp or email and we’ll help you update anything. Self-service tools are coming soon!
            </li>
            <li>
              <strong>How do payments work?</strong><br />
              Agree directly with the client — M-Pesa, cash, or card. Payouts via our system go to your preferred number or bank.
            </li>
            <li>
              <strong>What if a client cancels or doesn’t pay?</strong><br />
              Let us know immediately. We monitor client behavior and investigate serious issues. Protect your time and confirm all details first.
            </li>
            <li>
              <strong>Can I get certified?</strong><br />
              Yes! Verified fundis receive a badge. Start the process with a quick message — we’ll handle the rest.
            </li>
          </ol>
        </div>

        <div className="bg-orange-100 text-orange-900 font-semibold p-4 rounded-md text-center border-l-4 border-orange-400 shadow-sm">
          🙌 <span className="italic">We’ve Got Your Back.</span> Our mission is to <span className="font-bold">empower local talent</span>. We’re here to support you, uplift your hustle, and help you succeed in every neighborhood, town, or city.
        </div>
      </div>
    </div>
  );
};

export default SupportForFundis;