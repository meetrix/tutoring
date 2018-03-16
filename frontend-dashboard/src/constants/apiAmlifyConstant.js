/**
 * Created by supun on 14/03/18.
 */
export const REDUX_AWS_AMPLIFY_ACTIONS = {

  //saga action
  AWS_AMPLIFY_FETCHING:'AWS_AMPLIFY_FETCHING',
  AWS_AMPLIFY_FETCH_LATEST:'AWS_AMPLIFY_FETCH_LATEST',
  AWS_AMPLIFY_FETCHING_SUCCESS : 'AWS_AMPLIFY_FETCHING_SUCCESS',
  AWS_AMPLIFY_FETCHING_FAILURE:'AWS_AMPLIFY_FETCHING_FAILURE',

  //get Auth user
  GET_AUTH_USER_SUCCESS:'GET_AUTH_USER_SUCCESS',
  GET_AUTH_USER_FAILE:'GET_AUTH_USER_FAILE',


};

export const ACTION_KEY ={
  GET_AUTH_USER:"GET_AUTH_USER",

};

export const ACTION_ATTR ={
  PAYLOAD:'payload',
  DATA:'data'
};