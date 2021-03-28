function Navbar() {
  return (
    <div className="w-full flex justify-between items-center p-5 text-blue-500 font-semibold">
      <div className="flex mr-5 items-center">
        <img className="mr-5 w-12 h-auto" src="/images/logo.png" />
        <a href="/sign-in">SIGN-IN</a>
      </div>
      <div className="flex w-full max-w-lg justify-between">
        <a href="/">HOME</a>
        <a href="/appliances">APPLIANCES</a>
        <a href="/content">CONTENT</a>
      </div>
    </div>
  );
}

export default Navbar;
