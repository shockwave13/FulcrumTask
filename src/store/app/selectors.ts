import {createSelector} from 'reselect';
import {IAppStore} from './types';
import {IStore} from '../types';

export const getAppState = (state: IStore): IAppStore => state.app;

export const selectAppLoadingStatus = createSelector(
  [getAppState],
  (appState) => appState.loading,
);

export const selectChartData = createSelector(
  [getAppState],
  (appState) => appState.chartData,
);
