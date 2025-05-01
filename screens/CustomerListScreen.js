import React from 'react';
import {
  Button,
  ExpoImage,
  Icon,
  Pressable,
  ScreenContainer,
  SimpleStyleFlatList,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Text, View } from 'react-native';
import { Fetch } from 'react-request';
import * as GlobalStyles from '../GlobalStyles.js';
import * as DraftbitApi from '../apis/DraftbitApi.js';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const CustomerListScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <DraftbitApi.FetchTeamsGET>
        {({ loading, error, data, refetchTeams }) => {
          const fetchData = data?.json;
          if (loading) {
            return <ActivityIndicator />;
          }

          if (error || data?.status < 200 || data?.status >= 300) {
            return <ActivityIndicator />;
          }

          return (
            <SimpleStyleFlatList
              data={fetchData}
              decelerationRate={'normal'}
              horizontal={false}
              inverted={false}
              keyExtractor={(listData, index) =>
                listData?.id ??
                listData?.uuid ??
                index?.toString() ??
                JSON.stringify(listData)
              }
              keyboardShouldPersistTaps={'never'}
              listKey={'Fetch->List'}
              nestedScrollEnabled={false}
              numColumns={1}
              onEndReachedThreshold={0.5}
              pagingEnabled={false}
              renderItem={({ item, index }) => {
                const listData = item;
                return (
                  <Pressable>
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          paddingBottom: 10,
                          paddingLeft: 16,
                          paddingRight: 16,
                          paddingTop: 10,
                        },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            flex: 1,
                            flexDirection: 'row',
                          },
                          dimensions.width
                        )}
                      >
                        <ExpoImage
                          allowDownscaling={true}
                          cachePolicy={'disk'}
                          contentPosition={'center'}
                          resizeMode={'cover'}
                          transitionDuration={300}
                          transitionEffect={'cross-dissolve'}
                          transitionTiming={'ease-in-out'}
                          {...GlobalStyles.ExpoImageStyles(theme)['Image 2']
                            .props}
                          source={imageSource(Images['User'])}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.ExpoImageStyles(theme)['Image 2']
                                .style,
                              { borderRadius: 50, height: 35, width: 35 }
                            ),
                            dimensions.width
                          )}
                        />
                        <View
                          style={StyleSheet.applyWidth(
                            { flex: 1, marginLeft: 16 },
                            dimensions.width
                          )}
                        >
                          <View
                            style={StyleSheet.applyWidth(
                              { flexDirection: 'row' },
                              dimensions.width
                            )}
                          >
                            <Text
                              accessible={true}
                              selectable={false}
                              ellipsizeMode={'tail'}
                              numberOfLines={1}
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors.text.strong,
                                  fontFamily: 'Inter_500Medium',
                                },
                                dimensions.width
                              )}
                            >
                              {listData?.name}
                            </Text>
                            <>
                              {!(listData?.id === 2) ? null : (
                                <Text
                                  accessible={true}
                                  selectable={false}
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors.text.strong,
                                      fontFamily: 'Inter_400Regular',
                                      fontSize: 11,
                                      marginLeft: 12,
                                      marginTop: 3,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'Vendor'}
                                </Text>
                              )}
                            </>
                            <>
                              {!(listData?.id === 3) ? null : (
                                <Text
                                  accessible={true}
                                  selectable={false}
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: palettes.StockIt.TextPlaceholder,
                                      fontFamily: 'Inter_400Regular',
                                      fontSize: 11,
                                      marginLeft: 12,
                                      marginTop: 3,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'Supplier'}
                                </Text>
                              )}
                            </>
                          </View>

                          <Text
                            accessible={true}
                            selectable={false}
                            ellipsizeMode={'tail'}
                            numberOfLines={1}
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors.text.strong,
                                fontSize: 12,
                                marginTop: 3,
                              },
                              dimensions.width
                            )}
                          >
                            {'+123 2343 2343'}
                          </Text>
                        </View>
                      </View>
                      <Icon
                        size={24}
                        color={palettes.StockIt.TextPlaceholder}
                        name={'Entypo/chevron-right'}
                      />
                    </View>
                  </Pressable>
                );
              }}
              showsHorizontalScrollIndicator={true}
              showsVerticalScrollIndicator={true}
              snapToAlignment={'start'}
              style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
            />
          );
        }}
      </DraftbitApi.FetchTeamsGET>
      {/* Action Btn */}
      <Button
        accessible={true}
        iconPosition={'left'}
        onPress={() => {
          try {
            navigation.navigate('AddContactScreen');
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
            marginBottom: 30,
            marginLeft: 16,
            marginRight: 16,
            marginTop: 20,
            textAlign: 'center',
            textTransform: 'capitalize',
          },
          dimensions.width
        )}
        title={'+ add contact'}
      />
    </ScreenContainer>
  );
};

export default withTheme(CustomerListScreen);
