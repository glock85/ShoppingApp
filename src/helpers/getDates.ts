export const getCurrentDate = (): string => {
  const currentDate = new Date();
  return currentDate.toISOString().split("T")[0];
};

export const getPastDate = (daysAgo: number): string => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - daysAgo);
  return currentDate.toISOString().split("T")[0];
};
