<script setup>
import {tw} from "/locales/tw.js";
</script>

# {{tw.props}}

## title

| {{tw.name}} | {{tw.type}} | {{tw.default_opt}} | {{tw.description}} |
| :---------- | :---------- | :----------------- | :----------------- |
| title       | String      | ""                 |  {{tw.props_table_title_desc}}        |

## is-slot-mode

| {{tw.name}}  | {{tw.type}} | {{tw.default_opt}} | {{tw.description}}                              |
| :----------- | :---------- | :----------------- | :---------------------------------------------- |
| is-slot-mode | Boolean     | false              |  {{tw.props_is_slot_mode_desc}} |

## is-static-mode

| {{tw.name}}    | {{tw.type}} | {{tw.default_opt}} | {{tw.description}}                                           |
| :------------- | :---------- | :----------------- | :----------------------------------------------------------- |
| is-static-mode | Boolean     | false              | {{tw.props_is_static_mode_desc}} |

## has-checkbox

| {{tw.name}}  | {{tw.type}} | {{tw.default_opt}} | {{tw.description}}    |
| :----------- | :---------- | :----------------- | :-------------------- |
| has-checkbox | Boolean     | false              | {{tw.props_has_checkbox_desc}} |

## checked-return-type

| {{tw.name}}         | {{tw.type}} | {{tw.default_opt}} | {{tw.values}} | {{tw.description}}             |
| :------------------ | :---------- | :----------------- | :------------ | :----------------------------- |
| checked-return-type | String      | "key"              | key/row       | {{tw.props_checked_return_type_desc}} |

## is-loading

| {{tw.name}} | {{tw.type}} | {{tw.default_opt}} | {{tw.description}}                                 |
| :---------- | :---------- | :----------------- | :------------------------------------------------- |
| is-loading  | Boolean     | false              | {{tw.props_is_loading_desc}} |

## is-re-search

| {{tw.name}}  | {{tw.type}} | {{tw.default_opt}} | {{tw.description}}                                           |
| :----------- | :---------- | :----------------- | :----------------------------------------------------------- |
| is-re-search | Boolean     | false              | {{tw.props_is_re_search_desc}} |

## is-fixed-first-column

| {{tw.name}}           | {{tw.type}} | {{tw.default_opt}} | {{tw.description}}              |
| :-------------------- | :---------- | :----------------- | :------------------------------ |
| is-fixed-first-column | Boolean     | false              | {{tw.props_is_fixed_first_column_desc}} |

## max-height

| {{tw.name}} | {{tw.type}} | {{tw.default_opt}} | {{tw.description}}  |
| :---------- | :---------- | :----------------- | :------------------ |
| max-height  | String      | "auto"             | {{tw.props_max_height_desc}}. |

## columns <Badge type="danger" >{{tw.required}}</Badge>

| {{tw.name}} | {{tw.type}} | {{tw.default_opt}} | {{tw.description}} |
| :---------- | :---------- | :----------------- | :----------------- |
| columns     | Array       | null               | The columns        |

::: details More Options
Some more options related to columns.
| {{tw.name}} | {{tw.type}} | {{tw.default_opt}} | {{tw.description}} |
| :------- | :------ | :------ | :--------------------------- |
| isKey | Boolean | false | {{tw.props_columns_isKey_desc}} |
| label | String | null | {{tw.props_columns_label_desc}} |
| field | String | null | {{tw.props_columns_field_desc}} |
| width | String | null | {{tw.props_columns_width_desc}} |
| sortable | Boolean | false | {{tw.props_columns_sortable_desc}} |
| display | Function| null | {{tw.props_columns_display_desc}} |
| headerClasses | Array | null | {{tw.props_columns_headerClasses_desc}} |
| columnClasses | Array | null | {{tw.props_columns_columnClasses_desc}} |
| headerStyles | Object | null | {{tw.props_columns_headerStyles_desc}} |
| columnStyles | Object | null | {{tw.props_columns_columnStyles_desc}} |
:::

## rows <Badge type="danger" >{{tw.required}}</Badge>

| {{tw.name}} | {{tw.type}} | {{tw.default_opt}} | {{tw.description}} |
| :---------- | :---------- | :----------------- | :----------------- |
| rows        | Array       | null               | {{tw.props_rows_desc}}            |

## rowClasses

| {{tw.name}} | {{tw.type}}    | {{tw.default_opt}} | {{tw.description}}    |
| :---------- | :------------- | :----------------- | :-------------------- |
| rowClasses  | Array/Function | null               | `<tr/>` {{tw.props_rowClasses_desc}} |

## total <Badge type="danger" >{{tw.required}}</Badge>

| {{tw.name}} | {{tw.type}} | {{tw.default_opt}} | {{tw.description}} |
| :---------- | :---------- | :----------------- | :----------------- |
| total       | Number      | null               | {{tw.props_total_desc}}      |

## sortable <Badge type="danger" >{{tw.required}}</Badge>

