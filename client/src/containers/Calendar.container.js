import calendar from '../screens/CalendarScreen'
import { connect } from 'react-redux';
import FormationServices from '../services/FormationService'
import { withRouter } from 'react-router'
import actions from '../redux/actions/formation.action'
const mapStateToProps = state => {
    return {
        counter: state.calendar.counter,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        async getFormations() {
            const formations = await FormationServices.getFormations()
            dispatch({ type: actions.FETCHED_FORMATIONS, payload: formations })
        }
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(calendar));