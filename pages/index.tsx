import Head from "next/head";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { BiCopy } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <Head>
        <title>Solar Energy</title>
      </Head>
      <main>
        <div className="min-h-screen bg-black/25 bg-[url('/assets/solar-panel.png')] bg-cover bg-bottom bg-blend-darken">
          <header>
            <nav className="flex justify-between align-middle mx-auto max-w-6xl py-16 px-8">
              <div>
                <button className="border border-white rounded-md px-4 py-2 text-white hover:bg-white/30">
                  <span className="flex justify-center align-middle gap-2">
                    <HiOutlineMenuAlt4 size={24} />
                    <span>Menu</span>
                  </span>
                </button>
              </div>
              <div>
                <button className="border border-white rounded-md px-4 py-2 text-white hover:bg-white/30">
                  Log In
                </button>
              </div>
            </nav>
          </header>
          <div className="flex flex-col items-center gap-8 py-32 px-8">
            <div className="max-w-lg flex flex-col gap-4">
              <h1 className="font-bold text-5xl md:text-6xl text-center text-white">
                Join the solar energy revolution
              </h1>
              <p className="text-center text-white">
                We're transforming access to renewable energy with simple,
                powerful solar solutions for homes, businesses, and communities.
              </p>
            </div>
            <button className="text-white px-4 py-2 rounded-md hover:bg-white/30">
              Learn More
            </button>
          </div>
        </div>
        <div className="py-4 bg-slate-900/80 sticky top-0 z-50 hidden md:flex justify-center align-middle backdrop-blur">
          <nav className="flex justify-between text-white">
            <a href="#" className="px-4 py-2">
              SOLUTIONS
            </a>
            <a href="#" className="px-4 py-2">
              ALL BLUE
            </a>
            <a href="#" className="px-4 py-2">
              GO SOLAR
            </a>
            <a href="#" className="px-4 py-2">
              ABOUT
            </a>
            <a href="#" className="px-4 py-2">
              FEATURES
            </a>
            <a href="#" className="px-4 py-2">
              CONTACTS
            </a>
          </nav>
        </div>
        <section className="bg-white py-32 max-w-6xl mx-auto flex flex-col gap-24">
          <div className="flex flex-col items-center text-center gap-4">
            <h3 className="font-bold text-2xl">Solutions</h3>
            <p className="max-w-xl">
              From home solar financing to community solar to project
              development, we're creating better solar options for every
              neighborhood.
            </p>
          </div>
          {/* 1 */}
          <div className="flex flex-col items-center md:items-start md:flex-row gap-24 md:mr-16">
            <div>
              <img
                src="/assets/solar-1.png"
                alt="Solar Panel"
                width={400}
                height={400}
              />
            </div>
            <div className="flex flex-col gap-8">
              <div>
                <div className="flex gap-2">
                  <BiCopy size={32} />
                  <h2 className="text-3xl font-bold">Home Solar Loans</h2>
                </div>
                <p className="max-w-[400px] mt-4">
                  We make home solar ownership a reality with financing options
                  to meet your needs. We also offer AllBlue so that you can add
                  Community Solar, too.
                </p>
              </div>
              <div>
                <button className="px-4 py-2 bg-slate-700 rounded-md text-white font-bold">
                  Learn More
                </button>
              </div>
              <div className="max-w-[420px] mt-4">
                <Card
                  title="Rooftop Installers"
                  description="We only partner with the best sollar installers, and we help them succeed."
                  image="/assets/solar-2.png"
                />
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="flex flex-col items-center md:items-start md:flex-row-reverse gap-24 md:ml-16">
            <div>
              <img
                src="/assets/solar.jpg"
                alt="Solar Panel"
                width={600}
                height={600}
              />
            </div>
            <div className="flex flex-col gap-8">
              <div>
                <div className="flex gap-2">
                  <BiCopy size={32} />
                  <h2 className="text-3xl font-bold">Community Solar</h2>
                </div>
                <p className="max-w-[400px] mt-4">
                  Solar benefits without barriers. We make it simple to enjoy
                  savings & do some good in your community, no rooftop panels
                  required.
                </p>
              </div>
              <div>
                <button className="px-4 py-2 bg-slate-700 rounded-md text-white font-bold">
                  Learn More
                </button>
              </div>
              <div className="flex flex-col gap-2 max-w-[500px] mt-4">
                <Card
                  title="Community Solar Sales Partners"
                  description="Bring solar to your community with our turnkey solar sales platform."
                  image="/assets/solar-2.png"
                />
                <Card
                  title="Customer Management Clients"
                  description="You develop the solar project, let our team aquire and manage the customers."
                  image="/assets/solar-2.png"
                />
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="flex flex-col items-center md:items-start md:flex-row gap-24 md:mr-16">
            <div>
              <img
                src="/assets/solar-2.png"
                alt="Solar Panel"
                width={400}
                height={400}
              />
            </div>
            <div className="flex flex-col gap-8">
              <div>
                <div className="flex gap-2">
                  <BiCopy size={32} />
                  <h2 className="text-3xl font-bold">Solar Development</h2>
                </div>
                <p className="max-w-[400px] mt-4">
                  We work at the forefront of responsible, innovative solar
                  development. Partner with our veteran team to develop
                  utility-scale solar across the US.
                </p>
              </div>
              <div>
                <button className="px-4 py-2 bg-slate-700 rounded-md text-white font-bold">
                  Learn More
                </button>
              </div>
              <div className="max-w-[500px] mt-4">
                <Card
                  title="Developers & Land Owners"
                  description="Our industry-leading solar development team can help you bring your solar project to life."
                  image="/assets/solar-2.png"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
