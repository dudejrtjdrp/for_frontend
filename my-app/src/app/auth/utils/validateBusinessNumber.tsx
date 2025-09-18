export const validateBusinessNumber = (_: any, value: string) => {
  if (!value) return Promise.reject("");

  const businessNumber = value.replace(/-/g, "");
  if (!/^\d{3}-\d{2}-\d{5}$/.test(value)) {
    return Promise.reject("형식이 올바르지 않습니다. (예: 123-45-67890).");
  }

  const checkArr = [1, 3, 7, 1, 3, 7, 1, 3, 5];
  let sum = 0;

  for (let i = 0; i < 9; i++) {
    sum += parseInt(businessNumber[i], 10) * checkArr[i];
  }
  sum += Math.floor((parseInt(businessNumber[8], 10) * 5) / 10);
  const remainder = (10 - (sum % 10)) % 10;

  if (remainder === parseInt(businessNumber[9], 10)) {
    return Promise.resolve();
  } else {
    return Promise.reject("올바른 사업자등록번호가 아닙니다.");
    // return Promise.reject(".");
  }
};