import React from 'react';
import {
  Circle,
  Icon,
  Link,
  ScreenContainer,
  Spacer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const VerificationCodeScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [input1, setInput1] = React.useState(0);
  const [input2, setInput2] = React.useState(0);
  const [input3, setInput3] = React.useState(0);
  const [input4, setInput4] = React.useState(0);

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: palettes.App.Studily_White_4 },
        dimensions.width
      )}
    >
      <KeyboardAwareScrollView
        enableAutomaticScroll={false}
        enableOnAndroid={false}
        enableResetScrollToCoords={false}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
        viewIsInsideTabBar={false}
        contentContainerStyle={StyleSheet.applyWidth(
          {
            flex: 1,
            justifyContent: 'center',
            paddingBottom: 36,
            paddingLeft: 36,
            paddingRight: 36,
            paddingTop: 36,
          },
          dimensions.width
        )}
      >
        <View>
          {/* Heading */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center' },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.App['Studily Medium UI'],
                  fontFamily: 'Nunito_700Bold',
                  fontSize: 32,
                },
                dimensions.width
              )}
            >
              {'Verification'}
            </Text>

            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.App.Studily_Light_Gray_2,
                  fontFamily: 'Nunito_600SemiBold',
                  fontSize: 16,
                  marginTop: 8,
                  textAlign: 'center',
                },
                dimensions.width
              )}
            >
              {'We sent you a text message\nwith a 4-digit code'}
            </Text>
          </View>
          <Spacer left={8} right={8} bottom={16} top={16} />
          {/* Form */}
          <View
            style={StyleSheet.applyWidth(
              { flexDirection: 'row' },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: palettes.App.Studily_White_3,
                  borderBottomWidth: 1,
                  borderColor: palettes.App['Studily_Gray 4'],
                  borderLeftWidth: 1,
                  borderRadius: 12,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  flex: 1,
                  overflow: 'hidden',
                },
                dimensions.width
              )}
            >
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
                <TextInput
                  autoCapitalize={'none'}
                  autoCorrect={true}
                  changeTextDelay={500}
                  webShowOutline={true}
                  clearTextOnFocus={true}
                  defaultValue={input1}
                  keyboardType={'numeric'}
                  maxLength={1}
                  placeholder={''}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.App['Studily Medium UI'],
                      fontFamily: 'Nunito_500Medium',
                      fontSize: 24,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                />
              </View>
            </View>
            <Spacer bottom={8} left={8} right={8} top={8} />
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: palettes.App.Studily_White_3,
                  borderBottomWidth: 1,
                  borderColor: palettes.App['Studily_Gray 4'],
                  borderLeftWidth: 1,
                  borderRadius: 12,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  flex: 1,
                  overflow: 'hidden',
                },
                dimensions.width
              )}
            >
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
                <TextInput
                  autoCapitalize={'none'}
                  autoCorrect={true}
                  changeTextDelay={500}
                  webShowOutline={true}
                  autoFocus={false}
                  clearTextOnFocus={true}
                  defaultValue={input2}
                  keyboardType={'numeric'}
                  maxLength={1}
                  placeholder={''}
                  spellcheck={true}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.App['Studily Medium UI'],
                      fontFamily: 'Nunito_500Medium',
                      fontSize: 24,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                />
              </View>
            </View>
            <Spacer bottom={8} left={8} right={8} top={8} />
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: palettes.App.Studily_White_3,
                  borderBottomWidth: 1,
                  borderColor: palettes.App['Studily_Gray 4'],
                  borderLeftWidth: 1,
                  borderRadius: 12,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  flex: 1,
                  overflow: 'hidden',
                },
                dimensions.width
              )}
            >
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
                <TextInput
                  autoCapitalize={'none'}
                  autoCorrect={true}
                  changeTextDelay={500}
                  webShowOutline={true}
                  clearTextOnFocus={true}
                  defaultValue={input3}
                  keyboardType={'numeric'}
                  maxLength={1}
                  placeholder={''}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.App['Studily Medium UI'],
                      fontFamily: 'Nunito_500Medium',
                      fontSize: 24,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                />
              </View>
            </View>
            <Spacer bottom={8} left={8} right={8} top={8} />
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: palettes.App.Studily_White_3,
                  borderBottomWidth: 1,
                  borderColor: palettes.App['Studily_Gray 4'],
                  borderLeftWidth: 1,
                  borderRadius: 12,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  flex: 1,
                  overflow: 'hidden',
                },
                dimensions.width
              )}
            >
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
                <TextInput
                  autoCapitalize={'none'}
                  autoCorrect={true}
                  changeTextDelay={500}
                  webShowOutline={true}
                  clearTextOnFocus={true}
                  defaultValue={input4}
                  keyboardType={'numeric'}
                  maxLength={1}
                  placeholder={''}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.App['Studily Medium UI'],
                      fontFamily: 'Nunito_500Medium',
                      fontSize: 24,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                />
              </View>
            </View>
          </View>
          <Spacer left={8} right={8} bottom={24} top={24} />
          {/* Button */}
          <View>
            {/* Touchable Frame */}
            <View
              style={StyleSheet.applyWidth({ zIndex: 10 }, dimensions.width)}
            >
              <Touchable>
                {/* CTA Frame */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: palettes.App['Studily Primary'],
                      borderRadius: 12,
                      flexDirection: 'row',
                      paddingBottom: 12,
                      paddingLeft: 18,
                      paddingRight: 18,
                      paddingTop: 12,
                      zIndex: 10,
                    },
                    dimensions.width
                  )}
                >
                  {/* Label Frame */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flexGrow: 1,
                        flexShrink: 0,
                        justifyContent: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    {/* Label */}
                    <Text
                      accessible={true}
                      selectable={false}
                      style={StyleSheet.applyWidth(
                        {
                          color: palettes.App.Studily_White_3,
                          fontFamily: 'Nunito_700Bold',
                          fontSize: 15,
                          lineHeight: 21,
                          marginLeft: 42,
                          textTransform: 'uppercase',
                        },
                        dimensions.width
                      )}
                    >
                      {'Continue'}
                    </Text>
                  </View>
                  {/* Icon Group Frame */}
                  <View>
                    <Circle
                      bgColor={palettes.App['Studily 25 Percent']}
                      size={42}
                    >
                      {/* Icon Flex Frame */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            flexGrow: 0,
                            flexShrink: 0,
                            paddingBottom: 12,
                            paddingLeft: 12,
                            paddingRight: 12,
                            paddingTop: 12,
                          },
                          dimensions.width
                        )}
                      >
                        {/* Icon  */}
                        <Icon
                          color={palettes.App.Studily_White_3}
                          name={'AntDesign/arrowright'}
                          size={18}
                        />
                      </View>
                    </Circle>
                  </View>
                </View>
              </Touchable>
            </View>
          </View>
          <Spacer left={8} right={8} bottom={16} top={16} />
          {/* Login */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center' },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.App.Studily_Light_Gray_2,
                  fontFamily: 'Nunito_600SemiBold',
                },
                dimensions.width
              )}
            >
              {"Didn't receive a code?"}
            </Text>
            <Link
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.App['Studily Primary'],
                  fontFamily: 'Nunito_700Bold',
                  fontSize: 16,
                  marginTop: 8,
                },
                dimensions.width
              )}
              title={'RESEND'}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(VerificationCodeScreen);
