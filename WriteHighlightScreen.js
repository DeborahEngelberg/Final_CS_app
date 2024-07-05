import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { UserContext } from './UserContext';
import { saveHighlight } from './storage';

function WriteTodaysHighlightScreen({ navigation }) {
  const { userName } = useContext(UserContext);
  const [highlight, setHighlight] = useState('');

  const handleSave = async () => {
    if (!highlight.trim()) {
      Alert.alert('Validation', 'Highlight cannot be empty.');
      return;
    }

    const newHighlight = {
      highlight,
      date: new Date().toISOString(),
    };

    try {
      await saveHighlight(newHighlight);
      Alert.alert('Success', 'Highlight saved successfully!');
      setHighlight('');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', `Failed to save highlight: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi {userName ? userName : 'Guest'}, write today's highlight:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your highlight"
        value={highlight}
        onChangeText={setHighlight}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    marginBottom: 10,
  },
});

export default WriteTodaysHighlightScreen;
