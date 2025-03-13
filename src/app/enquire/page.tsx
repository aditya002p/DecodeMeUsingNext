// app/enquire/page.tsx
import React from "react";
import dynamic from "next/dynamic";

// Use dynamic import with no SSR to avoid hydration issues with client components
const EnquiryPage = dynamic(() => import("@/components/landing-page/EnquiryPage"), {
});

export const metadata = {
  title: "Enquire - Decoding Me",
  description: "Build your career roadmap with Decoding Me",
};

export default function Enquire() {
  return <EnquiryPage />;
}