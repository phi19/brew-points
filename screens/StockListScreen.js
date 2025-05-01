import React from 'react';
import {
  DatePicker,
  ScreenContainer,
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

const StockListScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasBottomSafeArea={true}
      scrollable={true}
    >
      {/* Dates View */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            gap: 20,
            justifyContent: 'space-between',
            marginLeft: 16,
            marginRight: 16,
            marginTop: 16,
          },
          dimensions.width
        )}
      >
        {/* Start Date */}
        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
          <DatePicker
            autoDismissKeyboard={true}
            disabled={false}
            hideLabel={false}
            inline={false}
            leftIconMode={'inset'}
            mode={'date'}
            onDateChange={newDatePickerValue => {
              try {
                setDatePickerValue(newDatePickerValue);
              } catch (err) {
                console.error(err);
              }
            }}
            type={'solid'}
            date={datePickerValue}
            format={'dd-mm-yyyy'}
            label={'From Date'}
            rightIconName={'AntDesign/calendar'}
          />
        </View>
        {/* End Date */}
        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
          <DatePicker
            autoDismissKeyboard={true}
            disabled={false}
            hideLabel={false}
            inline={false}
            leftIconMode={'inset'}
            mode={'date'}
            onDateChange={newDatePickerValue => {
              try {
                setDatePickerValue(newDatePickerValue);
              } catch (err) {
                console.error(err);
              }
            }}
            type={'solid'}
            date={datePickerValue}
            format={'dd-mm-yyyy'}
            label={'To Date'}
            rightIconName={'AntDesign/calendar'}
          />
        </View>
      </View>
      {/* Details */}
      <Table
        borderColor={theme.colors.border.base}
        borderStyle={'solid'}
        borderWidth={1}
        cellHorizontalPadding={10}
        cellVerticalPadding={10}
        data={[
          {
            QTY: '24 Pcs',
            Balance: '$3975',
            Product: 'Smart Watch',
            Category: 'Fashion',
            'Code/IME': '123456',
          },
          {
            QTY: '27 Pcs',
            Balance: '$175',
            Product: 'Men For Shoes',
            Category: 'Fashion',
            'Code/IME': 'DJ1234',
          },
          {
            QTY: '2 Dozen',
            Balance: '$375',
            Product: 'Smart Watch',
            Category: 'Fashion',
            'Code/IME': 'DJ16543',
          },
          {
            QTY: '2 Pcs',
            Balance: '$375',
            Product: 'Smart Watch',
            Category: 'Fashion',
            'Code/IME': '345687',
          },
        ]}
        drawBottomBorder={false}
        drawEndBorder={false}
        drawStartBorder={false}
        drawTopBorder={true}
        keyExtractor={(detailsData, index) =>
          detailsData?.id ??
          detailsData?.uuid ??
          index?.toString() ??
          JSON.stringify(detailsData)
        }
        listKey={'Details'}
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
                {/* Product */}
                <TableCell
                  drawBottomBorder={false}
                  drawStartBorder={false}
                  drawTopBorder={false}
                  {...GlobalStyles.TableCellStyles(theme)['Table Cell'].props}
                  drawEndBorder={false}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TableCellStyles(theme)['Table Cell'].style,
                      { alignItems: 'center', height: 40, paddingLeft: 16 }
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
                        flex: 1,
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 14,
                        textTransform: 'capitalize',
                      },
                      dimensions.width
                    )}
                  >
                    {'Product'}
                  </Text>
                </TableCell>
                {/* Code/IME */}
                <TableCell
                  drawBottomBorder={false}
                  drawStartBorder={false}
                  drawTopBorder={false}
                  {...GlobalStyles.TableCellStyles(theme)['Table Cell'].props}
                  drawEndBorder={false}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TableCellStyles(theme)['Table Cell'].style,
                      {
                        alignItems: 'flex-start',
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
                        alignSelf: 'flex-end',
                        color: theme.colors.text.strong,
                        flex: 1,
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 14,
                        textTransform: 'capitalize',
                      },
                      dimensions.width
                    )}
                  >
                    {'Code/IME'}
                  </Text>
                </TableCell>
                {/* QTY */}
                <TableCell
                  drawBottomBorder={false}
                  drawStartBorder={false}
                  drawTopBorder={false}
                  {...GlobalStyles.TableCellStyles(theme)['Table Cell'].props}
                  drawEndBorder={false}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TableCellStyles(theme)['Table Cell'].style,
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
                        fontSize: 14,
                        textTransform: 'capitalize',
                      },
                      dimensions.width
                    )}
                  >
                    {'QTY'}
                  </Text>
                </TableCell>
                {/* Balance */}
                <TableCell
                  drawBottomBorder={false}
                  drawStartBorder={false}
                  drawTopBorder={false}
                  {...GlobalStyles.TableCellStyles(theme)['Table Cell'].props}
                  drawEndBorder={false}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TableCellStyles(theme)['Table Cell'].style,
                      {
                        alignItems: 'flex-end',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        paddingRight: 16,
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
                        alignSelf: 'flex-end',
                        color: theme.colors.text.strong,
                        flex: 1,
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 14,
                        textTransform: 'capitalize',
                      },
                      dimensions.width
                    )}
                  >
                    {'Amount'}
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
                {/* Product Name */}
                <TableCell
                  drawBottomBorder={false}
                  drawStartBorder={false}
                  drawTopBorder={false}
                  {...GlobalStyles.TableCellStyles(theme)['Table Cell'].props}
                  drawEndBorder={false}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TableCellStyles(theme)['Table Cell'].style,
                      {
                        flex: 2,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        paddingLeft: 16,
                      }
                    ),
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      { justifyContent: 'space-between' },
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
                          textTransform: 'capitalize',
                        },
                        dimensions.width
                      )}
                    >
                      {detailsData?.Product}
                    </Text>

                    <Text
                      accessible={true}
                      selectable={false}
                      ellipsizeMode={'tail'}
                      numberOfLines={1}
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.text.medium,
                          fontSize: 13,
                          textTransform: 'capitalize',
                        },
                        dimensions.width
                      )}
                    >
                      {detailsData?.Category}
                    </Text>
                  </View>
                </TableCell>
                {/* Code Value */}
                <TableCell
                  drawBottomBorder={false}
                  drawStartBorder={false}
                  drawTopBorder={false}
                  {...GlobalStyles.TableCellStyles(theme)['Table Cell'].props}
                  drawEndBorder={false}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TableCellStyles(theme)['Table Cell'].style,
                      { alignItems: 'center', justifyContent: 'center' }
                    ),
                    dimensions.width
                  )}
                >
                  <Text
                    accessible={true}
                    selectable={false}
                    style={StyleSheet.applyWidth(
                      { fontSize: 14, textTransform: 'capitalize' },
                      dimensions.width
                    )}
                  >
                    {detailsData?.['Code/IME']}
                  </Text>
                </TableCell>
                {/* Quantity */}
                <TableCell
                  drawBottomBorder={false}
                  drawStartBorder={false}
                  drawTopBorder={false}
                  {...GlobalStyles.TableCellStyles(theme)['Table Cell'].props}
                  drawEndBorder={false}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TableCellStyles(theme)['Table Cell'].style,
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
                        color: theme.colors.text.strong,
                        fontSize: 14,
                        textTransform: 'capitalize',
                      },
                      dimensions.width
                    )}
                  >
                    {detailsData?.QTY}
                  </Text>
                </TableCell>
                {/* Balance */}
                <TableCell
                  drawBottomBorder={false}
                  drawStartBorder={false}
                  drawTopBorder={false}
                  {...GlobalStyles.TableCellStyles(theme)['Table Cell'].props}
                  drawEndBorder={false}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TableCellStyles(theme)['Table Cell'].style,
                      {
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        paddingRight: 16,
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
                        fontSize: 14,
                        textTransform: 'capitalize',
                      },
                      dimensions.width
                    )}
                  >
                    {detailsData?.Balance}
                  </Text>
                </TableCell>
              </TableRow>
            </>
          );
        }}
        showsVerticalScrollIndicator={true}
        {...GlobalStyles.TableStyles(theme)['Table'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TableStyles(theme)['Table'].style, {
            flex: null,
            marginTop: 16,
          }),
          dimensions.width
        )}
      />
      {/* Total */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            borderColor: palettes.StockIt.TextPlaceholder,
            borderTopWidth: 1,
            flexDirection: 'row',
            height: 60,
            justifyContent: 'space-between',
            marginBottom: 10,
            marginTop: 16,
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
          {null}
        </Text>

        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.text.strong,
              fontFamily: 'Inter_600SemiBold',
              fontSize: 15,
              textAlign: 'right',
            },
            dimensions.width
          )}
        >
          {'$850'}
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
          {'$850'}
        </Text>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(StockListScreen);
