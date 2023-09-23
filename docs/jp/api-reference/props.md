<script setup>
import * as jp from "/locales/jp.json";
</script>

# {{jp.props}}

## title

| {{jp.name}} | {{jp.type}} | {{jp.default_opt}} | {{jp.description}} |
| :---------- | :---------- | :----------------- | :----------------- |
| title       | String      | ""                 |  {{jp.props_table_title_desc}}        |

## is-slot-mode

| {{jp.name}}  | {{jp.type}} | {{jp.default_opt}} | {{jp.description}}                              |
| :----------- | :---------- | :----------------- | :---------------------------------------------- |
| is-slot-mode | Boolean     | false              |  {{jp.props_is_slot_mode_desc}} |

## is-static-mode

| {{jp.name}}    | {{jp.type}} | {{jp.default_opt}} | {{jp.description}}                                           |
| :------------- | :---------- | :----------------- | :----------------------------------------------------------- |
| is-static-mode | Boolean     | false              | {{jp.props_is_static_mode_desc}} |

## has-checkbox

| {{jp.name}}  | {{jp.type}} | {{jp.default_opt}} | {{jp.description}}    |
| :----------- | :---------- | :----------------- | :-------------------- |
| has-checkbox | Boolean     | false              | {{jp.props_has_checkbox_desc}} |

## checked-return-type

| {{jp.name}}         | {{jp.type}} | {{jp.default_opt}} | {{jp.values}} | {{jp.description}}             |
| :------------------ | :---------- | :----------------- | :------------ | :----------------------------- |
| checked-return-type | String      | "key"              | key/row       | {{jp.props_checked_return_type_desc}} |

## is-loading

| {{jp.name}} | {{jp.type}} | {{jp.default_opt}} | {{jp.description}}                                 |
| :---------- | :---------- | :----------------- | :------------------------------------------------- |
| is-loading  | Boolean     | false              | {{jp.props_is_loading_desc}} |

## is-re-search

| {{jp.name}}  | {{jp.type}} | {{jp.default_opt}} | {{jp.description}}                                           |
| :----------- | :---------- | :----------------- | :----------------------------------------------------------- |
| is-re-search | Boolean     | false              | {{jp.props_is_re_search_desc}} |

## is-fixed-first-column

| {{jp.name}}           | {{jp.type}} | {{jp.default_opt}} | {{jp.description}}              |
| :-------------------- | :---------- | :----------------- | :------------------------------ |
| is-fixed-first-column | Boolean     | false              | {{jp.props_is_fixed_first_column_desc}} |

## max-height

| {{jp.name}} | {{jp.type}} | {{jp.default_opt}} | {{jp.description}}  |
| :---------- | :---------- | :----------------- | :------------------ |
| max-height  | String      | "auto"             | {{jp.props_max_height_desc}}. |

## columns <Badge type="danger" >{{jp.required}}</Badge>

| {{jp.name}} | {{jp.type}} | {{jp.default_opt}} | {{jp.description}} |
| :---------- | :---------- | :----------------- | :----------------- |
| columns     | Array       | null               | The columns        |

::: details More Options
Some more options related to columns.
| {{jp.name}} | {{jp.type}} | {{jp.default_opt}} | {{jp.description}} |
| :------- | :------ | :------ | :--------------------------- |
| isKey | Boolean | false | {{jp.props_columns_isKey_desc}} |
| label | String | null | {{jp.props_columns_label_desc}} |
| field | String | null | {{jp.props_columns_field_desc}} |
| width | String | null | {{jp.props_columns_width_desc}} |
| sortable | Boolean | false | {{jp.props_columns_sortable_desc}} |
| display | Function| null | {{jp.props_columns_display_desc}} |
| headerClasses | Array | null | {{jp.props_columns_headerClasses_desc}} |
| columnClasses | Array | null | {{jp.props_columns_columnClasses_desc}} |
| headerStyles | Object | null | {{jp.props_columns_headerStyles_desc}} |
| columnStyles | Object | null | {{jp.props_columns_columnStyles_desc}} |
:::

## rows <Badge type="danger" >{{jp.required}}</Badge>

| {{jp.name}} | {{jp.type}} | {{jp.default_opt}} | {{jp.description}} |
| :---------- | :---------- | :----------------- | :----------------- |
| rows        | Array       | null               | {{jp.props_rows_desc}}            |

## rowClasses

| {{jp.name}} | {{jp.type}}    | {{jp.default_opt}} | {{jp.description}}    |
| :---------- | :------------- | :----------------- | :-------------------- |
| rowClasses  | Array/Function | null               | `<tr/>` {{jp.props_rowClasses_desc}} |

## total <Badge type="danger" >{{jp.required}}</Badge>

| {{jp.name}} | {{jp.type}} | {{jp.default_opt}} | {{jp.description}} |
| :---------- | :---------- | :----------------- | :----------------- |
| total       | Number      | null               | {{jp.props_total_desc}}      |

## sortable <Badge type="danger" >{{jp.required}}</Badge>

