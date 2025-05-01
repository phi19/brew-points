import React from 'react';
import {
  DatePicker,
  ScreenContainer,
  Table,
  TableCell,
  TableRow,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const PurchaselistScreen = props => {
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
          { Name: 'Rieada', Amount: 50, Quantity: 25 },
          { Name: 'Brandon', Amount: 155, Quantity: 135 },
          { Name: 'Jeremy', Amount: 1203, Quantity: 360 },
          { Name: 'Leonard', Amount: 120, Quantity: 50 },
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
                {/* Name */}
                <TableCell
                  drawBottomBorder={false}
                  drawStartBorder={false}
                  drawTopBorder={false}
                  {...GlobalStyles.TableCellStyles(theme)['Table Cell'].props}
                  drawEndBorder={false}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TableCellStyles(theme)['Table Cell'].style,
                      { alignItems: 'center', height: 50, paddingLeft: 16 }
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
                        fontSize: 14,
                        textTransform: 'capitalize',
                      },
                      dimensions.width
                    )}
                  >
                    {'name'}
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
                      { alignItems: 'center' }
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
                        fontSize: 14,
                        paddingLeft: 16,
                        textTransform: 'capitalize',
                      },
                      dimensions.width
                    )}
                  >
                    {'Quantity'}
                  </Text>
                </TableCell>
                {/* Amount */}
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
                        paddingRight: 25,
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
                        alignItems: 'center',
                        flex: 1,
                        flexDirection: 'row',
                        height: 40,
                      },
                      dimensions.width
                    )}
                  >
                    <Image
                      resizeMode={'cover'}
                      {...GlobalStyles.ImageStyles(theme)['Image'].props}
                      source={imageSource(Images['User'])}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ImageStyles(theme)['Image'].style,
                          { borderRadius: 50, height: 24, width: 24 }
                        ),
                        dimensions.width
                      )}
                    />
                    <Text
                      accessible={true}
                      selectable={false}
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.text.strong,
                          fontSize: 15,
                          paddingLeft: 8,
                          textTransform: 'capitalize',
                        },
                        dimensions.width
                      )}
                    >
                      {detailsData?.Name}
                    </Text>
                  </View>
                </TableCell>
                {/* Table Cell 2 */}
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
                      { fontSize: 15, textTransform: 'capitalize' },
                      dimensions.width
                    )}
                  >
                    {detailsData?.Quantity}
                  </Text>
                </TableCell>
                {/* Table Cell 3 */}
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
                        paddingRight: 25,
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
                    {detailsData?.Amount}
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
        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
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
        </View>

        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flex: 1 },
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
              },
              dimensions.width
            )}
          >
            {'$1850'}
          </Text>
        </View>

        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flex: 1 },
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
                textAlign: 'left',
              },
              dimensions.width
            )}
          >
            {'$380'}
          </Text>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(PurchaselistScreen);
