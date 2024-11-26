import { fetchApi } from "./index";

export const getUserProfile = async (token: string) => {
  return fetchApi("/profile", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
};
