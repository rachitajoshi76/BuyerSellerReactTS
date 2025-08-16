import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../style/BuyerOnboarding.css";

<<<<<<< HEAD
import type { RootState } from "../redux/store";
import { updateCurrentBuyerField, completeOnboarding } from "../redux/buyerSlice";
=======

import type { RootState } from "../redux/store";
import {
  updateCurrentBuyerField,
  completeOnboarding,
} from "../redux/buyerSlice";
>>>>>>> 664d34291080c818d842564d7d64fbc4e4f558a7
import GoalSelection from "../common/GoalSelection";
import IndustrySelector from "../common/IndustrySelector";
import DealSizeSlider from "../common/DealSizeSlider";
import LocationSelector from "../common/LocationSelector";
import TextInput from "../common/TextInput";
import TextArea from "../common/TextArea";

const BuyerOnboarding: React.FC = () => {
  const dispatch = useDispatch();
  const buyer = useSelector((state: RootState) => state.buyers.currentBuyer);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

<<<<<<< HEAD
  const handleChange = <K extends keyof typeof buyer>(field: K, value: typeof buyer[K]) => {
    dispatch(updateCurrentBuyerField({ field, value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
=======
  const handleChange = <K extends keyof typeof buyer>(
    field: K,
    value: (typeof buyer)[K]
  ) => {
    dispatch(updateCurrentBuyerField({ field, value }));
    setErrors((prev) => ({ ...prev, [field]: "" })); // Clear error on change
>>>>>>> 664d34291080c818d842564d7d64fbc4e4f558a7
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

<<<<<<< HEAD
    if (!buyer.name.trim() || buyer.name.trim().length < 2) {
      newErrors.name = "Buyer name must be at least 2 characters.";
    }
    if (!buyer.description.trim() || buyer.description.trim().length < 10) {
      newErrors.description = "Description must be at least 10 characters.";
    }
    if (!buyer.goals || buyer.goals.length === 0) {
      newErrors.goals = "Select at least one goal.";
    }
    if (!buyer.industries || buyer.industries.length === 0) {
      newErrors.industries = "Select at least one industry.";
    }
    if (Array.isArray(buyer.dealSize)) {
      if (buyer.dealSize.length !== 2 || buyer.dealSize[1] <= 0) {
        newErrors.dealSize = "Deal size must be greater than 0.";
      }
    } else {
      if (!buyer.dealSize || buyer.dealSize <= 0) {
        newErrors.dealSize = "Deal size must be greater than 0.";
      }
    }
    if (!buyer.location || buyer.location.trim() === "" || buyer.location === "any") {
      newErrors.location = "Please select a valid country.";
    }
=======
    // Buyer Name
    if (!buyer.name.trim() || buyer.name.trim().length < 2) {
      newErrors.name = "Buyer name must be at least 2 characters.";
    }

    // Description
    if (!buyer.description.trim() || buyer.description.trim().length < 10) {
      newErrors.description = "Description must be at least 10 characters.";
    }

    // Goals
    if (!buyer.goals || buyer.goals.length === 0) {
      newErrors.goals = "Select at least one goal.";
    }

    // Industries
    if (!buyer.industries || buyer.industries.length === 0) {
      newErrors.industries = "Select at least one industry.";
    }

    // Deal Size (supports both single value and range)
    if (Array.isArray(buyer.dealSize)) {
      if (
        buyer.dealSize.length !== 2 ||
        buyer.dealSize[0] <= 0 ||
        buyer.dealSize[1] <= buyer.dealSize[0]
      ) {
        newErrors.dealSize = "Please select a valid deal size range greater than 0.";
      }
    } else {
      if (!buyer.dealSize || buyer.dealSize <= 0) {
        newErrors.dealSize = "Please select a valid deal size greater than 0.";
      }
    }

    // Location
    if (!buyer.location || buyer.location.trim() === "") {
      newErrors.location = "Location is required.";
    }

>>>>>>> 664d34291080c818d842564d7d64fbc4e4f558a7
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
<<<<<<< HEAD
=======

>>>>>>> 664d34291080c818d842564d7d64fbc4e4f558a7
    dispatch(completeOnboarding());
    alert("Buyer Onboarding Complete!");
  };

<<<<<<< HEAD
  // Inline styles
  const containerStyle = {
    maxWidth: "700px",
    margin: "2rem auto",
    padding: "2rem",
    backgroundColor: "#eaf6ff", // light blue
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)", // subtle shadow
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const headingStyle = {
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: 600,
    marginBottom: "2rem",
    color: "#333",
  };

  const errorStyle = { color: "red", fontSize: "0.9rem", marginBottom: "1rem" };

  const buttonStyle = {
    padding: "0.75rem 2rem",
    marginTop: "1.5rem",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    transition: "background-color 0.3s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#0056b3",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Buyer Onboarding</h2>

=======
  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "1rem" }}>
      <h2>Buyer Onboarding</h2>

      {/* Buyer Name */}
>>>>>>> 664d34291080c818d842564d7d64fbc4e4f558a7
      <TextInput
        label="Buyer Name"
        value={buyer.name}
        placeholder="Enter buyer name"
        onChange={(val) => handleChange("name", val)}
      />
<<<<<<< HEAD
      {errors.name && <p style={errorStyle}>{errors.name}</p>}

=======
      {errors.name && (
        <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.name}</p>
      )}

      {/* Description */}
>>>>>>> 664d34291080c818d842564d7d64fbc4e4f558a7
      <TextArea
        label="Description"
        value={buyer.description}
        placeholder="Describe the buyer"
        onChange={(val) => handleChange("description", val)}
      />
<<<<<<< HEAD
      {errors.description && <p style={errorStyle}>{errors.description}</p>}

=======
      {errors.description && (
        <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.description}</p>
      )}

      {/* Goal Selection */}
>>>>>>> 664d34291080c818d842564d7d64fbc4e4f558a7
      <GoalSelection
        selectedGoals={buyer.goals}
        onChange={(goals) => handleChange("goals", goals)}
      />
<<<<<<< HEAD
      {errors.goals && <p style={errorStyle}>{errors.goals}</p>}

=======
      {errors.goals && (
        <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.goals}</p>
      )}

      {/* Industry Selection */}
>>>>>>> 664d34291080c818d842564d7d64fbc4e4f558a7
      <IndustrySelector
        selectedIndustries={buyer.industries}
        onChange={(industries) => handleChange("industries", industries)}
      />
<<<<<<< HEAD
      {errors.industries && <p style={errorStyle}>{errors.industries}</p>}

=======
      {errors.industries && (
        <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.industries}</p>
      )}

      {/* Deal Size */}
>>>>>>> 664d34291080c818d842564d7d64fbc4e4f558a7
      <DealSizeSlider
        value={buyer.dealSize}
        onChange={(dealSize) => handleChange("dealSize", dealSize)}
      />
<<<<<<< HEAD
      {errors.dealSize && <p style={errorStyle}>{errors.dealSize}</p>}

=======
      {errors.dealSize && (
        <p style={{ color: "red", fontSize: "0.9rem" }}>{errors.dealSize}</p>
      )}

      {/* Location */}
>>>>>>> 664d34291080c818d842564d7d64fbc4e4f558a7
      <LocationSelector
        value={buyer.location}
        onChange={(location) => handleChange("location", location)}
      />
<<<<<<< HEAD
      {errors.location && <p style={errorStyle}>{errors.location}</p>}

      <button
        style={buttonStyle}
        onMouseOver={(e) => ((e.currentTarget.style.backgroundColor = "#0056b3"))}
        onMouseOut={(e) => ((e.currentTarget.style.backgroundColor = "#007bff"))}
        onClick={handleSubmit}
=======
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

export default BuyerOnboarding;
