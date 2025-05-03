import React from 'react';
import {
  Button,
  Divider,
  ExpoImage,
  Icon,
  NumberInput,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const LoginScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [passwordInput, setPasswordInput] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer scrollable={false} hasSafeArea={true}>
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flex: 1,
            justifyContent: 'space-evenly',
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 20,
          },
          dimensions.width
        )}
      >
        {/* Logo */}
        <Image
          resizeMode={'cover'}
          source={imageSource(Images['logo'])}
          style={StyleSheet.applyWidth(
            { height: 100, width: 100 },
            dimensions.width
          )}
        />
        {/* TextTop */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.text.strong,
              fontFamily: 'Sora_500Medium',
              fontSize: 16,
            },
            dimensions.width
          )}
        >
          {'Get Started with BrewPoints'}
        </Text>

        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              gap: 10,
              justifyContent: 'flex-start',
            },
            dimensions.width
          )}
        >
          {/* Country */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignContent: 'center',
                alignItems: 'center',
                backgroundColor: palettes.App['BG Gray'],
                borderBottomWidth: 1,
                borderColor: theme.colors.border.brand,
                borderLeftWidth: 1,
                borderRadius: 16,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                height: 60,
                justifyContent: 'space-between',
                paddingLeft: 20,
                paddingRight: 20,
                width: 20,
              },
              dimensions.width
            )}
          >
            <ExpoImage
              allowDownscaling={true}
              cachePolicy={'disk'}
              contentPosition={'center'}
              resizeMode={'cover'}
              transitionDuration={300}
              transitionEffect={'cross-dissolve'}
              transitionTiming={'ease-in-out'}
              {...GlobalStyles.ExpoImageStyles(theme)['Image 2'].props}
              source={imageSource(Images['flag'])}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ExpoImageStyles(theme)['Image 2'].style,
                  { height: 20, width: 20 }
                ),
                dimensions.width
              )}
            />
            <Icon size={24} name={'AntDesign/caretdown'} />
          </View>
          {/* Mobile */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: palettes.App['BG Gray'],
                borderBottomWidth: 1,
                borderColor: theme.colors.border.brand,
                borderLeftWidth: 1,
                borderRadius: 12,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                height: 60,
                justifyContent: 'space-between',
                padding: 24,
                paddingLeft: 20,
                paddingRight: 20,
                width: '70%',
              },
              dimensions.width
            )}
          >
            {/* 3DIG */}
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text 4'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text 4'].style,
                  theme.typography.body1,
                  { fontFamily: 'Sora_700Bold', fontSize: 12 }
                ),
                dimensions.width
              )}
            >
              {'+351'}
            </Text>

            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingLeft: 10, paddingRight: 10 },
                dimensions.width
              )}
            >
              <NumberInput
                changeTextDelay={500}
                onChangeText={newNumberInputValue => {
                  const numberInputValue = newNumberInputValue;
                  try {
                    setNumberInputValue(newNumberInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                webShowOutline={true}
                {...GlobalStyles.NumberInputStyles(theme)['Number Input'].props}
                placeholder={'Mobile Number'}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.NumberInputStyles(theme)['Number Input'].style,
                    theme.typography.body2,
                    { width: 200 }
                  ),
                  dimensions.width
                )}
                value={numberInputValue}
              />
              <Icon
                size={24}
                color={palettes.App['Custom Color_20']}
                name={'FontAwesome/user'}
              />
            </View>
          </View>
        </View>
        {/* Continue */}
        <Button
          accessible={true}
          iconPosition={'left'}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: 'rgb(0, 0, 0)',
              borderRadius: 12,
              fontFamily: 'Sora_600SemiBold',
              fontSize: 15,
              height: 48,
              textAlign: 'center',
              width: '100%',
            },
            dimensions.width
          )}
          title={'Continue'}
        />
        {/* divider */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              height: 45,
              justifyContent: 'space-between',
              width: '100%',
            },
            dimensions.width
          )}
        >
          <Divider
            color={theme.colors.border.base}
            style={StyleSheet.applyWidth(
              { height: 1, width: 150 },
              dimensions.width
            )}
          />
          {/* OR */}
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.text.strong,
                fontFamily: 'Inter_500Medium',
                fontSize: 16,
                marginLeft: 20,
                marginRight: 20,
                opacity: 0.7,
              },
              dimensions.width
            )}
          >
            {'or'}
          </Text>
          <Divider
            color={theme.colors.border.base}
            style={StyleSheet.applyWidth(
              { height: 1, width: 150 },
              dimensions.width
            )}
          />
        </View>
        {/* Social options */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              width: '100%',
            },
            dimensions.width
          )}
        >
          {/* Google */}
          <Touchable>
            <View
              style={StyleSheet.applyWidth(
                {
                  alignContent: 'center',
                  alignItems: 'center',
                  borderBottomWidth: 2,
                  borderColor: theme.colors.border.brand,
                  borderLeftWidth: 2,
                  borderRadius: 16,
                  borderRightWidth: 2,
                  borderTopWidth: 2,
                  flexDirection: 'row',
                  height: 60,
                  justifyContent: 'center',
                  width: '100%',
                },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={imageSource(Images['ObGoogle'])}
                style={StyleSheet.applyWidth(
                  { height: 24, width: 24 },
                  dimensions.width
                )}
              />
              <Text
                accessible={true}
                selectable={false}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    theme.typography.body1,
                    { fontFamily: 'Sora_500Medium', fontSize: 12 }
                  ),
                  dimensions.width
                )}
              >
                {'Continue with Google'}
              </Text>
            </View>
          </Touchable>
          {/* Apple */}
          <Touchable>
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderBottomWidth: 2,
                  borderColor: theme.colors.border.brand,
                  borderLeftWidth: 2,
                  borderRadius: 16,
                  borderRightWidth: 2,
                  borderTopWidth: 2,
                  flexDirection: 'row',
                  height: 60,
                  justifyContent: 'center',
                  marginTop: 10,
                  width: '100%',
                },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={imageSource(Images['ObApple'])}
                style={StyleSheet.applyWidth(
                  { height: 24, width: 24 },
                  dimensions.width
                )}
              />
              {/* Text 2 */}
              <Text
                accessible={true}
                selectable={false}
                {...GlobalStyles.TextStyles(theme)['Text 4'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text 4'].style,
                    { fontFamily: 'Sora_500Medium', fontSize: 12 }
                  ),
                  dimensions.width
                )}
              >
                {'Continue with Apple'}
              </Text>
            </View>
          </Touchable>
          {/* Email */}
          <Touchable>
            <View
              style={StyleSheet.applyWidth(
                {
                  alignContent: 'center',
                  alignItems: 'center',
                  borderBottomWidth: 2,
                  borderColor: theme.colors.border.brand,
                  borderLeftWidth: 2,
                  borderRadius: 16,
                  borderRightWidth: 2,
                  borderTopWidth: 2,
                  flexDirection: 'row',
                  height: 60,
                  justifyContent: 'center',
                  marginTop: 10,
                  width: '100%',
                },
                dimensions.width
              )}
            >
              <Icon size={24} name={'Entypo/mail'} />
              <Text
                accessible={true}
                selectable={false}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    { fontFamily: 'Sora_400Regular', fontSize: 12 }
                  ),
                  dimensions.width
                )}
              >
                {'Continue with Email'}
              </Text>
            </View>
          </Touchable>
        </View>
        {/* divider2 */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              height: 45,
              justifyContent: 'space-between',
              width: '100%',
            },
            dimensions.width
          )}
        >
          <Divider
            color={theme.colors.border.base}
            style={StyleSheet.applyWidth(
              { height: 1, width: 150 },
              dimensions.width
            )}
          />
          {/* OR */}
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.text.strong,
                fontFamily: 'Inter_500Medium',
                fontSize: 16,
                marginLeft: 20,
                marginRight: 20,
                opacity: 0.7,
              },
              dimensions.width
            )}
          >
            {'or'}
          </Text>
          <Divider
            color={theme.colors.border.base}
            style={StyleSheet.applyWidth(
              { height: 1, width: 150 },
              dimensions.width
            )}
          />
        </View>
        {/* Get Help */}
        <Touchable
          style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                paddingBottom: 10,
                paddingTop: 10,
              },
              dimensions.width
            )}
          >
            <Icon size={24} name={'FontAwesome/question-circle'} />
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.App['Custom Color_20'],
                  fontFamily: 'Inter_400Regular',
                },
                dimensions.width
              )}
            >
              {'Get help'}
            </Text>
          </View>
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(LoginScreen);
