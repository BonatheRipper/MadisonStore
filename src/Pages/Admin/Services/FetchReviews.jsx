import React from "react";
import axios from "axios";
export const FetchReviewsAdmin = async (user) => {
  try {
    const results = await axios.get(
      `https://madison.bona9ja.online/api/review`,
      {
        headers: { authorization: `Bearer ${user.token}` },
      }
    );
    if (results) {
      return results.data;
    }
  } catch (e) {
    if (e) {
      return e;
    }
  }
  return false;
};
