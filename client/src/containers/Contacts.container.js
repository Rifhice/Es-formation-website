import Contacts from '../screens/Contacts'
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
)(Contacts));