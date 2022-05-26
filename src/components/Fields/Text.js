/**
 * Custom Text Component
 *
 */
import React, { memo } from 'react';
import { StyleSheet, View, Text as RNText } from 'react-native';
import {
  typography
} from '../../styles';

const Text = ({ children,
  style,
  selectable = true,
  ...rest }) => {
  return (
    <RNText
      style={[{ ...typography.body1 }, style]}
      selectable={selectable}
      {...rest}>
      {children}
    </RNText>
  );
};
export default memo(Text);

const styles = StyleSheet.create({});
