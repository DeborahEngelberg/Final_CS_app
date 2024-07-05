// HighlightInput.js
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

function HighlightInput({ highlight, setHighlight }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={highlight}
        onChangeText={setHighlight}
        placeholder="Enter your highlight..."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: '100%',
  },
});

export default HighlightInput;