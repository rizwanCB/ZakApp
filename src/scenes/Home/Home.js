import React from 'react';
import {StyleSheet, StatusBar, SafeAreaView, View} from 'react-native';
import {Image} from 'react-native-elements';

import {logo} from '../../assets';

const Home = props => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
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
    backgroundColor: 'pink'
  },
  ImageStyle: {width: 250, height: 250},
});

export default Home;
