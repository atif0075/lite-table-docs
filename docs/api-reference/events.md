# Events

## do-search <Badge type="danger">Required</Badge>

| Name      | Description                                | Hint                                               | Type                                                                   |
| --------- | ------------------------------------------ | -------------------------------------------------- | ---------------------------------------------------------------------- |
| do-search | Initiates a search operation on the table. | Required in default mode, optional in static mode. | `(offset: Number, limit: Number, order: string, sort: string) => void` |

::: details Arguments <Badge type="danger">Required</Badge>
| Name | Description | Type |
| ------ | --------------------------------------------------- | ------ |
| offset | The offset value for the database query. | Number |
| limit | The limit value for the database query. | Number |
| order | The order field for sorting the database results. | string |
| sort | The sorting direction for the database results. | string |
:::

## is-finished

| Name        | Description                              | Type                        |
| ----------- | ---------------------------------------- | --------------------------- |
| is-finished | Called when table rendering is finished. | `(elements: Array) => void` |

::: details Argument
| Name | Description | Type |
| -------- | --------------------------------------------------- | ------ |
| elements | An array of elements with the 'is-rows-el' class name. | Array |
:::

## return-checked-rows

| Name                | Description                                | Type                        |
| ------------------- | ------------------------------------------ | --------------------------- |
| return-checked-rows | Called when rows are checked in the table. | `(rowsKey: Number) => void` |

::: details Argument
| Name | Description | Type |
| -------- | --------------------------------------------------- | ------ |
| rowsKey | The key field name of the checked row. | Number |
:::

## get-now-page

| Name         | Description                                              | Type                       |
| ------------ | -------------------------------------------------------- | -------------------------- |
| get-now-page | Called to retrieve the current page number of the table. | `(pageNo: Number) => void` |

::: details Argument
| Name | Description | Type |
| -------- | ------------------------------------------------ | ------ |
| pageNo | The current page number. | Number |
:::

## row-clicked

| Name        | Description                                | Type                        |
| ----------- | ------------------------------------------ | --------------------------- |
| row-clicked | Called when a row in the table is clicked. | `(rowData: Object) => void` |

::: details Argument
| Name | Description | Type |
| -------- | ------------------------------------------------- | ------- |
| rowData | The data associated with the clicked row. | Object |
:::

## row-toggled

| Name        | Description                                                               | Type                                          |
| ----------- | ------------------------------------------------------------------------- | --------------------------------------------- |
| row-toggled | Called when rows in a grouping table are toggled (expanded or collapsed). | `(rows: Array, isCollapsed: Boolean) => void` |

::: details Arguments
| Name | Description | Type |
| ------------ | ------------------------------------------------- | -------- |
| rows | An array of grouping rows. | Array |
| isCollapsed | Indicates whether the rows are collapsed or not. | Boolean |
:::
