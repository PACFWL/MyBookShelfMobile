import { fetchApi } from "./index";

export const loginUser = async (email: string, password: string) => {
  return fetchApi("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
};

export const registerUser = async (email: string, password: string, name: string) => {
  return fetchApi("/createUser", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, name }),
  });
};
