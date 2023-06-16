const nF = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
});

export const number = (n) => nF.format(n);
