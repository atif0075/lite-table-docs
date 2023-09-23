<script setup>
import  {jp} from "/locales/jp.js";
</script>

# {{ jp.events }}

## do-search <Badge type="danger" >{{jp.required}}</Badge>

| {{jp.name}} | {{jp.description}}           | {{jp.hint}}                                                            | {{jp.type}}                            |
| ----------- | ---------------------------- | ---------------------------------------------------------------------- | -------------------------------------- |
| do-search   | {{jp.events_do_search_desc}} | {{jp.events_do_search_hint}}efault mode, and in static mode, it's not. | `(offset, limit, order, sort) => void` |

::: details Arguments <Badge type="danger"  >All {{jp.required}}</Badge>
| Name | {{jp.description}} | {{jp.type}} |
|--------|------------------------------|--------|
| offset | {{jp.events_do_search_offset_desc}} | Number |
| limit | {{jp.events_do_search_limit_desc}} | Number |
| order | {{jp.events_do_search_order_desc}} | string |
| sort| {{jp.events_do_search_order_desc}} |string|
:::

## is-finished

| Name        | {{jp.description}}             | {{jp.type}}        |
| ----------- | ------------------------------ | ------------------ |
| is-finished | {{jp.events_is_finished_desc}} | (elements) => void |

::: details Argument
| Name | {{jp.description}} | {{jp.type}} |
|--------|------------------------------|--------|
| elements | {{jp.events_is_finished_elements_desc}} | Array |
:::

## return-checked-rows

| Name                | {{jp.description}}                     | {{jp.type}}       |
| ------------------- | -------------------------------------- | ----------------- |
| return-checked-rows | {{jp.events_return_checked_rows_desc}} | (rowsKey) => void |

::: details Argument
| Name | {{jp.description}} | {{jp.type}} |
|--------|------------------------------|--------|
| elements | {{jp.events_is_finished_elements_desc}} | Number |
:::

## get-now-page

| Name         | {{jp.description}}              | {{jp.type}}      |
| ------------ | ------------------------------- | ---------------- |
| get-now-page | {{jp.events_get_now_page_desc}} | (pageNo) => void |

::: details Argument
| Name | {{jp.description}} | {{jp.type}} |
|--------|------------------------------|--------|
| pageNo | {{jp.events_get_now_page_pageNo_desc}} | Number |
:::

## row-clicked

| Name        | {{jp.description}}             | {{jp.type}}       |
| ----------- | ------------------------------ | ----------------- |
| row-clicked | {{jp.events_row_clicked_desc}} | (rowData) => void |

::: details Argument
| Name | {{jp.description}} | {{jp.type}} |
|--------|------------------------------|--------|
| rowData | {{jp.events_row_clicked_rowData_desc}}| Object |
:::

## row-toggled

| Name        | {{jp.description}}             | {{jp.type}}                 |
| ----------- | ------------------------------ | --------------------------- |
| row-toggled | {{jp.events_row_toggled_desc}} | (rows, isCollapsed) => void |

::: details Arguments
| Name | {{jp.description}} | {{jp.type}} |
|--------|------------------------------|--------|
| row | {{jp.events_row_clicked_rowData_desc}}| Array |
| isCollapsed | {{jp.events_row_toggled_is_collapsed_desc}}| Boolean |
:::
