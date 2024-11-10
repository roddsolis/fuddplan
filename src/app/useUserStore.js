import { create } from "zustand";

const useUserStore = create((set) => ({
  nombre: "",
  setNombre: (nuevoNombre) => set({ nombre: nuevoNombre }), // Ahora recibe un parámetro
}));

export default useUserStore;
