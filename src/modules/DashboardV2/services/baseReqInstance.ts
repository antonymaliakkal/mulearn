import axios from "axios";
import { BASEPATH } from "./dasboardEndpoints";

// fetch access token from localstorage

const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImMyNjAxZjc5LWIzOWQtNDUxOC05NmUxLTg4ODM3NDJkMzE0ZSIsIm11aWQiOiJ1bm5pa3Jpc2huYW5AbXVsZWFybiIsInJvbGVzIjpbXSwiZXhwaXJ5IjoiMjAyNS0wMS0wNCAxNzowMzo1MSswMDowMCIsInRva2VuVHlwZSI6ImFjY2VzcyJ9.kZI4R8OK5PmFG7V01fEYHqyUBF00AfO-SVJ27ezpW14";

export const reqInstance = axios.create({
    baseURL: BASEPATH,
    timeout: 1000,
    headers: {'Authorization': `Bearer ${accessToken}`}
  });