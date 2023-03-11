import React from 'react';
import MovieList from './component/MovieLogic/MovieList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviePage from "./component/MovieLogic/MoviePage.js"
import Seating from './component/SeatLogic/Seating';

export default function App() {
  const Stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='MovieList' component={MovieList} />
        <Stack.Screen name="MoviePage" component={MoviePage} />
        <Stack.Screen name="Seats" component={Seating}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
