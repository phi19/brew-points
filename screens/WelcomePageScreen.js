import React from 'react';
import {
  DeckSwiper,
  DeckSwiperCard,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { ImageBackground, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const WelcomePageScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <ImageBackground
        resizeMode={'cover'}
        source={imageSource(Images['coffee'])}
        style={StyleSheet.applyWidth(
          { height: '100%', justifyContent: 'flex-end', width: '100%' },
          dimensions.width
        )}
      >
        {/* Top */}
        <View>
          <DeckSwiper
            horizontalEnabled={true}
            infiniteSwiping={false}
            startCardIndex={0}
            verticalEnabled={true}
            visibleCardCount={1}
            {...GlobalStyles.DeckSwiperStyles(theme)['Deck Swiper'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.DeckSwiperStyles(theme)['Deck Swiper'].style,
              dimensions.width
            )}
          >
            <DeckSwiperCard
              {...GlobalStyles.DeckSwiperCardStyles(theme)['Deck Swiper Card']
                .props}
              style={StyleSheet.applyWidth(
                GlobalStyles.DeckSwiperCardStyles(theme)['Deck Swiper Card']
                  .style,
                dimensions.width
              )}
            />
          </DeckSwiper>
        </View>
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
        />
      </ImageBackground>
    </ScreenContainer>
  );
};

export default withTheme(WelcomePageScreen);
