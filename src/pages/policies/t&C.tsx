const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Terms of Service</h1>
        <p className="text-gray-600 mb-6">
          Welcome to TechSolutions. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600">
              By using our services, you agree to these Terms of Service. If you do not agree, you may not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Use of Services</h2>
            <p className="text-gray-600">
              You agree to use our services only for lawful purposes. Any misuse or violation of our terms may result in termination of your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <p className="text-gray-600">
              All content, designs, and software are the intellectual property of TechSolutions. Unauthorized use is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-gray-600">
              TechSolutions is not liable for any indirect or consequential damages resulting from the use of our services.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
