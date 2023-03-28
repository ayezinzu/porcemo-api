import { Handler } from "@netlify/functions";
import { getVacancies } from "../../../src/api/methods";

export const handler: Handler = async (event, context) => {
  const result = await getVacancies();
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
  if (result.success) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(result.data.data),
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
