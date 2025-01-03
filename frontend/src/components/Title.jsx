import React from "react";

const Title = ({ heading, subHeading }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className="text-gra-500">
        {heading}{" "}
        <span className="text-gray-700 font-medium">{subHeading}</span>
      </p>
      <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
    </div>
  );
};

export default Title;
