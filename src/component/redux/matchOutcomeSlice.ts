<<<<<<< HEAD

=======
>>>>>>> 664d34291080c818d842564d7d64fbc4e4f558a7
// matchSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { generateRandomInteger } from "../constants/constants";

interface MatchOutcomeDetails {
  quantity: string;
  deliveryTime: string;
  budgetRange: string;
  verificationDoc: string;
  gstin: string;
  logisticsMethod: string;
  pickupPoint: string;
}

export interface MatchOutcome {
  id: number;
  buyerId: number;
  sellerId: number;
  status: "pending_buyer" | "pending_seller" | "completed";
  buyerForm?: MatchOutcomeDetails;
  sellerForm?: MatchOutcomeDetails;
}

interface MatchState {
  matchOutcomes: MatchOutcome[];
}

const initialState: MatchState = {
  matchOutcomes: [],
};

export const matchOutcomes = createSlice({
  name: "matchOutcomes",
  initialState,
  reducers: {
    createMatch: (state, action: PayloadAction<{ buyerId: number; sellerId: number }>) => {
      state.matchOutcomes.push({
        id: generateRandomInteger(1, 2000000),
        buyerId: action.payload.buyerId,
        sellerId: action.payload.sellerId,
        status: "pending_buyer",
      });
    },
    submitBuyerForm: (state, action: PayloadAction<{ matchId: number; data: MatchOutcomeDetails }>) => {
      const match = state.matchOutcomes.find(m => m.id === action.payload.matchId);
      if (match) {
        match.buyerForm = action.payload.data;
<<<<<<< HEAD
        match.status = "pending_seller";
=======
        // Update status based on whether sellerForm exists
        match.status = match.sellerForm ? "completed" : "pending_seller";
>>>>>>> 664d34291080c818d842564d7d64fbc4e4f558a7
      }
    },
    submitSellerForm: (state, action: PayloadAction<{ matchId: number; data: MatchOutcomeDetails }>) => {
      const match = state.matchOutcomes.find(m => m.id === action.payload.matchId);
      if (match) {
        match.sellerForm = action.payload.data;
<<<<<<< HEAD
        match.status = "completed";
=======
        // Update status based on whether buyerForm exists
        match.status = match.buyerForm ? "completed" : "pending_buyer";
>>>>>>> 664d34291080c818d842564d7d64fbc4e4f558a7
      }
    },
  },
});

export const { createMatch, submitBuyerForm, submitSellerForm } = matchOutcomes.actions;
export default matchOutcomes.reducer;
