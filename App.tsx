/* eslint-disable react-native/no-inline-styles */
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  NativeModules,
  Button,
  NativeEventEmitter,
} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import GradientClock from './src/screens/GradientClock';
import ChasingBubble from './src/screens/ChasingBubble';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
const Stack = createNativeStackNavigator();

// console.log(NativeModules.Counter);
// NativeModules.Counter.increment(value => {
//   console.log('the count is', value);
// });

// const CounterEvents = new NativeEventEmitter(NativeModules.Counter);
// const ToastService = NativeModules.ToastModule;
const AppContainer = () => {
  // const decrement = async () => {
  //   try {
  //     const result = await NativeModules.Counter.decrement();
  //     console.log(result);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  // const increment = () => {
  //   NativeModules.Counter.increment(results => {
  //     console.log(results);
  //   });
  // };

  // useEffect(() => {
  //   CounterEvents.addListener('onIncrement', results => {
  //     console.log('onIncrement received', results);
  //   });

  //   CounterEvents.addListener('onDecrement', results => {
  //     console.log('onDecrement received', results);
  //   });
  //   return () => {
  //     CounterEvents.removeAllListeners();
  //   };
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="GradientClock" component={GradientClock} />
        <Stack.Screen name="ChasingBubble" component={ChasingBubble} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return <AppContainer />;
};

export default App;
