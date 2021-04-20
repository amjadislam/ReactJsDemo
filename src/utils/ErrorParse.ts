const parseError = (error: any) => {
  let message = '';
  if (error.response) {
    message = error.response.data.message;
  } else if (error.request) {
    message = 'Network Error!';
  } else {
    message = error.message;
  }

  throw new Error(message);
};

export default parseError;
