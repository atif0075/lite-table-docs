# Events

## do-search <Badge type="danger" >必须</Badge>

| 姓名      | 说明                                                                             | 提示                                                                                            | 类型                                   |
| --------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------- |
| do-search | 查询事件<span class="text-red-500">该事件会在换页或是重新排序时自动触发。</span> | 在一般模式下，一定要记得设定，而在静态模式下为非必须 efault mode, and in static mode, it's not. | `(offset, limit, order, sort) => void` |

::: details Arguments <Badge type="danger"  >All 必须</Badge>
| Name | 说明 | 类型 |
|--------|------------------------------|--------|
| offset | 你要丢给后端用的 Offset 值 | Number |
| limit | 你要丢给后端用的 Limit 值 | Number |
| order | 你要丢给后端用的排序的 Key | string |
| sort| 你要丢给后端用的排序的 Key |string|
:::

## is-finished

| Name        | 说明                           | 类型               |
| ----------- | ------------------------------ | ------------------ |
| is-finished | 在重新渲染完成后将会触发该事件 | (elements) => void |

::: details Argument
| Name | 说明 | 类型 |
|--------|------------------------------|--------|
| elements | 含有「is-rows-el」Class 名称的元素阵列 | Array |
:::

## return-checked-rows

| Name                | 说明                                 | 类型              |
| ------------------- | ------------------------------------ | ----------------- |
| return-checked-rows | 你能透过该事件取得目前被勾选的行數據 | (rowsKey) => void |

::: details Argument
| Name | 说明 | 类型 |
|--------|------------------------------|--------|
| elements | 含有「is-rows-el」Class 名称的元素阵列 | Number |
:::

## get-now-page

| Name         | 说明                           | 类型             |
| ------------ | ------------------------------ | ---------------- |
| get-now-page | 你能够透过该事件取得目前的页数 | (pageNo) => void |

::: details Argument
| Name | 说明 | 类型 |
|--------|------------------------------|--------|
| pageNo | 目前页数 | Number |
:::

## row-clicked

| Name        | 说明                                   | 类型              |
| ----------- | -------------------------------------- | ----------------- |
| row-clicked | 你能够透过该事件取得目前被点击的行數據 | (rowData) => void |

::: details Argument
| Name | 说明 | 类型 |
|--------|------------------------------|--------|
| rowData | 行數據| Object |
:::

## row-toggled

| Name        | 说明                                                   | 类型                        |
| ----------- | ------------------------------------------------------ | --------------------------- |
| row-toggled | 你能够透过该事件取得目前被折叠或开启的行资料与折叠状态 | (rows, isCollapsed) => void |

::: details Arguments
| Name | 说明 | 类型 |
|--------|------------------------------|--------|
| row | 行數據| Array |
| isCollapsed | 是否折疊| Boolean |
:::
