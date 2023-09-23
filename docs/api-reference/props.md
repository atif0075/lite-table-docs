<script setup>
import {en} from "/locales/en.js";
</script>

# {{en.props}}

## title

| {{en.name}} | {{en.type}} | {{en.default_opt}} | {{en.description}} |
| :---------- | :---------- | :----------------- | :----------------- |
| title       | String      | ""                 |  {{en.props_table_title_desc}}        |

## is-slot-mode

| {{en.name}}  | {{en.type}} | {{en.default_opt}} | {{en.description}}                              |
| :----------- | :---------- | :----------------- | :---------------------------------------------- |
| is-slot-mode | Boolean     | false              |  {{en.props_is_slot_mode_desc}} |

## is-static-mode

| {{en.name}}    | {{en.type}} | {{en.default_opt}} | {{en.description}}                                           |
| :------------- | :---------- | :----------------- | :----------------------------------------------------------- |
| is-static-mode | Boolean     | false              | {{en.props_is_static_mode_desc}} |

## has-checkbox

| {{en.name}}  | {{en.type}} | {{en.default_opt}} | {{en.description}}    |
| :----------- | :---------- | :----------------- | :-------------------- |
| has-checkbox | Boolean     | false              | {{en.props_has_checkbox_desc}} |

## checked-return-type

| {{en.name}}         | {{en.type}} | {{en.default_opt}} | {{en.values}} | {{en.description}}             |
| :------------------ | :---------- | :----------------- | :------------ | :----------------------------- |
| checked-return-type | String      | "key"              | key/row       | {{en.props_checked_return_type_desc}} |

## is-loading

| {{en.name}} | {{en.type}} | {{en.default_opt}} | {{en.description}}                                 |
| :---------- | :---------- | :----------------- | :------------------------------------------------- |
| is-loading  | Boolean     | false              | {{en.props_is_loading_desc}} |

## is-re-search

| {{en.name}}  | {{en.type}} | {{en.default_opt}} | {{en.description}}                                           |
| :----------- | :---------- | :----------------- | :----------------------------------------------------------- |
| is-re-search | Boolean     | false              | {{en.props_is_re_search_desc}} |

## is-fixed-first-column

| {{en.name}}           | {{en.type}} | {{en.default_opt}} | {{en.description}}              |
| :-------------------- | :---------- | :----------------- | :------------------------------ |
| is-fixed-first-column | Boolean     | false              | {{en.props_is_fixed_first_column_desc}} |

## max-height

| {{en.name}} | {{en.type}} | {{en.default_opt}} | {{en.description}}  |
| :---------- | :---------- | :----------------- | :------------------ |
| max-height  | String      | "auto"             | {{en.props_max_height_desc}}. |

## columns <Badge type="danger" >{{en.required}}</Badge>

| {{en.name}} | {{en.type}} | {{en.default_opt}} | {{en.description}} |
| :---------- | :---------- | :----------------- | :----------------- |
| columns     | Array       | null               | The columns        |

::: details More Options
Some more options related to columns.
| {{en.name}} | {{en.type}} | {{en.default_opt}} | {{en.description}} |
| :------- | :------ | :------ | :--------------------------- |
| isKey | Boolean | false | {{en.props_columns_isKey_desc}} |
| label | String | null | {{en.props_columns_label_desc}} |
| field | String | null | {{en.props_columns_field_desc}} |
| width | String | null | {{en.props_columns_width_desc}} |
| sortable | Boolean | false | {{en.props_columns_sortable_desc}} |
| display | Function| null | {{en.props_columns_display_desc}} |
| headerClasses | Array | null | {{en.props_columns_headerClasses_desc}} |
| columnClasses | Array | null | {{en.props_columns_columnClasses_desc}} |
| headerStyles | Object | null | {{en.props_columns_headerStyles_desc}} |
| columnStyles | Object | null | {{en.props_columns_columnStyles_desc}} |
:::

## rows <Badge type="danger" >{{en.required}}</Badge>

| {{en.name}} | {{en.type}} | {{en.default_opt}} | {{en.description}} |
| :---------- | :---------- | :----------------- | :----------------- |
| rows        | Array       | null               | {{en.props_rows_desc}}            |

## rowClasses

| {{en.name}} | {{en.type}}    | {{en.default_opt}} | {{en.description}}    |
| :---------- | :------------- | :----------------- | :-------------------- |
| rowClasses  | Array/Function | null               | `<tr/>` {{en.props_rowClasses_desc}} |

## total <Badge type="danger" >{{en.required}}</Badge>

| {{en.name}} | {{en.type}} | {{en.default_opt}} | {{en.description}} |
| :---------- | :---------- | :----------------- | :----------------- |
| total       | Number      | null               | {{en.props_total_desc}}      |

## sortable <Badge type="danger" >{{en.required}}</Badge>

