<script setup>
import {tw} from "/locales/tw.js";
</script>

# {{ tw.events }}

## do-search <Badge type="danger" >{{tw.required}}</Badge>

| {{tw.name}} | {{tw.description}}           | {{tw.hint}}                                                            | {{tw.type}}                            |
| ----------- | ---------------------------- | ---------------------------------------------------------------------- | -------------------------------------- |
| do-search   | {{tw.events_do_search_desc}} | {{tw.events_do_search_hint}}efault mode, and in static mode, it's not. | `(offset, limit, order, sort) => void` |

::: details Arguments <Badge type="danger"  >All {{tw.required}}</Badge>
| Name | {{tw.description}} | {{tw.type}} |
|--------|------------------------------|--------|
| offset | {{tw.events_do_search_offset_desc}} | Number |
| limit | {{tw.events_do_search_limit_desc}} | Number |
| order | {{tw.events_do_search_order_desc}} | string |
| sort| {{tw.events_do_search_order_desc}} |string|
:::

## is-finished

| Name        | {{tw.description}}             | {{tw.type}}        |
| ----------- | ------------------------------ | ------------------ |
| is-finished | {{tw.events_is_finished_desc}} | (elements) => void |

::: details Argument
| Name | {{tw.description}} | {{tw.type}} |
|--------|------------------------------|--------|
| elements | {{tw.events_is_finished_elements_desc}} | Array |
:::

## return-checked-rows

| Name                | {{tw.description}}                     | {{tw.type}}       |
| ------------------- | -------------------------------------- | ----------------- |
| return-checked-rows | {{tw.events_return_checked_rows_desc}} | (rowsKey) => void |

::: details Argument
| Name | {{tw.description}} | {{tw.type}} |
|--------|------------------------------|--------|
| elements | {{tw.events_is_finished_elements_desc}} | Number |
:::

## get-now-page

| Name         | {{tw.description}}              | {{tw.type}}      |
| ------------ | ------------------------------- | ---------------- |
| get-now-page | {{tw.events_get_now_page_desc}} | (pageNo) => void |

::: details Argument
| Name | {{tw.description}} | {{tw.type}} |
|--------|------------------------------|--------|
| pageNo | {{tw.events_get_now_page_pageNo_desc}} | Number |
:::

## row-clicked

| Name        | {{tw.description}}             | {{tw.type}}       |
| ----------- | ------------------------------ | ----------------- |
| row-clicked | {{tw.events_row_clicked_desc}} | (rowData) => void |

::: details Argument
| Name | {{tw.description}} | {{tw.type}} |
|--------|------------------------------|--------|
| rowData | {{tw.events_row_clicked_rowData_desc}}| Object |
:::

## row-toggled

| Name        | {{tw.description}}             | {{tw.type}}                 |
| ----------- | ------------------------------ | --------------------------- |
| row-toggled | {{tw.events_row_toggled_desc}} | (rows, isCollapsed) => void |

::: details Arguments
| Name | {{tw.description}} | {{tw.type}} |
|--------|------------------------------|--------|
| row | {{tw.events_row_clicked_rowData_desc}}| Array |
| isCollapsed | {{tw.events_row_toggled_is_collapsed_desc}}| Boolean |
:::
