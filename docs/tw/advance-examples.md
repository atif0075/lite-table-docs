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

# 進階範例

這裡介紹了一些較為進階且較複雜的範例。

## 分組

<grouping/>

## 分組（含開閉功能）

<groupingWithToggle/>

## 客製化欄位顯示

<cusDisplayData />

## 過濾器

<Filter />

## 非同步過濾器

<asyncFilter />

## 列過濾器

<filterInTable />

## 客製化外觀

<customizeStyle/>

## 客製化外觀（2）

<customizeStyle2/>

## 客製化語言

<customizeMessages/>

## 客製化分頁下拉選單

<customizePageDropdown/>

## 監聽行點擊事件

<catchRow/>

## 鎖定第一列（水平滾動）

<fixedFirstColumn/>

## 鎖定表頭和第一列（滾動）

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
