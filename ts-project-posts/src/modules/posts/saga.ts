import { call, put, takeLatest } from 'redux-saga/effects';
import { getPostById } from '../../api/post';
import { getPostAsync, GET_POST, postCreator} from './actions';

export function* getPostSaga(action: ReturnType<typeof postCreator>) {
    yield put(getPostAsync.request(null));
    try {
        const payload = yield call(getPostById, action.payload);
        yield put(getPostAsync.success(payload));
    } catch(e) {
        yield put(getPostAsync.failure(e));
    }
}

export function* PostSaga() {
    yield takeLatest(GET_POST, getPostSaga);
}