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

import React, { type Node } from 'react';
import PropTypes from 'prop-types';
import { View, type StyleObj, ViewPropTypes } from 'react-native';

export type Props = {
  children: Node,
  style: ?StyleObj,
};

const BpkCarouselItem = ({ children, style }: Props) => (
  <View style={[style]}>{children}</View>
);

BpkCarouselItem.propTypes = {
  children: PropTypes.node.isRequired,
  style: ViewPropTypes.style,
};

BpkCarouselItem.defaultProps = {
  style: null,
};

export default BpkCarouselItem;
