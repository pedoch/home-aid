import { Popover, Menu, MenuIcon } from "evergreen-ui";

function Navbar() {
  return (
    <div className="w-full flex justify-between items-center p-5 text-blue-500 font-semibold">
      <div className="flex mr-5 items-center">
        <img className="mr-5 w-12 h-auto" src="/images/logo.png" />
        <a href="/sign-in">SIGN-IN</a>
      </div>
      <div className="flex w-full max-w-lg justify-between sm-tab:hidden">
        <a href="/">HOME</a>
        <a href="/appliances">APPLIANCES</a>
        <a href="/content">CONTENT</a>
      </div>
      <Popover
        position="bottom-left"
        content={
          <Menu>
            <Menu.Group>
              <Menu.Item>
                <a href="/">HOME</a>
              </Menu.Item>
              <Menu.Item>
                <a href="/appliances">APPLIANCES</a>
              </Menu.Item>
              <Menu.Item>
                <a href="/content">CONTENT</a>
              </Menu.Item>
            </Menu.Group>
          </Menu>
        }
        className="hidden sm-tab:block"
      >
        <button className="p-4">
          <MenuIcon />
        </button>
      </Popover>
    </div>
  );
}

export default Navbar;
