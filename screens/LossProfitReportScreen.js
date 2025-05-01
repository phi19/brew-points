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

const LossProfitReportScreen = props => {
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
            justifyContent: 'space-between',
            marginLeft: 16,
            marginRight: 16,
            marginTop: 16,
          },
          dimensions.width
        )}
      >
        {/* Start Date */}
        <View
          style={StyleSheet.applyWidth(
            { flex: 1, paddingRight: 10 },
            dimensions.width
          )}
        >
          <DatePicker
            autoDismissKeyboard={true}
            disabled={false}
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
            hideLabel={false}
            label={'Start Date'}
            rightIconName={'AntDesign/calendar'}
          />
        </View>
        {/* End Date */}
        <View
          style={StyleSheet.applyWidth(
            { flex: 1, paddingLeft: 10 },
            dimensions.width
          )}
        >
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
            label={'End Date'}
            rightIconName={'AntDesign/calendar'}
          />
        </View>
      </View>
      {/* Details 2 */}
      <Table
        borderColor={theme.colors.border.base}
        borderStyle={'solid'}
        borderWidth={1}
        cellHorizontalPadding={10}
        cellVerticalPadding={10}
        data={[
          {
            Sales: 3975,
            Profit: 3975,
            Category: 'Fashion',
            Purchase: 175,
            'Product Name': 'Smart Watch',
          },
          {
            Sales: 175,
            Profit: 175,
            Category: 'Fashion',
            Purchase: 175,
            'Product Name': 'Men For Shoes',
          },
          {
            Sales: 375,
            Profit: 375,
            Category: 'Fashion',
            Purchase: 175,
            'Product Name': 'Smart Watch',
          },
          {
            Sales: 375,
            Profit: 375,
            Category: 'Fashion',
            Purchase: 175,
            'Product Name': 'Smart Watch',
          },
        ]}
        drawBottomBorder={false}
        drawEndBorder={false}
        drawStartBorder={false}
        drawTopBorder={true}
        keyExtractor={(details2Data, index) =>
          details2Data?.id ??
          details2Data?.uuid ??
          index?.toString() ??
          JSON.stringify(details2Data)
        }
        listKey={'Details 2'}
        renderItem={({ item, index }) => {
          const details2Data = item;
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
                        alignItems: 'center',
                        flex: 2,
                        height: 40,
                        paddingLeft: 16,
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
                        flex: 1,
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 14,
                        textTransform: 'capitalize',
                      },
                      dimensions.width
                    )}
                  >
                    {'Product Name'}
                  </Text>
                </TableCell>
                {/* Purchase */}
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
                    {'Purchase'}
                  </Text>
                </TableCell>
                {/* sales */}
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
                        flex: 1,
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 14,
                        textTransform: 'capitalize',
                      },
                      dimensions.width
                    )}
                  >
                    {'Sales'}
                  </Text>
                </TableCell>
                {/* Profit */}
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
                    {'Profit'}
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
                      {details2Data?.['Product Name']}
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
                      {details2Data?.Category}
                    </Text>
                  </View>
                </TableCell>
                {/* Purchase */}
                <TableCell
                  drawBottomBorder={false}
                  drawStartBorder={false}
                  drawTopBorder={false}
                  {...GlobalStyles.TableCellStyles(theme)['Table Cell'].props}
                  drawEndBorder={false}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TableCellStyles(theme)['Table Cell'].style,
                      { alignItems: 'center' }
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
                    {'$'}
                    {details2Data?.Purchase}
                  </Text>
                </TableCell>
                {/* Sales */}
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
                        alignSelf: 'auto',
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
                        fontSize: 14,
                        textTransform: 'capitalize',
                      },
                      dimensions.width
                    )}
                  >
                    {'$'}
                    {details2Data?.Sales}
                  </Text>
                </TableCell>
                {/* Profit */}
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
                    {'$'}
                    {details2Data?.Profit}
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
          {'total blance:'}
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

export default withTheme(LossProfitReportScreen);
