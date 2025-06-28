const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col items-center justify-center p-8">
      <img
        src="/images/fundis-header.png"
        alt="FundiHire Community Illustration"
        className="w-full max-w-4xl mb-8 rounded-md shadow-lg"
      />

      <h1 className="text-4xl font-extrabold text-blue-700 mb-6 text-center drop-shadow-sm">
        About FundiHire
      </h1>

      <div className="text-lg text-gray-800 max-w-3xl text-justify space-y-6 leading-relaxed">
        <p className="italic">
  Behind FundiHire is a vision rooted in real community needs. We noticed how many talented individuals struggle to reach clients due to lack of visibility, and how clients often settle for guesswork when hiring help. Our platform bridges that gap — empowering fundis with tools to succeed while giving clients confidence in who they're hiring.
</p>

<p>
  As we grow, we’re committed to expanding features that support professional development, certification, and even group job opportunities — so whether you're a solo fundi or part of a growing team, there's room to thrive here. FundiHire isn’t just a marketplace — it’s a movement to modernize and celebrate the hustle, skill, and pride of local service.
</p>

        <div>
          <p className="font-semibold text-green-700 mb-2">We’ve focused on what really matters:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>💬 Quick communication via WhatsApp</li>
            <li>📱 User-friendly interface tailored for mobile</li>
            <li>🛡️ Verified fundis & freelancers you can trust</li>
            <li>⚡ Instant booking and smart scheduling</li>
            <li>🌍 Community-driven platform built for real needs</li>
          </ul>
        </div>

        <p>
          Our mission is to <span className="font-semibold text-blue-700">empower local professionals</span> and give clients the confidence to hire with ease. Whether you're in a city or deep in the neighborhood, we're making access to quality services just a few taps away.
        </p>
      </div>
    </div>
  );
};

export default About;