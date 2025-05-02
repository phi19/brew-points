import React from 'react';
import { Icon, Touchable, useTheme } from '@draftbit/ui';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { systemWeights } from 'react-native-typography';
import LinkingConfiguration from './LinkingConfiguration';
import AddContactScreen from './screens/AddContactScreen';
import AddInvoiceScreen from './screens/AddInvoiceScreen';
import AddProductScreen from './screens/AddProductScreen';
import CategoryScreen from './screens/CategoryScreen';
import ContactDetailsScreen from './screens/ContactDetailsScreen';
import CustomerListScreen from './screens/CustomerListScreen';
import InvoiceScreen from './screens/InvoiceScreen';
import LoginRegisterScreen from './screens/LoginRegisterScreen';
import LossProfitReportScreen from './screens/LossProfitReportScreen';
import PaymentCompletedScreen from './screens/PaymentCompletedScreen';
import PreviewProductScreen from './screens/PreviewProductScreen';
import PurchaselistScreen from './screens/PurchaselistScreen';
import RegisterScreen from './screens/RegisterScreen';
import SalesDetailsScreen from './screens/SalesDetailsScreen';
import SalesListScreen from './screens/SalesListScreen';
import StockListScreen from './screens/StockListScreen';
import SupplierListScreen from './screens/SupplierListScreen';
import VerificationCodeScreen from './screens/VerificationCodeScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import palettes from './themes/palettes';
import Breakpoints from './utils/Breakpoints';
import useWindowDimensions from './utils/useWindowDimensions';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DefaultAndroidBackIcon({ tintColor }) {
  return (
    <View style={[styles.headerContainer, styles.headerContainerLeft]}>
      <Icon
        name="AntDesign/arrowleft"
        size={24}
        color={tintColor}
        style={[styles.headerIcon, styles.headerIconLeft]}
      />
    </View>
  );
}

function DefaultDrawerIcon({ tintColor, navigation }) {
  return (
    <Touchable
      onPress={() => navigation.toggleDrawer()}
      style={[styles.headerContainer, styles.headerContainerLeft]}
    >
      <Icon
        name="EvilIcons/navicon"
        size={27}
        color={tintColor}
        style={[styles.headerIcon, styles.headerIconLeft]}
      />
    </Touchable>
  );
}

export default function RootAppNavigator() {
  const theme = useTheme();

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: theme.colors.background.base,
        },
      }}
      linking={LinkingConfiguration}
    >
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          cardStyle: { flex: 1 },
          headerBackImage:
            Platform.OS === 'android' ? DefaultAndroidBackIcon : null,
          headerTitleAlign: 'center',
        })}
      >
        <Stack.Screen
          name="AddContactScreen"
          component={AddContactScreen}
          options={({ navigation }) => ({
            title: 'Add Contact',
          })}
        />
        <Stack.Screen
          name="AddInvoiceScreen"
          component={AddInvoiceScreen}
          options={({ navigation }) => ({
            title: 'Add Invoice',
          })}
        />
        <Stack.Screen
          name="AddProductScreen"
          component={AddProductScreen}
          options={({ navigation }) => ({
            title: 'Add Product',
          })}
        />
        <Stack.Screen
          name="CategoryScreen"
          component={CategoryScreen}
          options={({ navigation }) => ({
            title: 'Category',
          })}
        />
        <Stack.Screen
          name="ContactDetailsScreen"
          component={ContactDetailsScreen}
          options={({ navigation }) => ({
            title: 'Contact Details',
          })}
        />
        <Stack.Screen
          name="CustomerListScreen"
          component={CustomerListScreen}
          options={({ navigation }) => ({
            title: 'Customer List',
          })}
        />
        <Stack.Screen
          name="InvoiceScreen"
          component={InvoiceScreen}
          options={({ navigation }) => ({
            title: 'Invoice',
          })}
        />
        <Stack.Screen
          name="LoginRegisterScreen"
          component={LoginRegisterScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'Login/Register',
          })}
        />
        <Stack.Screen
          name="LossProfitReportScreen"
          component={LossProfitReportScreen}
          options={({ navigation }) => ({
            title: 'Loss Profit Report',
          })}
        />
        <Stack.Screen
          name="PaymentCompletedScreen"
          component={PaymentCompletedScreen}
          options={({ navigation }) => ({
            title: 'Payment Completed',
          })}
        />
        <Stack.Screen
          name="PreviewProductScreen"
          component={PreviewProductScreen}
          options={({ navigation }) => ({
            title: 'Preview - Product',
          })}
        />
        <Stack.Screen
          name="PurchaselistScreen"
          component={PurchaselistScreen}
          options={({ navigation }) => ({
            title: 'Purchase list',
          })}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={({ navigation }) => ({
            title: 'Register',
          })}
        />
        <Stack.Screen
          name="SalesDetailsScreen"
          component={SalesDetailsScreen}
          options={({ navigation }) => ({
            title: 'Sales Details',
          })}
        />
        <Stack.Screen
          name="SalesListScreen"
          component={SalesListScreen}
          options={({ navigation }) => ({
            title: 'Sales List',
          })}
        />
        <Stack.Screen
          name="StockListScreen"
          component={StockListScreen}
          options={({ navigation }) => ({
            title: 'Stock List',
          })}
        />
        <Stack.Screen
          name="SupplierListScreen"
          component={SupplierListScreen}
          options={({ navigation }) => ({
            title: 'Supplier List',
          })}
        />
        <Stack.Screen
          name="VerificationCodeScreen"
          component={VerificationCodeScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'Verification Code',
          })}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={({ navigation }) => ({
            headerShown: false,
            title: 'Welcome',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({ ios: { marginLeft: 8 } }),
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({ ios: { marginRight: 6 } }),
});
