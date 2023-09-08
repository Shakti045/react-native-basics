import {View,Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Home from './screens/Home';
import Product from './screens/Product';

export type RootStackPramList={
    Home:undefined,
    Product:{Product:Product}
}
const Stack=createNativeStackNavigator<RootStackPramList>();
const App=():JSX.Element=>{
     return (
             <>
           <StatusBar backgroundColor={'blue'}/>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home'>
                  <Stack.Screen name='Home' component={Home}/>
                  <Stack.Screen name='Product' component={Product}/>
                </Stack.Navigator>
            </NavigationContainer>
            </>
        
     )
}


export default App;