| {{jp.name}} | {{jp.description}} | <Badge type="danger" >{{jp.required}}</Badge> | {{jp.type}} |
| ----------- | ------------------ | --------------------------------------------- | ----------- |
| order       |  {{jp.props_sortable_order_desc}}          | Yes                                           | string      |

::: details More Options
Some more options related to sortable.

| {{jp.name}} | {{jp.description}} | <Badge type="danger" >{{jp.required}}</Badge> | {{jp.type}} |
| ----------- | ------------------ | --------------------------------------------- | ----------- |
| order       |  {{jp.props_sortable_order_desc}}          | Yes                                           | string      |
| sort        |  {{jp.props_sortable_sort_desc}}    | Yes                                           | string      |

:::

## messages

| {{jp.name}} | {{jp.description}} | {{jp.required}} | {{jp.type}} |
| ----------- | ------------------ | --------------- | ----------- |
| messages    |  {{jp.props_messages_desc}}  | No              | Object      |

::: details More Options
Some more options related to messages.
| {{jp.name}} | {{jp.description}} | {{jp.required}} | {{jp.type}} | {{jp.default_opt}} |
|--------------------|---------------------|----------|--------|--------------------------|
| pagingInfo |  {{jp.props_messages_desc}} | No | string | "Showing {0}-{1} of {2}" |
| pageSizeChangeLabel|  {{jp.props_messages_desc}} | No | string | "Row count:" |
| gotoPageLabel |  {{jp.props_messages_desc}} | No | string | "Go to page:" |
| noDataAvailable |  {{jp.props_messages_desc}} | No | string | "No data" |
:::

## is-hide-paging

| {{jp.name}}    | {{jp.description}}                   | {{jp.required}} | {{jp.type}} | {{jp.default_opt}} |
| -------------- | ------------------------------------ | --------------- | ----------- | ------------------ |
| is-hide-paging | {{jp.props_is_hide_paging_desc}} | No              | Boolean     | false              |

## page

| {{jp.name}} | {{jp.description}}                                                                   | {{jp.required}} | {{jp.type}} | {{jp.default_opt}} |
| ----------- | ------------------------------------------------------------------------------------ | --------------- | ----------- | ------------------ |
| page        | {{jp.props_page_desc}} the page number yourself, use this to change the page number. | No              | Number      | 1                  |

## page-size

| {{jp.name}} | {{jp.description}}                                                                                       | {{jp.required}} | {{jp.type}} | {{jp.default_opt}} |
| ----------- | -------------------------------------------------------------------------------------------------------- | --------------- | ----------- | ------------------ |
| page-size   | {{jp.default_opt}} {{jp.props_page_size_desc}} | No              | Number      | 10                 |

## pageOptions

| {{jp.name}} | {{jp.description}}             | {{jp.required}} | {{jp.type}} | {{jp.default_opt}}                                                              |
| ----------- | ------------------------------ | --------------- | ----------- | ------------------------------------------------------------------------------- |
| pageOptions | {{jp.props_page_options_desc}} | No              | Array       | `[ { value: 10, text: 10 }, { value: 25, text: 25 }, { value: 50, text: 50 } ]` |

::: details More Options
Some more options related to pageOptions.
| Field | {{jp.required}} | {{jp.type}} |
|-------|----------|--------------|
| value | Yes | Number |
| text | Yes | Number \| string |

:::

## grouping-key

| {{jp.name}}  | {{jp.description}}                                                        | {{jp.required}} | {{jp.type}} | {{jp.default_opt}} |
| ------------ | ------------------------------------------------------------------------- | --------------- | ----------- | ------------------ |
| grouping-key | {{jp.props_grouping_key_desc}} | No              | string      | null               |

## has-group-toggle

| {{jp.name}}      | {{jp.description}}                                  | {{jp.required}} | {{jp.type}} | {{jp.default_opt}} |
| ---------------- | --------------------------------------------------- | --------------- | ----------- | ------------------ |
| has-group-toggle | {{jp.props_has_group_toggle_desc}} | No              | Boolean     | false              |

## grouping-display

| {{jp.name}}      | {{jp.description}}                                                 | {{jp.required}} | {{jp.type}} | {{jp.default_opt}} |
| ---------------- | ------------------------------------------------------------------ | --------------- | ----------- | ------------------ |
| grouping-display | {{jp.props_grouping_display_desc}} | No              | Function    | null               |

## start-collapsed

| {{jp.name}}     | {{jp.description}}                            | {{jp.required}} | {{jp.type}} | {{jp.default_opt}} |
| --------------- | --------------------------------------------- | --------------- | ----------- | ------------------ |
| start-collapsed | {{jp.props_start_collapsed_desc}} | No              | Boolean     | false              |

## is-keep-collapsed

| {{jp.name}}       | {{jp.description}}                  | {{jp.required}} | {{jp.type}} | {{jp.default_opt}} |
| ----------------- | ----------------------------------- | --------------- | ----------- | ------------------ |
| is-keep-collapsed | {{jp.props_is_keep_collapsed_desc}} | No              | Boolean     | false              |
