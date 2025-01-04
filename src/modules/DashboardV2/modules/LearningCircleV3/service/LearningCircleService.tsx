import { reqInstance } from "../../../services/baseReqInstance";
import { LearningCircleRoutes } from "../../../services/dasboardEndpoints";

export const getLearningCircles = async () => {
  try {
    const response = await reqInstance.get(LearningCircleRoutes.listLearningCircles);
    return response.data;
  } catch (error) {
    console.error("Error fetching learning circles:", error);
    throw error;
  }
};
