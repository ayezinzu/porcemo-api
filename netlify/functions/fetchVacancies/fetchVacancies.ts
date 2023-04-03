import { Handler } from "@netlify/functions";
import { getVacancies } from "../../../src/api/methods";

export const handler: Handler = async (event, context) => {
  let vacancyData;

  const result = await getVacancies();
  vacancyData = result.data.data;
  if (event.queryStringParameters?.id) {
    const passedId = event.queryStringParameters.id.toString();

    const allVacancies = vacancyData;
    const foundVacancy = allVacancies.find(
      (eachVacancy) => eachVacancy.id.toString() === passedId.toString()
    );
    if (foundVacancy) {
      vacancyData = foundVacancy;
    } else {
      vacancyData = null;
    }
  }
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
  if (vacancyData || result.success) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(vacancyData),
    };
  } else {
    return {
      statusCode: result.error.status,
      headers,
      body: JSON.stringify({
        message: result.message,
        error: result.error,
      }),
    };
  }
};
