import React from 'react';
import {
  Button,
  Icon,
  Pressable,
  RadioButton,
  RadioButtonGroup,
  ScreenContainer,
  SimpleStyleKeyboardAwareScrollView,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { ImageBackground, Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import openCameraUtil from '../utils/openCamera';
import useWindowDimensions from '../utils/useWindowDimensions';

const AddContactScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [addressTextInputValue, setAddressTextInputValue] = React.useState('');
  const [emailInputValue, setEmailInputValue] = React.useState('');
  const [nameTextInputValue, setNameTextInputValue] = React.useState('');
  const [phoneNumberTextnputValue, setPhoneNumberTextnputValue] =
    React.useState('');
  const [radioButtonGroupValue, setRadioButtonGroupValue] =
    React.useState('customer');
  const [styledTextFieldValue, setStyledTextFieldValue] = React.useState('');
  const [styledTextFieldValue2, setStyledTextFieldValue2] = React.useState('');
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasBottomSafeArea={true}
      scrollable={true}
      style={StyleSheet.applyWidth(
        { flexDirection: 'column' },
        dimensions.width
      )}
    >
      {/* Keyboard Aware Scroll View  */}
      <SimpleStyleKeyboardAwareScrollView
        enableResetScrollToCoords={false}
        keyboardShouldPersistTaps={'never'}
        viewIsInsideTabBar={false}
        enableAutomaticScroll={true}
        enableOnAndroid={true}
        extraHeight={100}
        showsVerticalScrollIndicator={false}
        style={StyleSheet.applyWidth({ padding: 16 }, dimensions.width)}
      >
        {/* Product Form */}
        <View>
          {/* Phone Number */}
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={true}
            changeTextDelay={500}
            onChangeText={newPhoneNumberValue => {
              try {
                setPhoneNumberTextnputValue(newPhoneNumberValue);
              } catch (err) {
                console.error(err);
              }
            }}
            webShowOutline={true}
            keyboardType={'phone-pad'}
            placeholder={'Phone Number'}
            placeholderTextColor={palettes.StockIt.TextPlaceholder}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: palettes.Brand['Strong Inverse'],
                borderBottomWidth: 1,
                borderColor: palettes.StockIt.ViewBG,
                borderLeftWidth: 1,
                borderRadius: 8,
                borderRightWidth: 1,
                borderTopWidth: 1,
                color: theme.colors.text.strong,
                height: 50,
                marginBottom: 10,
                marginTop: 10,
                paddingLeft: 16,
              },
              dimensions.width
            )}
            value={phoneNumberTextnputValue}
          />
          {/* Name */}
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={true}
            changeTextDelay={500}
            onChangeText={newNameValue => {
              try {
                setNameTextInputValue(newNameValue);
              } catch (err) {
                console.error(err);
              }
            }}
            webShowOutline={true}
            {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
            placeholder={'Name'}
            placeholderTextColor={palettes.StockIt.TextPlaceholder}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextInputStyles(theme)['Text Input'].style,
                {
                  backgroundColor: palettes.Brand['Strong Inverse'],
                  borderColor: palettes.StockIt.ViewBG,
                  color: theme.colors.text.strong,
                  height: 50,
                  marginBottom: 10,
                  marginTop: 10,
                  paddingLeft: 16,
                }
              ),
              dimensions.width
            )}
            value={nameTextInputValue}
          />
          {/* Opening Balance */}
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={true}
            changeTextDelay={500}
            onChangeText={newOpeningBalanceValue => {
              try {
                setTextInputValue(newOpeningBalanceValue);
              } catch (err) {
                console.error(err);
              }
            }}
            webShowOutline={true}
            placeholder={'Opening Balance'}
            placeholderTextColor={palettes.StockIt.TextPlaceholder}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: palettes.Brand['Strong Inverse'],
                borderBottomWidth: 1,
                borderColor: palettes.StockIt.ViewBG,
                borderLeftWidth: 1,
                borderRadius: 8,
                borderRightWidth: 1,
                borderTopWidth: 1,
                color: theme.colors.text.strong,
                height: 50,
                marginBottom: 10,
                marginTop: 10,
                paddingLeft: 16,
              },
              dimensions.width
            )}
            value={textInputValue}
          />
          {/* Opening Balance */}
          <View
            style={StyleSheet.applyWidth(
              { marginBottom: 10, marginTop: 10 },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.text.strong,
                  fontFamily: 'Inter_400Regular',
                  paddingLeft: 8,
                },
                dimensions.width
              )}
            >
              {'Select the Contact type'}
            </Text>

            <RadioButtonGroup
              onValueChange={newRadioButtonGroupValue => {
                try {
                  setRadioButtonGroupValue(newRadioButtonGroupValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth({ marginTop: 25 }, dimensions.width)}
              value={radioButtonGroupValue}
            >
              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row', paddingLeft: 8 },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    { alignItems: 'center', flexDirection: 'row' },
                    dimensions.width
                  )}
                >
                  <RadioButton
                    selectedIcon={'MaterialIcons/radio-button-checked'}
                    size={24}
                    unselectedIcon={'MaterialIcons/radio-button-unchecked'}
                    color={theme.colors.branding.secondary}
                    unselectedColor={theme.colors.text.light}
                    value={'customer'}
                  />
                  <Text
                    accessible={true}
                    selectable={false}
                    style={StyleSheet.applyWidth(
                      { color: theme.colors.text.strong, paddingLeft: 8 },
                      dimensions.width
                    )}
                  >
                    {'Customer'}
                  </Text>
                </View>

                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      flexDirection: 'row',
                      marginLeft: 16,
                    },
                    dimensions.width
                  )}
                >
                  <RadioButton
                    selectedIcon={'MaterialIcons/radio-button-checked'}
                    size={24}
                    unselectedIcon={'MaterialIcons/radio-button-unchecked'}
                    color={theme.colors.branding.secondary}
                    unselectedColor={theme.colors.text.light}
                    value={'vendor'}
                  />
                  <Text
                    accessible={true}
                    selectable={false}
                    style={StyleSheet.applyWidth(
                      { color: theme.colors.text.strong, paddingLeft: 8 },
                      dimensions.width
                    )}
                  >
                    {'Vendor'}
                  </Text>
                </View>
              </View>
            </RadioButtonGroup>
          </View>
          {/* Add Images */}
          <Pressable
            onPress={() => {
              const handler = async () => {
                try {
                  await openCameraUtil({
                    mediaTypes: 'Images',
                    allowsEditing: false,
                    cameraType: 'back',
                    videoMaxDuration: undefined,
                    quality: 0.2,
                    permissionErrorMessage:
                      'Sorry, we need camera permissions to make this work.',
                    showAlertOnPermissionError: true,
                    outputBase64: true,
                  });
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderRadius: 8,
                  justifyContent: 'center',
                  marginBottom: 16,
                  marginTop: 16,
                },
                dimensions.width
              )}
            >
              <ImageBackground
                resizeMode={'cover'}
                source={imageSource(Images['User'])}
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    height: 85,
                    justifyContent: 'flex-end',
                    width: 85,
                  },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: palettes.StockIt.ShopAppBlue,
                      borderRadius: 4,
                      bottom: -15,
                      paddingBottom: 5,
                      paddingLeft: 5,
                      paddingRight: 5,
                      paddingTop: 5,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    size={24}
                    color={palettes.StockIt['Custom Color']}
                    name={'Feather/camera'}
                  />
                </View>
              </ImageBackground>
            </View>
          </Pressable>
          {/* Email Address */}
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={true}
            changeTextDelay={500}
            onChangeText={newEmailAddressValue => {
              try {
                setEmailInputValue(newEmailAddressValue);
              } catch (err) {
                console.error(err);
              }
            }}
            webShowOutline={true}
            keyboardType={'email-address'}
            placeholder={'Email Address'}
            placeholderTextColor={palettes.StockIt.TextPlaceholder}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: palettes.Brand['Strong Inverse'],
                borderBottomWidth: 1,
                borderColor: palettes.StockIt.ViewBG,
                borderLeftWidth: 1,
                borderRadius: 8,
                borderRightWidth: 1,
                borderTopWidth: 1,
                color: theme.colors.text.strong,
                height: 50,
                marginBottom: 10,
                marginTop: 10,
                paddingLeft: 16,
              },
              dimensions.width
            )}
            value={emailInputValue}
          />
          {/* Address */}
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={true}
            changeTextDelay={500}
            onChangeText={newAddressValue => {
              try {
                setTextInputValue(newAddressValue);
              } catch (err) {
                console.error(err);
              }
            }}
            webShowOutline={true}
            placeholder={'Address'}
            placeholderTextColor={palettes.StockIt.TextPlaceholder}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: palettes.Brand['Strong Inverse'],
                borderBottomWidth: 1,
                borderColor: palettes.StockIt.ViewBG,
                borderLeftWidth: 1,
                borderRadius: 8,
                borderRightWidth: 1,
                borderTopWidth: 1,
                color: theme.colors.text.strong,
                height: 50,
                marginBottom: 10,
                marginTop: 10,
                paddingLeft: 16,
              },
              dimensions.width
            )}
            value={textInputValue}
          />
          {/* Note */}
          <TextInput
            autoCorrect={true}
            changeTextDelay={500}
            multiline={true}
            numberOfLines={4}
            onChangeText={newNoteValue => {
              try {
                setTextAreaValue(newNoteValue);
              } catch (err) {
                console.error(err);
              }
            }}
            textAlignVertical={'top'}
            webShowOutline={true}
            editable={true}
            placeholder={'Supplier Notes'}
            placeholderTextColor={palettes.StockIt.TextPlaceholder}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: palettes.Brand['Strong Inverse'],
                borderBottomWidth: 1,
                borderColor: theme.colors.border.brand,
                borderLeftWidth: 1,
                borderRadius: 8,
                borderRightWidth: 1,
                borderTopWidth: 1,
                color: theme.colors.text.strong,
                height: 100,
                marginBottom: 10,
                marginTop: 10,
                paddingBottom: 8,
                paddingLeft: 8,
                paddingRight: 8,
                paddingTop: 8,
              },
              dimensions.width
            )}
            value={textAreaValue}
          />
        </View>
        {/* Action Btn */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.navigate('ProductDetailsScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: palettes.StockIt.ShopAppBlue,
              borderRadius: 11,
              fontFamily: 'System',
              fontSize: 18,
              fontWeight: '600',
              height: 51,
              marginBottom: 20,
              marginTop: 20,
              textAlign: 'center',
              textTransform: 'capitalize',
            },
            dimensions.width
          )}
          title={'save'}
        />
      </SimpleStyleKeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(AddContactScreen);
