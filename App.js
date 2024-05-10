import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import MyStack from './src/routes/Routes';

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
  }
});