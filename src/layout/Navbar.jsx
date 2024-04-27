import React, { useState } from "react";
import { ReactComponent as Plus } from "../assets/plus.svg";

const Navbar = () => {
  return (
    <header className="bg-white shadow fixed w-full z-50 top-0">
      <div className="container flex justify-between py-4">
        <div className="flex gap-4 items-center max-sm:justify-between max-sm:flex-col max-sm:gap-0 max-sm:items-start">
          <h1 className="text-lg font-bold">Product Roadmap</h1>
          <button className="h-fit py-1 px-4 text-center rounded-lg font-bold bg-primary shadow-sm text-white hover:bg-primary-border">
            <div className="flex items-center gap-2">
            <Plus className="inline-block"/>
              <span>Add New Group</span>
            </div>
          </button>

        </div>
        <div className="items-end">
          <button className="h-fit py-1 px-4 text-center rounded-lg font-bold border-2 border-neutral-40 shadow-sm text-neutral-100 hover:bg-neutral-30">
            <div>Logout</div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
