const API_BASE_URL = "";

export const fetchApi = async (endpoint: string, options: RequestInit = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Erro desconhecido");
    }
    return data;
  } catch (error: any) {
    console.error("Erro na API:", error.message);
    throw error;
  }
};
