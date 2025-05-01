import React from 'react';
import { Icon, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const NotiCardBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors.background.base, borderRadius: 10 },
        dimensions.width
      )}
    >
      {/* Left */}
      <View>
        <Icon size={24} name={'MaterialCommunityIcons/bell-ring-outline'} />
      </View>
      {/* Middle */}
      <View>
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text 2'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextStyles(theme)['Text 2'].style,
              theme.typography.body1,
              {}
            ),
            dimensions.width
          )}
        >
          {'Lorem ipsum dolor sit amet'}
        </Text>
        {/* Text 2 */}
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text 2'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextStyles(theme)['Text 2'].style,
              theme.typography.body1,
              {}
            ),
            dimensions.width
          )}
        >
          {'Lorem ipsum dolor sit amet'}
        </Text>
      </View>
      {/* Right */}
      <View>
        {/* Time */}
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text 2'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextStyles(theme)['Text 2'].style,
              theme.typography.body1,
              { alignSelf: 'flex-end' }
            ),
            dimensions.width
          )}
        >
          {'1 Hour\n'}
        </Text>
        <Icon size={24} name={'AntDesign/star'} />
      </View>
    </View>
  );
};

export default withTheme(NotiCardBlock);
