export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
  });

  return formatter.format(price);
};
