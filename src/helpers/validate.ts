export const notCyrillicValidate = (value: string) => {
  const cyrillicPattern = /^[a-zA-Z-0-9]+$/;
  return value?.length ? !cyrillicPattern.test(value) : false;
};
