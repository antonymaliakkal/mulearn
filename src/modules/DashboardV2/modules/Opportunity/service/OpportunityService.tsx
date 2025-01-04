import axios from 'axios';

// Define the JobListing type in a separate file
export interface JobListing {
  date: string;
  role: string;
  organization: string;
  title: string;
  location: string;
  lastdate: string;
  applylink: string;
  jdlink: string;
  extrafieldname?: string;
  extrafieldvalue?: string;
  extrafieldlink?: string;
  extrabuttonText?: string;
  duration: string;
  remuneration?: string;
  vacancies: number;
}

// Define the async function to get opportunities
export const getOpportunites = async (): Promise<JobListing[]> => {
  const apiLink =
    'https://opensheet.elk.sh/1Afdbru7Neywhh8S2f0ACv7NJBKvoLKrcFf0eajYpmOo/careersNew';

  try {
    const response = await axios.get(apiLink);
    const responseData: JobListing[] = response.data; // Ensure the response is typed correctly
    return responseData; // Return the response data
  } catch (error) {
    console.log('Error fetching opportunities:', error);
    return []; // Return an empty array in case of an error
  }
};
