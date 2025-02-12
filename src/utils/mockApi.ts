import { sampleExpenseData } from "@/utils/constants/employerExpenseList.constants";

const getMockData = async (page: number, size: number) => {
  const responsePayload = {
    data: sampleExpenseData,
    total: sampleExpenseData.length,
  };

  return responsePayload;
};

export { getMockData };
