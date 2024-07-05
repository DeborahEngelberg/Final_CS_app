import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { UserContext } from './UserContext';
import storage from './storage';

function WriteTodaysHighlightScreen({ navigation }) {
  const { userName } = useContext(UserContext);
  const [highlight, setHighlight] = useState('');
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    
    loadHighlights();
  }, []);

  const loadHighlights = async () => {
    try {
      const loadedHighlights = await storage.loadHighlights();
      // Sort highlights by date (newest first)
      loadedHighlights.sort((a, b) => new Date(b.date) - new Date(a.date));
      setHighlights(loadedHighlights);
    } catch (error) {
      Alert.alert('Error', `Failed to load highlights: ${error.message}`);
    }
  };

  const handleSave = async () => {
    if (!highlight.trim()) {
      Alert.alert('Validation', 'Highlight cannot be empty.');
      return;
    }

    const newHighlight = {
      highlight,
      date: new Date().toISOString(),
      color: '#E0BFB8', 
    };

    try {
      await storage.saveHighlight(newHighlight);
      Alert.alert('Success', 'Highlight saved successfully!');
      setHighlight('');
      
      loadHighlights();
    } catch (error) {
      Alert.alert('Error', `Failed to save highlight: ${error.message}`);
    }
  };

  const handleDeleteHighlight = async (index) => {
    const highlightToDelete = highlights[index];
  
    try {
      
      await storage.deleteHighlight(highlightToDelete);
  
      const updatedHighlights = highlights.filter((_, idx) => idx !== index);
      setHighlights(updatedHighlights);
  
      Alert.alert('Success', 'Highlight deleted successfully!');
    } catch (error) {
      Alert.alert('Error', `Failed to delete highlight: ${error.message}`);
    }
  };
  
  

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Hi {userName ? userName : 'Guest'}, write today's highlight:</Text>
        <TextInput
          style={styles.input}
          placeholder="Write your highlight here!"
          value={highlight}
          onChangeText={setHighlight}
        />
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <View style={styles.highlightsContainer}>
          <Text style={styles.highlightsTitle}>Your Highlights:</Text>
          {highlights.map((item, index) => (
            <View key={index} style={[styles.highlightItem, { backgroundColor: item.color }]}>
              <Text style={styles.highlightText}>{item.highlight}</Text>
              <Text style={styles.highlightDate}>{formatDate(item.date)}</Text>
              <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteHighlight(index)}>
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  return formattedDate;
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#e0f7fa', 
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#00796b', 
  },
  input: {
    borderWidth: 1,
    borderColor: '#00796b', 
    padding: 10,
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#ffffff', 
  },
  button: {
    backgroundColor: '#80deea', 
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    color: '#004d40', 
  },
  highlightsContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  highlightsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#00796b', 
  },
  highlightItem: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#00796b', 
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  highlightText: {
    flex: 1,
    fontSize: 16,
    color: '#004d40', 
  },
  highlightDate: {
    fontSize: 12,
    color: '#666', 
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: '#ff7043', 
    padding: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    fontSize: 14,
    color: '#fff', // White color for delete button text
  },
});

export default WriteTodaysHighlightScreen;
