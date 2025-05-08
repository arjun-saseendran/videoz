import { FaUser } from "react-icons/fa";

export const Comment = ({ data }) => {
  return (
    <div className="flex items-center  bg-gray-100 shadow-sm rounded p-2 my-2">
     
       <div className="border border-black p-2 rounded-full">
       <FaUser size={20} />
       </div>
    
      <div className="px-3">
        <p className="font-bold">{data.name}</p>
        <p>{data.text}</p>
      </div>
    </div>
  );
};
