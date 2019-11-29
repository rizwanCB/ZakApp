import React, {useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {ListItem, Header} from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';

import {getAlbums} from '../../redux';
import theme from '../../theme';
const Albums = props => {
  useEffect(() => {
    const selectedUserId = props.navigation.getParam('params');
    props.getAlbums(selectedUserId);
  }, []);
  return (
    <>
      <Header
        placement={'left'}
        centerComponent={{
          text: 'Albums',
          style: {color: '#fff', fontSize: 22},
        }}
      />
      <SafeAreaView>
        {props.loading ? (
          <ActivityIndicator size={'large'} />
        ) : (
          <FlatList
            data={props.albums}
            style={styles.flatListContainer}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <ListItem
                title={item.title}
                light
                chevron
                leftIcon={{name: 'ios-albums', type: 'ionicon'}}
                Component={TouchableScale}
                friction={90} //
                tension={100} // These props are passed to the parent component (here TouchableScale)
                activeScale={0.95} //
                linearGradientProps={{
                  colors: [
                    theme.colors.purpleGradeTwo,
                    theme.colors.purpleGradeTwo,
                  ],
                }}
                ViewComponent={LinearGradient}
                titleStyle={styles.title}
                subtitleStyle={styles.subtitle}
                containerStyle={styles.itemContainer}
              />
            )}
          />
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    marginBottom: 80,
  },

  itemContainer: {
    margin: 5,
  },
  title: {
    color: theme.colors.lightFontColor,
    fontWeight: 'bold',
  },
  subtitle: {
    color: theme.colors.lightFontColor,
  },
});

const mapStateToProps = state => {
  const {albums, loading} = state.Data;
  return {albums, loading};
};
export default connect(
  mapStateToProps,
  {
    getAlbums,
  },
)(Albums);
