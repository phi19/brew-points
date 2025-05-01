import React from 'react';
import {
  Button,
  Divider,
  Icon,
  Pressable,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const PaymentCompletedScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasBottomSafeArea={true}
      scrollable={true}
    >
      {/* Logo */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            height: 220,
            justifyContent: 'center',
            marginTop: 16,
            width: '100%',
          },
          dimensions.width
        )}
      >
        <Icon
          color={palettes.StockIt.ShopAppBlue}
          name={'Ionicons/checkmark-done-outline'}
          size={125}
        />
      </View>
      {/* Cost Details */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: palettes.StockIt.ViewBG,
            borderBottomWidth: 1,
            borderColor: palettes.StockIt.TextPlaceholder,
            borderLeftWidth: 1,
            borderRadius: 8,
            borderRightWidth: 1,
            borderTopWidth: 1,
            flexDirection: 'row',
            gap: 10,
            marginBottom: 16,
            marginLeft: 16,
            marginRight: 16,
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
        {/* Sales Price */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flex: 1,
              gap: 5,
              paddingBottom: 16,
              paddingTop: 16,
            },
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
            {'Total'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: palettes.StockIt.TextPlaceholder,
                fontFamily: 'System',
                fontSize: 24,
                fontWeight: '700',
              }),
              dimensions.width
            )}
          >
            {'$875'}
          </Text>
        </View>
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
        {/* Sales Price */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flex: 1,
              justifyContent: 'center',
              paddingBottom: 16,
              paddingTop: 16,
            },
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
            {'Due'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.StockIt.TextPlaceholder,
                fontFamily: 'System',
                fontSize: 24,
                fontWeight: '700',
                marginTop: 5,
              },
              dimensions.width
            )}
          >
            {'$575'}
          </Text>
        </View>
      </View>
      {/* Actions */}
      <View
        style={StyleSheet.applyWidth(
          { marginTop: 30, paddingLeft: 16, paddingRight: 16 },
          dimensions.width
        )}
      >
        <Pressable>
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderBottomWidth: 1,
                borderColor: palettes.StockIt.ViewBG,
                borderLeftWidth: 1,
                borderRadius: 8,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 16,
                paddingBottom: 10,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 10,
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Icon
                color={palettes.StockIt.TextPlaceholder}
                name={'FontAwesome/money'}
                size={28}
              />
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.text.strong,
                    fontFamily: 'Inter_400Regular',
                    fontSize: 16,
                    opacity: 0.8,
                    paddingLeft: 15,
                    textTransform: 'capitalize',
                  },
                  dimensions.width
                )}
              >
                {'Invoice: #21589'}
              </Text>
            </View>
            <Icon
              size={24}
              color={palettes.StockIt.TextPlaceholder}
              name={'Entypo/chevron-right'}
            />
          </View>
        </Pressable>

        <Pressable>
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderBottomWidth: 1,
                borderColor: palettes.StockIt.ViewBG,
                borderLeftWidth: 1,
                borderRadius: 8,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 16,
                paddingBottom: 10,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 10,
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Icon
                color={palettes.StockIt.TextPlaceholder}
                name={'MaterialCommunityIcons/message-processing-outline'}
                size={28}
              />
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.text.strong,
                    fontFamily: 'Inter_400Regular',
                    fontSize: 16,
                    opacity: 0.8,
                    paddingLeft: 15,
                    textTransform: 'capitalize',
                  },
                  dimensions.width
                )}
              >
                {'send SMS'}
              </Text>
            </View>
            <Icon
              size={24}
              color={palettes.StockIt.TextPlaceholder}
              name={'Entypo/chevron-right'}
            />
          </View>
        </Pressable>

        <Pressable>
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderBottomWidth: 1,
                borderColor: palettes.StockIt.ViewBG,
                borderLeftWidth: 1,
                borderRadius: 8,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 16,
                paddingBottom: 10,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 10,
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Icon
                color={palettes.StockIt.TextPlaceholder}
                name={'Foundation/print'}
                size={28}
              />
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.text.strong,
                    fontFamily: 'Inter_400Regular',
                    fontSize: 16,
                    opacity: 0.8,
                    paddingLeft: 15,
                    textTransform: 'capitalize',
                  },
                  dimensions.width
                )}
              >
                {'Received the pin'}
              </Text>
            </View>
            <Icon
              size={24}
              color={palettes.StockIt.TextPlaceholder}
              name={'Entypo/chevron-right'}
            />
          </View>
        </Pressable>

        <Pressable>
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderBottomWidth: 1,
                borderColor: palettes.StockIt.ViewBG,
                borderLeftWidth: 1,
                borderRadius: 8,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 16,
                paddingBottom: 10,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 10,
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Icon
                color={palettes.StockIt.TextPlaceholder}
                name={'MaterialCommunityIcons/email-check-outline'}
                size={28}
              />
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.text.strong,
                    fontFamily: 'Inter_400Regular',
                    fontSize: 16,
                    opacity: 0.8,
                    paddingLeft: 15,
                    textTransform: 'capitalize',
                  },
                  dimensions.width
                )}
              >
                {'send email'}
              </Text>
            </View>
            <Icon
              size={24}
              color={palettes.StockIt.TextPlaceholder}
              name={'Entypo/chevron-right'}
            />
          </View>
        </Pressable>
      </View>
      {/* Start New Sale */}
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
            height: 50,
            marginBottom: 16,
            marginLeft: 16,
            marginRight: 16,
            marginTop: 30,
            textAlign: 'center',
            textTransform: 'capitalize',
          },
          dimensions.width
        )}
        title={'start new sale'}
      />
    </ScreenContainer>
  );
};

export default withTheme(PaymentCompletedScreen);
