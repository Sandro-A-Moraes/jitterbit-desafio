const API_URL = "http://localhost:3000";
interface CreateOrderPayload {
  numeroPedido: string;
  valorTotal: number;
  dataCriacao: string;
  items: Array<{
    idItem: string;
    quantidadeItem: number;
    valorItem: number;
  }>;
}
// Auth API
export const authApi = {
  async login(email: string, password: string) {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) throw new Error("Login failed");
    return response.json();
  },

  async register(name: string, email: string, password: string) {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    if (!response.ok) throw new Error("Registration failed");
    return response.json();
  },

  async getProfile(token: string) {
    const response = await fetch(`${API_URL}/auth/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) throw new Error("Failed to fetch profile");
    return response.json();
  },
};

// Orders API
export const ordersApi = {
  async listOrders(token: string) {
    const response = await fetch(`${API_URL}/order/list`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) throw new Error("Failed to fetch orders");
    return response.json();
  },

  async createOrder(token: string, order: CreateOrderPayload) {
    const response = await fetch(`${API_URL}/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(order),
    });
    if (!response.ok) throw new Error("Failed to create order");
    return response.json();
  },

  async getOrder(token: string, id: string) {
    const response = await fetch(`${API_URL}/order/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) throw new Error("Failed to fetch order");
    return response.json();
  },
};
