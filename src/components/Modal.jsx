import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Close from "../assets/close.svg";
import Button from '../components/ButtonBase';

function Modal({ isOpen, setIsOpen, modalConfig }) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="z-[100] container justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none"
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="container justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-[420px]">
                  <div className="w-full border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                    <div className="flex items-center justify-between p-5 rounded-t">
                      <Dialog.Title as="h3" className="text-lg font-semibold">
                        {modalConfig.icon ? modalConfig.icon : null}
                        {modalConfig.title ? modalConfig.title : null}
                      </Dialog.Title>
                      <Button
                        variant='text'
                        startIcon={Close}
                        className='hover:bg-neutral-30 px-1'
                        onClick={() => {
                            setIsOpen(false);
                          }
                        }
                      />
                    </div>
                    <div className="relative py-1 px-6 flex-auto">{modalConfig.content ? modalConfig.content : null}</div>

                    <div className="flex items-center justify-end p-6 rounded-b gap-3">
                      <Button variant='neutral' type='button' onClick={() => {
                          setIsOpen(false);
                        }}>
                        Cancel
                      </Button>
                      {modalConfig.actionButton ? modalConfig.actionButton : null}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Modal;