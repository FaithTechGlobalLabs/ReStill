import { StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { useState } from 'react';

interface Mood {
  id: number;
  name: string;
  icon: string;
  color: string;
}

const moodItems: Mood[] = [
  {
    id: 1,
    name: 'Family',
    icon: '❤️',
    color: '#9D84B7',
  },
  {
    id: 2,
    name: 'Work',
    icon: '😊',
    color: '#9D84B7',
  },
  {
    id: 3,
    name: 'Food',
    icon: '😊',
    color: '#9D84B7',
  },
  {
    id: 4,
    name: 'Health',
    icon: '😊',
    color: '#9D84B7',
  },
  {
    id: 5,
    name: 'Exercise',
    icon: '😊',
    color: '#9D84B7',
  },
  {
    id: 6,
    name: 'Relationships',
    icon: '😊',
    color: '#9D84B7',
  },
  {
    id: 7,
    name: 'School',
    icon: '😊',
    color: '#9D84B7',
  },
  {
    id: 8,
    name: 'Friends',
    icon: '😊',
    color: '#9D84B7',
  },
  {
    id: 9,
    name: 'Travel',
    icon: '😊',
    color: '#9D84B7',
  },
];

export default function thankfulModal() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const [gratefulSelection, setGratefulSelection] = useState<string[]>([]);

  return (
    <ThemedView style={styles.container}>
      <StatusBar style={'dark'} />
      <TouchableOpacity
        style={styles.close}
        onPress={() => {
          router.back();
        }}
      >
        <Ionicons name="caret-back-circle-outline" size={34} color="black" />
      </TouchableOpacity>
      <ThemedView style={styles.header}>
        <ThemedText style={styles.prompt}>
          Wonderful! What are you grateful for?
        </ThemedText>
      </ThemedView>
      <ThemedText style={styles.subPrompt}>
        Select what you're grateful for
      </ThemedText>
      <ThemedView style={styles.selectGrid}>
        {moodItems.map((item: Mood) => (
          <TouchableOpacity 
          key={item.id} 
          style={gratefulSelection.includes(item.name) ? styles.selectItemSelected : styles.selectItem}
          onPress={() => {
            if (gratefulSelection.includes(item.name)) {
              setGratefulSelection(gratefulSelection.filter((selectedItem) => selectedItem !== item.name));
            } else {
              setGratefulSelection([...gratefulSelection, item.name]);
            }
          }}
          >
            <ThemedText style={gratefulSelection.includes(item.name) ? styles.selectItemTextSelected : styles.selectItemText}>{item.name}</ThemedText>
          </TouchableOpacity>
        ))}
      </ThemedView>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          router.back();
          router.back();
        }}
      >
        <ThemedText style={styles.button}>Save</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D3CCE3',
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  close: {
    position: 'absolute',
    top: 60,
    left: 40,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 100,
    marginLeft: 6,
    backgroundColor: '#D3CCE3',
  },
  prompt: {
    fontSize: 24,
    fontWeight: 400,
    marginTop: 30,
    marginRight: 25,
    backgroundColor: '#D3CCE3',
    color: 'black',
    lineHeight: 40,
  },
  subPrompt: {
    fontSize: 14,
    fontWeight: 300,
    color: 'black',
  },
  selectGrid: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: '#D3CCE3',
    marginTop: 40,
  },
  selectItem: {
    height: 100,
    width: 100,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    margin: '2%'
  },
  selectItemSelected: {
    height: 100,
    width: 100,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2%',
    backgroundColor: '#170728',
  },
  selectItemText: {
    color: 'black',
    textAlign: 'center',
    marginVertical: 40,
    fontSize: 14,
  },
  selectItemTextSelected: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 40,
    fontSize: 14,
  },
  buttonContainer: {
    backgroundColor: '#9D84B7',
    borderRadius: 30,
    marginHorizontal: 20,
  },
  button: {
    width: 200,
    paddingVertical: 15,
    color: 'black',
    fontWeight: '600',
    letterSpacing: 1,
    alignItems: 'center',
    textAlign: 'center',
  },
});