| {{tw.name}} | {{tw.description}} | <Badge type="danger" >{{tw.required}}</Badge> | {{tw.type}} |
| ----------- | ------------------ | --------------------------------------------- | ----------- |
| order       |  {{tw.props_sortable_order_desc}}          | Yes                                           | string      |

::: details More Options
Some more options related to sortable.

| {{tw.name}} | {{tw.description}} | <Badge type="danger" >{{tw.required}}</Badge> | {{tw.type}} |
| ----------- | ------------------ | --------------------------------------------- | ----------- |
| order       |  {{tw.props_sortable_order_desc}}          | Yes                                           | string      |
| sort        |  {{tw.props_sortable_sort_desc}}    | Yes                                           | string      |

:::

## messages

| {{tw.name}} | {{tw.description}} | {{tw.required}} | {{tw.type}} |
| ----------- | ------------------ | --------------- | ----------- |
| messages    |  {{tw.props_messages_desc}}  | No              | Object      |

::: details More Options
Some more options related to messages.
| {{tw.name}} | {{tw.description}} | {{tw.required}} | {{tw.type}} | {{tw.default_opt}} |
|--------------------|---------------------|----------|--------|--------------------------|
| pagingInfo |  {{tw.props_messages_desc}} | No | string | "Showing {0}-{1} of {2}" |
| pageSizeChangeLabel|  {{tw.props_messages_desc}} | No | string | "Row count:" |
| gotoPageLabel |  {{tw.props_messages_desc}} | No | string | "Go to page:" |
| noDataAvailable |  {{tw.props_messages_desc}} | No | string | "No data" |
:::

## is-hide-paging

| {{tw.name}}    | {{tw.description}}                   | {{tw.required}} | {{tw.type}} | {{tw.default_opt}} |
| -------------- | ------------------------------------ | --------------- | ----------- | ------------------ |
| is-hide-paging | {{tw.props_is_hide_paging_desc}} | No              | Boolean     | false              |

## page

| {{tw.name}} | {{tw.description}}                                                                   | {{tw.required}} | {{tw.type}} | {{tw.default_opt}} |
| ----------- | ------------------------------------------------------------------------------------ | --------------- | ----------- | ------------------ |
| page        | {{tw.props_page_desc}} the page number yourself, use this to change the page number. | No              | Number      | 1                  |

## page-size

| {{tw.name}} | {{tw.description}}                                                                                       | {{tw.required}} | {{tw.type}} | {{tw.default_opt}} |
| ----------- | -------------------------------------------------------------------------------------------------------- | --------------- | ----------- | ------------------ |
| page-size   | {{tw.default_opt}} {{tw.props_page_size_desc}} | No              | Number      | 10                 |

## pageOptions

| {{tw.name}} | {{tw.description}}             | {{tw.required}} | {{tw.type}} | {{tw.default_opt}}                                                              |
| ----------- | ------------------------------ | --------------- | ----------- | ------------------------------------------------------------------------------- |
| pageOptions | {{tw.props_page_options_desc}} | No              | Array       | `[ { value: 10, text: 10 }, { value: 25, text: 25 }, { value: 50, text: 50 } ]` |

::: details More Options
Some more options related to pageOptions.
| Field | {{tw.required}} | {{tw.type}} |
|-------|----------|--------------|
| value | Yes | Number |
| text | Yes | Number \| string |

:::

## grouping-key

| {{tw.name}}  | {{tw.description}}                                                        | {{tw.required}} | {{tw.type}} | {{tw.default_opt}} |
| ------------ | ------------------------------------------------------------------------- | --------------- | ----------- | ------------------ |
| grouping-key | {{tw.props_grouping_key_desc}} | No              | string      | null               |

## has-group-toggle

| {{tw.name}}      | {{tw.description}}                                  | {{tw.required}} | {{tw.type}} | {{tw.default_opt}} |
| ---------------- | --------------------------------------------------- | --------------- | ----------- | ------------------ |
| has-group-toggle | {{tw.props_has_group_toggle_desc}} | No              | Boolean     | false              |

## grouping-display

| {{tw.name}}      | {{tw.description}}                                                 | {{tw.required}} | {{tw.type}} | {{tw.default_opt}} |
| ---------------- | ------------------------------------------------------------------ | --------------- | ----------- | ------------------ |
| grouping-display | {{tw.props_grouping_display_desc}} | No              | Function    | null               |

## start-collapsed

| {{tw.name}}     | {{tw.description}}                            | {{tw.required}} | {{tw.type}} | {{tw.default_opt}} |
| --------------- | --------------------------------------------- | --------------- | ----------- | ------------------ |
| start-collapsed | {{tw.props_start_collapsed_desc}} | No              | Boolean     | false              |

## is-keep-collapsed

| {{tw.name}}       | {{tw.description}}                  | {{tw.required}} | {{tw.type}} | {{tw.default_opt}} |
| ----------------- | ----------------------------------- | --------------- | ----------- | ------------------ |
| is-keep-collapsed | {{tw.props_is_keep_collapsed_desc}} | No              | Boolean     | false              |
