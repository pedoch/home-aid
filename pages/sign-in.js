import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import Head from "next/head";
import { useRouter } from "next/router";

function SignIn() {
  const router = useRouter();
  return (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
      <Head>
        <title>Sign In</title>
      </Head>
      {/* <Navbar /> */}
      <img src="/images/circuit1.png" className="absolute tab:hidden" />
      <img
        src="/images/circuit2.png"
        className="absolute right-0 top-1/4 tab:hidden"
      />
      <img src="/images/circuit1.png" className="absolute top-2/4 tab:hidden" />
      <img
        src="/images/circuit2.png"
        className="absolute right-0 top-3/4 tab:hidden"
      />
      <div className="w-full min-h-full flex flex-col pt-20 absolute px-2 tab:relative">
        <img src="/images/logo.png" className="mx-auto" />
        <span className="mx-auto text-4xl my-10 font-semibold text-blue-500">
          LOG IN
        </span>
        <form
          className="w-full max-w-3xl flex flex-col items-center mx-auto tab:max-w-xl"
          onSubmit={(e) => {
            e.preventDefault();
            router.push("/");
          }}
        >
          <input
            className="p-4 rounded w-full border border-black mb-5"
            placeholder="E-Mail:"
            type="email"
            required
          />
          <input
            className="p-4 rounded w-full border border-black mb-5"
            placeholder="Password:"
            type="password"
            required
          />
          <button
            className="bg-blue-500 p-4 rounded w-80 text-white phone:w-full"
            type="submit"
          >
            Login
          </button>
        </form>
        <span className="mx-auto mt-2">
          Don't have an account?{" "}
          <a href="/sign-up" className="text-blue-500 font-bold">
            Sign-Up
          </a>
        </span>
        <img src="/images/log_in.png" className="mx-auto mt-10 phone:hidden" />
      </div>
      <Footer />
    </div>
  );
}

export default SignIn;
