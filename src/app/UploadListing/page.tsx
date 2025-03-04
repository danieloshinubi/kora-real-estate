"use client";
import { useEffect } from "react";

export default function UploadListings() {
  useEffect(() => {
    async function uploadListing() {
      const formData = new FormData();

      // Add images (from public folder)
      const imageUrls = ["/house1.jpg", "/house2.jpg"];

      for (const url of imageUrls) {
        const response = await fetch(url);
        const blob = await response.blob();
        formData.append("listingimg", blob, url.split("/").pop());
      }

      // Append other fields
      formData.append("name", "Kaduna Penthouse Suite");
      formData.append(
        "description",
        "Enjoy panoramic city views from this luxurious penthouse in Kaduna."
      );
      formData.append("price", "800000");
      formData.append("propertyType", "677e51d6c13019b903318551");
      formData.append("location[longitude]", "7.4165");
      formData.append("location[latitude]", "10.5105");
      formData.append("rating", "4.8");

      // Append amenities
      [
        "6799521254953fa2f52b75a4",
        "67bda4f2fe71004d6d127362",
        "67bda461fe71004d6d12735e",
      ].forEach((amenity, index) => {
        formData.append(`amenities[${index}]`, amenity);
      });

      try {
        const response = await fetch(
          "https://kora-service.onrender.com/listings",
          {
            method: "POST",
            body: formData,
          }
        );

        const result = await response.json();
        console.log("Upload successful:", result);
      } catch (error) {
        console.error("Upload failed:", error);
      }
    }

    uploadListing();
  }, []);

  return <div>eee</div>;
}
