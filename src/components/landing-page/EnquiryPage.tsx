"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoArrowBack, IoClose } from "react-icons/io5";
import logo from "../../../public/logo.svg";

interface FormData {
  studentName: string;
  contactNumber: string;
  studentGrade: string;
  query: string;
}

const EnquiryPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    studentName: "",
    contactNumber: "",
    studentGrade: "",
    query: "",
  });

  const [loading, setLoading] = useState<boolean>(false);  // State to manage loading status
  const [successMessage, setSuccessMessage] = useState<string | null>(null);  // Success message state
  const [errorMessage, setErrorMessage] = useState<string | null>(null);  // Error message state

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/save-to-sheet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("Your enquiry has been submitted successfully!");  // Success message
        setFormData({ studentName: "", contactNumber: "", studentGrade: "", query: "" });  // Clear form
      } else {
        setErrorMessage(data.error || "Something went wrong! Please try again.");  // Error message
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("An error occurred while submitting your enquiry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center max-h-fit bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 relative">
        {/* Back button */}
        <Link href="/" className="absolute left-6 top-6">
          <IoArrowBack className="text-gray-500 hover:text-gray-700" size={24} />
        </Link>

        {/* Close button */}
        <Link href="/" className="absolute right-6 top-6">
          <IoClose className="text-gray-500 hover:text-gray-700" size={24} />
        </Link>

        {/* Logo */}
        <div className="flex justify-center mb-4 mt-6">
          <Image src={logo} alt="Decoding Me Logo" width={85} height={40} className="h-10 w-auto" />
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Let`&apos`s Build Your Career</h1>
          <h1 className="text-2xl font-bold text-gray-800">Roadmap Together!</h1>
        </div>

        {/* Success/Error Message */}
        {successMessage && (
          <div className="text-green-500 text-center mb-4">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="text-red-500 text-center mb-4">{errorMessage}</div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Student Name */}
          <div>
            <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-1">
              Student Name
            </label>
            <input
              id="studentName"
              name="studentName"
              type="text"
              placeholder="Vihaan Nikam"
              value={formData.studentName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
            />
          </div>

          {/* Contact Number */}
          <div>
            <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Contact Number
            </label>
            <input
              id="contactNumber"
              name="contactNumber"
              type="tel"
              placeholder="8879871562"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
            />
          </div>

          {/* Student Grade */}
          <div>
            <label htmlFor="studentGrade" className="block text-sm font-medium text-gray-700 mb-1">
              Student Grade
            </label>
            <input
              id="studentGrade"
              name="studentGrade"
              type="text"
              placeholder="9th"
              value={formData.studentGrade}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
            />
          </div>

          {/* Query */}
          <div>
            <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-1">
              How can we help you?
            </label>
            <textarea
              id="query"
              name="query"
              rows={4}
              placeholder="Tell us about your career interests or queries"
              value={formData.query}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-base font-medium text-black bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              disabled={loading}  // Disable button during loading
            >
              {loading ? (
                <span>Submitting...</span>
              ) : (
                <>
                  Explore Careers Today
                  <svg
                    width="15"
                    height="9"
                    viewBox="0 0 15 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2"
                  >
                    <path
                      d="M11.4915 4.37827L8.99655 1.87741C8.95639 1.83938 8.90604 1.81384 8.85164 1.80392C8.79723 1.79399 8.74111 1.80011 8.69011 1.82151C8.63912 1.84292 8.59545 1.87869 8.56442 1.92448C8.5334 1.97026 8.51636 2.02408 8.51538 2.07938V4.12878H3.67404C3.55588 4.12878 3.44256 4.17572 3.35901 4.25927C3.27545 4.34282 3.22852 4.45614 3.22852 4.5743C3.22852 4.69246 3.27545 4.80578 3.35901 4.88933C3.44256 4.97289 3.55588 5.01982 3.67404 5.01982H8.51538V7.06923C8.51636 7.12452 8.5334 7.17834 8.56442 7.22413C8.59545 7.26991 8.63912 7.30569 8.69011 7.32709C8.74111 7.3485 8.79723 7.35461 8.85164 7.34469C8.90604 7.33476 8.95639 7.30923 8.99655 7.2712L11.4915 4.77033C11.5185 4.74531 11.54 4.71498 11.5547 4.68125C11.5694 4.64752 11.577 4.61111 11.577 4.5743C11.577 4.5375 11.5694 4.50109 11.5547 4.46735C11.54 4.43362 11.5185 4.4033 11.4915 4.37827Z"
                      fill="#2A2A2A"
                    />
                  </svg>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryPage;
