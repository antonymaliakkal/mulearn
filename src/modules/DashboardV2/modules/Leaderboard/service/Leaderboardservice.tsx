import { reqInstance } from "../../../services/baseReqInstance";
import { LeaderboardRoutes, ProfileRoutes } from "../../../services/dasboardEndpoints";

interface User {
    full_name: string;
    total_karma: number;
    avatar: string;
    color: string;
  }

export const getLeaderboard = async () : Promise<User[]> => {
    try {
        const response = await reqInstance.get(LeaderboardRoutes.baseDetails);
        console.log(response.data);
        const data = response.data;
        if(data.response != null){
            return data.response;
        }else{
            console.log("Invalid response");
            return [];
        }
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const getMyRank = async () : Promise<any> =>{
    try {
        const response = await reqInstance.get(ProfileRoutes.userProfile);
        let myRankDetails : any = {};
        myRankDetails['rank'] = response.data.response.rank;
        myRankDetails['karma'] = response.data.response.karma;
        return myRankDetails;

    } catch (error) {
        console.log(error);
    }
}