import actions from '../actions/calendar.action'

const defaultTeamState = {
    counter: 0
};

export default (state = defaultTeamState, action = { type: null, payload: null }) => {
    switch (action.type) {
        case actions.UPDATE_COUNTER:
            return {
                counter: action.payload
            };
        default:
            return state
    }
}