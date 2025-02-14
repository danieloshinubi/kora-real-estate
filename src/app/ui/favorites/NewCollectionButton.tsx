// NewCollectionButton.tsx
import React from "react";

const NewCollectionButton = () => {
  return (
    <button className="bg-orange-600 text-white px-4 py-2 rounded-md shadow-md flex items-center gap-2 hover:bg-orange-700">
      <span className="text-lg">➕</span> New Collection
    </button>
  );
};

export default NewCollectionButton;