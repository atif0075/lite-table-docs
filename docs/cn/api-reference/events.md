<script setup>
import * as cn from "/locales/cn.json";
</script>

# {{ cn.events }}

## do-search <Badge type="danger" >{{cn.required}}</Badge>

| {{cn.name}} | {{cn.description}}           | {{cn.hint}}                                                            | {{cn.type}}                            |
| ----------- | ---------------------------- | ---------------------------------------------------------------------- | -------------------------------------- |
| do-search   | {{cn.events_do_search_desc}} | {{cn.events_do_search_hint}}efault mode, and in static mode, it's not. | `(offset, limit, order, sort) => void` |

::: details Arguments <Badge type="danger"  >All {{cn.required}}</Badge>
| Name | {{cn.description}} | {{cn.type}} |
|--------|------------------------------|--------|
| offset | {{cn.events_do_search_offset_desc}} | Number |
| limit | {{cn.events_do_search_limit_desc}} | Number |
| order | {{cn.events_do_search_order_desc}} | string |
| sort| {{cn.events_do_search_order_desc}} |string|
:::

## is-finished

| Name        | {{cn.description}}             | {{cn.type}}        |
| ----------- | ------------------------------ | ------------------ |
| is-finished | {{cn.events_is_finished_desc}} | (elements) => void |

::: details Argument
| Name | {{cn.description}} | {{cn.type}} |
|--------|------------------------------|--------|
| elements | {{cn.events_is_finished_elements_desc}} | Array |
:::

## return-checked-rows

| Name                | {{cn.description}}                     | {{cn.type}}       |
| ------------------- | -------------------------------------- | ----------------- |
| return-checked-rows | {{cn.events_return_checked_rows_desc}} | (rowsKey) => void |

::: details Argument
| Name | {{cn.description}} | {{cn.type}} |
|--------|------------------------------|--------|
| elements | {{cn.events_is_finished_elements_desc}} | Number |
:::

## get-now-page

| Name         | {{cn.description}}              | {{cn.type}}      |
| ------------ | ------------------------------- | ---------------- |
| get-now-page | {{cn.events_get_now_page_desc}} | (pageNo) => void |

::: details Argument
| Name | {{cn.description}} | {{cn.type}} |
|--------|------------------------------|--------|
| pageNo | {{cn.events_get_now_page_pageNo_desc}} | Number |
:::

## row-clicked

| Name        | {{cn.description}}             | {{cn.type}}       |
| ----------- | ------------------------------ | ----------------- |
| row-clicked | {{cn.events_row_clicked_desc}} | (rowData) => void |

::: details Argument
| Name | {{cn.description}} | {{cn.type}} |
|--------|------------------------------|--------|
| rowData | {{cn.events_row_clicked_rowData_desc}}| Object |
:::

## row-toggled

| Name        | {{cn.description}}             | {{cn.type}}                 |
| ----------- | ------------------------------ | --------------------------- |
| row-toggled | {{cn.events_row_toggled_desc}} | (rows, isCollapsed) => void |

::: details Arguments
| Name | {{cn.description}} | {{cn.type}} |
|--------|------------------------------|--------|
| row | {{cn.events_row_clicked_rowData_desc}}| Array |
| isCollapsed | {{cn.events_row_toggled_is_collapsed_desc}}| Boolean |
:::
