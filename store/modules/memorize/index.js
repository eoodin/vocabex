import store from '../../';

export const loadMemorize = () => {
    return dispatch => {
        //TODO:
        return Promise.of({}).then(function (memorizeState) {
            dispatch({ type: 'SET_MEMORIZE_STATE', state: memorizeState });
        }).catch(e => {
                // todo
            })
    }
};

export default (state = [], action) => {
    switch (action.type) {
        case 'SET_MEMORIZE_STATE':
            return action.state;
        default:
    }

    return state;
};
