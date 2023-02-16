import { produce } from 'immer';
import * as actionTypes from './constants'
const inititalState = {
    banners:[],
    movies:[], 
}
export const bookingReducer = (state = inititalState, { type, payload }) => {
    return produce(state, draft => {
        if (type === actionTypes.FETCH_BANNERS) {
            draft.banners = payload
        }
        if (type === actionTypes.FETCH_MOVIES) {
            draft.movies = payload
        }
    })
}