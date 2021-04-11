import Head from "next/head";
import React from "react";
import Footer from "../components/common/footer";
import Navbar from "../components/common/navbar";
import { useRouter } from "next/router";

const AddDevice = () => {
  const router = useRouter();
  return (
    <div className="w-full min-h-screen flex flex-col px-2 overflow-x-hidden">
      <Head>
        <title>Add Device</title>
      </Head>
      <Navbar />
      <div className="w-full min-h-full grid grid-cols-2 space-x-2 px-10 pt-20 lg-tab:grid-cols-1 lg-tab:px-2 sm-tab:pt-5">
        <div className="col-span-1 w-full max-w-2xl flex flex-col mx-auto">
          <div className="w-full text-2xl font-semibold text-blue-500 flex justify-between">
            <span className="flex">Add Device</span>
          </div>
          <hr className="bg-blue-500 border-0 h-1 w-full max-w-xs mb-5" />
          <div className="w-full flex items-center">
            <input
              className="w-full p-2 border border-black"
              placeholder="Room Name"
            />
            <img
              src="/images/save.png"
              className="ml-2 h-6 w-6 cursor-pointer"
            />
          </div>
          <div className="w-full text-2xl font-semibold flex justify-between mt-10 mb-5">
            <span className="text-xl">Add Device:</span>
            <img src="/images/plus.png" className="w-8 h-auto cursor-pointer" />
          </div>
          <div className="w-full text-xl font-semibold flex justify-between mb-6">
            <span>Lights</span>
            <button className="px-5 py-1 text-white bg-blue-500">ADD</button>
          </div>
          <div className="w-full text-xl font-semibold flex justify-between mb-6">
            <span>A/C</span>
            <button className="px-5 py-1 text-white bg-blue-500">ADD</button>
          </div>
          <div className="w-full text-xl font-semibold flex justify-between mb-6">
            <span>Televison</span>
            <button className="px-5 py-1 text-white bg-blue-500">ADD</button>
          </div>
          <div className="w-full text-xl font-semibold flex justify-between mb-6">
            <span>Fan</span>
            <button className="px-5 py-1 text-white bg-blue-500">ADD</button>
          </div>
        </div>
        <img
          src="/images/add-device.png"
          className="col-span-1 lg-tab:hidden"
        />
      </div>
      <Footer />
    </div>
  );
};

export default AddDevice;
