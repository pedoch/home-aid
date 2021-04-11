import Head from "next/head";
import React from "react";
import Footer from "../components/common/footer";
import Navbar from "../components/common/navbar";
import { useRouter } from "next/router";

const ActiveAreas = () => {
  const router = useRouter();
  return (
    <div className="w-full min-h-screen flex flex-col px-2 overflow-x-hidden">
      <Head>
        <title>Active Areas</title>
      </Head>
      <Navbar />
      <div className="w-full min-h-full grid grid-cols-2 space-x-2 px-10 pt-20 lg-tab:grid-cols-1 lg-tab:px-2 sm-tab:pt-5">
        <div className="col-span-1 w-full max-w-2xl flex flex-col mx-auto">
          <div className="w-full text-2xl font-semibold text-blue-500 flex justify-between">
            <span>AREAS</span>
            <span>Status</span>
          </div>
          <hr className="bg-blue-500 border-0 h-1 w-full max-w-xs mb-5" />
          <div className="w-full text-xl font-semibold flex justify-between mb-6">
            <span>Living Room</span>
            <span className="text-green-500">Active</span>
          </div>
          <div className="w-full text-xl font-semibold flex justify-between mb-6">
            <span>Master's Bedroom</span>
            <span className="text-green-500">Active</span>
          </div>
          <div className="w-full text-xl font-semibold flex justify-between mb-6">
            <span>Kitchen</span>
            <span className="text-red-500">Inactive</span>
          </div>
          <div className="w-full text-xl font-semibold flex justify-between mb-6">
            <span>Timmy's Room</span>
            <span className="text-red-500">Inactive</span>
          </div>
          <div className="w-full text-xl font-semibold flex justify-between mb-6">
            <span>Stacy's Room</span>
            <span className="text-red-500">Inactive</span>
          </div>
          <div className="w-full text-xl font-semibold flex justify-between mb-6 mt-5">
            <span className="text-blue-500 flex items-center">
              ADD AREAS <img src="/images/add_area.png" className="ml-16" />
            </span>
          </div>
        </div>
        <img
          src="/images/active-areas.png"
          className="col-span-1 lg-tab:hidden"
        />
      </div>
      <Footer />
    </div>
  );
};

export default ActiveAreas;
