import axios from 'axios';

// Configuramos la URL base de tu backend local
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Asegúrate de que coincida con el puerto de tu backend
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor: Inyecta el token de sesión en cada petición si existe
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// --- SERVICIOS BASE (Funciones que conectaremos más adelante) ---

export const loginUser = async (credentials) => {
  // const response = await api.post('/auth/login', credentials);
  // return response.data;
  console.log("Llamada a login simulada", credentials);
};

export const registerUser = async (userData) => {
  // const response = await api.post('/auth/register', userData);
  // return response.data;
  console.log("Llamada a registro simulada", userData);
};

export const getWorkouts = async () => {
  // const response = await api.get('/workouts');
  // return response.data;
  console.log("Obteniendo feed de entrenamientos simulado");
};

export const getGroups = async () => {
  // const response = await api.get('/groups');
  // return response.data;
  console.log("Obteniendo grupos simulados");
};

export default api;