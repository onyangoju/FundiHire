const Support = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-6 text-center drop-shadow-sm">
        Need Help?
      </h1>

      <div className="text-lg text-gray-800 max-w-3xl text-justify space-y-8 leading-relaxed">
        <p className="italic">
          We’ve got you covered. Whether you're a client booking a service or a fundi managing your profile — we’re right here when you need us.
        </p>

        <div>
          <h2 className="text-xl font-semibold text-green-700 mb-3">🔧 How We Can Help</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Booking issues or confusion</li>
            <li>Trouble contacting a service provider</li>
            <li>WhatsApp messages not received</li>
            <li>Profile edits or service updates</li>
            <li>Payment concerns or disputes</li>
            <li>Reporting bad experiences</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-green-700 mb-3">📲 Contact Us</h2>
          <p>
            <span className="font-semibold">WhatsApp</span><br />
            📱 <span className="text-blue-600 italic">+254 705682047</span><br />
            <span className="text-gray-600">Available Mon–Sat, 8:00am – 6:00pm (EAT)</span>
          </p>

          <p className="mt-4">
            <span className="font-semibold">Email</span><br />
            ✉️ <span className="text-blue-600 italic">thetechyspace@gmail.com</span><br />
            <span className="text-gray-600">Response time: 24–48 hours</span>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-green-700 mb-3">❓ Frequently Asked Questions (FAQs)</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>How do I book a service provider?</strong><br />
              Search for the service you need, browse available providers, and tap on one to view their profile and book directly. You’ll receive a confirmation via WhatsApp.
            </li>
            <li>
              <strong>Do I need an account to book a service?</strong><br />
              Not strictly. You can reach providers via WhatsApp, but creating an account gives you faster booking, saved favorites, and order history.
            </li>
            <li>
              <strong>Are the service providers verified?</strong><br />
              Yes. Every fundi undergoes identity checks and community reviews to make sure you're hiring someone trustworthy.
            </li>
            <li>
              <strong>How do I pay for services?</strong><br />
              Payment methods vary — some accept M-Pesa, others prefer cash or card. Always confirm with the provider during booking.
            </li>
            <li>
              <strong>What happens if a provider cancels or doesn’t show up?</strong><br />
              Let us know via WhatsApp or email right away. We’ll help you reschedule or find a replacement, and we take feedback seriously.
            </li>
            <li>
              <strong>Can I leave a review after the service?</strong><br />
              Absolutely! Once your booking is complete, you’ll be invited to rate and review. Your voice helps the community grow stronger.
            </li>
            <li>
              <strong>How do I become a listed service provider (fundi)?</strong><br />
              Click “Join as a Fundi” on our homepage or message us on WhatsApp. We’ll help you set up and get verified in minutes.
            </li>
            <li>
              <strong>Is my information safe on the platform?</strong><br />
              100%. We take data privacy seriously. Learn more in our <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a>.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Support;
