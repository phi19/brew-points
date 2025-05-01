import React from 'react';
import {
  Button,
  Icon,
  Picker,
  PickerItem,
  Pressable,
  ScreenContainer,
  SimpleStyleKeyboardAwareScrollView,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ImageBackground, View } from 'react-native';
import * as DraftbitApi from '../apis/DraftbitApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import openCameraUtil from '../utils/openCamera';
import useWindowDimensions from '../utils/useWindowDimensions';

const AddProductScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [multiSelectPickerValue, setMultiSelectPickerValue] = React.useState(
    []
  );
  const [pickerValue, setPickerValue] = React.useState('');
  const [styledTextFieldValue, setStyledTextFieldValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const transformToPickerOptions = teams => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
    return teams.map(team => {
      return { label: team.name, value: team.id };
    });
  };
  const isFocused = useIsFocused();
  React.useEffect(() => {
    const handler = async () => {
      try {
        if (!isFocused) {
          return;
        }
        const categories = (await DraftbitApi.teamsGET(Constants))?.json;
        setGlobalVariableValue({
          key: 'picker_options',
          value: transformToPickerOptions(categories),
        });
      } catch (err) {
        console.error(err);
      }
    };
    handler();
  }, [isFocused]);

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasBottomSafeArea={true}
      scrollable={true}
    >
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
          {/* Name */}
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={true}
            changeTextDelay={500}
            onChangeText={newNameValue => {
              try {
                setTextInputValue(newNameValue);
              } catch (err) {
                console.error(err);
              }
            }}
            webShowOutline={true}
            placeholder={'Product Name*'}
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
          {/* Category */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 10,
                marginTop: 10,
                zIndex: 15,
              },
              dimensions.width
            )}
          >
            <Picker
              autoDismissKeyboard={true}
              dropDownBorderColor={theme.colors.border.base}
              dropDownBorderRadius={8}
              dropDownBorderWidth={1}
              dropDownTextColor={theme.colors.text.strong}
              iconSize={24}
              leftIconMode={'inset'}
              onValueChange={newPickerValue => {
                try {
                  setPickerValue(newPickerValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              selectedIconColor={theme.colors.text.strong}
              selectedIconName={'Feather/check'}
              selectedIconSize={20}
              type={'solid'}
              dropDownBackgroundColor={palettes.Brand['Strong Inverse']}
              mode={'dropdown'}
              options={Constants['picker_options']}
              placeholder={'Product Catagory*'}
              placeholderTextColor={palettes.StockIt.TextPlaceholder}
              rightIconName={'Entypo/chevron-down'}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: palettes.Brand['Strong Inverse'],
                  borderColor: palettes.StockIt.ViewBG,
                  borderRadius: 8,
                  borderWidth: 1,
                  fontSize: 13,
                  paddingBottom: 10,
                  paddingTop: 10,
                  width: '100%',
                },
                dimensions.width
              )}
              value={pickerValue}
            >
              <PickerItem />
            </Picker>
          </View>
          {/* Brand */}
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={true}
            changeTextDelay={500}
            onChangeText={newBrandValue => {
              try {
                setTextInputValue(newBrandValue);
              } catch (err) {
                console.error(err);
              }
            }}
            webShowOutline={true}
            placeholder={'Brand'}
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
                fontFamily: 'System',
                fontWeight: '400',
                height: 50,
                marginBottom: 10,
                marginTop: 10,
                paddingLeft: 16,
              },
              dimensions.width
            )}
            value={textInputValue}
          />
          {/* Code */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* Code */}
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, marginBottom: 10, marginTop: 10 },
                dimensions.width
              )}
            >
              <TextInput
                autoCapitalize={'none'}
                autoCorrect={true}
                changeTextDelay={500}
                onChangeText={newTextInputValue => {
                  try {
                    setTextInputValue(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                webShowOutline={true}
                placeholder={'Product Code*'}
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
                    fontSize: 14,
                    height: 50,
                    paddingLeft: 16,
                  },
                  dimensions.width
                )}
                value={textInputValue}
              />
            </View>
            {/* Scan */}
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
                    borderBottomWidth: 1,
                    borderColor: palettes.StockIt.ViewBG,
                    borderLeftWidth: 1,
                    borderRadius: 8,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    height: 50,
                    justifyContent: 'center',
                    marginLeft: 16,
                    width: 50,
                  },
                  dimensions.width
                )}
              >
                <Icon
                  size={24}
                  color={palettes.StockIt.ShopAppBlue}
                  name={'Ionicons/barcode-sharp'}
                />
              </View>
            </Pressable>
          </View>
          {/* Stock & Unit */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                zIndex: 10,
              },
              dimensions.width
            )}
          >
            {/* Stock */}
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, marginBottom: 10, marginTop: 10 },
                dimensions.width
              )}
            >
              {/* Stock */}
              <TextInput
                autoCapitalize={'none'}
                autoCorrect={true}
                changeTextDelay={500}
                onChangeText={newStockValue => {
                  try {
                    setTextInputValue(newStockValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                webShowOutline={true}
                placeholder={'Stock*'}
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
                    flex: 1,
                    height: 50,
                    paddingLeft: 16,
                  },
                  dimensions.width
                )}
                value={textInputValue}
              />
            </View>
            {/* Unit */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flex: 1,
                  flexDirection: 'row',
                  marginBottom: 10,
                  marginLeft: 16,
                  marginTop: 10,
                },
                dimensions.width
              )}
            >
              <Picker
                autoDismissKeyboard={true}
                dropDownBorderColor={theme.colors.border.base}
                dropDownBorderRadius={8}
                dropDownBorderWidth={1}
                dropDownTextColor={theme.colors.text.strong}
                iconSize={24}
                leftIconMode={'inset'}
                onValueChange={newPickerValue => {
                  try {
                    setPickerValue(newPickerValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                selectedIconColor={theme.colors.text.strong}
                selectedIconName={'Feather/check'}
                selectedIconSize={20}
                type={'solid'}
                dropDownBackgroundColor={palettes.Brand['Strong Inverse']}
                mode={'dropdown'}
                options={[
                  { label: '1', value: 1 },
                  { label: '2', value: 2 },
                  { label: '3', value: 3 },
                ]}
                placeholder={'Unit*'}
                placeholderTextColor={palettes.StockIt.TextPlaceholder}
                rightIconName={'Entypo/chevron-down'}
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: palettes.Brand['Strong Inverse'],
                    borderColor: palettes.StockIt.ViewBG,
                    borderRadius: 8,
                    color: theme.colors.text.strong,
                    fontSize: 13,
                    paddingBottom: 10,
                    paddingTop: 10,
                    width: '100%',
                  },
                  dimensions.width
                )}
                value={pickerValue}
              >
                <PickerItem />
              </Picker>
            </View>
          </View>
          {/* Sale Price & Discount */}
          <View
            style={StyleSheet.applyWidth(
              { flexDirection: 'row', justifyContent: 'space-between' },
              dimensions.width
            )}
          >
            {/* Sale Price */}
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, marginBottom: 10, marginTop: 10 },
                dimensions.width
              )}
            >
              {/* Sales Price */}
              <TextInput
                autoCapitalize={'none'}
                autoCorrect={true}
                changeTextDelay={500}
                onChangeText={newSalesPriceValue => {
                  try {
                    setTextInputValue(newSalesPriceValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                webShowOutline={true}
                placeholder={'Sale Price*'}
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
                    paddingLeft: 16,
                  },
                  dimensions.width
                )}
                value={textInputValue}
              />
            </View>
            {/* Discount */}
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, marginBottom: 10, marginLeft: 16, marginTop: 10 },
                dimensions.width
              )}
            >
              {/* Discount */}
              <TextInput
                autoCapitalize={'none'}
                autoCorrect={true}
                changeTextDelay={500}
                onChangeText={newDiscountValue => {
                  try {
                    setTextInputValue(newDiscountValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                webShowOutline={true}
                placeholder={'Discount*'}
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
                    paddingLeft: 16,
                  },
                  dimensions.width
                )}
                value={textInputValue}
              />
            </View>
          </View>
          {/* Manufacturer */}
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={true}
            changeTextDelay={500}
            onChangeText={newManufacturerValue => {
              try {
                setTextInputValue(newManufacturerValue);
              } catch (err) {
                console.error(err);
              }
            }}
            webShowOutline={true}
            placeholder={'Manufacturer'}
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
          {/* Wholesale & Dealer prices */}
          <View
            style={StyleSheet.applyWidth(
              { flexDirection: 'row', justifyContent: 'space-between' },
              dimensions.width
            )}
          >
            {/* Wholesale price */}
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, marginBottom: 10, marginTop: 10 },
                dimensions.width
              )}
            >
              <TextInput
                autoCapitalize={'none'}
                autoCorrect={true}
                changeTextDelay={500}
                onChangeText={newTextInputValue => {
                  try {
                    setTextInputValue(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                webShowOutline={true}
                placeholder={'Wholesale Price'}
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
                    paddingLeft: 16,
                  },
                  dimensions.width
                )}
                value={textInputValue}
              />
            </View>
            {/* Dealer price */}
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, marginBottom: 10, marginLeft: 16, marginTop: 10 },
                dimensions.width
              )}
            >
              <TextInput
                autoCapitalize={'none'}
                autoCorrect={true}
                changeTextDelay={500}
                onChangeText={newTextInputValue => {
                  try {
                    setTextInputValue(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                webShowOutline={true}
                placeholder={'Dealer Price'}
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
                    paddingLeft: 16,
                  },
                  dimensions.width
                )}
                value={textInputValue}
              />
            </View>
          </View>
          {/* Add Image */}
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
          title={'save & publish'}
        />
      </SimpleStyleKeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(AddProductScreen);
