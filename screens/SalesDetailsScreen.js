import React from 'react';
import {
  Button,
  ScreenContainer,
  TabView,
  TabViewItem,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const SalesDetailsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [selectedTab, setSelectedTab] = React.useState('tab1');

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasBottomSafeArea={true}
      scrollable={true}
      style={StyleSheet.applyWidth(
        { justifyContent: 'space-between' },
        dimensions.width
      )}
    >
      <TabView
        iconPosition={'top'}
        initialTabIndex={0}
        keyboardDismissMode={'auto'}
        scrollEnabled={false}
        swipeEnabled={true}
        tabBarPosition={'top'}
        tabsBackgroundColor={theme.colors.background.base}
        activeColor={palettes.StockIt.ShopAppBlue}
        inactiveColor={palettes.StockIt.TextPlaceholder}
        indicatorColor={palettes.StockIt.ShopAppBlue}
        pressColor={palettes.StockIt.ShopAppBlue}
        style={StyleSheet.applyWidth(
          { fontFamily: 'Inter_600SemiBold', fontSize: 15 },
          dimensions.width
        )}
      >
        {/* Customer */}
        <TabViewItem
          {...GlobalStyles.TabViewItemStyles(theme)['Tab View Item'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TabViewItemStyles(theme)['Tab View Item'].style,
              { paddingLeft: 5, paddingRight: 5 }
            ),
            dimensions.width
          )}
          title={'Customer'}
        >
          {/* Items */}
          <View
            style={StyleSheet.applyWidth(
              { marginTop: 16, paddingLeft: 16, paddingRight: 16 },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 10,
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
                    color: theme.colors.text.medium,
                    fontSize: 15,
                    textTransform: 'capitalize',
                  },
                  dimensions.width
                )}
              >
                {'smart watch x 1'}
              </Text>

              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  { color: theme.colors.text.medium, fontSize: 15 },
                  dimensions.width
                )}
              >
                {'$175'}
              </Text>
            </View>

            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 10,
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
                {'winter jacket x 3'}
              </Text>

              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  { color: theme.colors.text.medium, fontSize: 15 },
                  dimensions.width
                )}
              >
                {'$275'}
              </Text>
            </View>

            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 10,
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
                {'shoes for men x 2'}
              </Text>

              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  { color: theme.colors.text.medium, fontSize: 15 },
                  dimensions.width
                )}
              >
                {'$135'}
              </Text>
            </View>
          </View>
          {/* Calculations */}
          <View
            style={StyleSheet.applyWidth(
              {
                borderBottomWidth: 1,
                borderColor: palettes.StockIt.TextPlaceholder,
                borderTopWidth: 1,
                marginTop: 16,
                paddingBottom: 12,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 12,
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 10,
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
                {'subtotal'}
              </Text>

              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  { color: theme.colors.text.medium, fontSize: 15 },
                  dimensions.width
                )}
              >
                {'$202'}
              </Text>
            </View>

            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 10,
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
                {'discount'}
              </Text>

              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  { color: theme.colors.text.medium, fontSize: 15 },
                  dimensions.width
                )}
              >
                {'0.00'}
              </Text>
            </View>
          </View>
          {/* Total */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: palettes.StockIt.ViewBG,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 10,
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
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 15,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'total'}
            </Text>

            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.text.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 15,
                },
                dimensions.width
              )}
            >
              {'$202'}
            </Text>
          </View>
        </TabViewItem>
        {/* Wholesale */}
        <TabViewItem
          {...GlobalStyles.TabViewItemStyles(theme)['Tab View Item'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.TabViewItemStyles(theme)['Tab View Item'].style,
            dimensions.width
          )}
          title={'Wholesale'}
        />
        {/* Dealer */}
        <TabViewItem
          {...GlobalStyles.TabViewItemStyles(theme)['Tab View Item'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.TabViewItemStyles(theme)['Tab View Item'].style,
            dimensions.width
          )}
          title={'Dealer'}
        />
      </TabView>
      {/* Action Btn */}
      <Button
        accessible={true}
        iconPosition={'left'}
        onPress={() => {
          try {
            navigation.navigate('PaymentCompletedScreen');
          } catch (err) {
            console.error(err);
          }
        }}
        loading={false}
        style={StyleSheet.applyWidth(
          {
            backgroundColor: palettes.StockIt.ShopAppBlue,
            borderRadius: 11,
            fontFamily: 'System',
            fontSize: 18,
            fontWeight: '600',
            height: 51,
            marginBottom: 25,
            marginLeft: 16,
            marginRight: 16,
            marginTop: 20,
            textAlign: 'center',
            textTransform: 'capitalize',
          },
          dimensions.width
        )}
        title={'total $202 '}
      />
    </ScreenContainer>
  );
};

export default withTheme(SalesDetailsScreen);
