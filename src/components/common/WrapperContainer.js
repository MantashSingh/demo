import React from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';

import colors from '../../styles/colors';

const WrapperContainer = ({
  children,

  bgColor = colors.white,
  statusBarColor = colors.white,
  barStyle = 'dark-content',
}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: statusBarColor}}>
      <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
      <View style={{backgroundColor: bgColor, flex: 1}}>{children}</View>
     
    </SafeAreaView>
  );
};

export default WrapperContainer;
