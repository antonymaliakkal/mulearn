interface GeneralMessage {
    general: string[];
}
 
export interface UserInfo {
    muid: string;
    full_name: string;
    email: string;
    mobile: string;
    gender: string | null;
    dob: string;
    exist_in_guild: boolean;
    joined: string;
    roles: string[];
    profile_pic: string;
    dynamic_type: string[];
    interest_selected: string | null;
}
 
export interface FetchUserInfoApiResponse {
    hasError: boolean;
    statusCode: number;
    message: GeneralMessage;
    response: UserInfo;
}
 
interface KarmaDistribution {
    task_type: string;
    karma: number;
}
 
interface InterestGroup {
    id: string;
    name: string;
    karma: number;
}
 
export interface UserProfile {
    id: string;
    joined: string;
    full_name: string;
    gender: string | null;
    muid: string;
    roles: string[];
    college_id: string;
    college_code: string;
    org_district_id: string;
    karma: number;
    rank: number;
    karma_distribution: KarmaDistribution[];
    level: string;
    profile_pic: string;
    interest_groups: InterestGroup[];
    is_public: boolean;
    percentile: number;
}
 
export interface FetchUserProfileApiResponse {
    hasError: boolean;
    statusCode: number;
    message: { general: string[] };
    response: UserProfile;
}
 
interface College {
    id: string;
    title: string;
}
 
export interface FetchCollegesApiResponse {
    hasError: boolean;
    statusCode: number;
    message: { general: string[] };
    response: {
        colleges: College[];
    };
}