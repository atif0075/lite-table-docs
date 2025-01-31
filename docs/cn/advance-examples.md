<script setup>
import cusDisplayData from "../code/advance-examples/cus-display-data.vue";
import Filter from "../code/advance-examples/filter.vue";
import asyncFilter from "../code/advance-examples/async-filter.vue";
import catchRow  from "../code/advance-examples/catch-row.vue"
import filterInTable from "../code/advance-examples/filter-in-table.vue"
import fixedFirstColumn from "../code/advance-examples/fixed-first-column.vue"
import fixedHeaderAndFirstColumn from "../code/advance-examples/fixed-header-and-first-column.vue"
// import showControls from "../code/advance-examples/show-controls.vue"
import groupingWithToggle from "../code/advance-examples/grouping.vue"
import grouping from "../code/advance-examples/grouping2.vue"
import customizeStyle from "../code/advance-examples/custom-style.vue"
import customizeStyle2 from "../code/advance-examples/custom-style-2.vue"
import customizeMessages from "../code/advance-examples/cus-message.vue"
import customizePageDropdown from "../code/advance-examples/cus-page-drop.vue"
import skeletonScreen from "../code/advance-examples/skeleton-screen.vue"
</script>

# 先進的な事例

次の例はより高度で、より複雑な使用例の参考として使用することを目的としています。

## 分组

<grouping/>

## 分组（带切换）

<groupingWithToggle/>

## 自定义显示数据

<cusDisplayData />

## 过滤

<Filter />

## 异步过滤

<asyncFilter />

## 列过滤

<filterInTable />

## 自定义样式

<customizeStyle/>

## 自定义样式（2）

<customizeStyle2/>

## 自定义消息

<customizeMessages/>

## 自定义页面下拉菜单

<customizePageDropdown/>

## 捕捉行点击事件

<catchRow/>

## 固定第一列（水平滚动）

<fixedFirstColumn/>

## 固定表头和第一列（滚动）

<fixedHeaderAndFirstColumn/>

## 骨架屏

<skeletonScreen/>

<style>
.vtl-thead-th input{
    background-color: #fff;
}
.vtl tr:nth-child(2n) {
    background-color: white;
}
.vtl-tbody-checkbox {
    color-scheme: auto;
}
.vtl-paging {
    color: black;
}
.vtl-paging-pagination-page-li {
    margin-top: 0px !important;
}
.vtl select {
    -webkit-appearance: auto;
}
</style>
