import React, {ReactElement, memo} from 'react';
import {View} from 'react-native';
import {LineChart, YAxis, Grid} from 'react-native-svg-charts';

import styles from './styles';

interface ICustomLineChart {
  data: Array<number>;
}

const CustomLineChart = ({data}: ICustomLineChart): ReactElement => {
  const contentInset = {top: 110, bottom: 100};
  return (
    <View style={styles.componentContainerStyle}>
      <YAxis
        data={data}
        contentInset={contentInset}
        svg={{
          fill: 'black',
          fontSize: 12,
        }}
        numberOfTicks={15}
      />
      <View style={styles.chartContainerStyle}>
        <LineChart
          style={styles.linearChartStyle}
          data={data}
          svg={{stroke: 'rgb(100, 155, 155)'}}
          contentInset={contentInset}>
          <Grid />
        </LineChart>
      </View>
    </View>
  );
};

export default memo(CustomLineChart);
