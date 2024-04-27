import React, { useState } from "react";
import { ReactComponent as Plus } from "../assets/plus.svg";
import Modal from "../components/Modal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState({
    taskName: "",
    progress: "",
  });

  const handleInput = (e, field) => {
    setInput({ ...input, [field]: e.target.value });
  };

  console.log(input);

  const modalConfig = {
    title: "Add New Group",
    content: (
      <>
        <div>
          <p className="w-full block text-neutral-90 mb-2">Title</p>
          <input
            type="text"
            placeholder="Title"
            className="w-full py-2 px-4 rounded-lg bg-white border-2 border-neutral-40 focus:outline-none focus:border-primary focus:caret-primary"
            onChange={(e) => handleInput(e, "title")}
            value={input.title}
          />
        </div>
        <div className="mt-5">
          <p className="w-full block text-neutral-90 mb-2">Description</p>
          <textarea
            rows={3}
            type="text"
            placeholder="Description"
            className="w-full py-2 px-4 rounded-lg bg-white border-2 border-neutral-40 focus:outline-none focus:border-primary focus:caret-primary"
            onChange={(e) => handleInput(e, "description")}
            value={input.description}
          />
        </div>
      </>
    ),
    actionButton: (
      <button
        type="button"
        className="h-fit py-1 px-4 text-center rounded-lg font-bold bg-primary shadow-sm text-white hover:bg-primary-dark border-2 border-primary hover:border-primary-dark"
        onClick={() => {}}
      >
        <p>Submit</p>
      </button>
    ),
  };

  return (
    <div>
      <header className="bg-white shadow fixed w-full z-50 top-0">
        <div className="container flex justify-between py-4">
          <div className="flex gap-4 items-center max-sm:justify-between max-sm:flex-col max-sm:gap-0 max-sm:items-start">
            <h1 className="text-lg font-bold">Product Roadmap</h1>
            <button
              className="h-fit py-1 px-4 text-center rounded-lg font-bold bg-primary shadow-sm text-white hover:bg-primary-border"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <div className="flex items-center gap-2">
                <Plus className="inline-block" />
                <div>Add New Group</div>
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
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} modalConfig={modalConfig} />
    </div>
  );
};

export default Navbar;