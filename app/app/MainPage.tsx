import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MainPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Üdvözöllek a főoldalon!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
});

export default MainPage;