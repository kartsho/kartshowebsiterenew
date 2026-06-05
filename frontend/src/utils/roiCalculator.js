export const calculateROI = (investment, monthlyRevenue) => {
  if (!monthlyRevenue) {
    return 0;
  }

  return Math.round(investment / monthlyRevenue);
};

