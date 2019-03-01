import actions from '../actions/formation.action'

const defaultTeamState = {
    all: []
};

export default (state = defaultTeamState, action = { type: null, payload: null }) => {
    switch (action.type) {
        case actions.FETCHED_FORMATIONS:
            return {
                ...state,
                all: action.payload
            };
        default:
            return state
    }
}