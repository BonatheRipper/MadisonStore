import axios from "axios";
export const getUser = async (email, password) => {
  const { data } = await axios.post(
    `https://madison.bona9ja.online/api/users/login`,
    {
      email,
      password,
    }
  );
  return data;
};
