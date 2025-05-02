import * as StyleSheet from './utils/StyleSheet';

import Breakpoints from './utils/Breakpoints';

import palettes from './themes/palettes';

export const CircleStyles = theme =>
  StyleSheet.create({
    Circle: {
      style: {
        alignItems: 'center',
        backgroundColor: theme.colors.branding.primary,
        justifyContent: 'center',
      },
      props: {},
    },
  });

export const DividerStyles = theme =>
  StyleSheet.create({ Divider: { style: { height: 1 }, props: {} } });

export const VStackStyles = theme =>
  StyleSheet.create({
    'V Stack': { style: { flexDirection: 'column' }, props: {} },
  });

export const TextInputStyles = theme =>
  StyleSheet.create({
    'Text Input': {
      style: {
        borderBottomWidth: 1,
        borderColor: theme.colors.border.brand,
        borderLeftWidth: 1,
        borderRadius: 8,
        borderRightWidth: 1,
        borderTopWidth: 1,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
      },
      props: {},
    },
    'Text Input 2': {
      style: {
        borderBottomWidth: 1,
        borderColor: theme.colors.border.brand,
        borderLeftWidth: 1,
        borderRadius: 8,
        borderRightWidth: 1,
        borderTopWidth: 1,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
      },
      props: {},
    },
  });

export const TabViewItemStyles = theme =>
  StyleSheet.create({ 'Tab View Item': { style: { flex: 1 }, props: {} } });

export const TextStyles = theme =>
  StyleSheet.create({
    Text: { style: { color: theme.colors.text.strong }, props: {} },
    'Text 2': { style: {}, props: {} },
  });

export const TableStyles = theme =>
  StyleSheet.create({ Table: { style: { flex: 1 }, props: {} } });

export const TableCellStyles = theme =>
  StyleSheet.create({
    'Table Cell': { style: { flex: 1, flexDirection: 'row' }, props: {} },
  });

export const HStackStyles = theme =>
  StyleSheet.create({
    'H Stack': {
      style: { alignItems: 'center', flexDirection: 'row' },
      props: {},
    },
  });

export const ImageStyles = theme =>
  StyleSheet.create({
    Image: { style: { height: 100, width: 100 }, props: {} },
    'Image 3': { style: { height: 100, width: 100 }, props: {} },
  });

export const ExpoImageStyles = theme =>
  StyleSheet.create({
    'Image 2': { style: { height: 100, width: 100 }, props: {} },
  });

export const ViewStyles = theme =>
  StyleSheet.create({
    'header action': {
      style: {
        alignItems: 'center',
        height: 48,
        justifyContent: 'center',
        width: 48,
      },
      props: {},
    },
    'screen header view': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 16,
      },
      props: {},
    },
  });

export const ButtonStyles = theme =>
  StyleSheet.create({
    'Action button': {
      style: {
        backgroundColor: theme.colors.branding.primary,
        borderRadius: 12,
        fontFamily: 'Inter_500Medium',
        fontSize: 16,
        height: 48,
        marginTop: 25,
        textAlign: 'center',
      },
      props: {},
    },
    Button: {
      style: {
        backgroundColor: theme.colors.branding.primary,
        borderRadius: 8,
        fontFamily: 'System',
        fontWeight: '700',
        textAlign: 'center',
      },
      props: {},
    },
    'action btn tablet': {
      style: {
        backgroundColor: theme.colors.branding.primary,
        borderRadius: 12,
        fontFamily: 'Inter_500Medium',
        fontSize: [
          { minWidth: Breakpoints.Mobile, value: 16 },
          { minWidth: Breakpoints.Tablet, value: 20 },
          { minWidth: Breakpoints.Laptop, value: 20 },
          { minWidth: Breakpoints.Desktop, value: 20 },
          { minWidth: Breakpoints.BigScreen, value: 24 },
        ],
        height: [
          { minWidth: Breakpoints.Mobile, value: 48 },
          { minWidth: Breakpoints.Tablet, value: 60 },
          { minWidth: Breakpoints.Laptop, value: 60 },
          { minWidth: Breakpoints.Desktop, value: 60 },
          { minWidth: Breakpoints.BigScreen, value: 80 },
        ],
        marginTop: 10,
        textAlign: 'center',
      },
      props: {},
    },
  });

export const DeckSwiperStyles = theme =>
  StyleSheet.create({
    'Deck Swiper': { style: { position: 'absolute' }, props: {} },
  });

export const DeckSwiperCardStyles = theme =>
  StyleSheet.create({
    'Deck Swiper Card': {
      style: {
        alignItems: 'center',
        borderWidth: 2,
        justifyContent: 'center',
        padding: 20,
      },
      props: {},
    },
  });

export const WebViewStyles = theme =>
  StyleSheet.create({ 'HTML View': { style: { flex: 1 }, props: {} } });

export const LinearGradientStyles = theme =>
  StyleSheet.create({ 'Linear Gradient': { style: { flex: 1 }, props: {} } });

export const NumberInputStyles = theme =>
  StyleSheet.create({
    'Number Input': {
      style: {
        borderBottomWidth: 1,
        borderColor: theme.colors.border.base,
        borderLeftWidth: 1,
        borderRadius: 8,
        borderRightWidth: 1,
        borderTopWidth: 1,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
      },
      props: {},
    },
  });
