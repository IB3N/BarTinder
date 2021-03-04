import * as React from 'react';
import { StyleSheet } from 'react-native';
import Colours from './colours';

const ButtonStyles = StyleSheet.create({
  button: {
    width: 150,
    textAlign: 'center',
    borderColor: Colours.yellow,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: Colours.yellow,
    marginBottom: 20,
    shadowColor: Colours.charcoal,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  buttonText: {
    color: Colours.charcoal,
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default ButtonStyles;
