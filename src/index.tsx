import React, {ReactElement} from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import Home from 'screens/Home';

import store from 'store';

import styles from './styles';

export default function App(): ReactElement {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.safeAreaViewStyle}>
        <Home />
      </SafeAreaView>
    </Provider>
  );
}
