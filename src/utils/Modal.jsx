// imports
import * as React from 'react';

// components
import { ModalBackdrop } from './ModalBackdrop';

export const Modal = ({ closeModal, children }) => {
  // lockScroll kan brytas ut till en custom hook
  const lockScroll = React.useCallback(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  const unlockScroll = React.useCallback(() => {
    document.body.style.overflow = '';
  }, []);

  React.useEffect(() => {
    lockScroll();
  }, [lockScroll]);

  const onCloseModal = () => {
    closeModal();
    unlockScroll();
  };
  return (
    <ModalBackdrop>
      <div className="mx-auto mt-10 p-4 w-full max-w-7xl h-full md:h-auto">
        <div className="overflow-auto bg-white rounded-lg shadow dark:bg-gray-700 pb-10">
          <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Extra Large modal
            </h3>
            <button
              onClick={onCloseModal}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {children}
        </div>
      </div>
    </ModalBackdrop>
  );
};
