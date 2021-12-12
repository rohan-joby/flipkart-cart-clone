export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  }).format((number * 100) /4.5);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === 'size') {
    unique = unique.flat()
  }
  return ["all", ...new Set(unique)];
};