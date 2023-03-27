import { Handler } from "@netlify/functions";
import { getVacancies } from "../../../src/api/methods";

export const handler: Handler = async (event, context) => {
  const result = await getVacancies();

  if (result.success) {
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result.data.data),
    };
  } else {
    return {
      statusCode: result.error.status,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: result.message,
        error: result.error,
      }),
    };
  }
};
