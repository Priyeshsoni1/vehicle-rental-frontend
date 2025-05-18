import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

export const fetchVehicleTypes = (wheels) =>
  api.get(`/vehicle-types?wheels=${wheels}`);
export const fetchModels = (vehicleTypeId) =>
  api.get(`/vehicles/${vehicleTypeId}`);
export const submitBooking = (data) => api.post("/booking", data);
