import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {COUNTER_KEY, counterReducer, CounterState} from './counter';

export interface State {
  [COUNTER_KEY]: CounterState;
}

export const reducers: ActionReducerMap<State> = {
  [COUNTER_KEY]: counterReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
