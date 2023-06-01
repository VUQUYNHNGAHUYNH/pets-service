import { FiPhoneCall } from "react-icons/fi";

const NavInfo = () => {
  return (
    <div className="flex flex-col">
      {/* phone icon */}
      <div className="flex gap-x-2  lg:gap-x-4 items-baseline justify-end ">
        <FiPhoneCall className="text-xl lg:text-2xl font-extrabold" />
        <div className="text-lg lg:text-xl font-bold">+1 234 567 890</div>
      </div>
      {/* open hours */}
      <div className="text-sm">
        <div className="hidden lg:flex">
          Opening Hours: Mon - Sun : 8am - 9pm
        </div>
        <div className="lg:hidden text-right">Mon - Sun : 8am - 9pm</div>
      </div>
    </div>
  );
};

export default NavInfo;
