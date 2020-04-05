import {createAction, handleActions} from 'redux-actions';
import produce from 'immer';

//액션 타입 선언
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

//액션 생성함수 정의
export const changeField = createAction(
    CHANGE_FIELD,
    ({form, key, value}) => ({
        form, //register, login
        key, //username, password, passwordConfirm
        value, //실제 바꾸려는 값
    }),
);
export const initializeForm = createAction(
    INITIALIZE_FORM,
    form => form
); //register/login

//immutable의 Map으로 감싸기
const initialState = {
    register: {
        username: '',
        password: '',
        passwordConfirm: '',
    },
    login: {
        username: '',
        password: '',
    },
};

//리듀서 작성
const auth = handleActions(
    {
        [CHANGE_FIELD]: (state, {payload: {form, key, value}}) =>
            produce(state, draft => {
                draft[form][key] = value; //예: state.register.username을 바꾼다.
            }),
        [INITIALIZE_FORM]: (state, {payload: form}) => ({
            ...state,
            [form]: initialState[form],
        }),
    },
    initialState,
);

export default auth;
