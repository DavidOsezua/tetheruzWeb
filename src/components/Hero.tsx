import Card from "./svgComponents/Card";

const Hero: React.FC = () => {
  return (
    <section className="">
      {/* Main Content */}
      <div className=" space-y-6 md:space-y-12 px-4 max-w-[1296px] mx-auto md:px-0 lg:grid grid-cols-2 items-center">
        <div className="space-y-4">
          <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] font-bold text-white lg:mb-6 leading-tight px-4 ">
            Tetheruz Cards Made Easy {""}
            <span className="">for Crypto & Fiat</span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-base mb-8 px-4 ">
            Create secure virtual cards directly from your wallet. Pay for
            subscriptions, bills, and more using USDT, USDC, or your fiat
            balance all in one app.
          </p>
        </div>

        <div className="flex justify-center">
          <Card maxWidth="489px" />
        </div>
      </div>


      

    </section>
  );
};

export default Hero;
