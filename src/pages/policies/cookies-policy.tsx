const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Cookie Policy</h1>
        <p className="text-gray-600 mb-6">
          TechSolutions uses cookies to enhance your experience. This Cookie Policy explains what cookies are, how we use them, and your choices regarding their use.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
            <p className="text-gray-600">
              Cookies are small text files stored on your device to collect information about your preferences and usage patterns.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
            <p className="text-gray-600">
              We use cookies to personalize content, analyze site traffic, and improve user experience. Some cookies are essential for our website's functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Types of Cookies</h2>
            <p className="text-gray-600">
              - **Essential Cookies**: Required for core website functionality. <br />
              - **Analytics Cookies**: Help us understand user behavior and improve our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
            <p className="text-gray-600">
              You can control or disable cookies through your browser settings. Note that disabling cookies may impact your experience on our site.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
