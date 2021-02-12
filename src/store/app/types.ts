export const SET_LOADING_STATUS = '@app/set_loading_status';
export const SET_VALUE = '@app/set_value';
export const RESET_CHART_DATA = '@app/reset_chart_data';

export interface IAppStore {
  loading: boolean;
  chartData: Array<number>;
}
