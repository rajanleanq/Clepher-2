import { X } from 'lucide-react';
import React from 'react';
import { Button } from '../../atom/button/button';

export default function Modal({ children, onClose }: { children: React.ReactNode; onClose?: () => void }) {
  return (
    <div
      className="fixed inset-0 z-20 flex items-center justify-center"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-black-primary bg-opacity-50 transition-opacity cursor-pointer"
        aria-hidden="true"
        onClick={onClose}
      ></div>

      <div className="relative z-20 w-full max-w-lg p-4 bg-white rounded-lg shadow-xl">
        <Button className='hover:bg-gray-50 px-2 absolute right-1 top-1 text-13' onClick={onClose}><X className='w-5 h-5'/></Button>
        <div className="bg-white mt-4">
          {children}
        </div>
      </div>
    </div>
  );
}
