import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitBuyerForm, submitSellerForm } from "../../component/redux/matchOutcomeSlice";
import styles from "../../style/MatchOutcome.module.css";
import type { RootState } from "../redux/store";

interface Props {
  matchId: number;
  role: "buyer" | "seller";
}

const steps = [
  "Basic Terms",
  "Verification & Trust",
  "Logistics",
  "Review & Confirm",
];

const MatchForm: React.FC<Props> = ({ matchId, role }) => {
  const dispatch = useDispatch();

  const storedData = useSelector((state: RootState) =>
    role === "buyer"
      ? state.matchOutcomes.matchOutcomes.find(outcomes => outcomes.id === matchId)?.buyerForm
      : state.matchOutcomes.matchOutcomes.find(outcomes => outcomes.id === matchId)?.sellerForm
  );

  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    quantity: "",
    deliveryTime: "",
    budgetRange: "",
    verificationDoc: "",
    gstin: "",
    logisticsMethod: "",
    pickupPoint: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (storedData) {
      setForm(storedData);
      const allFilled = Object.values(storedData).every((val) => val && val !== "");
      if (allFilled) setStep(3);
    }
  }, [storedData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateStep = () => {
    let newErrors: { [key: string]: string } = {};

    // Step 0: Basic Terms
    if (step === 0) {
      if (!form.quantity.trim()) newErrors.quantity = "Quantity is required";
      else if (isNaN(Number(form.quantity)) || Number(form.quantity) <= 0)
        newErrors.quantity = "Quantity must be a positive number";

      if (!form.deliveryTime.trim()) newErrors.deliveryTime = "Delivery time is required";

      if (!form.budgetRange.trim()) newErrors.budgetRange = "Budget range is required";
      else if (isNaN(Number(form.budgetRange)) || Number(form.budgetRange) <= 0)
        newErrors.budgetRange = "Budget must be a positive number";
    }

    // Step 1: Verification & Trust
    if (step === 1) {
      if (!form.verificationDoc.trim()) newErrors.verificationDoc = "Verification document is required";

      if (!form.gstin.trim()) newErrors.gstin = "GSTIN or ID is required";
      else if (!/^([0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1})$/.test(form.gstin))
        newErrors.gstin = "GSTIN format is invalid";
    }

    // Step 2: Logistics
    if (step === 2) {
      if (!form.logisticsMethod.trim()) newErrors.logisticsMethod = "Logistics method is required";
      if (!form.pickupPoint.trim()) newErrors.pickupPoint = "Pickup point is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) setStep(step + 1);
  };

  const handleSubmit = () => {
    if (validateStep()) {
      if (role === "buyer") dispatch(submitBuyerForm({ matchId, data: form }));
      else dispatch(submitSellerForm({ matchId, data: form }));
      alert("Form submitted successfully!");
    }
  };

  const isReadOnly = step === 3 && storedData && Object.values(storedData).every((v) => v && v !== "");

  return (
    <div className={styles.container}>
      <div className={styles.stepper}>
        <h2 className={styles.roleTitle}>
          {role === "buyer" ? "Buyer" : "Seller"} Agreement
        </h2>
        <ul>
          {steps.map((label, index) => (
            <li
              key={index}
              className={`${styles.step} ${index === step ? styles.active : ""} ${index < step ? styles.completed : ""}`}
            >
              <span className={styles.stepNumber}>{index + 1}</span>
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.formPanel}>
        {step === 0 && (
          <>
            <h3>Basic Terms</h3>
            <input
              name="quantity"
              placeholder="Quantity"
              value={form.quantity}
              onChange={handleChange}
              className={errors.quantity ? styles.errorInput : ""}
            />
            {errors.quantity && <p className={styles.error}>{errors.quantity}</p>}

            <input
              name="deliveryTime"
              placeholder="Delivery Time"
              value={form.deliveryTime}
              onChange={handleChange}
              className={errors.deliveryTime ? styles.errorInput : ""}
            />
            {errors.deliveryTime && <p className={styles.error}>{errors.deliveryTime}</p>}

            <input
              name="budgetRange"
              placeholder="Budget Range"
              value={form.budgetRange}
              onChange={handleChange}
              className={errors.budgetRange ? styles.errorInput : ""}
            />
            {errors.budgetRange && <p className={styles.error}>{errors.budgetRange}</p>}

            <div className={styles.buttonRow}>
              <button className={styles.nextButton} onClick={nextStep}>Next →</button>
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <h3>Verification & Trust</h3>
            <input
              name="verificationDoc"
              placeholder="Business Verification Doc"
              value={form.verificationDoc}
              onChange={handleChange}
              className={errors.verificationDoc ? styles.errorInput : ""}
            />
            {errors.verificationDoc && <p className={styles.error}>{errors.verificationDoc}</p>}

            <input
              name="gstin"
              placeholder="GSTIN or ID"
              value={form.gstin}
              onChange={handleChange}
              className={errors.gstin ? styles.errorInput : ""}
            />
            {errors.gstin && <p className={styles.error}>{errors.gstin}</p>}

            <div className={styles.buttonRow}>
              <button onClick={() => setStep(0)}>← Prev</button>
              <button className={styles.nextButton} onClick={nextStep}>Next →</button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h3>Logistics</h3>
            <input
              name="logisticsMethod"
              placeholder="Preferred Shipping Method"
              value={form.logisticsMethod}
              onChange={handleChange}
              className={errors.logisticsMethod ? styles.errorInput : ""}
            />
            {errors.logisticsMethod && <p className={styles.error}>{errors.logisticsMethod}</p>}

            <input
              name="pickupPoint"
              placeholder="Pickup Point"
              value={form.pickupPoint}
              onChange={handleChange}
              className={errors.pickupPoint ? styles.errorInput : ""}
            />
            {errors.pickupPoint && <p className={styles.error}>{errors.pickupPoint}</p>}

            <div className={styles.buttonRow}>
              <button onClick={() => setStep(1)}>← Prev</button>
              <button className={styles.nextButton} onClick={nextStep}>Review →</button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h3>Review & Confirm</h3>
            <pre className={styles.reviewBox}>
              {JSON.stringify(form, null, 2)}
            </pre>
            <div className={styles.buttonRow}>
              {!isReadOnly && <button onClick={() => setStep(2)}>← Edit</button>}
              {!isReadOnly && (
                <button className={styles.submitButton} onClick={handleSubmit}>
                  ✅ Submit
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MatchForm;
