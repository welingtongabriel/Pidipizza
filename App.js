import React from 'react';
import { Animated, StyleSheet, Text, View, Button} from 'react-native';





export default function App() {
  
  const b = new Animated.Value(0);
  const d = new Animated.Value(0);
    
  const iniciar = Animated.sequence([
   Animated.timing(b, {
    toValue: 600,
    duration: 5000,
    useNativeDriver: false,

  }),
   Animated.timing(d, {
    toValue: 360,
    duration: 5000,
    useNativeDriver: false,

   }),
   Animated.timing(b, {
    toValue: 0,
    duration: 5000,
    useNativeDriver: false,

  }),
  Animated.timing(d, {
    toValue: 0,
    duration: 5000,
    useNativeDriver: false,

  })
  ]);

  return (
    <View style={ estilos.container}>

      <Animated.View style={{ top:b, width: 50, height:50, backgroundColor: '#008000', left:d,}}>

      </Animated.View> 
      <View style={estilos.areaview}>
    <Button title="Iniciar" onPress={()=> {iniciar.start();}} />
      </View>
    </View>
  );



}

const estilos = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    
      },

      areaview:{
        flex: 1,
        justifyContent: 'center',
        padding: 100,
        
      }
});
