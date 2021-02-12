import {SET_LOADING_STATUS, SET_VALUE, RESET_CHART_DATA} from './types';
import {IAction, IStore} from '../types';

export const setLoading = (status: boolean): IAction => ({
  type: SET_LOADING_STATUS,
  payload: status,
});

export const setChartData = (data: number) => (
  dispatch: any,
  getState: () => IStore,
) => {
  const initArray = getState().app.chartData;
  const newArray =
    initArray.length < 20
      ? initArray.concat(data)
      : initArray.slice(1, 20).concat(data);

  dispatch(setValue('chartData', newArray));
};

export const resetChartData = () => ({
  type: RESET_CHART_DATA,
  payload: [],
});

export const setValue = (field: string, value: any): IAction => ({
  type: SET_VALUE,
  payload: {
    field,
    value,
  },
});
