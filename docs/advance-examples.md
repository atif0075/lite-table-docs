<script setup>
import cusDisplayData from "./code/advance-examples/cus-display-data.vue";
import Filter from "./code/advance-examples/filter.vue";
import asyncFilter from "./code/advance-examples/async-filter.vue";
import catchRow  from "./code/advance-examples/catch-row.vue"
import filterInTable from "./code/advance-examples/filter-in-table.vue"
import fixedFirstColumn from "./code/advance-examples/fixed-first-column.vue"
import fixedHeaderAndFirstColumn from "./code/advance-examples/fixed-header-and-first-column.vue"
// import showControls from "./code/advance-examples/show-controls.vue"
import groupingWithToggle from "./code/advance-examples/grouping.vue"
import grouping from "./code/advance-examples/grouping2.vue"
import customizeStyle from "./code/advance-examples/custom-style.vue"
import customizeStyle2 from "./code/advance-examples/custom-style-2.vue"
import customizeMessages from "./code/advance-examples/cus-message.vue"
import customizePageDropdown from "./code/advance-examples/cus-page-drop.vue"

</script>

# Advance Examples

The following examples are more advanced and are meant to be used as a reference for more complex use cases.

## Grouping

<grouping/>

## Grouping(With toggle)

<groupingWithToggle/>

## Customize display data

<cusDisplayData />

## Filter

<Filter />

## Asynchronous filter

<asyncFilter />

## Columns filter

<filterInTable />

## Customize style

<customizeStyle/>

## Customize style(2)

<customizeStyle2/>

## Customize messages

<customizeMessages/>

## Customize page's dropdown

<customizePageDropdown/>

## Catch row clicked

<catchRow/>

## Fixed first column(Horizontal scrolling)

<fixedFirstColumn/>

## Fixed header and first column(scrolling)

<fixedHeaderAndFirstColumn/>

<style>
.vtl-thead-th input{
    background-color: #fff;
}
</style>
