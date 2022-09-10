import React, {useState,useCallback} from 'react';
import {Text,View,FlatList,Image,StyleSheet,useWindowDimensions} from 'react-native';
const ImageCarousel = ({images} : {images : [string]})=> {
    const windowWidth = useWindowDimensions().width;
    const [activeImage,setActiveImage] = useState(0)

    const OnflastListUpdate = useCallback(({viewableItems}) => {
      if (viewableItems.length > 0) {
        setActiveImage(viewableItems[0].index || 0);
      }
      //  console.log(viewableItems)
    },[]);
    return (
      <View style={styles.root}>
        <FlatList
          data={images}
          renderItem={({item}) => (
            <Image
              style={[styles.image, {width: windowWidth - 40}]}
              source={{uri: item}}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={windowWidth - 30}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          viewabilityConfig={{
            viewAreaCoveragePercentThreshold: 50,
          }}
          onViewableItemsChanged={OnflastListUpdate}
        />
        <View style={styles.rootDot}>
          {images.map((image, index) => (
            <View
              style={[
                styles.dot,
                {
                  backgroundColor:
                    index === activeImage ? '#aabbbb' : '#ededed',
                },
              ]}
            />
          ))}
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
  image: {
    height: 250,
    resizeMode: 'contain',
    margin: 10,
  },
  root: {},
  dot: {
    width: 12,
    height: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#aabbbb',
    margin: 5,
    backgroundColor : '#ededed'
  },
  rootDot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ImageCarousel
