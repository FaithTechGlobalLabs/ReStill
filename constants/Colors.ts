/**
 * Colors used in the Restill app for both light and dark modes.
 */

// Light mode colors
const lightPrimary = '#D3CCE3'; // Lavender (#D3CCE3)
const lightSecondary = '#EDEDED'; // Soft Gray (#EDEDED)
const lightAccent = '#9D84B7'; // Muted Purple (#9D84B7)
const lightBackground = '#FFFFFF'; // White (#FFFFFF)

// Dark mode colors
const darkPrimary = '#3D3244'; // Dark Lavender
const darkSecondary = '#2A2A2A'; // Deep Gray
const darkAccent = '#B39DDB'; // Light Purple
const darkText = '#F0F0F0'; // Off-White
const darkBackground = '#121212'; // Very Dark Gray

export const Colors = {
  light: {
    text: '#11181C',
    background: lightBackground,
    tint: lightAccent,
    icon: lightPrimary,
    tabIconDefault: lightPrimary,
    tabIconSelected: lightAccent,
    card: lightSecondary,
  },
  dark: {
    text: darkText,
    background: darkBackground,
    tint: darkAccent,
    icon: darkPrimary,
    tabIconDefault: darkPrimary,
    tabIconSelected: darkAccent,
    card: darkSecondary,
  },
};