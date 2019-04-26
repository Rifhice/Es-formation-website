import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root.reducer';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { history } from '../history'

export default (initialState = {}) => {
    const store = createStore(
        rootReducer(history),
        window && window.__REDUX_DEVTOOLS_EXTENSION__ ?
            compose(
                applyMiddleware(routerMiddleware(history), thunk), window.__REDUX_DEVTOOLS_EXTENSION__()
            )
            :
            compose(
                applyMiddleware(routerMiddleware(history), thunk)
            )
    );
    return store
}