// ACTION TYPES

//BUZZ ACTION TYPE
export const ADD_BUZZ = "ADD_BUZZ";
export const SHOW_BUZZ = "SHOW_BUZZ";
export const PUT_LIKE = 'PUT_LIKE';
export const PUT_DISLIKE = 'PUT_DISLIKE';
//COMPLAINT ACTION TYPE
export const ADD_COMPLAINT = "ADD_COMPLAINT";
export const SHOW_COMPLAINT = "SHOW_COMPLAINT";
//RESOLVE ACTION TYPE
export const UPDATE_COMPLAINT_STATUS = "UPDATE_COMPLAINT_STATUS";
//USER ACTION TYPE
export const SHOW_USER = "SHOW_USER";


// URLs
export const BASE_URL = 'http://localhost:5000'
export const DASHBOARD_BUZZ_URL = `${BASE_URL}/dashboard/buzz`;
export const DASHBOARD_COMPLAINT_URL = `${BASE_URL}/dashboard/complaints`;
export const DASHBOARD_RESOLVE_URL = `${BASE_URL}/dashboard/resolve`;
export const USER_URL = `${BASE_URL}/user`;
export const LIKE_URL = `${DASHBOARD_BUZZ_URL}/like`;
export const DISLIKE_URL = `${DASHBOARD_BUZZ_URL}/dislike`;