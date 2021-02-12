import {Dimensions, StyleSheet} from 'react-native';
const windowHeight = Dimensions.get('screen').height;
const windowWidth = Dimensions.get('screen').width;

export default StyleSheet.create({
  chartContainerStyle: {
    height: windowHeight * 0.6,
    flexDirection: 'row',
    width: windowWidth - 40,
    alignItems: 'center',
  },
  componentContainerStyle: {
    flexDirection: 'row',
  },
  linearChartStyle: {
    flex: 1,
    marginLeft: 5,
  },
});
