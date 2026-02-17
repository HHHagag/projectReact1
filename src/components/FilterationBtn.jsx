import React from "react";

export default function FilterationBtn({ filter, categories, setFilter }) {
  return (
    <div className="d-flex justify-content-end mx-3 w-100 gap-3 ">
        
      {categories.map((category) => {
        return (
          <button
            key={category}
            className={`px-3 py-2 rounded-2 border border-dark bg-[#161616] ${
              filter === category ? "active" : ""
            }`}
            onClick={() => setFilter(category)}
          >
            {category}
            
          </button>
        );
      })}
    </div>
  );
}
