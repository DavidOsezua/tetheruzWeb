const DownloadSection: React.FC = () => {
  return (
    <section className="" id="/download">
      <div className="max-w-7xl px-4 mdpx-0 w-full mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Get Tetheruz and Start Spending
        </h2>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
          Freely
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-sm sm:text-base mb-12 max-w-3xl mx-auto">
          Start using Tetheruz today for fast, secure, and borderless spending.
          Works seamlessly on web, anytime, anywhere.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          {/* App Store Button */}
          <button className="flex items-center bg-[#FFFFFF] text-[#3B3D50] font-semibold px-6 py-4 rounded-lg transition-colors w-full md:max-w-[243px] justify-center gap-8">
            <a href="/">Get Started now</a>
          </button>
        </div>
      </div>

      {/* Images section with better centering */}
      <div className="w-full">
        {/* Desktop: centered flex, Mobile: scrollable */}

        <div className="max-w-[856px] mx-auto">
          <img
            src="/tetheruzLaptop.webp"
            alt="tetheruzLaptop"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
