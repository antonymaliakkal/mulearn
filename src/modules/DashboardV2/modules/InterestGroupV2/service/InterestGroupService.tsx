import { reqInstance } from "../../../services/baseReqInstance";
import { InterestGroupRoutes } from "../../../services/dasboardEndpoints";

export const getInterestGroup = async () => {
    try {
        const response = await reqInstance.get(InterestGroupRoutes.listAllInterestGroups);
        console.log(response.data); // Log the actual data
        return response.data; // Return the data for further use
    } catch (error) {
        console.error("Error fetching interest groups:", error);
        throw error; // Re-throw the error for upstream handling
    }
}