import React, { Component } from 'react';

import {
  Image,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

//Componente Item
function Item({ title, image, summary }) {
  return (
    <View style={styles.item}>
      <Image
        source={{ uri: image }}
        style={{ height: 60, width: 60, borderRadius: 400 / 2 }}
      />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text numberOfLines={1}>{summary}</Text>
      </View>
    </View>
  );
}

export default class ListOfMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: true,
      items: [],
    };
  }

  async componentDidMount() {
    //Esta es la API de la que sacamos la lista
    await fetch('https://yts.mx/api/v2/list_movies.json')
      .then(res => res.json())
      .then(result => {
        this.setState({
          items: result.data.movies,
        });
      })
      .catch(error => {
        this.setState({
          error: error,
        });
      })
      .finally(() => {
        this.setState({
          loading: false,
        });
      });
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        {this.state.loading ? (
          <Text>Cargando peliculas...</Text>
        ) : (
          <FlatList
            data={this.state.items}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => navigate('MovieDetail', { itemObject: item })}>
                  <Item
                    title={item.title}
                    summary={item.summary}
                    image={item.small_cover_image}
                    navigation={this.props.navigation}
                  />
                </TouchableOpacity>
              );
            }}
            keyExtractor={item => item.id}
            navigation={this.props.navigation}
          />
        )}
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
    flexDirection: 'row',
    padding: 15,
    borderColor: 'gray',
    borderBottomWidth: 1,
  },
  info: {
    paddingLeft: 10,
  },
  title: {
    fontSize: 20,
  },
});
