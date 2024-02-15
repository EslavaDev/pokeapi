/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: import explicitly to use the types shipped with jest.
import {it, expect} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {Stats} from '@src/modules/detail/components/Stats';
import styles from '@src/modules/detail/components/Stats/styles';
import {Text, View} from 'react-native';

it('should render a Text component with styles.title style and text "Stats"', () => {
  const stats: any[] | undefined = [];
  const component = renderer.create(<Stats stats={stats} />);
  const text = component.root.findByType(Text);
  expect(text.props.style).toEqual(styles.title);
  expect(text.props.children).toEqual('Stats');
});
it('should render a Text component with styles.title style and text "Stats" undefined stats', () => {
  const stats = undefined;
  const component = renderer.create(<Stats stats={stats} />);
  const text = component.root.findByType(Text);
  expect(text.props.style).toEqual(styles.title);
  expect(text.props.children).toEqual('Stats');
});

it('should render a View component for each item in stats array', () => {
  const stats = [
    {stat: {name: 'stat1'}, base_stat: 10},
    {stat: {name: 'stat2'}, base_stat: 20},
    {stat: {name: 'stat3'}, base_stat: 30},
  ];
  const component = renderer.create(<Stats stats={stats} />);
  const views = component.root.findAllByType(View);
  expect(views.length).toEqual(stats.length + 1);
});
