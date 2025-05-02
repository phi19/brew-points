import React from 'react';
import {
  Button,
  Icon,
  NumberInput,
  Pressable,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { Image, ScrollView, Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const LoginRegisterScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [AddressRadioButtoGroup, setAddressRadioButtoGroup] = React.useState(1);
  const [PaymentModal, setPaymentModal] = React.useState(false);
  const [PromoCodeModal, setPromoCodeModal] = React.useState(false);
  const [ShippingAddressModal, setShippingAddressModal] = React.useState(false);
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [paymentMethodRadioGroup, setPaymentMethodRadioGroup] =
    React.useState(1);

  return (
    <ScreenContainer
      scrollable={false}
      hasSafeArea={true}
      hasTopSafeArea={false}
    >
      {/* Header */}
      <View
        {...GlobalStyles.ViewStyles(theme)['screen header view'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.ViewStyles(theme)['screen header view'].style,
            {
              height: [
                { minWidth: Breakpoints.Tablet, value: 65 },
                { minWidth: Breakpoints.Laptop, value: 75 },
                { minWidth: Breakpoints.Desktop, value: 85 },
                { minWidth: Breakpoints.BigScreen, value: 90 },
              ],
              marginRight: 48,
              paddingLeft: 10,
              paddingRight: 10,
            }
          ),
          dimensions.width
        )}
      >
        {/* Back */}
        <Pressable
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <View
            {...GlobalStyles.ViewStyles(theme)['header action'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ViewStyles(theme)['header action'].style,
                {
                  height: [
                    { minWidth: Breakpoints.Tablet, value: 60 },
                    { minWidth: Breakpoints.BigScreen, value: 80 },
                  ],
                  width: [
                    { minWidth: Breakpoints.Tablet, value: 60 },
                    { minWidth: Breakpoints.Desktop, value: 70 },
                    { minWidth: Breakpoints.BigScreen, value: 80 },
                  ],
                }
              ),
              dimensions.width
            )}
          >
            <Icon name={'Feather/chevron-left'} size={28} />
          </View>
        </Pressable>

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
          {'Get started with BrewPoints'}
        </Text>
      </View>

      <ScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
      >
        {/* Main View */}
        <View
          style={StyleSheet.applyWidth(
            {
              justifyContent: 'space-between',
              padding: [
                { minWidth: Breakpoints.Mobile, value: 20 },
                { minWidth: Breakpoints.Tablet, value: 25 },
                { minWidth: Breakpoints.Laptop, value: 30 },
                { minWidth: Breakpoints.Desktop, value: 40 },
                { minWidth: Breakpoints.BigScreen, value: 50 },
              ],
            },
            dimensions.width
          )}
        >
          {/* Main View */}
          <View>
            {/* Top */}
            <View
              style={StyleSheet.applyWidth(
                {
                  marginTop: [
                    { minWidth: Breakpoints.Tablet, value: 20 },
                    { minWidth: Breakpoints.Laptop, value: 25 },
                    { minWidth: Breakpoints.Desktop, value: 30 },
                    { minWidth: Breakpoints.BigScreen, value: 35 },
                  ],
                  paddingBottom: 20,
                },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                selectable={false}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      fontFamily: 'Sora_500Medium',
                      fontSize: [
                        { minWidth: Breakpoints.Mobile, value: 12 },
                        { minWidth: Breakpoints.Tablet, value: 19 },
                        { minWidth: Breakpoints.Laptop, value: 21 },
                        { minWidth: Breakpoints.Desktop, value: 23 },
                        { minWidth: Breakpoints.BigScreen, value: 25 },
                      ],
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Mobile Number'}
              </Text>

              <Pressable
                onPress={() => {
                  try {
                    setPaymentModal(true);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { marginTop: 6, width: 90 },
                  dimensions.width
                )}
              >
                {/* Country */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderColor: theme.colors.text.light,
                      borderRadius: 8,
                      borderWidth: 1,
                      flexDirection: 'row',
                      height: [
                        { minWidth: Breakpoints.Mobile, value: 40 },
                        { minWidth: Breakpoints.Tablet, value: 65 },
                        { minWidth: Breakpoints.Laptop, value: 70 },
                        { minWidth: Breakpoints.Desktop, value: 75 },
                        { minWidth: Breakpoints.BigScreen, value: 90 },
                      ],
                      justifyContent: 'space-between',
                      paddingLeft: 15,
                      paddingRight: 15,
                      width: 90,
                    },
                    dimensions.width
                  )}
                >
                  <Image
                    resizeMode={'cover'}
                    {...GlobalStyles.ImageStyles(theme)['Image'].props}
                    source={imageSource(Images['flag'])}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ImageStyles(theme)['Image'].style,
                        {
                          height: [
                            { minWidth: Breakpoints.Mobile, value: 16 },
                            { minWidth: Breakpoints.Tablet, value: 28 },
                            { minWidth: Breakpoints.Laptop, value: 33 },
                            { minWidth: Breakpoints.BigScreen, value: 37 },
                          ],
                          width: [
                            { minWidth: Breakpoints.Mobile, value: 25 },
                            { minWidth: Breakpoints.Tablet, value: 41 },
                            { minWidth: Breakpoints.Laptop, value: 48 },
                            { minWidth: Breakpoints.BigScreen, value: 54 },
                          ],
                        }
                      ),
                      dimensions.width
                    )}
                  />
                  <View
                    style={StyleSheet.applyWidth(
                      { flex: 1, marginLeft: 12 },
                      dimensions.width
                    )}
                  />
                  <Icon name={'AntDesign/caretdown'} size={16} />
                </View>
              </Pressable>
              {/* Mobile */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    borderColor: theme.colors.text.light,
                    borderRadius: 8,
                    borderWidth: 1,
                    flexDirection: 'row',
                    height: [
                      { minWidth: Breakpoints.Mobile, value: 40 },
                      { minWidth: Breakpoints.Tablet, value: 65 },
                      { minWidth: Breakpoints.Laptop, value: 70 },
                      { minWidth: Breakpoints.Desktop, value: 75 },
                      { minWidth: Breakpoints.BigScreen, value: 90 },
                    ],
                    justifyContent: 'space-between',
                    paddingLeft: 15,
                    paddingRight: 15,
                    width: 90,
                  },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    { flex: 1, marginLeft: 12 },
                    dimensions.width
                  )}
                />
                <Icon name={'MaterialCommunityIcons/account-key'} size={16} />
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
                  placeholder={'Enter a number...'}
                  webShowOutline={true}
                  {...GlobalStyles.NumberInputStyles(theme)['Number Input']
                    .props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.NumberInputStyles(theme)['Number Input']
                        .style,
                      theme.typography.body2,
                      {}
                    ),
                    dimensions.width
                  )}
                  value={numberInputValue}
                />
              </View>
            </View>
            {/* Google */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: palettes.App['Custom Color_7'],
                  borderRadius: 8,
                  flexDirection: 'row',
                  height: [
                    { minWidth: Breakpoints.Mobile, value: 41 },
                    { minWidth: Breakpoints.Tablet, value: 60 },
                    { minWidth: Breakpoints.Laptop, value: 65 },
                    { minWidth: Breakpoints.BigScreen, value: 80 },
                  ],
                  justifyContent: 'space-between',
                  marginTop: [
                    { minWidth: Breakpoints.Tablet, value: 40 },
                    { minWidth: Breakpoints.Laptop, value: 45 },
                    { minWidth: Breakpoints.BigScreen, value: 50 },
                  ],
                  padding: 24,
                  paddingLeft: 20,
                  paddingRight: 10,
                  width: 327,
                },
                dimensions.width
              )}
            >
              <Icon
                name={'FontAwesome/photo'}
                size={24}
                color={palettes.App['Custom Color_5']}
              />
              {/* Promo code */}
              <Text
                accessible={true}
                selectable={false}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      flex: 1,
                      fontFamily: 'Inter_500Medium',
                      fontSize: [
                        { minWidth: Breakpoints.Tablet, value: 17 },
                        { minWidth: Breakpoints.Laptop, value: 19 },
                        { minWidth: Breakpoints.Desktop, value: 21 },
                        { minWidth: Breakpoints.BigScreen, value: 23 },
                      ],
                      marginLeft: 16,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Continue with Google'}
              </Text>
            </View>
            {/* Apple */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: palettes.App['Custom Color_7'],
                  borderRadius: 8,
                  flexDirection: 'row',
                  height: [
                    { minWidth: Breakpoints.Mobile, value: 48 },
                    { minWidth: Breakpoints.Tablet, value: 60 },
                    { minWidth: Breakpoints.Laptop, value: 65 },
                    { minWidth: Breakpoints.BigScreen, value: 80 },
                  ],
                  justifyContent: 'space-between',
                  marginTop: [
                    { minWidth: Breakpoints.Tablet, value: 40 },
                    { minWidth: Breakpoints.Laptop, value: 45 },
                    { minWidth: Breakpoints.BigScreen, value: 50 },
                  ],
                  paddingLeft: 20,
                  paddingRight: 10,
                },
                dimensions.width
              )}
            >
              <Icon
                size={24}
                color={palettes.App['Custom Color_5']}
                name={'FontAwesome/apple'}
              />
              {/* Promo code */}
              <Text
                accessible={true}
                selectable={false}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      flex: 1,
                      fontFamily: 'Inter_500Medium',
                      fontSize: [
                        { minWidth: Breakpoints.Tablet, value: 17 },
                        { minWidth: Breakpoints.Laptop, value: 19 },
                        { minWidth: Breakpoints.Desktop, value: 21 },
                        { minWidth: Breakpoints.BigScreen, value: 23 },
                      ],
                      marginLeft: 16,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Continue with Apple'}
              </Text>
            </View>
            {/* Email */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: palettes.App['Custom Color_7'],
                  borderRadius: 8,
                  flexDirection: 'row',
                  height: [
                    { minWidth: Breakpoints.Mobile, value: 48 },
                    { minWidth: Breakpoints.Tablet, value: 60 },
                    { minWidth: Breakpoints.Laptop, value: 65 },
                    { minWidth: Breakpoints.BigScreen, value: 80 },
                  ],
                  justifyContent: 'space-between',
                  marginTop: [
                    { minWidth: Breakpoints.Tablet, value: 40 },
                    { minWidth: Breakpoints.Laptop, value: 45 },
                    { minWidth: Breakpoints.BigScreen, value: 50 },
                  ],
                  paddingLeft: 20,
                  paddingRight: 10,
                },
                dimensions.width
              )}
            >
              <Icon
                size={24}
                color={palettes.App['Custom Color_5']}
                name={'Entypo/mail'}
              />
              {/* Promo code */}
              <Text
                accessible={true}
                selectable={false}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      flex: 1,
                      fontFamily: 'Inter_500Medium',
                      fontSize: [
                        { minWidth: Breakpoints.Tablet, value: 17 },
                        { minWidth: Breakpoints.Laptop, value: 19 },
                        { minWidth: Breakpoints.Desktop, value: 21 },
                        { minWidth: Breakpoints.BigScreen, value: 23 },
                      ],
                      marginLeft: 16,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Continue with Email'}
              </Text>
            </View>
            {/* Help */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderColor: theme.colors.text.light,
                  borderTopWidth: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingTop: 20,
                },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                selectable={false}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      alignSelf: 'auto',
                      fontFamily: 'Inter_500Medium',
                      fontSize: [
                        { minWidth: Breakpoints.Mobile, value: 15 },
                        { minWidth: Breakpoints.Tablet, value: 18 },
                        { minWidth: Breakpoints.Laptop, value: 20 },
                        { minWidth: Breakpoints.Desktop, value: 22 },
                        { minWidth: Breakpoints.BigScreen, value: 24 },
                      ],
                      textAlign: 'center',
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Get help'}
              </Text>
              <Icon size={24} name={'FontAwesome/question-circle'} />
            </View>
          </View>
          {/* Continue */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                console.log(dimensions);
                /* 'Focus Text Input' action requires configuration: choose a target component */
              } catch (err) {
                console.error(err);
              }
            }}
            {...GlobalStyles.ButtonStyles(theme)['action btn tablet'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ButtonStyles(theme)['action btn tablet'].style,
                {
                  backgroundColor: 'rgb(0, 0, 0)',
                  marginTop: [
                    { minWidth: Breakpoints.Mobile, value: 25 },
                    { minWidth: Breakpoints.Tablet, value: 40 },
                    { minWidth: Breakpoints.Laptop, value: 45 },
                    { minWidth: Breakpoints.Desktop, value: 50 },
                    { minWidth: Breakpoints.BigScreen, value: 60 },
                  ],
                }
              ),
              dimensions.width
            )}
            title={'Continue'}
          />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(LoginRegisterScreen);
