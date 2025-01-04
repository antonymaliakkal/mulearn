import { reqInstance } from "../../../services/baseReqInstance";
import { LeaderboardRoutes } from "../../../services/dasboardEndpoints";

export const getProfile = async () => {
    try {
        const response = await reqInstance.get(LeaderboardRoutes.baseDetails)
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}