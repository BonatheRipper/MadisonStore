import axios from "axios";
export const GetCategories = async (setCats) => {
  try {
    const results = await axios.get(
      `https://madison.bona9ja.online/api/products/allproducts`
    );
    setCats(results.data.categories[0].category);
  } catch (e) {}
};
