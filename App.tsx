import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import Constants from "expo-constants";
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';

export default function App() {

  const carouselItems = [{
    image: require('./assets/spiderman.jpg'),
    title: 'Spider-Man: Far From Home',
    categories: 'Fantasy, Sci-fi',
  },
    {
      image: require('./assets/nutcracker.jpg'),
      title: 'The Nutcracker And The Four Realms',
      categories: 'Adventure, Family, Fantasy',
    },
    {
      image: require('./assets/toystory.jpg'),
      title: 'Toy Story 4',
      categories: 'Adventure, Fantasy',
    }
  ]

  return (
    <SafeAreaView style={{
      flex: 1,
      justifyContent: 'flex-start'
    }}>
      <View style={{
        marginTop: Constants.statusBarHeight,
        height: 40,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
      }}>
        <MaterialIcons
          name={'menu'}
          size={24}
          style={{}}/>
        <Image
          source={require('./assets/netflix_logo.png')}
          style={{
            width: 100,
            height: 20,
            resizeMode: 'contain'
          }}
        />
        <MaterialIcons
          name={'search'}
          size={24}/>
      </View>
      <View
        style={{
          height: 280
        }}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center',}}>
          <Carousel
            layout={"default"}
            data={carouselItems}
            sliderWidth={320}
            itemWidth={300}
            itemHeight={280}
            firstItem={1}
            hasParallaxImages={true}
            inactiveSlideScale={0.94}
            inactiveSlideOpacity={0.7}
            contentContainerCustomStyle={{
              // paddingVertical: 10 // for custom animation
            }}
            renderItem={({item, index}, parallaxProps) => {
              return (
                <Image
                  source={item.image}
                  style={{
                    resizeMode: 'cover',
                  }}
                  {...parallaxProps}
                />
              )
            }}
            // onSnapToItem={index => this.setState({activeIndex: index})}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({})