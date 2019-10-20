/**
 * @Author: Ali
 * @Date:   2019-10-19T09:24:56+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-10-20T09:46:11+02:00
 */
 import {
   SEARCH_USERS,
   SET_LOADING,
   CLEAR_USERS,
   GET_USER,
   GET_REPOS
 } from '../types';

 export default (state, action) => {
   switch (action.type) {
     case SEARCH_USERS:
       return {
         ...state,
         users: action.payload,
         loading: false
       };
     case GET_USER:
       return {
         ...state,
         user: action.payload,
         loading: false
       };
     case CLEAR_USERS:
       return {
         ...state,
         users: [],
         loading: false
       };
     case GET_REPOS: {
       return {
         ...state,
         repos: action.payload,
         loading: false
       };
     }
     case SET_LOADING:
       return {
         ...state,
         loading: true
       };
     default:
       return state;
   }
 };
