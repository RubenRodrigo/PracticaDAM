import React, { Component } from 'react';

import { Image, StyleSheet, Text, View } from 'react-native';

export default class Details extends Component {
  render() {
    const { params } = this.props.route;
    return (
      <View>
        <View style={styles.item}>
          <Text style={styles.title}>{params.itemObject.title}</Text>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={{ uri: params.itemObject.small_cover_image }}
              style={{ height: 300, width: 300, textAlignt: 'center' }}
            />
          </View>
          <Text style={styles.summary}>{params.itemObject.summary}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    paddingBottom: 20,
  },
  summary: {
    fontSize: 20,
    paddingTop: 40,
  },
});
