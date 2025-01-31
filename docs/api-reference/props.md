# Props

## title

| Name  | Type   | Default Options | Description |
| ----- | ------ | --------------- | ----------- |
| title | String | ""              | Table-title |

## is-slot-mode

| Name         | Type    | Default Options | Description                                        |
| ------------ | ------- | --------------- | -------------------------------------------------- |
| is-slot-mode | Boolean | false           | If you want to use v-slot (V-slot Mode), set TRUE. |

## is-static-mode

| Name           | Type    | Default Options | Description                                                        |
| -------------- | ------- | --------------- | ------------------------------------------------------------------ |
| is-static-mode | Boolean | false           | If you do not need to use ajax or axios to get any data, set TRUE. |

## has-checkbox

| Name         | Type    | Default Options | Description           |
| ------------ | ------- | --------------- | --------------------- |
| has-checkbox | Boolean | false           | Show checkbox on rows |

## checked-return-type

| Name                | Type   | Default Options | Description                    |
| ------------------- | ------ | --------------- | ------------------------------ |
| checked-return-type | String | "key"           | Return checked row data's type |

## is-loading

| Name       | Type    | Default Options | Description                                        |
| ---------- | ------- | --------------- | -------------------------------------------------- |
| is-loading | Boolean | false           | Show loading mask (Not required on is-static-mode) |

## is-re-search

| Name         | Type    | Default Options | Description                                                   |
| ------------ | ------- | --------------- | ------------------------------------------------------------- |
| is-re-search | Boolean | false           | If you reload data, set true (Not required on is-static-mode) |

## is-fixed-first-column

| Name                  | Type    | Default Options | Description                     |
| --------------------- | ------- | --------------- | ------------------------------- |
| is-fixed-first-column | Boolean | false           | Fixed first column on scrolling |

## max-height

| Name       | Type   | Default Options | Description        |
| ---------- | ------ | --------------- | ------------------ |
| max-height | String | "auto"          | Table's max height |

## columns <Badge type="danger">Required</Badge>

| Name    | Type  | Default Options | Description       |
| ------- | ----- | --------------- | ----------------- |
| columns | Array | null            | The table columns |

::: details More Options
Some more options related to columns.

| Name          | Type     | Default Options | Description                                                    |
| ------------- | -------- | --------------- | -------------------------------------------------------------- |
| isKey         | Boolean  | false           | If the field is the primary key, set to true                   |
| label         | String   | null            | Field label for display (HTML support)                         |
| field         | String   | null            | Row field keyname                                              |
| width         | String   | null            | Field's width size                                             |
| sortable      | Boolean  | false           | If the field can be sorted, set to true                        |
| display       | Function | null            | You can customize the display data in there (HTML tag or Etc.) |
| headerClasses | Array    | null            | Data header's classes array                                    |
| columnClasses | Array    | null            | Data column's classes array                                    |
| headerStyles  | Object   | null            | Data header's in-line style object                             |
| columnStyles  | Object   | null            | Data column's in-line style object                             |

:::

## rows <Badge type="danger">Required</Badge>

| Name | Type  | Default Options | Description |
| ---- | ----- | --------------- | ----------- |
| rows | Array | null            | Records     |

## rowClasses

| Name       | Type           | Default Options | Description           |
| ---------- | -------------- | --------------- | --------------------- |
| rowClasses | Array/Function | null            | `<tr/>` tag's classes |

## total <Badge type="danger">Required</Badge>

| Name  | Type   | Default Options | Description   |
| ----- | ------ | --------------- | ------------- |
| total | Number | null            | Records count |

## sortable <Badge type="danger">Required</Badge>

| Name  | Description                       | <Badge type="danger">Required</Badge> | Type   |
| ----- | --------------------------------- | ------------------------------------- | ------ |
| order | Order field and sort for Sortable | Yes                                   | string |

::: details More Options
Some more options related to sortable.

