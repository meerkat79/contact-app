import {applyMiddleware, createStore} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducers';

export default function configureStore(){
    return createStore(
        rootReducer,
        applyMiddleware(reduxImmutableStateInvariant())
    );
}