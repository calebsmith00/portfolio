import type { NextPage } from "next";
import Footer from "../components/Footer";
import NodeLogo from "../components/NodeLogo";
import ReactLogo from "../components/ReactLogo";
import SelfPortrait from "../components/SelfPortrait";

const Home: NextPage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen lg:flex-row lg:items-center">
        {/* Picture of me */}
        <div className="lg:order-last">
          <SelfPortrait />
        </div>

        {/* Introduction */}
        <div className="flex flex-col lg:justify-center lg:items-center text-center lg:h-full font-opensans">
          <h1 className="text-6xl">Hi, I'm Caleb 👋</h1>

          <div className="lg:whitespace-nowrap text-3xl pt-10">
            A <ReactLogo /> and <NodeLogo /> developer
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
