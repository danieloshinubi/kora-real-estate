// NewCollectionButton.tsx
import React from "react";
import { cabin } from "../fonts";
import { MdAddComment } from "react-icons/md";

const NewCollectionButton = () => {
  return (
    <button className={`${cabin.className} bg-orange-600 text-white px-4 py-2 rounded-md shadow-md flex items-center gap-2 hover:bg-orange-700`}>
      <span className="text-lg"><MdAddComment/></span> New Collection
    </button>
  );
};

export default NewCollectionButton;