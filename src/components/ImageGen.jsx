import React, { useRef, useState } from "react";
import img_def from "../assets/img_def.png";
const apiKey = import.meta.env.VITE_API_KEY;

const ImageGen = () => {
  const [img_url, setImg_url] = useState(img_def);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const imageGenerator = async () => {
    if (inputRef.current.value === "") {
      return;
    }

    setLoading(true);
    setImg_url(img_def);

    try {
      const res = await fetch(
        "https://api-inference.huggingface.co/models/anthienlong/flux_image_enhancer",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
            "User-Agent": "Chrome",
          },
          body: JSON.stringify({ inputs: inputRef.current.value }),
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(`API Error: ${errorData.error || "Unknown error"}`);
      }

      const contentType = res.headers.get("Content-Type");

      if (contentType && contentType.includes("application/json")) {
        const data = await res.json();
        if (data && data.url) {
          setImg_url(data.url);
        } else {
          throw new Error("No image URL found in response.");
        }
      } else if (contentType && contentType.includes("image")) {
        const imageBlob = await res.blob();
        const imageUrl = URL.createObjectURL(imageBlob);
        setImg_url(imageUrl);
      } else {
        throw new Error("Unexpected response type");
      }
    } catch (error) {
      console.error("Error generating image:", error);
      alert(`Error generating image: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="cursor-pointer group relative flex flex-col items-center my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
        <div className="relative m-2.5 overflow-hidden text-black rounded-md">
          <a
            href={img_url}
            download="generated_image.jpg"
            className="flex justify-end mb-6"
          >
            <i className="fas fa-download"></i>
          </a>
          <img
            className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110 object-contain w-full"
            src={img_url}
            alt="generated"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              ref={inputRef}
              placeholder="Ask me anything..."
              className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent w-72"
            />
            <button
              className="px-4 py-2 bg-slate-500 text-white rounded-full shadow-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50 transition duration-200 ease-in-out flex items-center justify-center"
              onClick={imageGenerator}
              disabled={loading}
            >
              {loading ? (
                <i className="fas fa-spinner fa-spin"></i>
              ) : (
                <i className="fas fa-paper-plane"></i>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGen;
