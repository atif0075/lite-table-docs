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

# 先進的な事例

次の例はより高度で、より複雑な使用例の参考として使用することを目的としています。

## グループ

<grouping/>

## グループ（スイッチ）

<groupingWithToggle/>

## カスタム表示データ

<cusDisplayData />

## フィルター

<Filter />

## 非同期フィルタリング

<asyncFilter />

## 列フィルター

<filterInTable />

## カスタムスタイル

<customizeStyle/>

## カスタムスタイル（2）

<customizeStyle2/>

## カスタムメッセージ

<customizeMessages/>

## ポスターに続くカスタムページドロップディスタープラシア

<customizePageDropdown/>

## クリックの行をキャプチャします

<catchRow/>

## 最初の列（水平スクロール）を修正しました

<fixedFirstColumn/>

## 固定ヘッドと最初の列（ローリング）

<fixedHeaderAndFirstColumn/>

<style>
.vtl-thead-th input{
    background-color: #fff;
}
</style>
