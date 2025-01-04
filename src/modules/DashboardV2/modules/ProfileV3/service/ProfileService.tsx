import axios, { AxiosError } from "axios";
import { reqInstance } from "../../../services/baseReqInstance";
import { ProfileRoutes } from "../../../services/dasboardEndpoints";
import { FetchUserInfoApiResponse, FetchUserProfileApiResponse, FetchCollegesApiResponse } from "./ProfileServiceInterfaces";

export const fetchUserInfo = async (): Promise<FetchUserInfoApiResponse> => {
  try {
    const response = await reqInstance.get<FetchUserInfoApiResponse>(ProfileRoutes.userInfo);
    return response.data;
  } catch (err) {
    throw new Error("Failed to fetch user info");
  }
};

reqInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        // Handle unauthorized access
        localStorage.removeItem('accessToken');
        window.location.href = '/login';
      }
      return Promise.reject(error);
    }
  );
  
  // Custom error type
  export class ApiError extends Error {
    constructor(
      message: string,
      public status?: number,
      public code?: string
    ) {
      super(message);
      this.name = 'ApiError';
    }
  }
  
  export const fetchUserProfile = async () => {
    try {
      // Updated to use relative path
      const response = await reqInstance.get<FetchUserProfileApiResponse>(ProfileRoutes.userProfile);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.message || 'Failed to fetch user profile';
        throw new Error(message);
      }
      throw new Error('An unexpected error occurred');
    }
  };
  
  export const getCollegeTitleById = async (collegeId: string | undefined) => {
    if (!collegeId) return "";
    
    try {
      // Updated to use relative path
      const response = await reqInstance.get<FetchCollegesApiResponse>(ProfileRoutes.colleges);
      const college = response.data.response.colleges.find(
        (col: { id: string }) => col.id === collegeId
      );
      return college ? college.title : "Unknown College";
    } catch (error) {
      console.error("Failed to fetch college title", error);
      return "Unknown College";
    }
  };