import React from 'react';
import { ExpoImage, ScreenContainer, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const InvoiceScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasBottomSafeArea={true}
      scrollable={true}
    >
      {/* Store Details */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            gap: 16,
            justifyContent: 'space-between',
            marginLeft: 16,
            marginRight: 16,
            marginTop: 16,
            paddingBottom: 16,
          },
          dimensions.width
        )}
      >
        {/* Logo */}
        <ExpoImage
          allowDownscaling={true}
          cachePolicy={'disk'}
          contentPosition={'center'}
          resizeMode={'cover'}
          transitionDuration={300}
          transitionEffect={'cross-dissolve'}
          transitionTiming={'ease-in-out'}
          source={imageSource(Images['User'])}
          style={StyleSheet.applyWidth(
            { height: 80, width: 80 },
            dimensions.width
          )}
        />
        {/* Details */}
        <View
          style={StyleSheet.applyWidth({ flex: 1, gap: 5 }, dimensions.width)}
        >
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.text.strong,
                fontFamily: 'Inter_600SemiBold',
                fontSize: 16,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'maan theme'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.StockIt.TextPlaceholder,
                fontSize: 13,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'athens, texas(TX), 89741'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.StockIt.TextPlaceholder,
                fontSize: 13,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'+163 8493 032'}
          </Text>
        </View>
      </View>
      {/* Customer Details */}
      <View
        style={StyleSheet.applyWidth(
          {
            borderBottomWidth: 1,
            borderColor: palettes.StockIt.ViewBG,
            borderTopWidth: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 16,
            paddingTop: 12,
            width: '100%',
          },
          dimensions.width
        )}
      >
        {/* Customer details */}
        <View
          style={StyleSheet.applyWidth(
            { flex: 1, gap: 10, marginTop: 16, paddingLeft: 16 },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.text.strong,
                fontFamily: 'Inter_600SemiBold',
                fontSize: 16,
                lineHeight: 25,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'bill to'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            ellipsizeMode={'tail'}
            numberOfLines={1}
            style={StyleSheet.applyWidth(
              {
                color: palettes.StockIt.TextPlaceholder,
                fontSize: 13,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'broxton, georgia (GA)'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.StockIt.TextPlaceholder,
                fontSize: 13,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'+123 2333 223'}
          </Text>
        </View>
        {/* Invoice Details */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-end',
              flex: 1,
              gap: 5,
              marginTop: 16,
              paddingRight: 16,
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
                fontFamily: 'Inter_600SemiBold',
                fontSize: 16,
                lineHeight: 25,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'invoice #21589'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.StockIt.TextPlaceholder,
                fontSize: 13,
                lineHeight: 25,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'3rd Jul, 2022'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.StockIt.TextPlaceholder,
                fontSize: 13,
                lineHeight: 25,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'9:41 AM'}
          </Text>
        </View>
      </View>
      {/* Item Details */}
      <View
        style={StyleSheet.applyWidth(
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 16,
            width: '100%',
          },
          dimensions.width
        )}
      >
        {/* Product names */}
        <View
          style={StyleSheet.applyWidth(
            { flex: 1, gap: 10, marginTop: 16, paddingLeft: 16, paddingTop: 5 },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.text.strong,
                fontFamily: 'Inter_600SemiBold',
                fontSize: 13,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'product name'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.StockIt.TextPlaceholder,
                fontSize: 13,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'men for shoes'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.StockIt.TextPlaceholder,
                fontSize: 13,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'smart watch'}
          </Text>
        </View>
        {/* Unit prices */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              gap: 10,
              marginTop: 16,
              paddingTop: 5,
              width: '22%',
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
                fontFamily: 'Inter_600SemiBold',
                fontSize: 13,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'unit price'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.StockIt.TextPlaceholder,
                fontSize: 13,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'$175'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.StockIt.TextPlaceholder,
                fontSize: 13,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'$175'}
          </Text>
        </View>
        {/* Quantity */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              gap: 10,
              marginTop: 16,
              paddingTop: 5,
              width: '22%',
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
                fontFamily: 'Inter_600SemiBold',
                fontSize: 13,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'quantity'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.StockIt.TextPlaceholder,
                fontSize: 13,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'$375'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.StockIt.TextPlaceholder,
                fontSize: 13,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'$3975'}
          </Text>
        </View>
        {/* Total Price */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-end',
              gap: 10,
              marginTop: 16,
              paddingRight: 16,
              paddingTop: 5,
              width: '25%',
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
                fontFamily: 'Inter_600SemiBold',
                fontSize: 13,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'total price'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.StockIt.TextPlaceholder,
                fontSize: 13,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'$3975'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.StockIt.TextPlaceholder,
                fontSize: 13,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'$375'}
          </Text>
        </View>
      </View>
      {/* Calculations */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'flex-end',
            borderColor: palettes.StockIt.ViewBG,
            borderTopWidth: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingRight: 16,
            width: '100%',
          },
          dimensions.width
        )}
      >
        {/* headings */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-end',
              flex: 1,
              gap: 10,
              marginTop: 16,
              width: '22%',
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.StockIt.TextPlaceholder,
                fontSize: 13,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'sub total'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.StockIt.TextPlaceholder,
                fontSize: 13,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'total vat'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.StockIt.TextPlaceholder,
                fontSize: 13,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'total discount'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.StockIt.TextPlaceholder,
                fontSize: 13,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'delivery charge'}
          </Text>
        </View>
        {/* amount */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'flex-end', gap: 10, marginTop: 16, width: '22%' },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.StockIt.TextPlaceholder,
                fontSize: 13,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'$130'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.StockIt.TextPlaceholder,
                fontSize: 13,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'$0'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.StockIt.TextPlaceholder,
                fontSize: 13,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'$1'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.StockIt.TextPlaceholder,
                fontSize: 13,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'$0'}
          </Text>
        </View>
      </View>
      {/* Total */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'flex-end',
            borderBottomWidth: 1,
            borderColor: palettes.StockIt.ViewBG,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingBottom: 16,
            paddingRight: 16,
            width: '100%',
          },
          dimensions.width
        )}
      >
        {/* headings */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-end',
              flex: 1,
              gap: 10,
              marginTop: 8,
              paddingTop: 5,
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
                fontFamily: 'Inter_600SemiBold',
                fontSize: 13,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'Total Payable'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.StockIt.TextPlaceholder,
                fontSize: 13,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'Paid'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.StockIt.TextPlaceholder,
                fontSize: 13,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'Due'}
          </Text>
        </View>
        {/* amount */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-end',
              gap: 10,
              marginTop: 16,
              paddingTop: 5,
              width: '22%',
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
                fontFamily: 'Inter_600SemiBold',
                fontSize: 13,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'$130'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.StockIt.TextPlaceholder,
                fontSize: 13,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'$0'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.StockIt.TextPlaceholder,
                fontSize: 13,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'$0'}
          </Text>
        </View>
      </View>
      {/* thank you */}
      <Text
        accessible={true}
        selectable={false}
        style={StyleSheet.applyWidth(
          {
            color: theme.colors.text.strong,
            fontSize: 12,
            marginBottom: 12,
            marginTop: 16,
            textAlign: 'center',
            textTransform: 'capitalize',
          },
          dimensions.width
        )}
      >
        {'thank you for your purchase'}
      </Text>
    </ScreenContainer>
  );
};

export default withTheme(InvoiceScreen);
