import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MovieDetail from './components/MovieDetail';
import ListOfMovies from './components/ListOfMovies';
import NavigationBar from './components/NavigationBar';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ListOfMovies"
        component={ListOfMovies}
        options={{ header: props => <NavigationBar {...props} /> }}
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetail}
        options={({ route }) => ({ title: route.params.itemObject.title })}
      />
    </Stack.Navigator>
  );
}

export const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};
