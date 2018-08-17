import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import store from './store';
import { Button } from 'react-native-elements';
import { Provider } from 'react-redux'

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button title="Push Me" icon={{name: 'cached'}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default props => <Provider store={store}><App {...props} /></Provider>;