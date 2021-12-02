import React from 'react';
import List from './component/List';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <List />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
