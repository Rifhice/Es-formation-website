import training from '../screens/TrainingScreen'
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
const mapStateToProps = state => {
    return {
    }
};

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(training));