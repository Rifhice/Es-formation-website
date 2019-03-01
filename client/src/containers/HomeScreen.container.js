import home from '../screens/HomeScreen'
import { connect } from 'react-redux';
import FormationServices from '../services/FormationService'
import { withRouter } from 'react-router'
import actions from '../redux/actions/formation.action'
const mapStateToProps = state => {
    return {
        formations: state.formations.all,
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
)(home));