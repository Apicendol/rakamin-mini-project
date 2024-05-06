import React from "react";

const EmptyCard = () => {
  return (
    <div className="mt-4">
      <div className="bg-neutral-20 p-4 border border-neutral-40 rounded-md">
        <h1 className="text-neutral-70">
          No Task
        </h1>
      </div>
    </div>
  );
};

export default EmptyCard;