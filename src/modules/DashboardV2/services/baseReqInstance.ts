import axios from "axios";
import { BASEPATH } from "./dasboardEndpoints";

// fetch access token from localstorage

const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQyZWY5NjMzLTNhYjYtNGUxYi1iMDhjLTJmMGQxZjVjMGY2MiIsIm11aWQiOiJhc3dhbnRodmNAbXVsZWFybiIsInJvbGVzIjpbIkNhbXB1cyBMZWFkIiwiSUVFRSBMYXVuY2hwYWQgTGV2ZWwgNCIsIlN0dWRlbnQiLCJHaXQgTG9yZCIsIkNvbW1hbmQgTmluamEiLCJUZWNoIFRlYW0iLCJBZG1pbnMiLCJTY3JhdGNoIE1hc3RlcnkiLCJiZXJ4Il0sImV4cGlyeSI6IjIwMjUtMDEtMDQgMjA6NDA6MjArMDA6MDAiLCJ0b2tlblR5cGUiOiJhY2Nlc3MifQ.7gIvBfpMxleXFKlm-7u12H1Kh22zeUPWXazCwbHj2CQ";

export const reqInstance = axios.create({
    baseURL: BASEPATH,
    timeout: 1000,
    headers: {'Authorization': `Bearer ${accessToken}`}
  });
