// CardsData.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */

import cartoon1 from "../../../../public/cartoon1.png";
import cartoon2 from "../../../../public/cartoon2.png";
import cartoon3 from "../../../../public/cartoon3.png";
import cartoon4 from "../../../../public/cartoon4.png";
import cartoon5 from "../../../../public/cartoon5.png";
import cartoon6 from "../../../../public/cartoon6.png";
import cartoon7 from "../../../../public/cartoon7.svg";
import dots from "../../../../public/dots.png";

// Define the card data interface
export interface CardProps {
  id: number;
  title: string;
  description: string;
  image: any; // Changed to any for proper typing with Next.js images
  backgroundCardImage: any;
  cardBackgroundColor: string;
  quotePosition: "topLeft" | "topRight";
  imagePosition: "topLeft" | "default" | "left" | "right";
  hasBoldText?: boolean;
  boldTextPart?: string;
  regularTextPart?: string;
}

// Updated card data array to match the images
export const cardsData: CardProps[] = [
  {
    id: 1,
    title: "Meet Decoding Me-—",
    description:
      "India's 1st career exploration platform crafted just for school students like you.",
    image: cartoon1,
    backgroundCardImage: dots,
    cardBackgroundColor: "#FFDD33", // Yellow for card
    quotePosition: "topRight",
    imagePosition: "topLeft",
    hasBoldText: true,
    boldTextPart: "India's 1st career exploration platform",
    regularTextPart: " crafted just for school students like you.",
  },
  {
    id: 2,
    title: "",
    description: "We're not your basic career counselor.",
    image: cartoon2,
    backgroundCardImage: dots,
    cardBackgroundColor: "#FFF9E6", // Light cream for card
    quotePosition: "topLeft",
    imagePosition: "right",
  },
  {
    id: 3,
    title: "",
    description: "We're not here to tell you what to do;",
    image: cartoon3,
    backgroundCardImage: dots,
    cardBackgroundColor: "#442D00", // Brown for card
    quotePosition: "topRight",
    imagePosition: "right",
  },
  {
    id: 4,
    title: "",
    description: "We're here to let you experience every career!",
    image: cartoon4,
    backgroundCardImage: dots,
    cardBackgroundColor: "#FFDD33", // Yellow for card
    quotePosition: "topLeft",
    imagePosition: "left",
  },
  {
    id: 5,
    title: "",
    description:
      "Wanna explore fashion designer, CA, or robotics engineer? We got you.",
    image: cartoon5,
    backgroundCardImage: dots,
    cardBackgroundColor: "#FFF9E6", // Light cream for card
    quotePosition: "topRight",
    imagePosition: "right",
  },
  {
    id: 6,
    title: "",
    description:
      "We'll give you an experience of the real-world work done in each career, you can decide if it's your jam.",
    image: cartoon6,
    backgroundCardImage: dots,
    cardBackgroundColor: "#5C3D2E", // Brown for card
    quotePosition: "topLeft",
    imagePosition: "left",
  },
  {
    id: 7,
    title: "",
    description:
      "And yes, we keep it real— in simple, no-nonsense Saral Bhasha!",
    image: cartoon7,
    backgroundCardImage: dots,
    cardBackgroundColor: "#FFDD33", // Yellow for card
    quotePosition: "topRight",
    imagePosition: "right",
  },
];

// Helper function to extract the hex color from cardBackgroundColor
export const extractHexColor = (colorString: string): string => {
  // Split by '/' and take the first part which contains the hex color
  return colorString.split("/")[0];
};

// SVG for quote marks with dynamic color based on card background
export const QuoteLeftSVG = ({ color }: { color: string }) => {
  // Use the extracted hex color
  const hexColor = extractHexColor(color);
  return (
    <svg
      width="158"
      height="130"
      viewBox="0 0 158 131"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-12 h-10 sm:w-20 sm:h-16 md:w-32 md:h-24 lg:w-40 lg:h-32"
    >
      <path
        d="M68.2657 0.542969C40.2677 2.50641 0.02212 6.96759 0 61.6911V130.543H62.4764V56.8764H41.7312C40.4171 37.2061 56.6469 32.1269 74.2961 28.228L68.2657 0.542969ZM151.969 0.542969C123.971 2.50641 83.7258 6.96772 83.7038 61.6911V130.543H146.18V56.8764H125.435C124.121 37.2061 140.351 32.1269 158 28.228L151.969 0.542969Z"
        fill={hexColor}
      />
    </svg>
  );
};

export const QuoteRightSVG = ({ color }: { color: string }) => {
  // Use the extracted hex color
  const hexColor = extractHexColor(color);
  return (
    <svg
      width="158"
      height="130"
      viewBox="0 0 158 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-12 h-10 sm:w-20 sm:h-16 md:w-32 md:h-24 lg:w-40 lg:h-32"
    >
      <path
        d="M89.7343 0C117.732 1.96344 157.978 6.42462 158 61.1481V130H95.5236V56.3334H116.269C117.583 36.6631 101.353 31.5839 83.7039 27.6851L89.7343 0ZM6.03059 0C34.0286 1.96344 74.2742 6.42475 74.2962 61.1481V130H11.8197V56.3334H32.5649C33.8793 36.6631 17.6491 31.5839 0 27.6851L6.03059 0Z"
        fill={hexColor}
      />
    </svg>
  );
};
