import React from 'react';
import {
  Checkbox,
  Icon,
  IconButton,
  ScreenContainer,
  SimpleStyleFlatList,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Text, View } from 'react-native';
import { Fetch } from 'react-request';
import * as DraftbitApi from '../apis/DraftbitApi.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const CategoryScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={true} scrollable={true}>
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 16,
          },
          dimensions.width
        )}
      >
        {/* Searchbar */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              borderBottomWidth: 0.5,
              borderColor: palettes.StockIt.TextPlaceholder,
              borderLeftWidth: 0.5,
              borderRadius: 8,
              borderRightWidth: 0.5,
              borderTopWidth: 0.5,
              flex: 1,
              flexDirection: 'row',
              height: 48,
              paddingLeft: 16,
            },
            dimensions.width
          )}
        >
          <Icon
            size={24}
            color={palettes.StockIt.TextPlaceholder}
            name={'Feather/search'}
          />
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
            editable={true}
            placeholder={'Search Here'}
            placeholderTextColor={palettes.StockIt.TextPlaceholder}
            style={StyleSheet.applyWidth(
              {
                borderColor: theme.colors.border.brand,
                borderRadius: 8,
                paddingBottom: 8,
                paddingLeft: 8,
                paddingRight: 8,
                paddingTop: 8,
              },
              dimensions.width
            )}
            value={textInputValue}
          />
        </View>
        {/* Add */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              borderBottomWidth: 0.5,
              borderColor: palettes.StockIt.TextPlaceholder,
              borderLeftWidth: 0.5,
              borderRadius: 8,
              borderRightWidth: 0.5,
              borderTopWidth: 0.5,
              height: 48,
              justifyContent: 'center',
              marginLeft: 16,
              width: 48,
            },
            dimensions.width
          )}
        >
          <IconButton
            color={theme.colors.text.medium}
            icon={'Feather/plus'}
            size={24}
          />
        </View>
      </View>

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
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderColor: palettes.StockIt.TextPlaceholder,
                        flexDirection: 'row',
                        gap: 20,
                        justifyContent: 'space-between',
                        paddingBottom: 16,
                        paddingTop: 16,
                      },
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
                          color: theme.colors.text.medium,
                          flex: 1,
                          fontFamily: 'Inter_400Regular',
                          fontSize: 15,
                        },
                        dimensions.width
                      )}
                    >
                      {listData?.name}
                    </Text>
                    <Checkbox
                      color={theme.colors.branding.secondary}
                      defaultValue={listData?.id}
                      size={30}
                      uncheckedColor={theme.colors.branding.secondary}
                    />
                  </View>
                );
              }}
              showsHorizontalScrollIndicator={true}
              showsVerticalScrollIndicator={true}
              snapToAlignment={'start'}
              style={StyleSheet.applyWidth(
                {
                  flex: 1,
                  marginTop: 16,
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 16,
                },
                dimensions.width
              )}
            />
          );
        }}
      </DraftbitApi.FetchTeamsGET>
    </ScreenContainer>
  );
};

export default withTheme(CategoryScreen);
