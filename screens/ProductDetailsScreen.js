import React from 'react';
import {
  Button,
  Divider,
  ScreenContainer,
  Swiper,
  SwiperItem,
  VStack,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const ProductDetailsScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasBottomSafeArea={true}
      scrollable={true}
    >
      <Swiper
        dotActiveColor={theme.colors.branding.primary}
        dotColor={theme.colors.text.light}
        dotsTouchable={true}
        hideDots={false}
        loop={false}
        minDistanceForAction={0.2}
        minDistanceToCapture={5}
        timeout={0}
        vertical={false}
        style={StyleSheet.applyWidth(
          { height: 300, paddingLeft: 16, paddingRight: 16, width: '100%' },
          dimensions.width
        )}
      >
        <SwiperItem
          style={StyleSheet.applyWidth(
            { borderRadius: 12, overflow: 'hidden', width: '100%' },
            dimensions.width
          )}
        >
          <Image
            resizeMode={'cover'}
            source={imageSource(
              'https://s7d9.scene7.com/is/image/JCPenney/DP1214201517070042M.tif?hei=380&amp;wid=380&op_usm=.4,.8,0,0&resmode=sharp2&op_usm=1.5,.8,0,0&resmode=sharp'
            )}
            style={StyleSheet.applyWidth(
              { height: 250, width: '100%' },
              dimensions.width
            )}
          />
        </SwiperItem>
      </Swiper>
      {/* Highlights */}
      <View
        style={StyleSheet.applyWidth(
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 16,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 16,
          },
          dimensions.width
        )}
      >
        {/* Product */}
        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
          <Text
            accessible={true}
            selectable={false}
            ellipsizeMode={'tail'}
            numberOfLines={1}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.text.strong,
                fontFamily: 'Inter_600SemiBold',
                fontSize: 21,
              },
              dimensions.width
            )}
          >
            {'Gym T-Shirt'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            ellipsizeMode={'tail'}
            numberOfLines={1}
            style={StyleSheet.applyWidth(
              { color: theme.colors.text.strong, fontSize: 16, marginTop: 5 },
              dimensions.width
            )}
          >
            {'T-Shirt'}
          </Text>
        </View>
        {/* Price */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.text.strong,
              fontFamily: 'Inter_700Bold',
              fontSize: 21,
              textAlign: 'right',
            },
            dimensions.width
          )}
        >
          {'$175.00'}
        </Text>
      </View>
      {/* Details */}
      <View
        style={StyleSheet.applyWidth(
          {
            paddingBottom: 16,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 16,
          },
          dimensions.width
        )}
      >
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.text.strong,
              fontFamily: 'System',
              fontSize: 18,
              fontWeight: '600',
            },
            dimensions.width
          )}
        >
          {'Details'}
        </Text>

        <Text
          accessible={true}
          selectable={false}
          ellipsizeMode={'tail'}
          style={StyleSheet.applyWidth(
            { color: theme.colors.text.medium, marginTop: 5 },
            dimensions.width
          )}
        >
          {
            "This climacool crewneck tee is the ideal blend of performance and comfort, with a streamlined fit to complement your body's movement. climacool paneled zones for ventilation non-chafing stitching banded collar tag free polyester washable imported"
          }
        </Text>
        {/* Cost Details */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: palettes.StockIt.ViewBG,
              borderRadius: 12,
              flexDirection: 'row',
              gap: 15,
              marginTop: 16,
              overflow: 'hidden',
              paddingBottom: 16,
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 16,
            },
            dimensions.width
          )}
        >
          <VStack
            {...GlobalStyles.VStackStyles(theme)['V Stack'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.VStackStyles(theme)['V Stack'].style,
                { flex: 1 }
              ),
              dimensions.width
            )}
          >
            {/* Sales Price */}
            <View
              style={StyleSheet.applyWidth(
                { paddingBottom: 16, paddingTop: 16 },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  { color: theme.colors.text.strong, fontSize: 16 },
                  dimensions.width
                )}
              >
                {'Sales Price'}
              </Text>

              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: palettes.StockIt.TextPlaceholder,
                    fontFamily: 'System',
                    fontSize: 15,
                    fontWeight: '400',
                    marginTop: 5,
                  },
                  dimensions.width
                )}
              >
                {'$175'}
              </Text>
            </View>
            {/* Sales Price */}
            <View
              style={StyleSheet.applyWidth(
                { paddingBottom: 16, paddingTop: 16 },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  { color: theme.colors.text.strong, fontSize: 16 },
                  dimensions.width
                )}
              >
                {'Wholesales Price'}
              </Text>

              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: palettes.StockIt.TextPlaceholder,
                    fontFamily: 'System',
                    fontSize: 15,
                    fontWeight: '400',
                    marginTop: 5,
                  },
                  dimensions.width
                )}
              >
                {'$155'}
              </Text>
            </View>
          </VStack>
          <Divider
            {...GlobalStyles.DividerStyles(theme)['Divider'].props}
            color={palettes.StockIt.TextPlaceholder}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.DividerStyles(theme)['Divider'].style,
                { height: '100%', width: 1 }
              ),
              dimensions.width
            )}
          />
          {/* V Stack 2 */}
          <VStack
            {...GlobalStyles.VStackStyles(theme)['V Stack'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.VStackStyles(theme)['V Stack'].style,
                { flex: 1 }
              ),
              dimensions.width
            )}
          >
            {/* Sales Price */}
            <View
              style={StyleSheet.applyWidth(
                { paddingBottom: 16, paddingTop: 16 },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  { color: theme.colors.text.strong, fontSize: 16 },
                  dimensions.width
                )}
              >
                {'Stock'}
              </Text>

              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: palettes.StockIt.TextPlaceholder,
                    fontFamily: 'System',
                    fontSize: 15,
                    fontWeight: '400',
                    marginTop: 5,
                  },
                  dimensions.width
                )}
              >
                {'20 Pcs'}
              </Text>
            </View>
            {/* Sales Price */}
            <View
              style={StyleSheet.applyWidth(
                { paddingBottom: 16, paddingTop: 16 },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  { color: theme.colors.text.strong, fontSize: 16 },
                  dimensions.width
                )}
              >
                {'Dealer Price'}
              </Text>

              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: palettes.StockIt.TextPlaceholder,
                    fontFamily: 'System',
                    fontSize: 15,
                    fontWeight: '400',
                    marginTop: 5,
                  },
                  dimensions.width
                )}
              >
                {'$150'}
              </Text>
            </View>
          </VStack>
        </View>
      </View>
      {/* Action Btn */}
      <Button
        accessible={true}
        iconPosition={'left'}
        style={StyleSheet.applyWidth(
          {
            backgroundColor: palettes.StockIt.ShopAppBlue,
            borderRadius: 11,
            fontFamily: 'System',
            fontSize: 18,
            fontWeight: '600',
            height: 51,
            marginBottom: 20,
            marginLeft: 16,
            marginRight: 16,
            marginTop: 20,
            textAlign: 'center',
            textTransform: 'capitalize',
          },
          dimensions.width
        )}
        title={'+ add stock'}
      />
    </ScreenContainer>
  );
};

export default withTheme(ProductDetailsScreen);
