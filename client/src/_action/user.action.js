import { userConstants } from '_constants/user.constants';

export const checkAuthState = () => ({ type: userConstants.USER_CHECKAUTHSTATE });
export const checkAuthTimeout = (expirationTime) => ({ type: userConstants.USER_CHECKAUTHTIMEOUT, expirationTime });

