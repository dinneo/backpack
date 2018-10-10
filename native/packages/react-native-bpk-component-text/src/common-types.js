/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2018 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */

import { type Node } from 'react';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, type StyleObj } from 'react-native';

export const TEXT_STYLES = [
  'caps',
  'xs',
  'sm',
  'base',
  'lg',
  'xl',
  'xxl',
  'xxxl',
];
export type TextStyle = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'xxl';

export const EMPHASIS_STYLES = ['regular', 'semiBold', 'heavy'];
export type EmphasisStyle = 'regular' | 'semiBold' | 'heavy';

export type Props = {
  children: Node,
  textStyle: TextStyle,
  emphasize: EmphasisStyle,
  style: ?StyleObj,
};

export const emphasizePropType = (
  props: Props,
  propName: string,
  componentName: string,
) => {
  const value = props[propName];
  if (EmphasisStyle.includes(value)) {
    return new Error(
      `Invalid prop \`${propName}\` of type \`${typeof value}\` supplied to \`${componentName}\`, expected one of ${EmphasisStyle.toString()}.`,
    ); // eslint-disable-line max-len
  }

  const enabled = !!value;

  if (Platform.OS === 'ios' && (enabled && props.textStyle.includes('xxl'))) {
    return new Error(
      `Invalid prop \`${propName}\` of value \`${value}\` supplied to \`${componentName}\`. On iOS, \`textStyle\` value of \`xxl\` or \`xxxl\` cannot be emphasized.`,
    ); // eslint-disable-line max-len
  }

  return false;
};

export const stylePropType = (
  props: Props,
  propName: string,
  componentName: string,
) => {
  const value = StyleSheet.flatten(props[propName]);

  if (value === undefined) return false;

  if (value.fontWeight) {
    return new Error(
      `Invalid prop \`${propName}\` with \`fontWeight\` value \`${
        value.fontWeight
      }\` supplied to \`${componentName}\`. Use \`emphasize\` prop instead.`,
    ); // eslint-disable-line max-len
  }

  return false;
};

export const propTypes = {
  children: PropTypes.node.isRequired,
  textStyle: PropTypes.oneOf(TEXT_STYLES),
  emphasize: emphasizePropType,
  style: stylePropType,
};

export const defaultProps = {
  textStyle: 'base',
  emphasize: EMPHASIS_STYLES.regular,
  style: null,
};
