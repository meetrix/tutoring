/**
 * Created by supun on 10/03/18.
 */
export const REDUX_API_GATEWAY_ACTIONS = {

    //saga action
    API_GATEWAY_FETCHING:'API_GATEWAY_FETCHING',
    API_GATEWAY_FETCH_LATEST:'API_GATEWAY_FETCH_LATEST',
    API_GATEWAY_FETCHING_SUCCESS : 'API_GATEWAY_FETCHING_SUCCESS',
    API_GATEWAY_FETCHING_FAILURE:'API_GATEWAY_FETCHING_FAILURE',
    //pets action
    GET_AUTH_USER_INIT_DATA_SUCCESS:'GET_AUTH_USER_INIT_DATA_SUCCESS',
    GET_AUTH_USER_INIT_DATA_FAILE:'GET_AUTH_USER_INIT_DATA_FAILE',

    //schedulte action
    GET_SCHEDULE_EVENT_SUCCESS:'GET_SCHEDULE_EVENT_SUCCESS',
    GET_SCHEDULE_EVENT_FAILE:'GET_SCHEDULE_EVENT_FAILE',
    POST_SCHEDULE_EVENT_SUCCESS:'POST_SCHEDULE_EVENT_SUCCESS',
    POST_SCHEDULE_EVENT_FAIL:'POST_SCHEDULE_EVENT_FAIL',
    UPDATE_SCHEDULE_EVENT_SUCCESS:'UPDATE_SCHEDULE_EVENT_SUCCESS',
    UPDATE_SCHEDULE_EVENT_FAIL:'UPDATE_SCHEDULE_EVENT_FAIL',
    DELETE_SCHEDULE_EVENT_SUCCESS:'DELETE_SCHEDULE_EVENT_SUCCESS',
    DELETE_SCHEDULE_EVENT_FAIL:'DELETE_SCHEDULE_EVENT_FAIL',
    SCHEDULE_TIME_SLOT_CONSULTEE_SUCCESS:'SCHEDULE_TIME_SLOT_CONSULTEE_SUCCESS',
    SCHEDULE_TIME_SLOT_CONSULTEE_FAILE:'SCHEDULE_TIME_SLOT_CONSULTEE_FAILE',

    //user actions
    GET_USER_SUCCESS:'GET_USER_SUCCESS',
    GET_USER_FAILE:'GET_USER_FAILE',
    GET_FREE_EVENT_FROM_CONSULTANT_SUCCESS:'GET_FREE_EVENT_FROM_CONSULTANT_SUCCESS',
    GET_FREE_EVENT_FROM_CONSULTANT_FAILE:'GET_FREE_EVENT_FROM_CONSULTANT_FAILE',
    UPDATE_PROFILE_INFO_SUCCESS:'UPDATE_PROFILE_INFO_SUCCESS',
    UPDATE_PROFILE_INFO_FAIL:'UPDATE_PROFILE_INFO_FAIL',

    //admin actions
    GET_CONSULTANTS_SUCCESS:'GET_CONSULTANTS_SUCCESS',
    GET_CONSULTANTS_FAIL:'GET_CONSULTANTS_FAIL'


};


export const ACTION_KEY ={
    GETPETS:"GETPETS",
    GET_SCHEDULE_EVENTS:'GET_SCHEDULE_EVENTS',
    POST_SCHEDULE_EVENTS:'POST_SCHEDULE_EVENTS',
    UPDATE_SCHEDULE_EVENTS:'UPDATE_SCHEDULE_EVENTS',
    DELETE_SCHEDULE_EVENTS:'DELETE_SCHEDULE_EVENTS',
    SCHEDULE_TIME_SLOT_CONSULTEE:'SCHEDULE_TIME_SLOT_CONSULTEE',
    GET_AUTH_USER_INIT_DATA:'GET_AUTH_USER_INIT_DATA',
    GET_FREE_EVENT_FROM_CONSULTANT:'GET_FREE_EVENT_FROM_CONSULTANT',
    UPDATE_PROFILE_INFO:'UPDATE_PROFILE_INFO',
    GET_CONSULTANTS: 'GET_CONSULTANTS'
};
export const ENDPOINTS = {
    PETSTORE: 'PetStore',
    CONSULT_API:'ConsultantApi'
};
export const API_ROUTE = {
    PETS: '/pets',
    SCHEDULE:'/schedule',
    UPDATE_SCHEDULE:'/schedule/update',
    USER:'/user/init',
    USER_EVENTS_FREE:'/user/events/free?id=/:id',
    USER_PROFILE:'/user/profile',
    ADMIN_CONSULTANT:'/admin/consultant'

};
export const ACTION_ATTR ={
    PAYLOAD:'payload',
    DATA:'data'
};
