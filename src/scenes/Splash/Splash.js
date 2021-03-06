/*
| contains basic splash with timer for android only
*/
import React, {useEffect} from 'react';
import {StyleSheet, StatusBar, SafeAreaView, View} from 'react-native';
import {Image} from 'react-native-elements';

import {logo} from '../../assets';

const Splash = props => {
  const {navigation} = props;
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 1500);
  }, [navigation]);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <Image source={logo} style={styles.ImageStyle} resizeMode="contain" />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageStyle: {width: 250, height: 250},
});

export default Splash;
