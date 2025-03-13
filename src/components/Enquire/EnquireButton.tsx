"use client";

import React from 'react';
import { useModal } from '../../app/context/ModalContext';
import Button from '../landing-page/Button';

interface EnquireButtonProps {
  text?: string;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'figma';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  showArrow?: boolean;
}

const EnquireButton: React.FC<EnquireButtonProps> = ({
  text = "Explore Careers Today",
  variant = "figma",
  size = "lg",
  className = "font-medium drop-shadow-lg",
  showArrow = true,
}) => {
  const { openEnquiryModal } = useModal();

  return (
    <Button 
      variant="figma" 
      size="sm" 
      className={className}
      onClick={openEnquiryModal}
    >
      {text}
      {showArrow && (
        <div className="ml-3 bg-white rounded-lg w-5 h-4 py-[3px] px-[3.19px]">
          <svg
            width="15"
            height="9"
            viewBox="0 0 15 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.4915 4.37827L8.99655 1.87741C8.95639 1.83938 8.90604 1.81384 8.85164 1.80392C8.79723 1.79399 8.74111 1.80011 8.69011 1.82151C8.63912 1.84292 8.59545 1.87869 8.56442 1.92448C8.5334 1.97026 8.51636 2.02408 8.51538 2.07938V4.12878H3.67404C3.55588 4.12878 3.44256 4.17572 3.35901 4.25927C3.27545 4.34282 3.22852 4.45614 3.22852 4.5743C3.22852 4.69246 3.27545 4.80578 3.35901 4.88933C3.44256 4.97289 3.55588 5.01982 3.67404 5.01982H8.51538V7.06923C8.51636 7.12452 8.5334 7.17834 8.56442 7.22413C8.59545 7.26991 8.63912 7.30569 8.69011 7.32709C8.74111 7.3485 8.79723 7.35461 8.85164 7.34469C8.90604 7.33476 8.95639 7.30923 8.99655 7.2712L11.4915 4.77033C11.5185 4.74531 11.54 4.71498 11.5547 4.68125C11.5694 4.64752 11.577 4.61111 11.577 4.5743C11.577 4.5375 11.5694 4.50109 11.5547 4.46735C11.54 4.43362 11.5185 4.4033 11.4915 4.37827Z"
              fill="#2A2A2A"
            />
          </svg>
        </div>
      )}
    </Button>
  );
};

export default EnquireButton;