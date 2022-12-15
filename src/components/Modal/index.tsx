import * as Dialog from "@radix-ui/react-dialog";
import React, { Dispatch, ReactNode, SetStateAction } from "react";

interface ModalProps {
  triggerButton: ReactNode;
  modalTitle: string;
  children: ReactNode;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal = (props: ModalProps) => {
  return (
    <Dialog.Root open={props.open} onOpenChange={props.setOpen}>
      <Dialog.Trigger asChild>{props.triggerButton}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed bg-black/60 inset-0" />
        <Dialog.Content
          onEscapeKeyDown={(event) => event.preventDefault()}
          onPointerDownOutside={(event) => event.preventDefault()}
          className="bg-white fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-md p-6 w-[90vw] max-w-xl"
        >
          <Dialog.Title className="text-3xl font-black mb-8 text-purple-800">
            {props.modalTitle}
          </Dialog.Title>

          {props.children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
