import DefaultButton from 'components/buttons/DefaultButton';
import CustomLineChart from 'components/charts/CustomLineChart';
import React, {ReactElement, useEffect, useState, useCallback} from 'react';
import {ActivityIndicator, SafeAreaView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import socket from 'services';
import {setChartData, resetChartData} from 'store/app';
import {selectChartData, selectAppLoadingStatus} from 'store/app/selectors';
import styles from './styles';

export default function Home(): ReactElement {
  const chartData = useSelector(selectChartData);
  const loading = useSelector(selectAppLoadingStatus);
  const dispatch = useDispatch();

  const handlePressReset = () => dispatch(resetChartData());

  useEffect(() => {
    const randomNumberSocket = socket('ws://localhost:8080/');
    randomNumberSocket.onmessage = (message) => {
      const obj = JSON.parse(message.data);
      dispatch(setChartData(obj.value));
    };
    return () => randomNumberSocket.close();
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <View style={styles.chartContainerStyle}>
        {loading ? (
          <ActivityIndicator color="#54D3C2" size="large" />
        ) : (
          <CustomLineChart data={chartData} />
        )}
      </View>
      <DefaultButton title="Reset" onPress={handlePressReset} />
    </SafeAreaView>
  );
}
