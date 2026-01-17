import Layout from "../Layout/Layout";

const Policy = () => {
  return (
    <Layout>
      <div className="space-y-8 ">
        <div
          className=" relative -z-10 w-full h-40 md:h-72  flex justify-center items-center backdrop-blur-lg "
          style={{
            background:
              "linear-gradient(108.57deg, rgba(42, 146, 199, 0.24) -4.61%, rgba(28, 36, 93, 0.24) 97.89%)",
          }}
        >
          <h2 className="font-bold text-xl text-white md:text-3xl">
            Privacy Policy
          </h2>

          <p className="absolute bottom-1 right-1 font-bold text-white">
            16 January 2025
          </p>
        </div>

        <div
          className="w-full max-w-[1200px] mx-auto px-8 py-10 rounded-3xl text-white"
          style={{
            background:
              "linear-gradient(108.57deg, rgba(219, 241, 255, 0.08) -4.61%, rgba(193, 176, 255, 0.08) 97.89%)",
          }}
        >
          <div className="mb-12 space-y-2">
            <h1 className="text-xl md:text-3xl font-bold">About This Policy</h1>
            <p className="text-white leading-6 text-[14px]">
              This Privacy Policy explains how Tetheruz ("we", "us", "our")
              collects, uses, shares, and protects information when you access
              or use the Tetheruz web platform (the "Platform").
            </p>
            <p className="text-white leading-6 text-[14px]">
              By using the Platform, you agree to the terms of this Privacy
              Policy.
            </p>
          </div>

          {/* Information We Collect Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">
              Information We Collect
            </h1>
            <p className="text-white leading-6 text-[14px]">
              When you use the Platform, we may collect the following types of
              information:
            </p>
            <ul className="space-y-3 text-white leading-6 text-[14px] pl-6 pt-2">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                Personal Information: Name, email, phone number, or other
                details you provide when you register or communicate with us.
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                Device Information: Browser type, operating system, IP address,
                and basic device identifiers used to access the Platform.
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                Usage Information: Information about how you interact with the
                Platform, including activity logs, page interactions, and basic
                analytics.
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                Transaction Information: Basic details about your card usage for
                account management (e.g., last 4 digits, transaction summaries).
              </li>
            </ul>
          </div>

          {/* How We Use Your Information Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">
              How We Use Your Information
            </h1>
            <p className="text-white leading-6 text-[14px]">
              We use your information to:
            </p>
            <ul className="space-y-3 text-white leading-6 text-[14px] pl-6 pt-2">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                Provide, operate, and maintain the Platform and its features
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                Manage and support your Tetheruz account
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                Communicate with you regarding updates, security alerts, and
                customer support
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                Improve functionality, performance, and user experience
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                Comply with applicable legal or regulatory obligations
              </li>
            </ul>
          </div>

          {/* Account Deletion and Data Removal */}
          {/* <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">
              Account Deletion and Data Removal
            </h1>
            <p className="text-white leading-6 text-[14px]">
              When you request to delete your Anonyzon account, please note the
              following conditions:
            </p>
            <ul className="space-y-3 text-white leading-6 text-[14px] pl-6 pt-2">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                If you have funds remaining in your account balance, you are
                required to withdraw them before proceeding with deletion.
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                If you choose to continue without withdrawing your funds, any
                remaining balance will be permanently forfeited.
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                By confirming account deletion, you authorize Anonyzon to remove
                your personal details and delete any linked or foreign accounts
                associated with your profile.
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                All personal data will be permanently deleted from our records
                within 30 days of your deletion request.
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                To finalize the deletion, you must confirm your decision and
                agree to our Terms of Service.
              </li>
            </ul>
          </div> */}

          {/* How We Protect Your Information Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">
              How We Protect Your Information
            </h1>
            <p className="text-white leading-6 text-[14px]">
              We use reasonable administrative, technical, and physical
              safeguards to protect your information.
            </p>
            <p className="text-white leading-6 text-[14px]">
              Access is restricted to authorized personnel only.
            </p>
          </div>

          {/* Sharing Your Information Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">
              Sharing Your Information
            </h1>
            <p className="text-white leading-6 text-[14px]">
              We do not sell or rent your personal information.
            </p>
            <p className="text-white leading-6 text-[14px]">
              We may share limited information with trusted third-party service
              providers who assist us in operating the Platform, subject to
              confidentiality and data protection obligations.
            </p>
          </div>

          {/* Your Rights Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">Your Rights</h1>
            <p className="text-white leading-6 text-[14px]">You may:</p>
            <ul className="space-y-3 text-white leading-6 text-[14px] pl-6 pt-2">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                Request access to or correction of your personal information
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                Withdraw your consent where we rely on it.
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></span>
                Request deletion of your Tetheruz account, subject to legal and
                regulatory retention requirements
              </li>
            </ul>
            <p className="text-white leading-6 text-[14px] mt-4">
              Contact us at{" "}
              <a
                href="mailto:support@Tetheruz.com"
                className="text-blue-400 hover:text-blue-300 underline transition-colors"
              >
                support@Tetheruz.com
              </a>{" "}
              to exercise these rights.
            </p>
          </div>

          {/* Data Storage Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">Data Storage</h1>
            <p className="text-white leading-6 text-[14px]">
              Your information may be stored and processed securely within the
              EU or other jurisdictions where we operate.
            </p>
          </div>

          {/* Updates to This Policy Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">
              Updates to This Policy
            </h1>
            <p className="text-white leading-6 text-[14px]">
              We may update this Privacy Policy from time to time. Any material
              changes will be communicated through the Platform or by other
              appropriate means.
            </p>
          </div>

          {/* Contact Us Section */}
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-3xl font-bold">Contact Us</h1>
            <p className="text-white leading-6 text-[14px]">
              If you have questions about this Privacy Policy, please contact:
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
              By using the Tetheruz App, you acknowledge that you have read and
              understood these Terms & Conditions.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
