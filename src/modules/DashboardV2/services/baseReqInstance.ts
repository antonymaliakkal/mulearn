import axios from "axios";
import { BASEPATH } from "./dasboardEndpoints";

const isDevelopment = process.env.NODE_ENV === 'development';

// fetch access token from localstorage

const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQyZWY5NjMzLTNhYjYtNGUxYi1iMDhjLTJmMGQxZjVjMGY2MiIsIm11aWQiOiJhc3dhbnRodmNAbXVsZWFybiIsInJvbGVzIjpbIkNhbXB1cyBMZWFkIiwiSUVFRSBMYXVuY2hwYWQgTGV2ZWwgNCIsIlN0dWRlbnQiLCJHaXQgTG9yZCIsIkNvbW1hbmQgTmluamEiLCJUZWNoIFRlYW0iLCJBZG1pbnMiLCJTY3JhdGNoIE1hc3RlcnkiLCJiZXJ4Il0sImV4cGlyeSI6IjIwMjUtMDEtMDUgMDA6Mzg6NDUrMDA6MDAiLCJ0b2tlblR5cGUiOiJhY2Nlc3MifQ.j9yOI_YoYgPzPrwecHQzKCUZ2fAiiTJ75mE0ea5_Sfk";

export const reqInstance = axios.create({
  // In development, use relative URLs that will be handled by the Vite proxy
  baseURL: isDevelopment ? `${BASEPATH}` : 'https://dev.mulearn.org/api/v1/dashboard/profile',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`
  },
  // Don't set withCredentials in development when using proxy
  withCredentials: !isDevelopment
});