| {{en.name}} | {{en.description}} | <Badge type="danger" >{{en.required}}</Badge> | {{en.type}} |
| ----------- | ------------------ | --------------------------------------------- | ----------- |
| order       |  {{en.props_sortable_order_desc}}          | Yes                                           | string      |

::: details More Options
Some more options related to sortable.

| {{en.name}} | {{en.description}} | <Badge type="danger" >{{en.required}}</Badge> | {{en.type}} |
| ----------- | ------------------ | --------------------------------------------- | ----------- |
| order       |  {{en.props_sortable_order_desc}}          | Yes                                           | string      |
| sort        |  {{en.props_sortable_sort_desc}}    | Yes                                           | string      |

:::

## messages

| {{en.name}} | {{en.description}} | {{en.required}} | {{en.type}} |
| ----------- | ------------------ | --------------- | ----------- |
| messages    |  {{en.props_messages_desc}}  | No              | Object      |

::: details More Options
Some more options related to messages.
| {{en.name}} | {{en.description}} | {{en.required}} | {{en.type}} | {{en.default_opt}} |
|--------------------|---------------------|----------|--------|--------------------------|
| pagingInfo |  {{en.props_messages_desc}} | No | string | "Showing {0}-{1} of {2}" |
| pageSizeChangeLabel|  {{en.props_messages_desc}} | No | string | "Row count:" |
| gotoPageLabel |  {{en.props_messages_desc}} | No | string | "Go to page:" |
| noDataAvailable |  {{en.props_messages_desc}} | No | string | "No data" |
:::

## is-hide-paging

| {{en.name}}    | {{en.description}}                   | {{en.required}} | {{en.type}} | {{en.default_opt}} |
| -------------- | ------------------------------------ | --------------- | ----------- | ------------------ |
| is-hide-paging | {{en.props_is_hide_paging_desc}} | No              | Boolean     | false              |

## page

| {{en.name}} | {{en.description}}                                                                   | {{en.required}} | {{en.type}} | {{en.default_opt}} |
| ----------- | ------------------------------------------------------------------------------------ | --------------- | ----------- | ------------------ |
| page        | {{en.props_page_desc}} the page number yourself, use this to change the page number. | No              | Number      | 1                  |

## page-size

| {{en.name}} | {{en.description}}                                                                                       | {{en.required}} | {{en.type}} | {{en.default_opt}} |
| ----------- | -------------------------------------------------------------------------------------------------------- | --------------- | ----------- | ------------------ |
| page-size   | {{en.default_opt}} {{en.props_page_size_desc}} | No              | Number      | 10                 |

## pageOptions

| {{en.name}} | {{en.description}}             | {{en.required}} | {{en.type}} | {{en.default_opt}}                                                              |
| ----------- | ------------------------------ | --------------- | ----------- | ------------------------------------------------------------------------------- |
| pageOptions | {{en.props_page_options_desc}} | No              | Array       | `[ { value: 10, text: 10 }, { value: 25, text: 25 }, { value: 50, text: 50 } ]` |

::: details More Options
Some more options related to pageOptions.
| Field | {{en.required}} | {{en.type}} |
|-------|----------|--------------|
| value | Yes | Number |
| text | Yes | Number \| string |

:::

## grouping-key

| {{en.name}}  | {{en.description}}                                                        | {{en.required}} | {{en.type}} | {{en.default_opt}} |
| ------------ | ------------------------------------------------------------------------- | --------------- | ----------- | ------------------ |
| grouping-key | {{en.props_grouping_key_desc}} | No              | string      | null               |

## has-group-toggle

| {{en.name}}      | {{en.description}}                                  | {{en.required}} | {{en.type}} | {{en.default_opt}} |
| ---------------- | --------------------------------------------------- | --------------- | ----------- | ------------------ |
| has-group-toggle | {{en.props_has_group_toggle_desc}} | No              | Boolean     | false              |

## grouping-display

| {{en.name}}      | {{en.description}}                                                 | {{en.required}} | {{en.type}} | {{en.default_opt}} |
| ---------------- | ------------------------------------------------------------------ | --------------- | ----------- | ------------------ |
| grouping-display | {{en.props_grouping_display_desc}} | No              | Function    | null               |

## start-collapsed

| {{en.name}}     | {{en.description}}                            | {{en.required}} | {{en.type}} | {{en.default_opt}} |
| --------------- | --------------------------------------------- | --------------- | ----------- | ------------------ |
| start-collapsed | {{en.props_start_collapsed_desc}} | No              | Boolean     | false              |

## is-keep-collapsed

| {{en.name}}       | {{en.description}}                  | {{en.required}} | {{en.type}} | {{en.default_opt}} |
| ----------------- | ----------------------------------- | --------------- | ----------- | ------------------ |
| is-keep-collapsed | {{en.props_is_keep_collapsed_desc}} | No              | Boolean     | false              |
