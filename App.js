// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CollorGenerator from './src/Projects/CollorGenerator';

export default function App() {
  return (
    <SafeAreaView>
      <View style={{ color: 'green', }}>
        <CollorGenerator> </CollorGenerator>
        {/* <AWS></AWS> */}
      </View>
    </SafeAreaView>
  );
}

// const  style = styleSheet.create ({
//   textColor: {
//     color: 'red',
    
//   }
// });
