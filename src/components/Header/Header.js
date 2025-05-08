import { FaBars, FaYoutube, FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../../utils/constants";
import { useEffect, useState } from "react";

export const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSearchSuggestions = async () => {
    console.log(searchQuery)
    const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json = await data.json();
    setSuggestions(json[1])
   
  };

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex items-center col-span-1">
        <span className="mx-2">
          <FaBars
            className="cursor-pointer"
            onClick={() => toggleMenuHandler()}
          />
        </span>
        <span>
          <FaYoutube className="text-red-700" size={35} />
        </span>
      </div>
      <div className="col-span-10 px-10">
        <div>
        <input
          className="w-1/2 px-10 border border-gray-400 p-2 px-5 rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={()=> setShowSuggestions(true)}
          onBlur={()=> setShowSuggestions(false)}
        />
        <button className="py-2 px-5 bg-gray-100 border border-gray-400 rounded-r-full">
          🔍
        </button>
        </div>
        {showSuggestions && <div className="fixed bg-white py-2 px-2 w-[35rem] rounded-xl shadow-xl border border-gray-100">
          <ul>
            {suggestions?.map(s => (<li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-50">🔍 {s}</li>))}
            
            
          </ul>
        </div>}
      </div>
      <div className="col-span-1">
        <span>
          <FaUser />
        </span>
      </div>
    </div>
  );
};
