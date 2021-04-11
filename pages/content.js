import Head from "next/head";
import React from "react";
import Footer from "../components/common/footer";
import Navbar from "../components/common/navbar";
import { useRouter } from "next/router";

const Content = () => {
  const router = useRouter();
  return (
    <div className="w-full min-h-screen flex flex-col px-2 overflow-x-hidden">
      <Head>
        <title>Content</title>
      </Head>
      <Navbar />
      <div className="w-full min-h-full grid grid-cols-2 space-x-2 px-10 pt-20 lg-tab:grid-cols-1 lg-tab:px-2 sm-tab:pt-5">
        <div className="col-span-1 w-full max-w-2xl flex flex-col mx-auto">
          <div className="w-full text-2xl font-semibold text-blue-500 flex justify-between">
            <span className="flex">
              User Details{" "}
              <img src="/images/edit.png" className="ml-5 h-8 w-auto mt-2" />
            </span>
          </div>
          <hr className="bg-blue-500 border-0 h-1 w-full max-w-xs mb-5" />
          <div className="flex text-xl mb-5">
            <p className="font-semibold mr-2">Name:</p>
            <p>Timothy Henshaw</p>
          </div>
          <div className="flex text-xl mb-5">
            <p className="font-semibold mr-2">Phone:</p>
            <p>0901-345-9980</p>
          </div>
          <div className="flex text-xl mb-5">
            <p className="font-semibold mr-2">Address:</p>
            <p className="w-full max-w-xs">
              Road Z, Unit A2, Nikon Estate, Rassberry Cove, Bella Russe
              Plataue. Ohio.
            </p>
          </div>
          <div className="flex text-xl mb-5">
            <p className="font-semibold mr-2">Email:</p>
            <p>timothyhenny@gmail.com</p>
          </div>
          <hr className="bg-black border-0 h-1 w-full mt-5 my-10" />
          <div className="w-full text-2xl font-semibold mb-2 text-blue-500 flex justify-between">
            <span className="flex">Contact Information</span>
          </div>
          <hr className="bg-blue-500 border-0 h-1 w-full max-w-xs mb-5" />
          <div className="flex text-xl mb-5">
            <img src="/images/phone.png" className="h-8 w-auto mr-2" />
            <p>0803-445-7764</p>
          </div>
          <div className="flex text-xl flex-wrap">
            <img src="/images/mail.png" className="h-8 w-auto mr-2" />
            <p>homecomplaint@homeaid.com</p>
          </div>
        </div>
        <img src="/images/settings.png" className="col-span-1 lg-tab:hidden" />
      </div>
      <Footer />
    </div>
  );
};

export default Content;
