import React from 'react';
import {
  Button,
  Checkbox,
  Circle,
  ExpoImage,
  Icon,
  ScreenContainer,
  SimpleStyleScrollView,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';
import * as GlobalStyles from '../GlobalStyles.js';
import * as DummyApi from '../apis/DummyApi.js';
import * as TestServiceDraftbitApi from '../apis/TestServiceDraftbitApi.js';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const PreviewProductScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [checkboxValue, setCheckboxValue] = React.useState(false);

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasBottomSafeArea={true}
      hasTopSafeArea={true}
    >
      {/* Fetch Screen (Baggage - Product) */}
      <DummyApi.FetchGetTodosGET>
        {({ loading, error, data, refetchGetTodos }) => {
          const fetchScreenBaggageProductData = data?.json;
          if (loading) {
            return <ActivityIndicator />;
          }

          if (error || data?.status < 200 || data?.status >= 300) {
            return <ActivityIndicator />;
          }

          return (
            <>
              {/* Header View Frame */}
              <View
                style={StyleSheet.applyWidth(
                  { flexGrow: 0, flexShrink: 0 },
                  dimensions.width
                )}
              >
                {/* Navigation Bar Component */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingBottom: 24,
                      paddingLeft: 18,
                      paddingRight: 18,
                      paddingTop: 24,
                    },
                    dimensions.width
                  )}
                >
                  {/* Left Side Frame */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        flexGrow: 0,
                        flexShrink: 0,
                        maxWidth: '33%',
                        minWidth: '33%',
                      },
                      dimensions.width
                    )}
                  >
                    {/* Left Icon Touchable */}
                    <Touchable
                      onPress={() => {
                        try {
                          navigation.goBack();
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      {/* Left Icon */}
                      <Icon
                        color={'theme.colors.custom_rgb189_198_212'}
                        name={'AntDesign/left'}
                        size={18}
                      />
                    </Touchable>
                  </View>
                  {/* Middle Frame */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignSelf: 'stretch',
                        flexGrow: 0,
                        flexShrink: 0,
                        minWidth: '33%',
                      },
                      dimensions.width
                    )}
                  >
                    {/* Navigation Bar Text */}
                    <Text
                      accessible={true}
                      selectable={false}
                      style={StyleSheet.applyWidth(
                        {
                          color: 'theme.colors.primaryTitleUiBaeg',
                          fontFamily: 'Cantarell_400Regular',
                          fontSize: 14,
                          textAlign: 'center',
                        },
                        dimensions.width
                      )}
                    >
                      {'pastries'}
                    </Text>
                  </View>
                  {/* Right Side Frame */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignSelf: 'stretch',
                        flexDirection: 'row',
                        flexGrow: 0,
                        flexShrink: 0,
                        justifyContent: 'flex-end',
                        maxWidth: '33%',
                        minWidth: '33%',
                      },
                      dimensions.width
                    )}
                  >
                    {/* Right Icon Touchable 2 */}
                    <Touchable
                      style={StyleSheet.applyWidth(
                        { marginRight: 18 },
                        dimensions.width
                      )}
                    >
                      {/* Right Icon 2 */}
                      <Icon
                        color={'theme.colors.custom_rgb189_198_212'}
                        name={'AntDesign/search1'}
                        size={18}
                      />
                    </Touchable>
                    {/* Right Icon Touchable */}
                    <Touchable>
                      {/* Right Icon 1 */}
                      <Icon
                        color={'theme.colors.custom_rgb189_198_212'}
                        name={'AntDesign/gift'}
                        size={18}
                      />
                    </Touchable>
                  </View>
                </View>
                {/* Divider Frame */}
                <View>
                  {/* Divider List */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: 'theme.colors.custom_rgb223_223_223',
                        height: 1,
                      },
                      dimensions.width
                    )}
                  />
                </View>
              </View>
              {/* Content Scroll View Frame */}
              <SimpleStyleScrollView
                bounces={true}
                horizontal={false}
                keyboardShouldPersistTaps={'never'}
                nestedScrollEnabled={false}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
                style={StyleSheet.applyWidth(
                  { flexGrow: 1, flexShrink: 0, paddingBottom: 100 },
                  dimensions.width
                )}
              >
                {/* Image Background Flex Grow */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: 'theme.colors.custom_rgb249_249_249',
                      flexGrow: 1,
                      flexShrink: 0,
                      height: 241,
                      overflow: 'hidden',
                      width: '100%',
                    },
                    dimensions.width
                  )}
                >
                  {/* Product Card Featured Image */}
                  <ExpoImage
                    allowDownscaling={true}
                    cachePolicy={'disk'}
                    contentPosition={'center'}
                    resizeMode={'cover'}
                    transitionDuration={300}
                    transitionEffect={'cross-dissolve'}
                    transitionTiming={'ease-in-out'}
                    source={imageSource(
                      Images['ProductCardDetailRemovebgPreview']
                    )}
                    style={StyleSheet.applyWidth(
                      { height: 281, width: 281 },
                      dimensions.width
                    )}
                  />
                </View>
                {/* Record Title and Description Frame */}
                <View
                  style={StyleSheet.applyWidth(
                    { marginBottom: 18, marginLeft: 12, marginRight: 12 },
                    dimensions.width
                  )}
                >
                  {/* OverFlow Text Hide */}
                  <View
                    style={StyleSheet.applyWidth(
                      { maxWidth: '61%' },
                      dimensions.width
                    )}
                  >
                    {/* Text — Component Title */}
                    <Text
                      accessible={true}
                      selectable={false}
                      {...GlobalStyles.TextStyles(theme)['Text'].props}
                      numberOfLines={2}
                      selectionColor={theme.colors.branding.primary}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'].style,
                          {
                            alignSelf: 'auto',
                            color: 'rgb(0, 0, 0)',
                            fontFamily: 'Cantarell_700Bold',
                            fontSize: 13,
                            letterSpacing: 2,
                            lineHeight: 17,
                            marginTop: 12,
                            opacity: 1,
                            textTransform: 'uppercase',
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Lorem ipsum dolor sit amet'}
                    </Text>
                  </View>
                  {/* OverFlow Text Hide */}
                  <View
                    style={StyleSheet.applyWidth(
                      { maxWidth: '61%' },
                      dimensions.width
                    )}
                  >
                    {/* Text — Component Title Second Line */}
                    <Text
                      accessible={true}
                      selectable={false}
                      numberOfLines={2}
                      style={StyleSheet.applyWidth(
                        {
                          color: 'theme.colors.custom_rgb149_158_172',
                          fontFamily: 'Montserrat_600SemiBold',
                          fontSize: 12,
                          marginTop: 6,
                        },
                        dimensions.width
                      )}
                    >
                      {'$1'}
                    </Text>
                  </View>
                </View>
                {/* Details Frame */}
                <View
                  style={StyleSheet.applyWidth(
                    { marginBottom: 24, marginLeft: 12, marginRight: 12 },
                    dimensions.width
                  )}
                >
                  {/* Component Title Small */}
                  <Text
                    accessible={true}
                    selectable={false}
                    style={StyleSheet.applyWidth(
                      {
                        color: 'theme.colors.custom_rgb149_158_172',
                        fontFamily: 'Cantarell_700Bold',
                        fontSize: 10,
                        marginBottom: 9,
                        textTransform: 'uppercase',
                      },
                      dimensions.width
                    )}
                  >
                    {'Details'}
                  </Text>
                  {/* Component Title Small w Description */}
                  <Text
                    accessible={true}
                    selectable={false}
                    style={StyleSheet.applyWidth(
                      {
                        color: 'theme.colors.primaryTitleUiBaeg',
                        fontFamily: 'Cantarell_700Bold',
                        fontSize: 11,
                      },
                      dimensions.width
                    )}
                  >
                    {
                      'Made from a cotton-poly blend, the No Wrinkles® technology keeps this shirt looking fresh and new. Standard fit button-down with point Belt.'
                    }
                  </Text>
                </View>
                {/* Details Frame 2 */}
                <View
                  style={StyleSheet.applyWidth(
                    { marginBottom: 24, marginLeft: 12, marginRight: 12 },
                    dimensions.width
                  )}
                />
                {/* Component Title Small */}
                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: 'theme.colors.custom_rgb149_158_172',
                      fontFamily: 'Cantarell_700Bold',
                      fontSize: 10,
                      marginBottom: 9,
                      marginLeft: 12,
                      textTransform: 'uppercase',
                    },
                    dimensions.width
                  )}
                >
                  {'Similar Products'}
                </Text>
                {/* Scrollable Details Frame */}
                <ScrollView
                  bounces={true}
                  keyboardShouldPersistTaps={'never'}
                  nestedScrollEnabled={false}
                  showsHorizontalScrollIndicator={true}
                  showsVerticalScrollIndicator={true}
                  contentContainerStyle={StyleSheet.applyWidth(
                    { marginLeft: 12 },
                    dimensions.width
                  )}
                  horizontal={true}
                >
                  <TestServiceDraftbitApi.FetchGetProductsGET>
                    {({ loading, error, data, refetchGetProducts }) => {
                      const fetchData = data?.json;
                      if (loading) {
                        return <ActivityIndicator />;
                      }

                      if (error || data?.status < 200 || data?.status >= 300) {
                        return <ActivityIndicator />;
                      }

                      return (
                        <FlatList
                          data={fetchData}
                          inverted={false}
                          keyExtractor={(listData, index) =>
                            listData?.id ??
                            listData?.uuid ??
                            index?.toString() ??
                            JSON.stringify(listData)
                          }
                          keyboardShouldPersistTaps={'never'}
                          listKey={
                            'Fetch Screen (Baggage - Product)->Content Scroll View Frame->Scrollable Details Frame->Fetch->List'
                          }
                          nestedScrollEnabled={false}
                          numColumns={1}
                          onEndReachedThreshold={0.5}
                          renderItem={({ item, index }) => {
                            const listData = item;
                            return (
                              <>
                                {/* Suggested Item Frame */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    { alignItems: 'center', marginRight: 9 },
                                    dimensions.width
                                  )}
                                >
                                  {/* Similar Product Image BG */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        alignItems: 'center',
                                        backgroundColor:
                                          'theme.colors.custom_rgb245_245_247',
                                        borderRadius: 10,
                                        height: 99,
                                        width: 99,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {/* SP Image */}
                                    <Image
                                      resizeMode={'contain'}
                                      source={imageSource(
                                        Images[
                                          'ProductCardDetailSuggestedImages'
                                        ]
                                      )}
                                      style={StyleSheet.applyWidth(
                                        { height: 93, width: 56 },
                                        dimensions.width
                                      )}
                                    />
                                  </View>
                                  {/* Overflow Text Hide */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      { maxWidth: 80 },
                                      dimensions.width
                                    )}
                                  >
                                    {/* Name Item */}
                                    <Text
                                      accessible={true}
                                      selectable={false}
                                      ellipsizeMode={'tail'}
                                      numberOfLines={1}
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignSelf: 'center',
                                          color:
                                            'theme.colors.primaryTitleUiBaeg',
                                          fontFamily: 'Cantarell_700Bold',
                                          fontSize: 11,
                                          marginTop: 8,
                                          textTransform: 'uppercase',
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {'Sasha'}
                                    </Text>
                                  </View>
                                  {/* Overflow Text Hide */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      { maxWidth: 80 },
                                      dimensions.width
                                    )}
                                  >
                                    {/* Price Item */}
                                    <Text
                                      accessible={true}
                                      selectable={false}
                                      ellipsizeMode={'tail'}
                                      numberOfLines={1}
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignSelf: 'center',
                                          color:
                                            'theme.colors.custom_rgb153_153_153',
                                          fontFamily: 'Montserrat_600SemiBold',
                                          fontSize: 11,
                                          marginTop: 2,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {'$212'}
                                    </Text>
                                  </View>
                                </View>
                              </>
                            );
                          }}
                          showsHorizontalScrollIndicator={true}
                          showsVerticalScrollIndicator={true}
                          contentContainerStyle={StyleSheet.applyWidth(
                            { flex: 1 },
                            dimensions.width
                          )}
                          horizontal={true}
                        />
                      );
                    }}
                  </TestServiceDraftbitApi.FetchGetProductsGET>
                </ScrollView>
              </SimpleStyleScrollView>
              {/* Footer Frame */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    flexGrow: 0,
                    flexShrink: 0,
                    paddingBottom: 36,
                    paddingTop: 12,
                  },
                  dimensions.width
                )}
              >
                {/* Content Frame */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.background.brand,
                      flexDirection: 'row',
                      flexGrow: 1,
                      flexShrink: 0,
                      justifyContent: 'space-around',
                      paddingLeft: 12,
                      paddingRight: 12,
                    },
                    dimensions.width
                  )}
                >
                  {/* Flex Property Frame */}
                  <View
                    style={StyleSheet.applyWidth(
                      { marginRight: 6 },
                      dimensions.width
                    )}
                  >
                    <Circle
                      bgColor={'theme.colors.custom_rgb245_245_247'}
                      size={36}
                    >
                      {/* Icon Flex Properties Flex End */}
                      <View
                        style={StyleSheet.applyWidth(
                          { justifyContent: 'flex-end' },
                          dimensions.width
                        )}
                      >
                        {/* Heart Checkbox */}
                        <Checkbox
                          onPress={newHeartCheckboxValue => {
                            const checkboxValue = newHeartCheckboxValue;
                            try {
                              setValue(value);
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          checkedIcon={'AntDesign/heart'}
                          color={theme.colors.branding.primary}
                          size={18}
                          status={checkboxValue}
                          uncheckedColor={theme.colors.branding.primary}
                          uncheckedIcon={'AntDesign/hearto'}
                        />
                      </View>
                    </Circle>
                  </View>
                  {/* Flex Property Frame */}
                  <View
                    style={StyleSheet.applyWidth(
                      { flexGrow: 1, flexShrink: 0 },
                      dimensions.width
                    )}
                  >
                    {/* Fixed Button */}
                    <Button
                      accessible={true}
                      iconPosition={'left'}
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: theme.colors.branding.primary,
                          borderRadius: 8,
                          color: palettes.Brand.Surface,
                          fontFamily: 'Cantarell_700Bold',
                          fontSize: 10,
                          textAlign: 'center',
                          textTransform: 'uppercase',
                        },
                        dimensions.width
                      )}
                      title={'Add to bag'}
                    />
                  </View>
                </View>
              </View>
            </>
          );
        }}
      </DummyApi.FetchGetTodosGET>
    </ScreenContainer>
  );
};

export default withTheme(PreviewProductScreen);
