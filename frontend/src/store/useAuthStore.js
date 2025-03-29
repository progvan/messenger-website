import { create } from "zustand"
import { axiosInstance } from "../lib/axios.js"
import toast from "react-hot-toast"

export const useAuthStore = create((set) => ({
    authUser: null,
    isSiginigUp: false,
    isLoggingIng: false,
    isUpdatingProfile: false,

    isCheckingAuth: true,
    
    checkAuth: async() => {
        try {
            const res = await axiosInstance.get("/auth/check")

            set({authUser:res.data})
        } catch (error) {
            console.log("Error in checkAuth: ", error);
            set({authUser:null})
        } finally {
            set({isCheckingAuth: false})
        }
    },

    signup: async (data) => {
        set({ isSiginigUp: true });
        try {
            const res = await axiosInstance.post("/auth/signup", data);
            set({ authUser: res.data });
            toast.success("Account created successfully")
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            set({ isSiginigUp: false })
        }
    },

    login: async (data) => {
        set({ isLoggingIn: true });
        try {
          const res = await axiosInstance.post("/auth/login", data);
          set({ authUser: res.data });
          toast.success("Logged in successfully");
        } catch (error) {
          toast.error(error.response.data.message);
        } finally {
          set({ isLoggingIn: false });
        }
      },

    logout: async () => {
        try {
            await axiosInstance.post("/auth/logout");
            set({ authUser: null });
            toast.success("Logged out successfully");
        } catch (error) {
            toast.error(error.response.data.message);
        }
    },

    updateProfile: async (data) => {
        set({ isUpdatingProfile: true });
        try {
            const res = await axiosInstance.put("/auth/update-profile", data);
            set({ authUser: res.data });
            toast.success("Profile updated successfully");
        } catch (error) {
            console.log("error in update profile: ", error);
            if (error.response?.status === 413) {
                toast.error("Image is too large. Maximum size is 10MB.");
            } else {
                toast.error(error.response?.data?.message || "An error occurred");
            }
        } finally {
            set({ isUpdatingProfile: false });
        }
    },
}))