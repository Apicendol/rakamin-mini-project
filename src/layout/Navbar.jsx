import React, { useState } from "react";
import Modal from "../components/Modal";
import Button from '../components/ButtonBase';
import PlusIcon from '../assets/plus.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState({
    groupName: "",
    desc: "",
  });

  const onOpenModal = () => {
    setIsOpen(true)
  }

  const handleInput = (e, field) => {
    setInput({ ...input, [field]: e.target.value });
  };

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
            onChange={(e) => handleInput(e, "groupName")}
            value={input.groupName}
          />
        </div>
        <div className="mt-5">
          <p className="w-full block text-neutral-90 mb-2">Description</p>
          <textarea
            rows={3}
            type="text"
            placeholder="Description"
            className="w-full py-2 px-4 rounded-lg bg-white border-2 border-neutral-40 focus:outline-none focus:border-primary focus:caret-primary"
            onChange={(e) => handleInput(e, "desc")}
            value={input.desc}
          />
        </div>
      </>
    ),
    actionButton: (
      <Button variant='primary' type='button'>
        Submit
      </Button>
    ),
  };

  return (
    <div>
      <header className="bg-white shadow fixed w-full z-50 top-0">
        <div className="container flex justify-between py-4">
          <div className="flex gap-4 items-center max-sm:justify-between max-sm:flex-col max-sm:gap-0 max-sm:items-start">
            <h1 className="text-lg font-bold">Product Roadmap</h1>
            <Button startIcon={PlusIcon} onClick={onOpenModal}>
              Add New Group
            </Button>
          </div>
          <Button variant='neutral'>
            Logout
          </Button>
        </div>
      </header>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} modalConfig={modalConfig} />
    </div>
  );
};

export default Navbar;