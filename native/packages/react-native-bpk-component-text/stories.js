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

/* eslint-disable */

import React from 'react';
import {
  colorRed300,
  colorRed500,
  colorBlue700,
  colorGray500,
  colorGreen500,
  colorYellow500,
  colorPink500,
} from 'bpk-tokens/tokens/base.react.native';
import { View, Platform } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import BpkImage from 'react-native-bpk-component-image';
import CenterDecorator from '../../storybook/CenterDecorator';

import BpkText from './index';

// Note this is half the image width when exported from sketch for a 2x device
const sketchWidthAndroid = 698 / 2;
const sketchHeightAndroid = (sketchWidthAndroid * 428) / 698;
const sketchWidthLHXxlAndroid = 608 / 2;
const sketchHeightLHXxlAndroid = (sketchWidthLHXxlAndroid * 634) / 608;
const sketchWidthIos = 712 / 2;
const sketchHeightIos = (sketchWidthIos * 424) / 712;
const sketchWidthLHXxlIos = 608 / 2;
const sketchHeightLHXxlIos = (sketchWidthLHXxlIos * 634) / 608;
const sketchWidthLHXlAndroid = 398 / 2;
const sketchHeightLHXlAndroid = (sketchWidthLHXlAndroid * 418) / 398;
const sketchWidthLHXlIos = 372 / 2;
const sketchHeightLHXlIos = (sketchWidthLHXlIos * 416) / 372;

