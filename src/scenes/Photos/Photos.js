import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native';
import {Header, Image, Icon} from 'react-native-elements';
import Modal from 'react-native-modal';
import ImageViewer from 'react-native-image-zoom-viewer';

import {connect} from 'react-redux';

import {getAlbumPhotos} from '../../redux';
import theme from '../../theme';
const Photos = props => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPic, setSelectedPic] = useState({});

  useEffect(() => {
    const selectedAlbumId = props.navigation.getParam('params');
    props.getAlbumPhotos(selectedAlbumId);
  }, []);
  return (
    <>
      <Header
        placement={'left'}
        centerComponent={{
          text: 'Photos',
          style: {color: '#fff', fontSize: 22},
        }}
      />
      <SafeAreaView>
        {props.loading ? (
          <ActivityIndicator size={'large'} />
        ) : (
          <View>
            <FlatList
              data={props.photos}
              numColumns={2}
              horizontal={false}
              style={styles.flatListContainer}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={{
                    flex: 1,
                  }}
                  onPress={() => {
                    setSelectedPic(item);
                    setIsModalVisible(true);
                  }}>
                  <Image
                    style={{flex: 1, height: 200}}
                    source={{uri: item.thumbnailUrl}}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
        )}
      </SafeAreaView>

      <Modal
        testID={'modal'}
        isVisible={isModalVisible}
        backdropColor="#B4B3DB"
        backdropOpacity={1}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={100}
        animationOutTiming={100}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}>
        <TouchableOpacity
          onPress={() => {
            setSelectedPic({});
            setIsModalVisible(false);
          }}>
          <Icon
            reverse
            name={'ios-close'}
            type={'ionicon'}
            size={30}
            color="black"
          />
        </TouchableOpacity>
        <ImageViewer imageUrls={[{url: selectedPic.url}]} />
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    marginBottom: 80,
  },

  itemContainer: {},
  title: {
    color: theme.colors.lightFontColor,
    fontWeight: 'bold',
  },
  subtitle: {
    color: theme.colors.lightFontColor,
  },
});

const mapStateToProps = state => {
  const {photos, loading} = state.Data;
  console.warn(photos);
  return {photos, loading};
};
export default connect(
  mapStateToProps,
  {
    getAlbumPhotos,
  },
)(Photos);
