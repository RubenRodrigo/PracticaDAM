import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export default function NavigationBar() {
  return (
    <View style={styles.topBar}>
      <Image
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Home_Icon.svg/768px-Home_Icon.svg.png',
        }}
        style={{ height: 40, width: 40 }}
      />
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          textAlignVertical: 'center',
          fontSize: 20,
        }}>
        Movies
      </Text>
      <Image
        source={{
          uri:
            'https://planet.neeo.com/media/download/k9xpv3/1280px-star_movies_logo-svg.png',
        }}
        style={{ height: 40, width: 80 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    alignSelf: 'stretch',
    height: 62,
    flexDirection: 'row', // row
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 10,
    paddingRight: 10,
  },
});
