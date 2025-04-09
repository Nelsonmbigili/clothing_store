import { compose, legacy_createStore, applyMiddleware } from "redux";
import { loggerMiddleware } from "./middleware/logger";
import { persistStore , persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import { rootReducer} from "./root-reducer";
import { thunk } from 'redux-thunk';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
}

const persistedReducer  = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV === 'development' && loggerMiddleware, thunk].filter(Boolean);

const composeEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = legacy_createStore(persistedReducer , undefined,composedEnhancers);

export const persistor = persistStore(store);
