import axios from "axios";
export const updatedUser = async (username, email, password, id) => {
  const { data } = await axios.put(
    `https://madison.bona9ja.online/api/users/profile/${id}`,
    {
      username,
      email,
      password,
    }
  );
  return data;
};
