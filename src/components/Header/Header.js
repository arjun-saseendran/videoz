import { FaBars, FaYoutube, FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../utils/appSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex items-center col-span-1">
        <span className="mx-2">
          <FaBars className="cursor-pointer" onClick={() => toggleMenuHandler()} />
        </span>
        <span>
          <FaYoutube className="text-red-700" size={35} />
        </span>
      </div>
      <div className="col-span-10 text-center">
        <input
          className="w-1/2 px-10 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="py-2 px-5 bg-gray-100 border border-gray-400 rounded-r-full">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <span>
          <FaUser />
        </span>
      </div>
    </div>
  );
};
