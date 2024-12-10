const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-6">
          At TechSolutions, your privacy is our priority. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-gray-600">
              We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This includes your name, email, phone number, and payment details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-gray-600">
              We use your information to provide and improve our services, communicate with you, process payments, and ensure compliance with our Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Sharing Your Information</h2>
            <p className="text-gray-600">
              We do not share your personal information with third parties except as necessary to provide our services, comply with legal obligations, or protect our rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-gray-600">
              You have the right to access, update, or delete your personal information. Contact us at privacy@techsolutions.com for assistance.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
