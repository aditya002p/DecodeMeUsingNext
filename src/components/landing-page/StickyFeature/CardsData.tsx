import cartoon1 from "../../../../public/cartoon1.png";

// Define the card data interface
export interface CardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  backgroundColor: string;
  cardBackgroundColor: string;
  quotePosition: "topLeft" | "topRight";
  imagePosition: "topLeft" | "default";
}

// Sample card data array with 5 cards
export const cardsData: CardProps[] = [
  {
    id: 1,
    title: "Meet Decoding Me —",
    description:
      "India's 1st career exploration platform crafted just for school students like you.",
    image: cartoon1, // Using imported image
    backgroundColor: "#FFDD33", // Yellow background
    cardBackgroundColor: "#FFDD33", // Yellow for card
    quotePosition: "topRight",
    imagePosition: "topLeft",
  },
  {
    id: 2,
    title: "We're not your basic career counselor",
    description:
      "We go beyond traditional counseling to help you discover your true potential.",
    image: "/images/cartoon2.png",
    backgroundColor: "#FFF9E6", // Light cream background
    cardBackgroundColor: "#FFF9E6", // Light cream for card
    quotePosition: "topLeft",
    imagePosition: "default",
  },
  {
    id: 3,
    title: "Build your future with confidence",
    description:
      "Explore careers that match your interests, skills, and aspirations.",
    image: "/images/cartoon3.png",
    backgroundColor: "#FFE382", // Light yellow background
    cardBackgroundColor: "#FFE382", // Light yellow for card
    quotePosition: "topRight",
    imagePosition: "default",
  },
  {
    id: 4,
    title: "Personalized guidance for you",
    description:
      "Get customized recommendations based on your unique personality and preferences.",
    image: "/images/cartoon4.png",
    backgroundColor: "#FFF9E6", // Light cream background
    cardBackgroundColor: "#FFF9E6", // Light cream for card
    quotePosition: "topLeft",
    imagePosition: "default",
  },
  {
    id: 5,
    title: "Start your journey today",
    description:
      "Take the first step towards a fulfilling career path with Decoding Me.",
    image: "/images/cartoon5.png",
    backgroundColor: "#FFDD33", // Yellow background
    cardBackgroundColor: "#FFDD33", // Yellow for card
    quotePosition: "topRight",
    imagePosition: "default",
  },
];

// SVG for quote marks
export const QuoteLeftSVG = () => (
  <svg
    width="158"
    height="131"
    viewBox="0 0 158 131"
    fill="cardBackgroundColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M68.2657 0.542969C40.2677 2.50641 0.02212 6.96759 0 61.6911V130.543H62.4764V56.8764H41.7312C40.4171 37.2061 56.6469 32.1269 74.2961 28.228L68.2657 0.542969ZM151.969 0.542969C123.971 2.50641 83.7258 6.96772 83.7038 61.6911V130.543H146.18V56.8764H125.435C124.121 37.2061 140.351 32.1269 158 28.228L151.969 0.542969Z"
      fill="cardBackgroundColor"
    />
  </svg>
);

export const QuoteRightSVG = () => (
  <svg
    width="158"
    height="130"
    viewBox="0 0 158 130"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M89.7343 0C117.732 1.96344 157.978 6.42462 158 61.1481V130H95.5236V56.3334H116.269C117.583 36.6631 101.353 31.5839 83.7039 27.6851L89.7343 0ZM6.03059 0C34.0286 1.96344 74.2742 6.42475 74.2962 61.1481V130H11.8197V56.3334H32.5649C33.8793 36.6631 17.6491 31.5839 0 27.6851L6.03059 0Z"
      fill="#E6CB30"
    />
  </svg>
);

// export const quote = () => (
//   <svg
//     width="158"
//     height="131"
//     viewBox="0 0 158 131"
//     fill="cardBackgroundColor"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M68.2657 0.542969C40.2677 2.50641 0.02212 6.96759 0 61.6911V130.543H62.4764V56.8764H41.7312C40.4171 37.2061 56.6469 32.1269 74.2961 28.228L68.2657 0.542969ZM151.969 0.542969C123.971 2.50641 83.7258 6.96772 83.7038 61.6911V130.543H146.18V56.8764H125.435C124.121 37.2061 140.351 32.1269 158 28.228L151.969 0.542969Z"
//       fill=""
//     />
//   </svg>
// );
