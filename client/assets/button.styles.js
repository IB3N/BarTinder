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
    marginBottom: 15,
    shadowColor: '#000000aa',
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 2,
  },
  buttonText: {
    color: Colours.charcoal,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: 'B',
    fontSize: 20,
  },
});

export default ButtonStyles;
