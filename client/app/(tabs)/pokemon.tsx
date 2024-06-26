import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, FlatList, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const pokemonData = [
  { name: 'Pikachu', characteristic: 'Electric' },
  { name: 'Charmander', characteristic: 'Fire' },
  { name: 'Squirtle', characteristic: 'Water' },
  { name: 'Bulbasaur', characteristic: 'Grass/Poison' },
  { name: 'Eevee', characteristic: 'Normal' },
  { name: 'Jigglypuff', characteristic: 'Fairy/Normal' },
  { name: 'Meowth', characteristic: 'Normal' },
  { name: 'Psyduck', characteristic: 'Water' },
  { name: 'Snorlax', characteristic: 'Normal' },
  { name: 'Gengar', characteristic: 'Ghost/Poison' },
];

export default function TabThreeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>

      {/* Pokémon Table */}
      <ThemedView style={styles.tableContainer}>
        <ThemedText type="title">Pokémon Characteristics</ThemedText>
        <FlatList
          data={pokemonData}
          keyExtractor={(item) => item.name}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <View style={styles.tableRow}>
              <ThemedText style={styles.tableCell}>{item.name}</ThemedText>
              <ThemedText style={styles.tableCell}>{item.characteristic}</ThemedText>
            </View>
          )}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  tableContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tableCell: {
    flex: 1,
  },
});
