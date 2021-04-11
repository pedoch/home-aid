import Head from "next/head";
import React from "react";
import Footer from "../components/common/footer";
import Navbar from "../components/common/navbar";
import { useRouter } from "next/router";

const RiskManagement = () => {
  const router = useRouter();
  return (
    <div className="w-full min-h-screen flex flex-col px-2 overflow-x-hidden">
      <Head>
        <title>Risk Management</title>
      </Head>
      <Navbar />
      <div className="w-full min-h-full grid grid-cols-2 space-x-2 px-10 pt-20 lg-tab:grid-cols-1 lg-tab:px-2 sm-tab:pt-5">
        <div className="col-span-1 w-full max-w-2xl flex flex-col mx-auto">
          <div className="w-full text-2xl font-semibold text-blue-500 flex justify-between">
            <span className="flex">Risk Management</span>
          </div>
          <hr className="bg-blue-500 border-0 h-1 w-full max-w-xs mb-5" />
          <p className="font-bold text-xl">LIVING ROOM</p>

          <div className="w-full text-2xl font-semibold flex justify-between">
            <div>
              <span className="text-xl">Devices:</span>
              <hr className="bg-black border-0 h-1 w-20 mt-2 my-5" />
            </div>
            <span>Status</span>
          </div>
          <div className="w-full text-xl font-semibold flex justify-between mb-6">
            <span>Lights</span>
            <div className="bg-gray-300 py-1">
              <span className="py-1 px-2 bg-green-500 mr-11 text-white">
                ON
              </span>
            </div>
          </div>
          <div className="w-full text-xl font-semibold flex justify-between mb-6">
            <span>A/C</span>
            <div className="bg-gray-300 py-1">
              <span className="py-1 px-2 bg-red-500 ml-10 text-white">OFF</span>
            </div>
          </div>
          <div className="w-full text-xl font-semibold flex justify-between mb-6">
            <span>Televison</span>
            <div className="bg-gray-300 py-1">
              <span className="py-1 px-2 bg-green-500 mr-11 text-white">
                ON
              </span>
            </div>
          </div>
          <div className="w-full text-xl font-semibold flex justify-between mb-6">
            <span>Fan</span>
            <div className="bg-gray-300 py-1">
              <span className="py-1 px-2 bg-red-500 ml-10 text-white">OFF</span>
            </div>
          </div>
        </div>
        <img src="/images/risk.png" className="col-span-1 lg-tab:hidden" />
      </div>
      <Footer />
    </div>
  );
};

export default RiskManagement;
