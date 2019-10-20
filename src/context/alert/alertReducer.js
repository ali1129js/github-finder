/**
 * @Author: Ali
 * @Date:   2019-10-20T10:18:15+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-10-20T10:18:22+02:00
 */
 import { SET_ALERT, REMOVE_ALERT } from '../types';

 export default (state, action) => {
   switch (action.type) {
     case SET_ALERT:
       return action.payload;
     case REMOVE_ALERT:
       return null;
     default:
       return state;
   }
 };
