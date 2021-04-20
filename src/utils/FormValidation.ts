export const checkEmail = (value: string) => {
  if (value) return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : '';
  return '';
};

export default '';
