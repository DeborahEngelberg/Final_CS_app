// HighlightsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HighlightsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Highlights Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HighlightsScreen;
