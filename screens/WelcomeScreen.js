import React from 'react';
import {
  Button,
  LinearGradient,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { ImageBackground, Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const WelcomeScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <ImageBackground
        resizeMode={'cover'}
        source={imageSource(Images['coffee'])}
        style={StyleSheet.applyWidth(
          {
            alignContent: 'flex-start',
            alignSelf: 'center',
            backgroundColor: palettes.App.Peoplebit_Light_Gray,
            height: '100%',
            justifyContent: 'flex-end',
            width: '100%',
          },
          dimensions.width
        )}
      >
        {/* Top */}
        <View />
        <LinearGradient
          endX={100}
          endY={100}
          startX={0}
          startY={0}
          {...GlobalStyles.LinearGradientStyles(theme)['Linear Gradient'].props}
          color1={theme.colors.text.strong}
          color2={'rgba(0, 0, 0, 0)'}
          style={StyleSheet.applyWidth(
            GlobalStyles.LinearGradientStyles(theme)['Linear Gradient'].style,
            dimensions.width
          )}
        />
        {/* Bot */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              bottom: 0,
              left: 0,
              position: 'absolute',
              right: 0,
            },
            dimensions.width
          )}
        >
          {/* Cima */}
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: 'rgb(255, 255, 255)',
                fontFamily: 'Sora_500Medium',
                fontSize: 32,
                letterSpacing: 0.16,
                lineHeight: 48,
                marginLeft: 48,
                marginRight: 48,
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {'Discover, Order & Enjoy – The Smart Way toCoffee.'}
          </Text>
          {/* Baixo */}
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text 2'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Text 2'].style,
                theme.typography.body1,
                {
                  color: 'rgb(162, 162, 162)',
                  fontFamily: 'Sora_400Regular',
                  fontSize: 14,
                  letterSpacing: 0.4,
                  lineHeight: 21,
                  margin: 21,
                  textAlign: 'center',
                }
              ),
              dimensions.width
            )}
          >
            {
              'All your favorite cafés, one cozy app. Order ahead & skip the wait.'
            }
          </Text>
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                navigation.navigate('LoginScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            {...GlobalStyles.ButtonStyles(theme)['Button'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ButtonStyles(theme)['Button'].style,
                theme.typography.button,
                {
                  backgroundColor: 'rgb(198, 124, 78)',
                  borderRadius: 12,
                  fontFamily: 'Sora_400Regular',
                  fontSize: 16,
                  height: 55,
                  marginBottom: 40,
                  width: 325,
                }
              ),
              dimensions.width
            )}
            title={'Get Started'}
          />
        </View>
      </ImageBackground>
    </ScreenContainer>
  );
};

export default withTheme(WelcomeScreen);
