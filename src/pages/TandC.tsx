import Layout from "../Layout/Layout";

const TandC = () => {
  return (
    <Layout>
      <div className="space-y-8 ">
        <div
          className=" relative -z-10 w-full h-40 md:h-72  flex justify-center items-center "
          style={{
            background:
              "linear-gradient(108.57deg, rgba(42, 146, 199, 0.24) -4.61%, rgba(28, 36, 93, 0.24) 97.89%)",
          }}
        >
          <h2 className="font-bold text-xl text-white md:text-3xl">
            Terms and Conditions
          </h2>
          <p className="absolute bottom-1 right-1 font-bold text-white">
            1 January 2025
          </p>
        </div>

        <div
          className="w-full max-w-[1200px] space-y-12 mx-auto px-12 py-10 rounded-3xl text-white"
          style={{
            background:
              "linear-gradient(108.57deg, rgba(219, 241, 255, 0.08) -4.61%, rgba(193, 176, 255, 0.08) 97.89%)",
          }}
        >
          {/* Acceptance of Terms Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">
              Acceptance of Terms
            </h1>
            <p className="text-white leading-6 text-[14px]">
              By accessing or using the Tetheruz web platform (the "Platform"),
              you agree to comply with and be bound by these Terms & Conditions
              (the "Terms"). If you do not agree to these Terms, you must not
              use the Platform.
            </p>
          </div>

          {/* Use of the Platform Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">
              Use of the Platform
            </h1>
            <p className="text-white leading-6 text-[14px]">
              The Platform provides tools to manage and monitor your Tetheruz
              account, view transactions, access account features, and receive
              notifications through a web-based dashboard.
            </p>
            <p className="text-white leading-6 text-[14px]">
              You agree to use the Platform only for lawful and permitted
              purposes. You must not misuse, hack, reverse-engineer, interfere
              with, or damage any part of the Platform.
            </p>
          </div>

          {/* Account and Security Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">
              Account and Security
            </h1>
            <p className="text-white leading-6 text-[14px]">
              You are responsible for maintaining the confidentiality of your
              login credentials.
            </p>
            <p className="text-white leading-6 text-[14px]">
              You must immediately notify us if you suspect any unauthorized
              access to your account.
            </p>
            <p className="text-white leading-6 text-[14px]">
              You are fully responsible for all activities that occur under your
              Tetheruz account.
            </p>
          </div>

          {/* Permitted Users Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">Permitted Users</h1>
            <p className="text-white leading-6 text-[14px]">
              You must be at least 18 years old and legally capable of entering
              into binding contracts to use the Platform.
            </p>
          </div>

          {/* Prohibited Uses Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">Prohibited Uses</h1>
            <p className="text-white leading-6 text-[14px]">
              You agree not to:
            </p>
            <ul className="space-y-3 text-white leading-6 text-[14px] pl-6 pt-2">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                Use the Platform for any fraudulent, illegal, or abusive purpose
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                Violate any applicable laws or the rights of third parties
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                Attempt to interfere with the Platform's security,
                functionality, or operation
              </li>
            </ul>
          </div>

          {/* Intellectual Property Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">
              Intellectual Property
            </h1>
            <p className="text-white leading-6 text-[14px]">
              All content, trademarks, logos, and related materials available on
              the Platform are owned by Tetheruz or its licensors.
            </p>
            <p className="text-white leading-6 text-[14px]">
              You may not copy, modify, distribute, reproduce, or use any part
              of the Platform except as expressly permitted under these Terms.
            </p>
          </div>

          {/* Disclaimers Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">Disclaimers</h1>
            <p className="text-white leading-6 text-[14px]">
              The Platform is provided on an "as is" and "as available" basis.
              We make no warranties or guarantees that the Platform will be
              uninterrupted, error-free, or secure at all times.
            </p>
          </div>

          {/* Limitation of Liability Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">
              Limitation of Liability
            </h1>
            <p className="text-white leading-6 text-[14px]">
              To the maximum extent permitted by law, Tetheruz shall not be
              liable for any indirect, incidental, special, or consequential
              damages arising from or related to your use of the Platform.
            </p>
          </div>

          {/* Privacy Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">Privacy</h1>
            <p className="text-white leading-6 text-[14px]">
              Your use of the Platform is governed by our Privacy Policy, which
              explains how we collect, use, and protect your personal
              information. By using the Platform, you consent to these
              practices.
            </p>
          </div>

          {/* Changes to the Terms Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">
              Changes to the Terms
            </h1>
            <p className="text-white leading-6 text-[14px]">
              We may update these Terms from time to time. Any significant
              changes will be communicated through the Platform or by other
              reasonable means. Continued use of the Platform constitutes
              acceptance of the updated Terms.
            </p>
          </div>

          {/* Termination Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">Termination</h1>
            <p className="text-white leading-6 text-[14px]">
              We reserve the right to suspend or terminate your access to the
              Platform at any time if you violate these Terms or engage in
              prohibited activities.
            </p>
          </div>

          {/* Governing Law Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">Governing Law</h1>
            <p className="text-white leading-6 text-[14px]">
              These Terms are governed by the laws of UK law.
            </p>
            <p className="text-white leading-6 text-[14px]">
              These Terms shall be governed by and construed in accordance with
              the laws of the United Kingdom.
            </p>
            <p className="text-white leading-6 text-[14px]">
              Any disputes arising under these Terms shall be subject to the
              exclusive jurisdiction of the courts of the United Kingdom.
            </p>
          </div>

          {/* Contact Us Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">Contact Us</h1>
            <p className="text-white leading-6 text-[14px]">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-white leading-6 text-[14px]">
              Email:{" "}
              <a
                href="mailto:support@Tetheruz.com"
                className="text-blue-400 hover:text-blue-300 underline transition-colors"
              >
                support@Tetheruz.com
              </a>
            </p>
            <p className="text-white leading-6 text-[14px] mt-4">
              By using the Tetheruz, you acknowledge that you have read and
              understood these Terms & Conditions.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TandC;
