export const signup = () => {
  return {
    email: process.env.USER_TEST,
    senha: process.env.USER_PASSWORD,
    redirecionar: true,
  };
};
