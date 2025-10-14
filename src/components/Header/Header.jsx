import { Input, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

function Header() {
  return (
    <div className="bg-gray-100 shadow-sm  w-full z-10 h-16">
      <div className="flex flex-wrap items-center justify-between max-w-7xl mx-auto gap-3">
        {/* Left - Logo */}
        <div className="flex-shrink-0">
          <img
            src="images/logo.png"
            alt="Logo"
            className="w-16 h-16 md:w-20 md:h-20 object-contain"
          />
        </div>

        {/* Middle - Search */}
        <div className="flex-1 w-full sm:w-auto max-w-md mx-auto order-last sm:order-none">
          <Input.Search
            placeholder="Search..."
            allowClear
            enterButton
            className="w-full"
          />
        </div>

        {/* Right - Profile */}
        <div className="flex items-center gap-3">
          <Avatar
            size="large"
            icon={<UserOutlined />}
            className="cursor-pointer hover:opacity-80 transition"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