storiesOf('react-native-bpk-component-text', module)
  .addDecorator(CenterDecorator)
  .add('docs:default', () => (
    <View>
      <BpkText textStyle="xxxl">Flights to Edinburgh</BpkText>
      <BpkText textStyle="xxl">Flights to Edinburgh</BpkText>
      <BpkText textStyle="xl">Flights to Edinburgh</BpkText>
      <BpkText textStyle="lg">Flights to Edinburgh</BpkText>
      <BpkText textStyle="base">Flights to Edinburgh</BpkText>
      <BpkText textStyle="sm">Flights to Edinburgh</BpkText>
      <BpkText textStyle="xs">Flights to Edinburgh</BpkText>
      <BpkText textStyle="caps">FLIGHTS TO EDINBURGH</BpkText>
    </View>
  ))
  .add('docs:emphasize', () => (
    <View>
      <BpkText
        textStyle="xxxl"
        emphasize={Platform.OS === 'android' ? 'semiBold' : 'regular'}
      >
        Flights to Edinburgh
      </BpkText>
      <BpkText
        textStyle="xxl"
        emphasize={Platform.OS === 'android' ? 'semiBold' : 'regular'}
      >
        Flights to Edinburgh
      </BpkText>
      <BpkText textStyle="xl" emphasize="regular">
        Flights to Edinburgh
      </BpkText>
      <BpkText textStyle="lg" emphasize="regular">
        Flights to Edinburgh
      </BpkText>
      <BpkText textStyle="base" emphasize="regular">
        Flights to Edinburgh
      </BpkText>
      <BpkText textStyle="sm" emphasize="regular">
        Flights to Edinburgh
      </BpkText>
      <BpkText textStyle="xs" emphasize="regular">
        Flights to Edinburgh
      </BpkText>
      <BpkText textStyle="caps" emphasize="regular">
        FLIGHTS TO EDINBURGH
      </BpkText>
    </View>
  ))
  .add('Colours', () => (
    <View>
      <BpkText
        textStyle="xxxl"
        emphasize={Platform.OS === 'android' ? 'semiBold' : 'regular'}
        style={{ color: colorBlue700 }}
      >
        Flights to Edinburgh
      </BpkText>
      <BpkText
        textStyle="xxl"
        emphasize={Platform.OS === 'android' ? 'semiBold' : 'regular'}
        style={{ color: colorRed500 }}
      >
        Flights to Edinburgh
      </BpkText>
      <BpkText
        textStyle="xl"
        emphasize="regular"
        style={{ color: colorGreen500 }}
      >
        Flights to Edinburgh
      </BpkText>
      <BpkText
        textStyle="lg"
        emphasize="regular"
        style={{ color: colorYellow500 }}
      >
        Flights to Edinburgh
      </BpkText>
      <BpkText
        textStyle="base"
        emphasize="regular"
        style={{ color: colorPink500 }}
      >
        Flights to Edinburgh
      </BpkText>
      <BpkText
        textStyle="sm"
        emphasize="regular"
        style={{ color: colorBlue700 }}
      >
        Flights to Edinburgh
      </BpkText>
      <BpkText
        textStyle="xs"
        emphasize="regular"
        style={{ color: colorGray500 }}
      >
        Flights to Edinburgh
      </BpkText>
      <BpkText
        textStyle="caps"
        emphasize="regular"
        style={{ color: colorRed500 }}
      >
        FLIGHTS TO EDINBURGH
      </BpkText>
    </View>
  ))
  .add('Sketchy 😉', () => (
    <View>
      {Platform.OS === 'ios' && (
        <BpkImage
          source={require('./sketch_ios.png')}
          alt="debugging image"
          style={{
            position: 'absolute',
            opacity: 0.5,
            width: sketchWidthIos,
            height: sketchHeightIos,
            left: 0,
            top: 8,
          }}
        />
      )}
      {Platform.OS === 'android' && (
        <BpkImage
          source={require('./sketch_android.png')}
          alt="debugging image"
          style={{
            position: 'absolute',
            opacity: 0.5,
            width: sketchWidthAndroid,
            height: sketchHeightAndroid,
            left: 0,
            top: 11,
          }}
        />
      )}
      <BpkText
        textStyle="xxxl"
        emphasize={Platform.OS === 'android' ? 'semiBold' : 'regular'}
        style={{ color: colorRed300 }}
      >
        Flights to Edinburg
      </BpkText>
      <BpkText
        textStyle="xxl"
        emphasize={Platform.OS === 'android' ? 'semiBold' : 'regular'}
        style={{ color: colorRed300 }}
      >
        Flights to Edinburgh
      </BpkText>
      <BpkText
        textStyle="xl"
        emphasize="regular"
        style={{ color: colorRed300 }}
      >
        Flights to Edinburgh
      </BpkText>
      <BpkText
        textStyle="lg"
        emphasize="regular"
        style={{ color: colorRed300 }}
      >
        Flights to Edinburgh
      </BpkText>
      <BpkText
        textStyle="base"
        emphasize="regular"
        style={{ color: colorRed300 }}
      >
        Flights to Edinburgh
      </BpkText>
      <BpkText
        textStyle="sm"
        emphasize="regular"
        style={{ color: colorRed300 }}
      >
        Flights to Edinburgh
      </BpkText>
      <BpkText
        textStyle="xs"
        emphasize="regular"
        style={{ color: colorRed300 }}
      >
        Flights to Edinburgh
      </BpkText>
      <BpkText
        textStyle="caps"
        emphasize="regular"
        style={{ color: colorRed300 }}
      >
        FLIGHTS TO EDINBURGH
      </BpkText>
    </View>
  ))
  .add('Sketchy Xl Line Heights 😉', () => (
    <View>
      {Platform.OS === 'android' && (
        <BpkImage
          source={require('./sketch_Xl_android.png')}
          alt="debugging image"
          style={{
            position: 'absolute',
            opacity: 0.5,
            width: sketchWidthLHXlAndroid,
            height: sketchHeightLHXlAndroid,
            left: 2,
            top: 4,
          }}
        />
      )}
      {Platform.OS === 'ios' && (
        <BpkImage
          source={require('./sketch_Xl_ios.png')}
          alt="debugging image"
          style={{
            position: 'absolute',
            opacity: 0.5,
            width: sketchWidthLHXlIos,
            height: sketchHeightLHXlIos,
            left: 2,
            top: 8,
          }}
        />
      )}
      <BpkText
        textStyle="xl"
        emphasize="regular"
        style={{ color: colorRed300 }}
      >
        {`Flights to Edinburgh
Flights to Edinburgh
Flights to Edinburgh
Flights to Edinburgh
Flights to Edinburgh
Flights to Edinburgh
Flights to Edinburgh`}
      </BpkText>
    </View>
  ))
  .add('Sketchy Xxl Line Heights 😉', () => (
    <View>
      {Platform.OS === 'android' && (
        <BpkImage
          source={require('./sketch_Xxl_android.png')}
          alt="debugging image"
          style={{
            position: 'absolute',
            opacity: 0.5,
            width: sketchWidthLHXxlAndroid,
            height: sketchHeightLHXxlAndroid,
            left: 2,
            top: 11,
          }}
        />
      )}
      {Platform.OS === 'ios' && (
        <BpkImage
          source={require('./sketch_Xxl_ios.png')}
          alt="debugging image"
          style={{
            position: 'absolute',
            opacity: 0.5,
            width: sketchWidthLHXxlIos,
            height: sketchHeightLHXxlIos,
            left: 2,
            top: 9,
          }}
        />
      )}
      <BpkText
        textStyle="xxl"
        emphasize={Platform.OS === 'android' ? 'semiBold' : 'regular'}
        style={{ color: colorRed300 }}
      >
        {`Flights to Edinburgh
Flights to Edinburgh
Flights to Edinburgh
Flights to Edinburgh
Flights to Edinburgh
Flights to Edinburgh
Flights to Edinburgh`}
      </BpkText>
    </View>
  ));
