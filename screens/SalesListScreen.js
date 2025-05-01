import React from 'react';
import {
  ScreenContainer,
  TabView,
  TabViewItem,
  Table,
  TableCell,
  TableRow,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const SalesListScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [selectedTab, setSelectedTab] = React.useState('tab1');

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasBottomSafeArea={true}
      scrollable={true}
    >
      <TabView
        iconPosition={'top'}
        initialTabIndex={0}
        keyboardDismissMode={'auto'}
        scrollEnabled={false}
        tabBarPosition={'top'}
        tabsBackgroundColor={theme.colors.background.base}
        activeColor={palettes.StockIt.ShopAppBlue}
        inactiveColor={palettes.StockIt.TextPlaceholder}
        indicatorColor={palettes.StockIt.ShopAppBlue}
        pressColor={palettes.StockIt.ShopAppBlue}
        style={StyleSheet.applyWidth(
          { flex: 1, fontFamily: 'Inter_600SemiBold', fontSize: 15 },
          dimensions.width
        )}
        swipeEnabled={true}
      >
        {/* Sales */}
        <TabViewItem
          {...GlobalStyles.TabViewItemStyles(theme)['Tab View Item'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.TabViewItemStyles(theme)['Tab View Item'].style,
            dimensions.width
          )}
          title={'Sales'}
        >
          {/* Details */}
          <Table
            borderColor={theme.colors.border.base}
            borderStyle={'solid'}
            borderWidth={1}
            cellHorizontalPadding={10}
            cellVerticalPadding={10}
            data={[
              {
                date: 'July 10, 2022',
                name: 'Ibne Riead',
                balance: 3975,
                payment: 'Cash',
              },
              {
                due: 175,
                date: 'July 8, 2022',
                name: 'Ibne Riead',
                balance: 175,
                payment: 'Cash',
              },
              {
                date: 'July 6, 2022',
                name: 'Brandon',
                balance: 375,
                payment: 'Instrumental',
              },
              {
                date: 'July 4, 2022',
                name: 'Jeremy',
                balance: 375,
                payment: 'Paypal',
              },
            ]}
            drawBottomBorder={false}
            drawEndBorder={false}
            drawStartBorder={false}
            keyExtractor={(detailsData, index) =>
              detailsData?.id ??
              detailsData?.uuid ??
              index?.toString() ??
              JSON.stringify(detailsData)
            }
            listKey={'Tab View->Sales->Details'}
            renderItem={({ item, index }) => {
              const detailsData = item;
              return (
                <>
                  {/* Header */}
                  <TableRow
                    drawTopBorder={false}
                    drawBottomBorder={false}
                    drawEndBorder={false}
                    drawStartBorder={false}
                    isTableHeader={true}
                    style={StyleSheet.applyWidth(
                      { backgroundColor: palettes.StockIt.ViewBG },
                      dimensions.width
                    )}
                  >
                    {/* Date */}
                    <TableCell
                      drawBottomBorder={false}
                      drawStartBorder={false}
                      drawTopBorder={false}
                      {...GlobalStyles.TableCellStyles(theme)['Table Cell']
                        .props}
                      drawEndBorder={false}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TableCellStyles(theme)['Table Cell']
                            .style,
                          { alignItems: 'center', paddingLeft: 16 }
                        ),
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
                            fontSize: 16,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'Date'}
                      </Text>
                    </TableCell>
                    {/* Payment */}
                    <TableCell
                      drawBottomBorder={false}
                      drawStartBorder={false}
                      drawTopBorder={false}
                      {...GlobalStyles.TableCellStyles(theme)['Table Cell']
                        .props}
                      drawEndBorder={false}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TableCellStyles(theme)['Table Cell']
                            .style,
                          {
                            alignItems: 'center',
                            flex: 2,
                            flexDirection: 'column',
                            justifyContent: 'center',
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      <Text
                        accessible={true}
                        selectable={false}
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            color: theme.colors.text.strong,
                            flex: 1,
                            fontFamily: 'Inter_600SemiBold',
                            fontSize: 16,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'Payment'}
                      </Text>
                    </TableCell>
                    {/* Balance */}
                    <TableCell
                      drawBottomBorder={false}
                      drawStartBorder={false}
                      drawTopBorder={false}
                      {...GlobalStyles.TableCellStyles(theme)['Table Cell']
                        .props}
                      drawEndBorder={false}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TableCellStyles(theme)['Table Cell']
                            .style,
                          {
                            alignItems: 'center',
                            flexDirection: 'column',
                            justifyContent: 'center',
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      <Text
                        accessible={true}
                        selectable={false}
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            color: theme.colors.text.strong,
                            flex: 1,
                            fontFamily: 'Inter_600SemiBold',
                            fontSize: 16,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'Balance'}
                      </Text>
                    </TableCell>
                  </TableRow>
                  {/* Data */}
                  <TableRow
                    drawTopBorder={false}
                    isTableHeader={false}
                    drawBottomBorder={false}
                    drawEndBorder={false}
                    drawStartBorder={false}
                  >
                    {/* Date */}
                    <TableCell
                      drawBottomBorder={false}
                      drawStartBorder={false}
                      drawTopBorder={false}
                      {...GlobalStyles.TableCellStyles(theme)['Table Cell']
                        .props}
                      drawEndBorder={false}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TableCellStyles(theme)['Table Cell']
                            .style,
                          {
                            alignItems: 'flex-start',
                            flexDirection: 'column',
                            height: 50,
                            justifyContent: 'center',
                            paddingLeft: 16,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'flex-start',
                            justifyContent: 'center',
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
                              color: theme.colors.text.strong,
                              fontSize: 15,
                              textAlign: 'left',
                              textTransform: 'capitalize',
                            },
                            dimensions.width
                          )}
                        >
                          {detailsData?.name}
                        </Text>

                        <Text
                          accessible={true}
                          selectable={false}
                          ellipsizeMode={'tail'}
                          numberOfLines={1}
                          style={StyleSheet.applyWidth(
                            {
                              color: palettes.StockIt.TextPlaceholder,
                              fontSize: 13,
                              textTransform: 'capitalize',
                            },
                            dimensions.width
                          )}
                        >
                          {detailsData?.date}
                        </Text>
                      </View>
                    </TableCell>
                    {/* Payment */}
                    <TableCell
                      drawBottomBorder={false}
                      drawStartBorder={false}
                      drawTopBorder={false}
                      {...GlobalStyles.TableCellStyles(theme)['Table Cell']
                        .props}
                      drawEndBorder={false}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TableCellStyles(theme)['Table Cell']
                            .style,
                          {
                            alignItems: 'center',
                            flex: 2,
                            height: 60,
                            justifyContent: 'center',
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      <Text
                        accessible={true}
                        selectable={false}
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors.text.strong,
                            fontSize: 15,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {detailsData?.payment}
                      </Text>
                    </TableCell>
                    {/* Balance */}
                    <TableCell
                      drawBottomBorder={false}
                      drawStartBorder={false}
                      drawTopBorder={false}
                      {...GlobalStyles.TableCellStyles(theme)['Table Cell']
                        .props}
                      drawEndBorder={false}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TableCellStyles(theme)['Table Cell']
                            .style,
                          {
                            alignItems: 'center',
                            flexDirection: 'column',
                            height: 60,
                            justifyContent: 'center',
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {/* Text 2 */}
                      <>
                        {!detailsData?.due ? null : (
                          <Text
                            accessible={true}
                            selectable={false}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                { color: palettes.StockIt['Custom Color_3'] }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Due $'}
                            {detailsData?.due}
                          </Text>
                        )}
                      </>
                      <>
                        {detailsData?.due ? null : (
                          <Text
                            accessible={true}
                            selectable={false}
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors.text.strong,
                                fontSize: 15,
                                textTransform: 'capitalize',
                              },
                              dimensions.width
                            )}
                          >
                            {'$'}
                            {detailsData?.balance}
                          </Text>
                        )}
                      </>
                      {/* Text 3 */}
                      <>
                        {!detailsData?.due ? null : (
                          <Text
                            accessible={true}
                            selectable={false}
                            ellipsizeMode={'tail'}
                            numberOfLines={1}
                            style={StyleSheet.applyWidth(
                              {
                                color: palettes.StockIt.TextPlaceholder,
                                fontSize: 13,
                                textTransform: 'capitalize',
                              },
                              dimensions.width
                            )}
                          >
                            {'$'}
                            {detailsData?.balance}
                          </Text>
                        )}
                      </>
                    </TableCell>
                  </TableRow>
                </>
              );
            }}
            showsVerticalScrollIndicator={true}
            {...GlobalStyles.TableStyles(theme)['Table'].props}
            drawTopBorder={false}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TableStyles(theme)['Table'].style,
                { flex: null, marginLeft: 5, marginRight: 5, marginTop: 16 }
              ),
              dimensions.width
            )}
          />
          {/* Total */}
          <View
            style={StyleSheet.applyWidth(
              {
                borderColor: palettes.StockIt.TextPlaceholder,
                borderTopWidth: 1,
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 10,
                marginLeft: 5,
                marginRight: 5,
                marginTop: 16,
                padding: 16,
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
              {'total:'}
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
              {'$27325'}
            </Text>
          </View>
        </TabViewItem>
        {/* Paid */}
        <TabViewItem
          {...GlobalStyles.TabViewItemStyles(theme)['Tab View Item'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.TabViewItemStyles(theme)['Tab View Item'].style,
            dimensions.width
          )}
          title={'Paid'}
        >
          {/* Details */}
          <Table
            borderColor={theme.colors.border.base}
            borderStyle={'solid'}
            borderWidth={1}
            cellHorizontalPadding={10}
            cellVerticalPadding={10}
            data={[
              {
                date: 'July 10, 2022',
                name: 'Ibne Riead',
                balance: 3975,
                payment: 'Cash',
              },
              {
                due: 175,
                date: 'July 8, 2022',
                name: 'Ibne Riead',
                balance: 175,
                payment: 'Cash',
              },
              {
                date: 'July 6, 2022',
                name: 'Brandon',
                balance: 375,
                payment: 'Instrumental',
              },
              {
                date: 'July 4, 2022',
                name: 'Jeremy',
                balance: 375,
                payment: 'Paypal',
              },
            ]}
            drawBottomBorder={false}
            drawEndBorder={false}
            drawStartBorder={false}
            keyExtractor={(detailsData, index) =>
              detailsData?.id ??
              detailsData?.uuid ??
              index?.toString() ??
              JSON.stringify(detailsData)
            }
            listKey={'Tab View->Paid->Details'}
            renderItem={({ item, index }) => {
              const detailsData = item;
              return (
                <>
                  {/* Header */}
                  <TableRow
                    drawTopBorder={false}
                    drawBottomBorder={false}
                    drawEndBorder={false}
                    drawStartBorder={false}
                    isTableHeader={true}
                    style={StyleSheet.applyWidth(
                      { backgroundColor: palettes.StockIt.ViewBG },
                      dimensions.width
                    )}
                  >
                    {/* Date */}
                    <TableCell
                      drawBottomBorder={false}
                      drawStartBorder={false}
                      drawTopBorder={false}
                      {...GlobalStyles.TableCellStyles(theme)['Table Cell']
                        .props}
                      drawEndBorder={false}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TableCellStyles(theme)['Table Cell']
                            .style,
                          { alignItems: 'center', paddingLeft: 16 }
                        ),
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
                            fontSize: 16,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'Date'}
                      </Text>
                    </TableCell>
                    {/* Payment */}
                    <TableCell
                      drawBottomBorder={false}
                      drawStartBorder={false}
                      drawTopBorder={false}
                      {...GlobalStyles.TableCellStyles(theme)['Table Cell']
                        .props}
                      drawEndBorder={false}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TableCellStyles(theme)['Table Cell']
                            .style,
                          {
                            alignItems: 'center',
                            flex: 2,
                            flexDirection: 'column',
                            justifyContent: 'center',
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      <Text
                        accessible={true}
                        selectable={false}
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            color: theme.colors.text.strong,
                            flex: 1,
                            fontFamily: 'Inter_600SemiBold',
                            fontSize: 16,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'Payment'}
                      </Text>
                    </TableCell>
                    {/* Balance */}
                    <TableCell
                      drawBottomBorder={false}
                      drawStartBorder={false}
                      drawTopBorder={false}
                      {...GlobalStyles.TableCellStyles(theme)['Table Cell']
                        .props}
                      drawEndBorder={false}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TableCellStyles(theme)['Table Cell']
                            .style,
                          {
                            alignItems: 'center',
                            flexDirection: 'column',
                            justifyContent: 'center',
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      <Text
                        accessible={true}
                        selectable={false}
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            color: theme.colors.text.strong,
                            flex: 1,
                            fontFamily: 'Inter_600SemiBold',
                            fontSize: 16,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'Balance'}
                      </Text>
                    </TableCell>
                  </TableRow>
                  {/* Data */}
                  <TableRow
                    drawTopBorder={false}
                    isTableHeader={false}
                    drawBottomBorder={false}
                    drawEndBorder={false}
                    drawStartBorder={false}
                  >
                    {/* Date */}
                    <TableCell
                      drawBottomBorder={false}
                      drawStartBorder={false}
                      drawTopBorder={false}
                      {...GlobalStyles.TableCellStyles(theme)['Table Cell']
                        .props}
                      drawEndBorder={false}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TableCellStyles(theme)['Table Cell']
                            .style,
                          {
                            alignItems: 'flex-start',
                            flexDirection: 'column',
                            height: 50,
                            justifyContent: 'center',
                            paddingLeft: 16,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'flex-start',
                            justifyContent: 'center',
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
                              color: theme.colors.text.strong,
                              fontSize: 15,
                              textAlign: 'left',
                              textTransform: 'capitalize',
                            },
                            dimensions.width
                          )}
                        >
                          {detailsData?.name}
                        </Text>

                        <Text
                          accessible={true}
                          selectable={false}
                          ellipsizeMode={'tail'}
                          numberOfLines={1}
                          style={StyleSheet.applyWidth(
                            {
                              color: palettes.StockIt.TextPlaceholder,
                              fontSize: 13,
                              textTransform: 'capitalize',
                            },
                            dimensions.width
                          )}
                        >
                          {detailsData?.date}
                        </Text>
                      </View>
                    </TableCell>
                    {/* Payment */}
                    <TableCell
                      drawBottomBorder={false}
                      drawStartBorder={false}
                      drawTopBorder={false}
                      {...GlobalStyles.TableCellStyles(theme)['Table Cell']
                        .props}
                      drawEndBorder={false}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TableCellStyles(theme)['Table Cell']
                            .style,
                          {
                            alignItems: 'center',
                            flex: 2,
                            height: 60,
                            justifyContent: 'center',
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      <Text
                        accessible={true}
                        selectable={false}
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors.text.strong,
                            fontSize: 15,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {detailsData?.payment}
                      </Text>
                    </TableCell>
                    {/* Balance */}
                    <TableCell
                      drawBottomBorder={false}
                      drawStartBorder={false}
                      drawTopBorder={false}
                      {...GlobalStyles.TableCellStyles(theme)['Table Cell']
                        .props}
                      drawEndBorder={false}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TableCellStyles(theme)['Table Cell']
                            .style,
                          {
                            alignItems: 'center',
                            flexDirection: 'column',
                            height: 60,
                            justifyContent: 'center',
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {/* Text 2 */}
                      <>
                        {!detailsData?.due ? null : (
                          <Text
                            accessible={true}
                            selectable={false}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                { color: palettes.StockIt['Custom Color_3'] }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Due $'}
                            {detailsData?.due}
                          </Text>
                        )}
                      </>
                      <>
                        {detailsData?.due ? null : (
                          <Text
                            accessible={true}
                            selectable={false}
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors.text.strong,
                                fontSize: 15,
                                textTransform: 'capitalize',
                              },
                              dimensions.width
                            )}
                          >
                            {'$'}
                            {detailsData?.balance}
                          </Text>
                        )}
                      </>
                      {/* Text 3 */}
                      <>
                        {!detailsData?.due ? null : (
                          <Text
                            accessible={true}
                            selectable={false}
                            ellipsizeMode={'tail'}
                            numberOfLines={1}
                            style={StyleSheet.applyWidth(
                              {
                                color: palettes.StockIt.TextPlaceholder,
                                fontSize: 13,
                                textTransform: 'capitalize',
                              },
                              dimensions.width
                            )}
                          >
                            {'$'}
                            {detailsData?.balance}
                          </Text>
                        )}
                      </>
                    </TableCell>
                  </TableRow>
                </>
              );
            }}
            showsVerticalScrollIndicator={true}
            {...GlobalStyles.TableStyles(theme)['Table'].props}
            drawTopBorder={false}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TableStyles(theme)['Table'].style,
                { flex: null, marginLeft: 5, marginRight: 5, marginTop: 16 }
              ),
              dimensions.width
            )}
          />
          {/* Total */}
          <View
            style={StyleSheet.applyWidth(
              {
                borderColor: palettes.StockIt.TextPlaceholder,
                borderTopWidth: 1,
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 10,
                marginLeft: 5,
                marginRight: 5,
                marginTop: 16,
                padding: 16,
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
              {'total:'}
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
              {'$27325'}
            </Text>
          </View>
        </TabViewItem>
        {/* Balance */}
        <TabViewItem
          {...GlobalStyles.TabViewItemStyles(theme)['Tab View Item'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.TabViewItemStyles(theme)['Tab View Item'].style,
            dimensions.width
          )}
          title={'Due'}
        >
          {/* Details */}
          <Table
            borderColor={theme.colors.border.base}
            borderStyle={'solid'}
            borderWidth={1}
            cellHorizontalPadding={10}
            cellVerticalPadding={10}
            data={[
              {
                date: 'July 10, 2022',
                name: 'Ibne Riead',
                balance: 3975,
                payment: 'Cash',
              },
              {
                due: 175,
                date: 'July 8, 2022',
                name: 'Ibne Riead',
                balance: 175,
                payment: 'Cash',
              },
              {
                date: 'July 6, 2022',
                name: 'Brandon',
                balance: 375,
                payment: 'Instrumental',
              },
              {
                date: 'July 4, 2022',
                name: 'Jeremy',
                balance: 375,
                payment: 'Paypal',
              },
            ]}
            drawBottomBorder={false}
            drawEndBorder={false}
            drawStartBorder={false}
            keyExtractor={(detailsData, index) =>
              detailsData?.id ??
              detailsData?.uuid ??
              index?.toString() ??
              JSON.stringify(detailsData)
            }
            listKey={'Tab View->Balance->Details'}
            renderItem={({ item, index }) => {
              const detailsData = item;
              return (
                <>
                  {/* Header */}
                  <TableRow
                    drawTopBorder={false}
                    drawBottomBorder={false}
                    drawEndBorder={false}
                    drawStartBorder={false}
                    isTableHeader={true}
                    style={StyleSheet.applyWidth(
                      { backgroundColor: palettes.StockIt.ViewBG },
                      dimensions.width
                    )}
                  >
                    {/* Date */}
                    <TableCell
                      drawBottomBorder={false}
                      drawStartBorder={false}
                      drawTopBorder={false}
                      {...GlobalStyles.TableCellStyles(theme)['Table Cell']
                        .props}
                      drawEndBorder={false}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TableCellStyles(theme)['Table Cell']
                            .style,
                          { alignItems: 'center', paddingLeft: 16 }
                        ),
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
                            fontSize: 16,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'Date'}
                      </Text>
                    </TableCell>
                    {/* Payment */}
                    <TableCell
                      drawBottomBorder={false}
                      drawStartBorder={false}
                      drawTopBorder={false}
                      {...GlobalStyles.TableCellStyles(theme)['Table Cell']
                        .props}
                      drawEndBorder={false}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TableCellStyles(theme)['Table Cell']
                            .style,
                          {
                            alignItems: 'center',
                            flex: 2,
                            flexDirection: 'column',
                            justifyContent: 'center',
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      <Text
                        accessible={true}
                        selectable={false}
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            color: theme.colors.text.strong,
                            flex: 1,
                            fontFamily: 'Inter_600SemiBold',
                            fontSize: 16,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'Payment'}
                      </Text>
                    </TableCell>
                    {/* Balance */}
                    <TableCell
                      drawBottomBorder={false}
                      drawStartBorder={false}
                      drawTopBorder={false}
                      {...GlobalStyles.TableCellStyles(theme)['Table Cell']
                        .props}
                      drawEndBorder={false}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TableCellStyles(theme)['Table Cell']
                            .style,
                          {
                            alignItems: 'center',
                            flexDirection: 'column',
                            justifyContent: 'center',
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      <Text
                        accessible={true}
                        selectable={false}
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            color: theme.colors.text.strong,
                            flex: 1,
                            fontFamily: 'Inter_600SemiBold',
                            fontSize: 16,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'Balance'}
                      </Text>
                    </TableCell>
                  </TableRow>
                  {/* Data */}
                  <TableRow
                    drawTopBorder={false}
                    isTableHeader={false}
                    drawBottomBorder={false}
                    drawEndBorder={false}
                    drawStartBorder={false}
                  >
                    {/* Date */}
                    <TableCell
                      drawBottomBorder={false}
                      drawStartBorder={false}
                      drawTopBorder={false}
                      {...GlobalStyles.TableCellStyles(theme)['Table Cell']
                        .props}
                      drawEndBorder={false}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TableCellStyles(theme)['Table Cell']
                            .style,
                          {
                            alignItems: 'flex-start',
                            flexDirection: 'column',
                            height: 50,
                            justifyContent: 'center',
                            paddingLeft: 16,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'flex-start',
                            justifyContent: 'center',
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
                              color: theme.colors.text.strong,
                              fontSize: 15,
                              textAlign: 'left',
                              textTransform: 'capitalize',
                            },
                            dimensions.width
                          )}
                        >
                          {detailsData?.name}
                        </Text>

                        <Text
                          accessible={true}
                          selectable={false}
                          ellipsizeMode={'tail'}
                          numberOfLines={1}
                          style={StyleSheet.applyWidth(
                            {
                              color: palettes.StockIt.TextPlaceholder,
                              fontSize: 13,
                              textTransform: 'capitalize',
                            },
                            dimensions.width
                          )}
                        >
                          {detailsData?.date}
                        </Text>
                      </View>
                    </TableCell>
                    {/* Payment */}
                    <TableCell
                      drawBottomBorder={false}
                      drawStartBorder={false}
                      drawTopBorder={false}
                      {...GlobalStyles.TableCellStyles(theme)['Table Cell']
                        .props}
                      drawEndBorder={false}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TableCellStyles(theme)['Table Cell']
                            .style,
                          {
                            alignItems: 'center',
                            flex: 2,
                            height: 60,
                            justifyContent: 'center',
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      <Text
                        accessible={true}
                        selectable={false}
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors.text.strong,
                            fontSize: 15,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {detailsData?.payment}
                      </Text>
                    </TableCell>
                    {/* Balance */}
                    <TableCell
                      drawBottomBorder={false}
                      drawStartBorder={false}
                      drawTopBorder={false}
                      {...GlobalStyles.TableCellStyles(theme)['Table Cell']
                        .props}
                      drawEndBorder={false}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TableCellStyles(theme)['Table Cell']
                            .style,
                          {
                            alignItems: 'center',
                            flexDirection: 'column',
                            height: 60,
                            justifyContent: 'center',
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {/* Text 2 */}
                      <>
                        {!detailsData?.due ? null : (
                          <Text
                            accessible={true}
                            selectable={false}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                { color: palettes.StockIt['Custom Color_3'] }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Due $'}
                            {detailsData?.due}
                          </Text>
                        )}
                      </>
                      <>
                        {detailsData?.due ? null : (
                          <Text
                            accessible={true}
                            selectable={false}
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors.text.strong,
                                fontSize: 15,
                                textTransform: 'capitalize',
                              },
                              dimensions.width
                            )}
                          >
                            {'$'}
                            {detailsData?.balance}
                          </Text>
                        )}
                      </>
                      {/* Text 3 */}
                      <>
                        {!detailsData?.due ? null : (
                          <Text
                            accessible={true}
                            selectable={false}
                            ellipsizeMode={'tail'}
                            numberOfLines={1}
                            style={StyleSheet.applyWidth(
                              {
                                color: palettes.StockIt.TextPlaceholder,
                                fontSize: 13,
                                textTransform: 'capitalize',
                              },
                              dimensions.width
                            )}
                          >
                            {'$'}
                            {detailsData?.balance}
                          </Text>
                        )}
                      </>
                    </TableCell>
                  </TableRow>
                </>
              );
            }}
            showsVerticalScrollIndicator={true}
            {...GlobalStyles.TableStyles(theme)['Table'].props}
            drawTopBorder={false}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TableStyles(theme)['Table'].style,
                { flex: null, marginLeft: 5, marginRight: 5, marginTop: 16 }
              ),
              dimensions.width
            )}
          />
          {/* Total */}
          <View
            style={StyleSheet.applyWidth(
              {
                borderColor: palettes.StockIt.TextPlaceholder,
                borderTopWidth: 1,
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 10,
                marginLeft: 5,
                marginRight: 5,
                marginTop: 16,
                padding: 16,
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
              {'total:'}
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
              {'$27325'}
            </Text>
          </View>
        </TabViewItem>
      </TabView>
    </ScreenContainer>
  );
};

export default withTheme(SalesListScreen);
