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

import React from 'react';
import readme from 'react-native-bpk-component-button-link/README.md';

import iosScreenshot from 'react-native-bpk-component-button-link/screenshots/ios/default.png';
import androidScreenshot from 'react-native-bpk-component-button-link/screenshots/android/default.png';

import DocsPageBuilder from '../../components/DocsPageBuilder';

const components = [
  {
    id: 'default',
    title: 'Default',
    showMenu: false,
    screenshots: [
      {
        title: 'iOS',
        width: 750,
        height: 1334,
        src: `/${iosScreenshot}`,
        altText: 'iOS Default Button Component',
        subText: '(iPhone 8 simulator)',
      },
      {
        title: 'Android',
        width: 1080,
        height: 1920,
        src: `/${androidScreenshot}`,
        altText: 'Android Default Button Component',
        subText: '(Google Pixel emulator)',
      },
    ],
  },
];

const NativeTextPage = ({ ...rest }) => (
  <DocsPageBuilder
    title="Button Links"
    components={components}
    readme={readme}
    {...rest}
  />
);

export default NativeTextPage;
