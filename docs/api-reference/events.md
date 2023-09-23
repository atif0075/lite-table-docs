<script setup>
import {en} from "/locales/en.js";
</script>

# {{ en.events }}

## do-search <Badge type="danger" >{{en.required}}</Badge>

| {{en.name}} | {{en.description}}                                                                   | {{en.hint}}                                                  | {{en.type}}                            |
| ----------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------ | -------------------------------------- |
| do-search   | {{en.events_do_search_desc}} | {{en.events_do_search_hint}}efault mode, and in static mode, it's not. | `(offset, limit, order, sort) => void` |

::: details Arguments <Badge type="danger"  >All {{en.required}}</Badge>
| Name | {{en.description}} | {{en.type}} |
|--------|------------------------------|--------|
| offset | {{en.events_do_search_offset_desc}} | Number |
| limit | {{en.events_do_search_limit_desc}} | Number |
| order | {{en.events_do_search_order_desc}} | string |
| sort| {{en.events_do_search_order_desc}} |string|
:::

## is-finished

| Name        | {{en.description}}                                            | {{en.type}}        |
| ----------- | ------------------------------------------------------------- | ------------------ |
| is-finished | {{en.events_is_finished_desc}} | (elements) => void |

::: details Argument
| Name | {{en.description}} | {{en.type}} |
|--------|------------------------------|--------|
| elements | {{en.events_is_finished_elements_desc}} | Array |
:::

## return-checked-rows

| Name                | {{en.description}}                                          | {{en.type}}       |
| ------------------- | ----------------------------------------------------------- | ----------------- |
| return-checked-rows | {{en.events_return_checked_rows_desc}} | (rowsKey) => void |

::: details Argument
| Name | {{en.description}} | {{en.type}} |
|--------|------------------------------|--------|
| elements | {{en.events_is_finished_elements_desc}} | Number |
:::

## get-now-page

| Name         | {{en.description}}                          | {{en.type}}      |
| ------------ | ------------------------------------------- | ---------------- |
| get-now-page | {{en.events_get_now_page_desc}} | (pageNo) => void |

::: details Argument
| Name | {{en.description}} | {{en.type}} |
|--------|------------------------------|--------|
| pageNo | {{en.events_get_now_page_pageNo_desc}} | Number |
:::

## row-clicked

| Name        | {{en.description}}                                         | {{en.type}}       |
| ----------- | ---------------------------------------------------------- | ----------------- |
| row-clicked | {{en.events_row_clicked_desc}} | (rowData) => void |

::: details Argument
| Name | {{en.description}} | {{en.type}} |
|--------|------------------------------|--------|
| rowData | {{en.events_row_clicked_rowData_desc}}| Object |
:::

## row-toggled

| Name        | {{en.description}}                                    | {{en.type}}                 |
| ----------- | ----------------------------------------------------- | --------------------------- |
| row-toggled | {{en.events_row_toggled_desc}} | (rows, isCollapsed) => void |

::: details Arguments
| Name | {{en.description}} | {{en.type}} |
|--------|------------------------------|--------|
| row | {{en.events_row_clicked_rowData_desc}}| Array |
| isCollapsed | {{en.events_row_toggled_is_collapsed_desc}}| Boolean |
:::
