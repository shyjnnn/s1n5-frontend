/* eslint-disable no-console */
const logOnDev = (message: string) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(message);
  }
};

export default logOnDev;
