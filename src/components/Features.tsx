import Ellipse from "./svgComponents/Ellipse";
import StackedCard from "./svgComponents/StackedCard";

const Features = () => {
  return (
    <section className="py-20 px-4 md:px-0" id="/features">
      <div className="text-white space-y-5 mb-5 max-w-[1292px] mx-auto">
        <h1 className="text-3xl sm:text-3xl lg:text-5xl  font-bold text-white  lg:mb-6 leading-tight">
          Your Money, Your Cards,Total freedom
        </h1>

        <p className="max-w-[900px]">
          Use your crypto or fiat funds to generate virtual cards instantly.
          Spend globally and manage everything from one secure, private wallet.
        </p>
      </div>

      <div
        className="mx-auto max-w-[1296px] p-7 rounded-lg space-y-6 relative"
        style={{
          background:
            " linear-gradient(108.57deg, rgba(219, 241, 255, 0.08) -4.61%, rgba(193, 176, 255, 0.08) 97.89%)",
        }}
      >
        <Ellipse className="absolute max-w-[200px] w-full md:max-w-[353px] left-0 bottom-0" />

        <div className="md:max-w-[1000px] mx-auto">
          <div className="space-y-6 md:flex items-center md:justify-between">
            {/* Content */}
            <div className="space-y-4 text-white">
              <h3 className=" text-[24px] font-bold">
                Create Virtual Cards Instantly
              </h3>
              <p className="md:max-w-[450px] text-sm sm:text-base  w-full leading-7">
                Get unlimited virtual cards in seconds — backed by either crypto
                or fiat. Perfect for managing subscriptions like Netflix or
                Spotify, online purchases, or separating business and personal
                spending. Each card is secure, reloadable, and easy to manage
                directly from the app.
              </p>
            </div>

            <div className="flex justify-center">
              <StackedCard />
            </div>
          </div>

          <div className="space-y-6 md:flex items-center md:justify-between ">
            {/* Content */}
            <div className="space-y-4 text-white md:order-1">
              <h3 className=" text-[24px] font-bold md:text-right">
                Wallet Transfers, Deposits & Withdrawals
              </h3>
              <p className="md:max-w-[450px] text-sm sm:text-base mx-auto w-full leading-7 md:text-right">
                Move funds seamlessly between your Tetheruz wallet and your
                cards. Deposit crypto through supported chains like ERC20 and
                TRC20 for USDT/USDC. Withdraw to your local bank account, or
                transfer funds instantly within the Tetheruz ecosystem. Every
                transaction is fast, traceable, and secure.
              </p>
            </div>

            <div className="">
              <img
                src="/coins.webp"
                alt="coins"
                className="w-full max-w-[400px]  h-auto object-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
