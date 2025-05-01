import React from 'react';
import {
  Button,
  Icon,
  IconButton,
  Pressable,
  ScreenContainer,
  Surface,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const ContactDetailsScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [selectedTab, setSelectedTab] = React.useState('tab1');

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasBottomSafeArea={true}
      scrollable={true}
    >
      {/* Supplier */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 16,
            paddingBottom: 16,
            paddingLeft: 16,
            paddingRight: 16,
          },
          dimensions.width
        )}
      >
        {/* Logo */}
        <View
          style={StyleSheet.applyWidth(
            { borderRadius: 8, overflow: 'hidden' },
            dimensions.width
          )}
        >
          <Image
            resizeMode={'cover'}
            source={imageSource('https://picsum.photos/200/200')}
            style={StyleSheet.applyWidth(
              { height: 100, width: 100 },
              dimensions.width
            )}
          />
        </View>
        {/* Name */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.text.strong,
              fontFamily: 'Inter_500Medium',
              fontSize: 18,
              marginTop: 10,
            },
            dimensions.width
          )}
        >
          {'Arvind L'}
        </Text>
        {/* Phone */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            { color: theme.colors.text.medium, marginTop: 4 },
            dimensions.width
          )}
        >
          {'+ 1825 69326 212'}
        </Text>
      </View>
      {/* Tabs View 2 */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 16,
            width: '100%',
          },
          dimensions.width
        )}
      >
        {/* Call */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flex: 1,
              flexDirection: 'column',
              gap: 5,
              padding: 10,
            },
            dimensions.width
          )}
        >
          <IconButton
            color={palettes.StockIt.ShopAppBlue}
            icon={'Feather/phone-call'}
            size={27}
          />
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                fontFamily: 'Inter_500Medium',
                fontSize: 16,
                textTransform: 'capitalize',
              }),
              dimensions.width
            )}
          >
            {'Call'}
          </Text>
        </View>
        {/* Message */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flex: 1,
              flexDirection: 'column',
              gap: 5,
              padding: 10,
            },
            dimensions.width
          )}
        >
          <IconButton
            color={palettes.StockIt.ShopAppBlue}
            icon={'MaterialCommunityIcons/message-processing-outline'}
            size={27}
          />
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                fontFamily: 'Inter_500Medium',
                fontSize: 16,
                textTransform: 'capitalize',
              }),
              dimensions.width
            )}
          >
            {'Message'}
          </Text>
        </View>
        {/* Email */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flex: 1,
              flexDirection: 'column',
              gap: 5,
              padding: 10,
            },
            dimensions.width
          )}
        >
          <IconButton
            color={palettes.StockIt.ShopAppBlue}
            icon={'MaterialCommunityIcons/email-check-outline'}
            size={27}
          />
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                fontFamily: 'Inter_500Medium',
                fontSize: 16,
                textTransform: 'capitalize',
              }),
              dimensions.width
            )}
          >
            {'Email'}
          </Text>
        </View>
      </View>
      {/* Transaction Details */}
      <View
        style={StyleSheet.applyWidth(
          {
            marginTop: 16,
            paddingBottom: 12,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 12,
          },
          dimensions.width
        )}
      >
        <Surface
          elevation={0}
          style={StyleSheet.applyWidth(
            {
              borderRadius: 8,
              minHeight: 40,
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
                fontSize: 17,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'daily transaction'}
          </Text>
          {/* Sales */}
          <Pressable>
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                  paddingBottom: 5,
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
                    fontSize: 15,
                    textTransform: 'capitalize',
                  },
                  dimensions.width
                )}
              >
                {'sales'}
              </Text>

              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    { color: theme.colors.text.strong, fontSize: 15 },
                    dimensions.width
                  )}
                >
                  {'$1707'}
                </Text>
                <Icon
                  size={24}
                  color={palettes.StockIt.ShopAppBlue}
                  name={'Entypo/chevron-right'}
                  style={StyleSheet.applyWidth(
                    { marginLeft: 10 },
                    dimensions.width
                  )}
                />
              </View>
            </View>
          </Pressable>
          {/* Due */}
          <Pressable>
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 5,
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
                    color: theme.colors.text.medium,
                    fontSize: 15,
                    textTransform: 'capitalize',
                  },
                  dimensions.width
                )}
              >
                {'due'}
              </Text>

              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    { color: theme.colors.text.medium, fontSize: 15 },
                    dimensions.width
                  )}
                >
                  {'$1270'}
                </Text>
                <Icon
                  size={24}
                  color={palettes.StockIt.TextPlaceholder}
                  name={'Entypo/chevron-right'}
                  style={StyleSheet.applyWidth(
                    { marginLeft: 10 },
                    dimensions.width
                  )}
                />
              </View>
            </View>
          </Pressable>
          {/* Promo */}
          <Pressable>
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 5,
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
                    color: theme.colors.text.medium,
                    fontSize: 15,
                    textTransform: 'capitalize',
                  },
                  dimensions.width
                )}
              >
                {'promo'}
              </Text>

              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'center', flexDirection: 'row' },
                  dimensions.width
                )}
              >
                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    { color: theme.colors.text.medium, fontSize: 15 },
                    dimensions.width
                  )}
                >
                  {'$0'}
                </Text>
                <Icon
                  size={24}
                  color={palettes.StockIt.TextPlaceholder}
                  name={'Entypo/chevron-right'}
                  style={StyleSheet.applyWidth(
                    { marginLeft: 10 },
                    dimensions.width
                  )}
                />
              </View>
            </View>
          </Pressable>
        </Surface>
      </View>
      {/* Action Btn */}
      <Button
        accessible={true}
        iconPosition={'left'}
        loading={false}
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
        title={'send'}
      />
    </ScreenContainer>
  );
};

export default withTheme(ContactDetailsScreen);
