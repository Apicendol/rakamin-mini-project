import React from "react";
import CardGroup from "../components/CardGroup";

const CardColor = [
  ["bg-primary-surface", "border-primary-border", "text-primary", "border-primary"],
  ["bg-secondary-surface", "border-secondary-border", "text-secondary", "border-secondary"],
  ["bg-danger-surface", "border-danger-border", "text-danger", "border-danger"],
  ["bg-success-surface", "border-success-border", "text-success", "border-success"],
];

const totalCardGroup = Array(4).fill(0);

const generateCardGroup = (kanbanColor) => {
  return totalCardGroup.map((_, index) => {
    return (
      <CardGroup
        kanbanColor={kanbanColor[index % kanbanColor.length]}
        key={index}
      />
    );
  });
};

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="container mt-[68px] max-sm:mt-[92px] py-[24px]">
        <div className="grid gap-4 grid-flow-col pb-24">
          {generateCardGroup(CardColor)}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
