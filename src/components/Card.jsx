import React from "react";
import Checklist from "../assets/check.svg";
import Dropdown from "../components/Dropdown";

const Card = ({progress}) => {
  return (
    <div className="mt-4">
      <div className="flex flex-col gap-3">
        <div className="bg-neutral-20 p-4 border border-neutral-40 rounded-md">
          <h1 className="font-bold text-neutral-90 mb-2">Test</h1>
          <div className="border-b border-neutral-40 border-dashed"></div>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-44 bg-gray-200 rounded-full h-4 dark:bg-neutral-30">
              <div className="bg-primary h-4 rounded-full"
              style={{width: progress === 100 ? "100%" : `${progress}%`}}></div>
            </div>
            {progress === 100 ? (
              <img src={Checklist} alt="checklist" width={22} />
            ) : (
              <p className="text-neutral-70">
                {`${progress}%`}
              </p>
            )}
            <div className="relative">
              <Dropdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
