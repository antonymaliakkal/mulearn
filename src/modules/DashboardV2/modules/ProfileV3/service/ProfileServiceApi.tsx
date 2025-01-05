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

export const fetchUserProfile = async (): Promise<FetchUserProfileApiResponse> => {
  try {
    const response = await reqInstance.get<FetchUserProfileApiResponse>(ProfileRoutes.userProfile);
    return response.data;
  } catch (err) {
    throw new Error("Failed to fetch user profile");
  }
};

export const fetchColleges = async (): Promise<FetchCollegesApiResponse> => {
  try {
    const response = await reqInstance.get<FetchCollegesApiResponse>(ProfileRoutes.colleges);
    return response.data;
  } catch (err) {
    throw new Error("Failed to fetch colleges");
  }
};

export const getCollegeTitleById = async (collegeId: string | undefined): Promise<string> => {
  if (!collegeId) return "";
  try {
    const collegesData = await fetchColleges();
    const college = collegesData.response.colleges.find((col) => col.id === collegeId);
    return college ? college.title : "Unknown College";
  } catch (err) {
    console.error("Failed to fetch college title", err);
    return "Unknown College";
  }
};
