import React from 'react';
import {
  Button,
  Icon,
  ScreenContainer,
  Table,
  TableCell,
  TableRow,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const SupplierListScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasBottomSafeArea={true}
      scrollable={true}
      style={StyleSheet.applyWidth(
        { flex: 1, justifyContent: 'space-between' },
        dimensions.width
      )}
    >
      {/* Main Content */}
      <View>
        {/* Details 2 */}
        <Table
          borderColor={theme.colors.border.base}
          borderStyle={'solid'}
          borderWidth={1}
          cellHorizontalPadding={10}
          cellVerticalPadding={10}
          data={[
            {
              Name: 'Ibne Riead',
              Number: '+1245 1563 896',
              Balance: '$3975',
              'Join Date': '5/15/2021',
            },
            {
              Name: 'Leonard',
              Number: '+1245 1563 896',
              Balance: '$3975',
              'Join Date': '5/15/2021',
            },
            {
              Name: 'Brandon',
              Number: '+1245 1563 896',
              Balance: '$3975',
              'Join Date': '5/15/2021',
            },
            {
              Name: 'Jeremy',
              Number: '+1245 1563 896',
              Balance: '$3975',
              'Join Date': '5/15/2021',
            },
          ]}
          drawBottomBorder={false}
          drawEndBorder={false}
          drawStartBorder={false}
          keyExtractor={(details2Data, index) =>
            details2Data?.id ??
            details2Data?.uuid ??
            index?.toString() ??
            JSON.stringify(details2Data)
          }
          listKey={'Main Content->Details 2'}
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
                  {/* Date */}
                  <TableCell
                    drawBottomBorder={false}
                    drawStartBorder={false}
                    drawTopBorder={false}
                    {...GlobalStyles.TableCellStyles(theme)['Table Cell'].props}
                    drawEndBorder={false}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TableCellStyles(theme)['Table Cell'].style,
                        { alignItems: 'center', flex: 2, paddingLeft: 16 }
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
                      {'Date/Sup.'}
                    </Text>
                  </TableCell>
                  {/* Number */}
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
                          fontFamily: 'Inter_600SemiBold',
                          fontSize: 15,
                          textTransform: 'capitalize',
                        },
                        dimensions.width
                      )}
                    >
                      {'Number'}
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
                          alignSelf: 'flex-end',
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
                          fontFamily: 'Inter_600SemiBold',
                          fontSize: 14,
                          textTransform: 'capitalize',
                        },
                        dimensions.width
                      )}
                    >
                      {'Balance'}
                    </Text>
                  </TableCell>
                  {/* Action */}
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
                          width: '22%',
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
                          fontFamily: 'Inter_600SemiBold',
                          fontSize: 15,
                          textTransform: 'capitalize',
                        },
                        dimensions.width
                      )}
                    >
                      {'Action'}
                    </Text>
                  </TableCell>
                </TableRow>
                {/* Data */}
                <TableRow
                  drawTopBorder={false}
                  isTableHeader={false}
                  cellVerticalPadding={10}
                  drawBottomBorder={false}
                  drawEndBorder={false}
                  drawStartBorder={false}
                >
                  {/* Date */}
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
                        {details2Data?.Name}
                      </Text>

                      <Text
                        accessible={true}
                        selectable={false}
                        ellipsizeMode={'tail'}
                        numberOfLines={1}
                        style={StyleSheet.applyWidth(
                          {
                            color: palettes.StockIt.TextPlaceholder,
                            fontSize: 11,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'join:'}
                        {details2Data?.['Join Date']}
                      </Text>
                    </View>
                  </TableCell>
                  {/* Number */}
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
                          height: 50,
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
                          fontSize: 13,
                          textTransform: 'capitalize',
                        },
                        dimensions.width
                      )}
                    >
                      {details2Data?.Number}
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
                          flexDirection: 'column',
                          height: 50,
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
                          fontSize: 13,
                          textTransform: 'capitalize',
                        },
                        dimensions.width
                      )}
                    >
                      {details2Data?.Balance}
                    </Text>
                  </TableCell>
                  {/* Action */}
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
                          justifyContent: 'flex-end',
                          paddingRight: 16,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          flexDirection: 'row',
                          justifyContent: 'center',
                        },
                        dimensions.width
                      )}
                    >
                      <Touchable>
                        <Icon
                          color={palettes.StockIt.TextPlaceholder}
                          name={'Feather/edit'}
                          size={18}
                        />
                      </Touchable>

                      <Touchable
                        style={StyleSheet.applyWidth(
                          { marginLeft: 12 },
                          dimensions.width
                        )}
                      >
                        <Icon
                          color={theme.colors.background.danger}
                          name={'AntDesign/delete'}
                          size={18}
                        />
                      </Touchable>
                    </View>
                  </TableCell>
                </TableRow>
              </>
            );
          }}
          {...GlobalStyles.TableStyles(theme)['Table'].props}
          drawTopBorder={false}
          showsVerticalScrollIndicator={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TableStyles(theme)['Table'].style, {
              flex: null,
            }),
            dimensions.width
          )}
        />
        {/* Total */}
        <View
          style={StyleSheet.applyWidth(
            {
              borderColor: palettes.StockIt.TextPlaceholder,
              borderTopWidth: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
              marginRight: 16,
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
            {'$1850'}
          </Text>
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
            marginBottom: 30,
            marginLeft: 16,
            marginRight: 16,
            marginTop: 20,
            textAlign: 'center',
            textTransform: 'capitalize',
          },
          dimensions.width
        )}
        title={'+ add supplier'}
      />
    </ScreenContainer>
  );
};

export default withTheme(SupplierListScreen);
