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

</script>

# 先進的使用案例

下面的示例旨在作為更高級和更複雜的使用案例的參考。

## 分組

<grouping/>

## 分組（帶切換）

<groupingWithToggle/>

## 自定義顯示數據

<cusDisplayData />

## 過濾

<Filter />

## 非同步過濾

<asyncFilter />

## 列過濾

<filterInTable />

## 自定義樣式

<customizeStyle/>

## 自定義樣式（2）

<customizeStyle2/>

## 自定義消息

<customizeMessages/>

## 自定義頁面下拉菜單

<customizePageDropdown/>

## 捕捉行點擊事件

<catchRow/>

## 固定第一列（水平滾動）

<fixedFirstColumn/>

## 固定表頭和第一列（滾動）

<fixedHeaderAndFirstColumn/>

<style>
.vtl-thead-th input{
    background-color: #fff;
}
</style>
