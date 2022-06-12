export const EnvironmentApiUrlHelper = () => {
  const environment = process.env.REACT_APP_ENVIRONMENT;

  if (environment === 'DEV') {
    return process.env.REACT_APP_DEV_API_URL;
  } else {
    return process.env.REACT_APP_PROD_API_URL;
  }
};
