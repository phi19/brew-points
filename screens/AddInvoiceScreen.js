import React from 'react';
import {
  Button,
  Icon,
  Pressable,
  ScreenContainer,
  Switch,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const AddInvoiceScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [selectedTab, setSelectedTab] = React.useState('tab1');
  const [switchValue, setSwitchValue] = React.useState(false);
  const [switchValue2, setSwitchValue2] = React.useState(false);

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasBottomSafeArea={true}
      scrollable={true}
    >
      {/* Invoice Details */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: palettes.StockIt.ViewBG,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 16,
            paddingRight: 16,
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            { justifyContent: 'center', paddingBottom: 16, paddingTop: 16 },
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
                fontSize: 16,
              },
              dimensions.width
            )}
          >
            {'June 29, 2022'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.StockIt.TextPlaceholder,
                fontFamily: 'Inter_400Regular',
                fontSize: 14,
                paddingBottom: 6,
                paddingTop: 6,
              },
              dimensions.width
            )}
          >
            {'Due on Jul 6, 2022'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.text.strong,
                fontFamily: 'Inter_400Regular',
                fontSize: 16,
              },
              dimensions.width
            )}
          >
            {'Due in 7 days'}
          </Text>
        </View>

        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.text.strong,
              fontFamily: 'Inter_400Regular',
              fontSize: 16,
            },
            dimensions.width
          )}
        >
          {'#21589'}
        </Text>
      </View>
      {/* Bill To */}
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
              fontFamily: 'Inter_500Medium',
              fontSize: 18,
              paddingBottom: 16,
              textTransform: 'capitalize',
            },
            dimensions.width
          )}
        >
          {'Bill To'}
        </Text>

        <Pressable>
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', flexDirection: 'row' },
              dimensions.width
            )}
          >
            <Icon
              size={24}
              color={palettes.StockIt.ShopAppBlue}
              name={'AntDesign/pluscircleo'}
            />
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.StockIt.ShopAppBlue,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 16,
                  paddingLeft: 12,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'add customer'}
            </Text>
          </View>
        </Pressable>
      </View>
      {/* Items */}
      <View
        style={StyleSheet.applyWidth(
          {
            borderColor: palettes.StockIt.TextPlaceholder,
            borderTopWidth: 1,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 22,
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
              fontFamily: 'Inter_500Medium',
              fontSize: 18,
              paddingBottom: 10,
              textTransform: 'capitalize',
            },
            dimensions.width
          )}
        >
          {'Item'}
        </Text>

        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: palettes.StockIt.TextPlaceholder,
              fontFamily: 'Inter_400Regular',
              fontSize: 14,
              paddingBottom: 16,
              textTransform: 'capitalize',
            },
            dimensions.width
          )}
        >
          {'Tap & hold to re-sort items'}
        </Text>

        <Pressable>
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', flexDirection: 'row' },
              dimensions.width
            )}
          >
            <Icon
              size={24}
              color={palettes.StockIt.ShopAppBlue}
              name={'AntDesign/pluscircleo'}
            />
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.StockIt.ShopAppBlue,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 16,
                  paddingLeft: 12,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'add item'}
            </Text>
          </View>
        </Pressable>
      </View>
      {/* Total */}
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
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.text.strong,
              fontFamily: 'Inter_500Medium',
              fontSize: 18,
              paddingBottom: 16,
              textTransform: 'capitalize',
            },
            dimensions.width
          )}
        >
          {'Total'}
        </Text>

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
            {'$0.00'}
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
            {'Discount'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              { color: theme.colors.text.medium, fontSize: 15 },
              dimensions.width
            )}
          >
            {'$0.00'}
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
            {'total'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              { color: theme.colors.text.medium, fontSize: 15 },
              dimensions.width
            )}
          >
            {'$0.00'}
          </Text>
        </View>
      </View>
      {/* Signatures */}
      <View
        style={StyleSheet.applyWidth(
          {
            borderColor: palettes.StockIt.TextPlaceholder,
            marginBottom: 16,
            paddingBottom: 12,
          },
          dimensions.width
        )}
      >
        {/* Amount Due */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: palettes.StockIt.ViewBG,
              flexDirection: 'row',
              height: 50,
              justifyContent: 'space-between',
              marginBottom: 10,
              paddingBottom: 5,
              paddingLeft: 16,
              paddingRight: 16,
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
                fontFamily: 'Inter_500Medium',
                fontSize: 18,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'amount due'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.text.strong,
                fontFamily: 'Inter_500Medium',
                fontSize: 18,
              },
              dimensions.width
            )}
          >
            {'$0.00'}
          </Text>
        </View>
        {/* My Signature */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              height: 50,
              justifyContent: 'space-between',
              marginTop: 10,
              paddingBottom: 5,
              paddingLeft: 16,
              paddingRight: 16,
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
            {'my signature'}
          </Text>
          <Switch
            onValueChange={newSwitchValue => {
              try {
                setSwitchValue(newSwitchValue);
              } catch (err) {
                console.error(err);
              }
            }}
            activeTrackColor={palettes.StockIt.ShopAppBlue}
            value={switchValue}
          />
        </View>
        {/* Client Signature */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              height: 50,
              justifyContent: 'space-between',
              marginBottom: 10,
              marginTop: 10,
              paddingBottom: 5,
              paddingLeft: 16,
              paddingRight: 16,
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
            {"client's signature"}
          </Text>
          <Switch
            onValueChange={newSwitchValue => {
              try {
                setSwitchValue2(newSwitchValue);
              } catch (err) {
                console.error(err);
              }
            }}
            activeTrackColor={palettes.StockIt.ShopAppBlue}
            value={switchValue2}
          />
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
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
            textAlign: 'center',
            textTransform: 'capitalize',
          },
          dimensions.width
        )}
        title={'Save'}
      />
    </ScreenContainer>
  );
};

export default withTheme(AddInvoiceScreen);
