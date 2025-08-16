import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import IndustrySelector from "../common/IndustrySelector";
import {
  completeSellerOnboarding,
  updateCurrentSellerField,
} from "../redux/sellerSlice";
import RangeSlider from "../common/RangeSlider";
import TextArea from "../common/TextArea";
import LocationSelector from "../common/LocationSelector";

const SellerOnboarding: React.FC = () => {
  const dispatch = useDispatch();
  const seller = useSelector((state: RootState) => state.sellers.currentSeller);
<<<<<<< HEAD
=======

>>>>>>> 664d34291080c818d842564d7d64fbc4e4f558a7
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = <K extends keyof typeof seller>(
    field: K,
    value: (typeof seller)[K]
  ) => {
    dispatch(updateCurrentSellerField({ field, value }));
<<<<<<< HEAD
    setErrors((prev) => ({ ...prev, [field]: "" })); // clear error on change
=======
    setErrors((prev) => ({ ...prev, [field]: "" })); // Clear error on change
>>>>>>> 664d34291080c818d842564d7d64fbc4e4f558a7
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!seller.name?.trim() || seller.name.trim().length < 2) {
      newErrors.name = "Business name must be at least 2 characters.";
    }
    if (!seller.description?.trim() || seller.description.trim().length < 10) {
      newErrors.description = "Description must be at least 10 characters.";
    }
<<<<<<< HEAD
    if (!seller.reasonForSelling?.trim() || seller.reasonForSelling.trim().length < 10) {
      newErrors.reasonForSelling = "Reason for selling must be at least 10 characters.";
=======
    if (
      !seller.reasonForSelling?.trim() ||
      seller.reasonForSelling.trim().length < 10
    ) {
      newErrors.reasonForSelling =
        "Reason for selling must be at least 10 characters.";
>>>>>>> 664d34291080c818d842564d7d64fbc4e4f558a7
    }
    if (!seller.industries || seller.industries.length === 0) {
      newErrors.industries = "Select at least one industry.";
    }
<<<<<<< HEAD
    if (!seller.revenueRange || seller.revenueRange.length !== 2 || seller.revenueRange[0] < 0 || seller.revenueRange[1] <= seller.revenueRange[0]) {
      newErrors.revenueRange = "Please select a valid revenue range.";
    }
    if (!seller.profitMargin || seller.profitMargin.length !== 2 || seller.profitMargin[0] < 0 || seller.profitMargin[1] <= seller.profitMargin[0]) {
      newErrors.profitMargin = "Please select a valid profit margin range.";
    }
    if (!seller.expectedDealSize || seller.expectedDealSize.length !== 2 || seller.expectedDealSize[0] <= 0 || seller.expectedDealSize[1] <= seller.expectedDealSize[0]) {
=======
    if (
      !seller.revenueRange ||
      seller.revenueRange.length !== 2 ||
      seller.revenueRange[0] < 0 ||
      seller.revenueRange[1] <= seller.revenueRange[0]
    ) {
      newErrors.revenueRange = "Please select a valid revenue range.";
    }
    if (
      !seller.profitMargin ||
      seller.profitMargin.length !== 2 ||
      seller.profitMargin[0] < 0 ||
      seller.profitMargin[1] <= seller.profitMargin[0]
    ) {
      newErrors.profitMargin = "Please select a valid profit margin range.";
    }
    if (
      !seller.expectedDealSize ||
      seller.expectedDealSize.length !== 2 ||
      seller.expectedDealSize[0] <= 0 ||
      seller.expectedDealSize[1] <= seller.expectedDealSize[0]
    ) {
>>>>>>> 664d34291080c818d842564d7d64fbc4e4f558a7
      newErrors.expectedDealSize = "Please enter a valid deal size range.";
    }
    if (!seller.location || seller.location.trim() === "") {
      newErrors.location = "Location is required.";
    }

    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    dispatch(completeSellerOnboarding());
    alert("Seller Onboarding Complete!");
  };

  return (
    <div
      style={{
<<<<<<< HEAD
        maxWidth: "700px",
        margin: "2rem auto",
        padding: "2rem",
        fontFamily: "Inter, sans-serif",
        backgroundColor: "#eaf6ff",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "#333" }}>
        Seller Onboarding
      </h2>

      {/* Business Name */}
      <div style={{ marginBottom: "1.5rem", width: "90%" }}>
        <label style={{ display: "block", fontWeight: "600", marginBottom: "0.5rem", color: "#222" }}>
=======
        maxWidth: "600px",
        margin: "auto",
        padding: "1rem",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <h2>Seller Onboarding</h2>

      {/* Business Name */}
      <div style={{ marginBottom: "1rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>
>>>>>>> 664d34291080c818d842564d7d64fbc4e4f558a7
          Business Name
        </label>
        <input
          type="text"
          value={seller.name}
          onChange={(e) => handleChange("name", e.target.value)}
<<<<<<< HEAD
          style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc", fontSize: "1rem" }}
        />
        {errors.name && <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.name}</p>}
      </div>

      {/* Description */}
      <div style={{ marginBottom: "1.5rem", width: "90%" }}>
        <TextArea
          label="Description"
          value={seller.description}
          placeholder="Short Description"
          onChange={(val: string) => handleChange("description", val)}
        />
        {errors.description && <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.description}</p>}
      </div>

      {/* Reason for Selling */}
      <div style={{ marginBottom: "1.5rem", width: "90%" }}>
        <TextArea
          label="Reason for Selling"
          value={seller.reasonForSelling}
          placeholder="Why are you selling?"
          onChange={(val: string) => handleChange("reasonForSelling", val)}
        />
        {errors.reasonForSelling && <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.reasonForSelling}</p>}
      </div>

      {/* Industry */}
      <div style={{ marginBottom: "1.5rem", width: "90%" }}>
        <IndustrySelector
          selectedIndustries={seller.industries}
          onChange={(industries) => handleChange("industries", industries)}
        />
        {errors.industries && <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.industries}</p>}
      </div>

      {/* Revenue Range */}
      <div style={{ marginBottom: "1.5rem", width: "90%" }}>
        <RangeSlider
          label="Revenue Range"
          min={0}
          max={1000000}
          step={50000}
          value={seller.revenueRange}
          onChange={(revenue) => handleChange("revenueRange", revenue)}
          isRange
          unit="$"
        />
        {errors.revenueRange && <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.revenueRange}</p>}
      </div>

      {/* Profit Margin */}
      <div style={{ marginBottom: "1.5rem", width: "90%" }}>
        <RangeSlider
          label="Profit Margin"
          min={0}
          max={100}
          value={seller.profitMargin}
          onChange={(margin) => handleChange("profitMargin", margin)}
          isRange
          unit="%"
        />
        {errors.profitMargin && <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.profitMargin}</p>}
      </div>

      {/* Expected Deal Size */}
      <div style={{ marginBottom: "1.5rem", width: "90%" }}>
        <RangeSlider
          label="Expected Deal Size"
          min={50000}
          max={10000000}
          step={10000}
          value={seller.expectedDealSize}
          onChange={(dealSize) => handleChange("expectedDealSize", dealSize)}
          isRange
          unit="$"
        />
        {errors.expectedDealSize && <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.expectedDealSize}</p>}
      </div>

      {/* Location */}
      <div style={{ marginBottom: "1.5rem", width: "90%" }}>
        <LocationSelector
          value={seller.location}
          onChange={(location) => handleChange("location", location)}
        />
        {errors.location && <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.location}</p>}
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        style={{
          padding: "12px 25px",
          marginTop: "1.5rem",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "1rem",
          cursor: "pointer",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
=======
          style={{ width: "100%", padding: "8px" }}
        />
        {errors.name && (
          <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.name}</p>
        )}
      </div>

      {/* Description */}
      <TextArea
        label="Description"
        value={seller.description}
        placeholder="Short description of your business"
        onChange={(val: string) => handleChange("description", val)}
      />
      {errors.description && (
        <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.description}</p>
      )}

      {/* Reason for Selling */}
      <TextArea
        label="Reason for Selling"
        value={seller.reasonForSelling}
        placeholder="Why are you selling?"
        onChange={(val: string) => handleChange("reasonForSelling", val)}
      />
      {errors.reasonForSelling && (
        <p style={{ color: "red", fontSize: "0.9rem" }}>
          {errors.reasonForSelling}
        </p>
      )}

      {/* Industry */}
      <IndustrySelector
        selectedIndustries={seller.industries}
        onChange={(industries) => handleChange("industries", industries)}
      />
      {errors.industries && (
        <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.industries}</p>
      )}

      {/* Revenue Range */}
      <RangeSlider
        label="Revenue Range"
        min={0}
        max={1000000}
        step={50000}
        value={seller.revenueRange}
        onChange={(revenue) => handleChange("revenueRange", revenue)}
        isRange
        unit="$"
      />
      {errors.revenueRange && (
        <p style={{ color: "red", fontSize: "0.9rem" }}>
          {errors.revenueRange}
        </p>
      )}

      {/* Profit Margin */}
      <RangeSlider
        label="Profit Margin"
        min={0}
        max={100}
        value={seller.profitMargin}
        onChange={(margin) => handleChange("profitMargin", margin)}
        isRange
        unit="%"
      />
      {errors.profitMargin && (
        <p style={{ color: "red", fontSize: "0.9rem" }}>
          {errors.profitMargin}
        </p>
      )}

      {/* Expected Deal Size */}
      <RangeSlider
        label="Expected Deal Size"
        min={50000}
        max={10000000}
        step={10000}
        value={seller.expectedDealSize}
        onChange={(dealSize) => handleChange("expectedDealSize", dealSize)}
        isRange
        unit="$"
      />
      {errors.expectedDealSize && (
        <p style={{ color: "red", fontSize: "0.9rem" }}>
          {errors.expectedDealSize}
        </p>
      )}

      {/* Location */}
      <LocationSelector
        value={seller.location}
        onChange={(location) => handleChange("location", location)}
      />
      {errors.location && (
        <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.location}</p>
      )}

      {/* Submit */}
      <button
        onClick={handleSubmit}
        style={{ padding: "10px 15px", marginTop: "1rem" }}
>>>>>>> 664d34291080c818d842564d7d64fbc4e4f558a7
      >
        Complete Onboarding
      </button>
    </div>
  );
};

export default SellerOnboarding;