| Name  | Description                       | <Badge type="danger">Required</Badge> | Type   |
| ----- | --------------------------------- | ------------------------------------- | ------ |
| order | Order field and sort for Sortable | Yes                                   | string |
| sort  | Sortable value for the database   | Yes                                   | string |

:::

## messages

| Name     | Description       | Required | Type   |
| -------- | ----------------- | -------- | ------ |
| messages | Locale's messages | No       | Object |

::: details More Options
Some more options related to messages.

| Name                | Description       | Required | Type   | Default Options          |
| ------------------- | ----------------- | -------- | ------ | ------------------------ |
| pagingInfo          | Locale's messages | No       | string | "Showing {0}-{1} of {2}" |
| pageSizeChangeLabel | Locale's messages | No       | string | "Row count:"             |
| gotoPageLabel       | Locale's messages | No       | string | "Go to page:"            |
| noDataAvailable     | Locale's messages | No       | string | "No data"                |

:::

## is-hide-paging

| Name           | Description                           | Required | Type    | Default Options |
| -------------- | ------------------------------------- | -------- | ------- | --------------- |
| is-hide-paging | Not Show paging information on bottom | No       | Boolean | false           |

## page

| Name | Description                                                                          | Required | Type   | Default Options |
| ---- | ------------------------------------------------------------------------------------ | -------- | ------ | --------------- |
| page | If you want to control the page number yourself, use this to change the page number. | No       | Number | 1               |

## page-size

| Name      | Description                                                                      | Required | Type   | Default Options |
| --------- | -------------------------------------------------------------------------------- | -------- | ------ | --------------- |
| page-size | Default display the number of items on one page. In most cases, no set required. | No       | Number | 10              |

## pageOptions

| Name        | Description                    | Required | Type  | Default Options                                                                 |
| ----------- | ------------------------------ | -------- | ----- | ------------------------------------------------------------------------------- |
| pageOptions | Option list for pages dropdown | No       | Array | `[ { value: 10, text: 10 }, { value: 25, text: 25 }, { value: 50, text: 50 } ]` |

::: details More Options
Some more options related to pageOptions.

| Field | Required | Type             |
| ----- | -------- | ---------------- |
| value | Yes      | Number           |
| text  | Yes      | Number \| string |

:::

## grouping-key

| Name         | Description                                                               | Required | Type   | Default Options |
| ------------ | ------------------------------------------------------------------------- | -------- | ------ | --------------- |
| grouping-key | If you want to use a grouping table, set the name of your grouping field. | No       | string | null            |

## has-group-toggle

| Name             | Description                                         | Required | Type    | Default Options |
| ---------------- | --------------------------------------------------- | -------- | ------- | --------------- |
| has-group-toggle | Show group toggle if you're using a grouping table. | No       | Boolean | false           |

## grouping-display

| Name             | Description                                                        | Required | Type     | Default Options |
| ---------------- | ------------------------------------------------------------------ | -------- | -------- | --------------- |
| grouping-display | Customize grouping title display if you're using a grouping table. | No       | Function | null            |

## start-collapsed

| Name            | Description                                       | Required | Type    | Default Options |
| --------------- | ------------------------------------------------- | -------- | ------- | --------------- |
| start-collapsed | Grouping rows will be collapsed after the initial | No       | Boolean | false           |

## is-keep-collapsed

| Name              | Description                         | Required | Type    | Default Options |
| ----------------- | ----------------------------------- | -------- | ------- | --------------- |
| is-keep-collapsed | Keep collapsed status after refresh | No       | Boolean | false           |

## skeleton-screen

| Name              | Description                         | Required | Type    | Default Options |
| ----------------- | ----------------------------------- | -------- | ------- | --------------- |
| skeleton-screen | Show skeleton loading screen | No       | Boolean | false           |

::: details More Options
Some more options related to skeleton-screen.

| Field | Description                         | Required | Type    | Default Options |
| ----------------- | ----------------------------------- | -------- | ------- | --------------- |
| skeleton-rows | Show the number of rows during the loading screen | Yes       | Number | 5           |
