import { PATH_NAME, LOCAL_HOST as HOST } from './interface.conf';
// DEV_HOST SIT_HOST UAT_HOST
export const login = {
  url: `${HOST}/login/login`,
  method: 'post'
};
export const test = {
  url: `${HOST}/test/test`,
  method: 'post'
};

export default {
  login,
  test
};
