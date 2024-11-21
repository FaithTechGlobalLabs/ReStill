import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import { useColorScheme } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { MoodSelector } from '@/components/MoodSelector';
import { useMood } from '@/contexts/MoodContext';
import { MOOD_LEVELS } from '@/constants/AppConstants';
import { router } from 'expo-router';

interface ArticleCardProps {
  title: string;
  imageUri: string;
}

function ArticleCard({ title, imageUri }: ArticleCardProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <ThemedView
      style={[
        styles.articleCard,
        {
          backgroundColor: colors.background,
          borderColor: colors.tint,
          borderWidth: 1,
        },
      ]}
    >
      <Image source={{ uri: imageUri }} style={styles.articleImage} />
      <ThemedText style={styles.articleTitle}>{title}</ThemedText>
    </ThemedView>
  );
}

export default function HomeScreen() {
  const {
    state: { mood },
    handleMoodSelection,
  } = useMood();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#100022', dark: '#100022' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-restill-logo.png')}
          style={styles.logo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{ color: colors.text }}>
          Hello Jane Doe!
        </ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView
        style={[
          styles.moodSelectorContainer,
          { backgroundColor: colorScheme === 'light' ? '#FFFFFF' : '#2A2A2A' },
        ]}
      >
        <ThemedText style={[styles.label, { color: colors.text }]}>
          How are you feeling today?
        </ThemedText>
        <MoodSelector
          moodLevels={MOOD_LEVELS}
          selectedMood={mood}
          onSelectMood={handleMoodSelection}
        />
        <TouchableOpacity
          style={[
            styles.moodSelectorContainer,
            {
              backgroundColor: colorScheme === 'light' ? '#FFFFFF' : '#2A2A2A',
            },
          ]}
        >
          <TouchableOpacity
            onPress={() => {
              router.navigate('/(moodModals)/moodLogModal');
            }}
          >
            <ThemedText>Open Mood Logger </ThemedText>
          </TouchableOpacity>
        </TouchableOpacity>
      </ThemedView>
      <ThemedView
        style={[styles.devotionBox, { backgroundColor: colors.tint }]}
      >
        <ThemedText style={[styles.devotionText, { color: colors.background }]}>
          Today's Devotion
        </ThemedText>
        <ThemedText type="subtitle" style={{ color: colors.background }}>
          God's love is unconditional
        </ThemedText>
      </ThemedView>
      <TouchableOpacity
        style={[
          styles.stressManagementButton,
          {
            backgroundColor: colors.background,
            borderColor: colors.tint,
          },
        ]}
      >
        <ThemedView style={styles.stressManagementContent}>
          <ThemedView>
            <ThemedText
              style={[styles.stressManagementText, { color: colors.text }]}
            >
              Stress Management
            </ThemedText>
            <ThemedText
              style={[styles.stressManagementSubText, { color: colors.icon }]}
            >
              Learn how to manage stress
            </ThemedText>
          </ThemedView>
          <ThemedView
            style={[
              styles.stressManagementIcon,
              { backgroundColor: colors.tint },
            ]}
          >
            {/* You can replace this with an actual icon component */}
            <ThemedText style={{ color: colors.background, fontSize: 20 }}>
              →
            </ThemedText>
          </ThemedView>
        </ThemedView>
      </TouchableOpacity>
      <ThemedView style={styles.articlesSection}>
        <ThemedText style={[styles.articlesTitle, { color: colors.text }]}>
          Articles
        </ThemedText>
        <ThemedView style={styles.articleCards}>
          <ArticleCard
            title="What Does God Say About Love"
            imageUri="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/Fall%20Trees.jpg?itok=RrK-d1yZ"
          />
          <ArticleCard
            title="The power of gratitude"
            imageUri="https://www.mindful.sodexo.com/wp-content/uploads/2020/11/DiscoveringPowerofGratitude.jpg"
          />
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 20,
  },
  logo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  moodSelectorContainer: {
    padding: 20,
    borderRadius: 15,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  devotionBox: {
    padding: 20,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  devotionText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  stressManagementButton: {
    padding: 20,
    margin: 20,
    borderRadius: 15,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  stressManagementContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stressManagementText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  stressManagementSubText: {
    fontSize: 14,
    marginTop: 5,
  },
  stressManagementIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  articlesSection: {
    padding: 20,
  },
  articlesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  articleCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  articleCard: {
    width: '48%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  articleImage: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  articleTitle: {
    marginTop: 5,
    fontSize: 14,
    padding: 10,
  },
});
