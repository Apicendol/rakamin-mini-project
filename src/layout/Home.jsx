import React from "react";
import PlusCircle from "../assets/plus-circle.svg";
import Checklist from "../assets/check.svg";
import Button from "../components/ButtonBase";
import Dropdown from "../components/Dropdown";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="container mt-[68px] max-sm:mt-[92px] py-[24px]">
        <div className="grid gap-4 grid-flow-col pb-24">
          <div className="h-fit p-4 border rounded-md w-[320px] bg-primary-surface border-primary-border">
            <div>
              <h1 className="border rounded-md py-1 px-3 w-fit text-sm text-primary border-primary">
                Group Task
              </h1>
              <p className="text-neutral-90 mt-2 font-semibold text-sm">
                Month
              </p>
            </div>
            <div className="mt-4">
              <div className="flex flex-col gap-3">
                <div className="bg-neutral-20 p-4 border border-neutral-40 rounded-md">
                  <h1 className="font-bold text-neutral-90 mb-2">Test</h1>
                  <div className="border-b border-neutral-40 border-dashed"></div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-neutral-30">
                      <div className="bg-primary h-4 rounded-full w-[45%]"></div>
                    </div>
                    <p className="text-neutral-70">45%</p>
                    <img src={Checklist} alt='checklist' width={22} />
                    <div className="relative">
                      <Dropdown/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button
              variant="text"
              startIcon={PlusCircle}
              className="font-normal text-sm pl-0 mt-2"
            >
              New Task
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
