import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import formationReducer from './formation.reducer';
import calendarReducer from './calendar.reducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    formations: formationReducer,
    calendar: calendarReducer
});