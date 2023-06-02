import React, { forwardRef } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { OnedriveFile } from "@lib/onedriveApi";
import { MediaCard } from "../MediaCard";

interface ModalProps {
  mediaFile: OnedriveFile;
}

const Modal = forwardRef<HTMLButtonElement, ModalProps>(
  ({ mediaFile }, ref) => (
    <div className="fixed">
      <Dialog.Root>
      <Dialog.Trigger asChild>
        <button ref={ref}></button>
      </Dialog.Trigger>
      <Dialog.Portal className="w-full">
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent backdrop-blur-md rounded-lg">
          <MediaCard mediaFile={mediaFile} />

          <Dialog.Close asChild className="fixed top-2 right-2">
            <button
              className="IconButton bg-slate-700 p-0 md:p-2 dark:bg-white rounded-full"
              aria-label="Close"
            >
              <XIcon className="h-6 w-6 text-white dark:text-slate-900" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
    </div>
  )
);

Modal.displayName = "Modal";

export default Modal;
