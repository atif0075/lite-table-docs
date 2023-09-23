<script setup>
import * as cn from "/locales/cn.json";
</script>

# {{cn.props}}

## title

| {{cn.name}} | {{cn.type}} | {{cn.default_opt}} | {{cn.description}} |
| :---------- | :---------- | :----------------- | :----------------- |
| title       | String      | ""                 |  {{cn.props_table_title_desc}}        |

## is-slot-mode

| {{cn.name}}  | {{cn.type}} | {{cn.default_opt}} | {{cn.description}}                              |
| :----------- | :---------- | :----------------- | :---------------------------------------------- |
| is-slot-mode | Boolean     | false              |  {{cn.props_is_slot_mode_desc}} |

## is-static-mode

| {{cn.name}}    | {{cn.type}} | {{cn.default_opt}} | {{cn.description}}                                           |
| :------------- | :---------- | :----------------- | :----------------------------------------------------------- |
| is-static-mode | Boolean     | false              | {{cn.props_is_static_mode_desc}} |

## has-checkbox

| {{cn.name}}  | {{cn.type}} | {{cn.default_opt}} | {{cn.description}}    |
| :----------- | :---------- | :----------------- | :-------------------- |
| has-checkbox | Boolean     | false              | {{cn.props_has_checkbox_desc}} |

## checked-return-type

| {{cn.name}}         | {{cn.type}} | {{cn.default_opt}} | {{cn.values}} | {{cn.description}}             |
| :------------------ | :---------- | :----------------- | :------------ | :----------------------------- |
| checked-return-type | String      | "key"              | key/row       | {{cn.props_checked_return_type_desc}} |

## is-loading

| {{cn.name}} | {{cn.type}} | {{cn.default_opt}} | {{cn.description}}                                 |
| :---------- | :---------- | :----------------- | :------------------------------------------------- |
| is-loading  | Boolean     | false              | {{cn.props_is_loading_desc}} |

## is-re-search

| {{cn.name}}  | {{cn.type}} | {{cn.default_opt}} | {{cn.description}}                                           |
| :----------- | :---------- | :----------------- | :----------------------------------------------------------- |
| is-re-search | Boolean     | false              | {{cn.props_is_re_search_desc}} |

## is-fixed-first-column

| {{cn.name}}           | {{cn.type}} | {{cn.default_opt}} | {{cn.description}}              |
| :-------------------- | :---------- | :----------------- | :------------------------------ |
| is-fixed-first-column | Boolean     | false              | {{cn.props_is_fixed_first_column_desc}} |

## max-height

| {{cn.name}} | {{cn.type}} | {{cn.default_opt}} | {{cn.description}}  |
| :---------- | :---------- | :----------------- | :------------------ |
| max-height  | String      | "auto"             | {{cn.props_max_height_desc}}. |

## columns <Badge type="danger" >{{cn.required}}</Badge>

| {{cn.name}} | {{cn.type}} | {{cn.default_opt}} | {{cn.description}} |
| :---------- | :---------- | :----------------- | :----------------- |
| columns     | Array       | null               | The columns        |

::: details More Options
Some more options related to columns.
| {{cn.name}} | {{cn.type}} | {{cn.default_opt}} | {{cn.description}} |
| :------- | :------ | :------ | :--------------------------- |
| isKey | Boolean | false | {{cn.props_columns_isKey_desc}} |
| label | String | null | {{cn.props_columns_label_desc}} |
| field | String | null | {{cn.props_columns_field_desc}} |
| width | String | null | {{cn.props_columns_width_desc}} |
| sortable | Boolean | false | {{cn.props_columns_sortable_desc}} |
| display | Function| null | {{cn.props_columns_display_desc}} |
| headerClasses | Array | null | {{cn.props_columns_headerClasses_desc}} |
| columnClasses | Array | null | {{cn.props_columns_columnClasses_desc}} |
| headerStyles | Object | null | {{cn.props_columns_headerStyles_desc}} |
| columnStyles | Object | null | {{cn.props_columns_columnStyles_desc}} |
:::

## rows <Badge type="danger" >{{cn.required}}</Badge>

| {{cn.name}} | {{cn.type}} | {{cn.default_opt}} | {{cn.description}} |
| :---------- | :---------- | :----------------- | :----------------- |
| rows        | Array       | null               | {{cn.props_rows_desc}}            |

## rowClasses

| {{cn.name}} | {{cn.type}}    | {{cn.default_opt}} | {{cn.description}}    |
| :---------- | :------------- | :----------------- | :-------------------- |
| rowClasses  | Array/Function | null               | `<tr/>` {{cn.props_rowClasses_desc}} |

## total <Badge type="danger" >{{cn.required}}</Badge>

| {{cn.name}} | {{cn.type}} | {{cn.default_opt}} | {{cn.description}} |
| :---------- | :---------- | :----------------- | :----------------- |
| total       | Number      | null               | {{cn.props_total_desc}}      |

## sortable <Badge type="danger" >{{cn.required}}</Badge>

