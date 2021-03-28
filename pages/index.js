import Head from 'next/head';
import React from 'react';
import Footer from '../components/common/footer';
import Navbar from '../components/common/navbar';

const Home = () => (
  <div className="w-full min-h-screen flex flex-col px-2 overflow-x-hidden">
    <Head>
      <title>Home</title>
    </Head>
    <Navbar />
    <div className="w-full min-h-full grid grid-cols-2 space-x-5 mx-10 pt-20">
      <div className="col-span-1">
        <div
          className="w-full max-w-2xl flex items-center p-5 rounded-xl text-white mb-5 shadow-lg"
          style={{ backgroundColor: '#1074CF' }}
        >
          <div className="w-full">
            <p className="text-3xl">Active Areas</p>
            <ul className="list-disc text-xl ml-5">
              <li>Living Room: Lights</li>
              <li>Master Bedroom: A/C</li>
            </ul>
          </div>
          <img src="/images/couch.png" />
        </div>
        <div className="w-full max-w-2xl grid grid-cols-2 space-x-5 text-white mb-5">
          <div className="col-span-1 flex bg-black p-5 rounded-xl relative">
            <div className="">
              <p className="text-3xl">Active Areas</p>
              <ul className="list-disc text-xl ml-5">
                <li>Living Room: Lights</li>
                <li>Master Bedroom: A/C</li>
              </ul>
            </div>
            <img src="/images/lightbulb.png" className="absolute right-5" />
          </div>
          <div
            className="col-span-1 flex p-5 rounded-xl relative"
            style={{ backgroundColor: '#BA841D' }}
          >
            <div className="">
              <p className="text-3xl">Appliances</p>
              <ul className="list-disc text-xl ml-5">
                <li>A/C: Master Bedroom</li>
                <li>Heater: Stacy’s Room</li>
              </ul>
            </div>
            <img src="/images/washing_machine.png" className="absolute right-5" />
          </div>
        </div>
        <div
          className="w-full max-w-2xl flex items-center p-5 rounded-xl text-white mb-5 shadow-lg"
          style={{ backgroundColor: '#75A636' }}
        >
          <div className="w-full">
            <p className="text-3xl">Sensors</p>
            <ul className="list-disc text-xl ml-5">
              <li>Motion Sensors: Secure</li>
              <li>Gas Sensors: Stable</li>
              <li>Cameras: Enabled</li>
            </ul>
          </div>
          <img src="/images/sensor.png" />
        </div>
      </div>
      <img src="/images/electricity_rate.png" className="col-span-1" />
    </div>
    <Footer />
  </div>
);

export default Home;