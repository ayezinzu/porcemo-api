import client from "./api";

export const getVacancies = async (pageSize = 1000, pageNumber = 1) => {
  try {
    const response = await client.get("/vacancies", {
      params: {
        pageSize,
        pageNumber,
      },
    });

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
      error: error.response.data,
    };
  }
};
