import {StyleSheet, Dimensions, PixelRatio} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { fonts } from '../constants/fonts';

export default typography = StyleSheet.create({
  h1: {
    fontSize: 30,
  },
  h2: {
    fontSize: 26,
    lineHeight: 26,
  },
  h3: {
    fontSize: 24,
    lineHeight: 24,
  },
  h4: {
    fontSize: 22,
    lineHeight: 22,
  },
  h5: {
    fontSize: 20,
  },
  h6: {
    fontSize: 17,
  },
  headline: {
    fontSize: 21,
    fontFamily: fonts.Bold,
    lineHeight: 24,
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.Bold,
    lineHeight: 22,
  },
  subheading: {
    fontSize: 17,
    marginVertical: 10,
  },
  label: {
    fontSize: 18,
  },
  placeholder: {
    fontSize: 17,
  },
  body1: {
    fontSize: 18,
    fontFamily: fonts.SemiBold,
    color: Colors.white
  },
  body2: {
    fontSize: 15,
    fontFamily: fonts.Regular,
    lineHeight: 20,
  }
});
