const PrivacyPolicy = () => {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, and protect your information.
          </p>
  
          <div className="space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                1. Information We Collect
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We collect information you provide directly to us when you create
                an account, schedule an event, or contact us. This may include
                your name, email address, phone number, and any other details
                necessary to fulfill your request.
              </p>
            </section>
  
            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed">
                The information we collect is used to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Provide and improve our services.</li>
                <li>Respond to your inquiries and support requests.</li>
                <li>Send updates and important notifications.</li>
                <li>Ensure the security of our platform.</li>
              </ul>
            </section>
  
            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                3. Sharing Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We do not sell or rent your information to third parties. However,
                we may share your data with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                  Service providers who assist us in operating the platform.
                </li>
                <li>
                  Legal or regulatory authorities when required by law.
                </li>
              </ul>
            </section>
  
            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                4. Data Security
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational measures to
                protect your data from unauthorized access, loss, or misuse.
              </p>
            </section>
  
            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                5. Your Rights
              </h2>
              <p className="text-gray-600 leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Access, update, or delete your personal information.</li>
                <li>Opt out of receiving promotional emails.</li>
                <li>
                  Request information about how your data is processed.
                </li>
              </ul>
            </section>
  
            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                6. Cookies
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our website uses cookies to enhance user experience and analyze
                site traffic. You can adjust your cookie preferences through your
                browser settings.
              </p>
            </section>
  
            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                7. Changes to This Policy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page, and we encourage you to review it
                periodically.
              </p>
            </section>
  
            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                8. Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions or concerns about this Privacy Policy,
                please contact us at:
              </p>
              <p className="text-gray-600 font-medium">support@example.com</p>
            </section>
          </div>

        </div>
      </div>
    );
  };
  
  export default PrivacyPolicy;
  