| {{cn.name}} | {{cn.description}} | <Badge type="danger" >{{cn.required}}</Badge> | {{cn.type}} |
| ----------- | ------------------ | --------------------------------------------- | ----------- |
| order       |  {{cn.props_sortable_order_desc}}          | Yes                                           | string      |

::: details More Options
Some more options related to sortable.

| {{cn.name}} | {{cn.description}} | <Badge type="danger" >{{cn.required}}</Badge> | {{cn.type}} |
| ----------- | ------------------ | --------------------------------------------- | ----------- |
| order       |  {{cn.props_sortable_order_desc}}          | Yes                                           | string      |
| sort        |  {{cn.props_sortable_sort_desc}}    | Yes                                           | string      |

:::

## messages

| {{cn.name}} | {{cn.description}} | {{cn.required}} | {{cn.type}} |
| ----------- | ------------------ | --------------- | ----------- |
| messages    |  {{cn.props_messages_desc}}  | No              | Object      |

::: details More Options
Some more options related to messages.
| {{cn.name}} | {{cn.description}} | {{cn.required}} | {{cn.type}} | {{cn.default_opt}} |
|--------------------|---------------------|----------|--------|--------------------------|
| pagingInfo |  {{cn.props_messages_desc}} | No | string | "Showing {0}-{1} of {2}" |
| pageSizeChangeLabel|  {{cn.props_messages_desc}} | No | string | "Row count:" |
| gotoPageLabel |  {{cn.props_messages_desc}} | No | string | "Go to page:" |
| noDataAvailable |  {{cn.props_messages_desc}} | No | string | "No data" |
:::

## is-hide-paging

| {{cn.name}}    | {{cn.description}}                   | {{cn.required}} | {{cn.type}} | {{cn.default_opt}} |
| -------------- | ------------------------------------ | --------------- | ----------- | ------------------ |
| is-hide-paging | {{cn.props_is_hide_paging_desc}} | No              | Boolean     | false              |

## page

| {{cn.name}} | {{cn.description}}                                                                   | {{cn.required}} | {{cn.type}} | {{cn.default_opt}} |
| ----------- | ------------------------------------------------------------------------------------ | --------------- | ----------- | ------------------ |
| page        | {{cn.props_page_desc}} the page number yourself, use this to change the page number. | No              | Number      | 1                  |

## page-size

| {{cn.name}} | {{cn.description}}                                                                                       | {{cn.required}} | {{cn.type}} | {{cn.default_opt}} |
| ----------- | -------------------------------------------------------------------------------------------------------- | --------------- | ----------- | ------------------ |
| page-size   | {{cn.default_opt}} {{cn.props_page_size_desc}} | No              | Number      | 10                 |

## pageOptions

| {{cn.name}} | {{cn.description}}             | {{cn.required}} | {{cn.type}} | {{cn.default_opt}}                                                              |
| ----------- | ------------------------------ | --------------- | ----------- | ------------------------------------------------------------------------------- |
| pageOptions | {{cn.props_page_options_desc}} | No              | Array       | `[ { value: 10, text: 10 }, { value: 25, text: 25 }, { value: 50, text: 50 } ]` |

::: details More Options
Some more options related to pageOptions.
| Field | {{cn.required}} | {{cn.type}} |
|-------|----------|--------------|
| value | Yes | Number |
| text | Yes | Number \| string |

:::

## grouping-key

| {{cn.name}}  | {{cn.description}}                                                        | {{cn.required}} | {{cn.type}} | {{cn.default_opt}} |
| ------------ | ------------------------------------------------------------------------- | --------------- | ----------- | ------------------ |
| grouping-key | {{cn.props_grouping_key_desc}} | No              | string      | null               |

## has-group-toggle

| {{cn.name}}      | {{cn.description}}                                  | {{cn.required}} | {{cn.type}} | {{cn.default_opt}} |
| ---------------- | --------------------------------------------------- | --------------- | ----------- | ------------------ |
| has-group-toggle | {{cn.props_has_group_toggle_desc}} | No              | Boolean     | false              |

## grouping-display

| {{cn.name}}      | {{cn.description}}                                                 | {{cn.required}} | {{cn.type}} | {{cn.default_opt}} |
| ---------------- | ------------------------------------------------------------------ | --------------- | ----------- | ------------------ |
| grouping-display | {{cn.props_grouping_display_desc}} | No              | Function    | null               |

## start-collapsed

| {{cn.name}}     | {{cn.description}}                            | {{cn.required}} | {{cn.type}} | {{cn.default_opt}} |
| --------------- | --------------------------------------------- | --------------- | ----------- | ------------------ |
| start-collapsed | {{cn.props_start_collapsed_desc}} | No              | Boolean     | false              |

## is-keep-collapsed

| {{cn.name}}       | {{cn.description}}                  | {{cn.required}} | {{cn.type}} | {{cn.default_opt}} |
| ----------------- | ----------------------------------- | --------------- | ----------- | ------------------ |
| is-keep-collapsed | {{cn.props_is_keep_collapsed_desc}} | No              | Boolean     | false              |
