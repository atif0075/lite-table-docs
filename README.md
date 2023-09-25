# Vue 3 Lite Table

**A simple and lightweight data table component for Vue.js 3**

**Features**

-   Sorting
-   Paging
-   Row check
-   Dynamic data rendering
-   Supported TypeScript
-   And more!

**Installation**

**NPM**

```sh
npm install vue3-table-lite --save
```





## Usage

**JavaScript**

```js
import VueTableLite from "vue3-table-lite";
```

**TypeScript**

```ts
import VueTableLite from "vue3-table-lite/ts";
```


**Default Mode**

```js
import VueTableLite from 'vue3-table-lite'

export default {
  name: 'App',
  components: {
    VueTableLite,
  },
  data() {
    return {
      tableData: [
        { id: 1, name: 'Alice', age: 25 },
        { id: 2, name: 'Bob', age: 30 },
        { id: 3, name: 'Carol', age: 35 },
      ],
    }
  },
}
```
```vue
<template>
  <vue-table-lite
    :data="tableData"
  >
    <th slot="header">ID</th>
    <th slot="header">Name</th>
    <th slot="header">Age</th>
    <td slot="body" scope="row">{{ item.id }}</td>
    <td slot="body">{{ item.name }}</td>
    <td slot="body">{{ item.age }}</td>
  </vue-table-lite>
</template>
```

**V-slot Mode**

```js
import VueTableLite from 'vue3-table-lite'

export default {
  name: 'App',
  components: {
    VueTableLite,
  },
  data() {
    return {
      tableData: [
        { id: 1, name: 'Alice', age: 25 },
        { id: 2, name: 'Bob', age: 30 },
        { id: 3, name: 'Carol', age: 35 },
      ],
    }
  },
}
```
```vue
<template>
  <vue-table-lite
    :data="tableData"
  >
    <template slot="header">
      <th>ID</th>
      <th>Name</th>
      <th>Age</th>
    </template>
    <template slot="body" scope="row">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.age }}</td>
    </template>
  </vue-table-lite>
</template>
```

**Static Mode**

```js
import VueTableLite from 'vue3-table-lite'

export default {
  name: 'App',
  components: {
    VueTableLite,
  },
  data() {
    return {
      tableData: [
        { id: 1, name: 'Alice', age: 25 },
        { id: 2, name: 'Bob', age: 30 },
        { id: 3, name: 'Carol', age: 35 },
      ],
    }
  },
}
```
```vue
<template>
  <vue-table-lite
    :data="tableData"
  >
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in tableData" :key="index">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
      </tr>
    </tbody>
  </vue-table-lite>
</template>
```

**API Reference**

For more information on the API, please see the documentation: https://github.com/linmasahiro/vue3-table-lite.

**Contributing**

If you have any suggestions or bug reports, please feel free to open an issue on GitHub: https://github.com/linmasahiro/vue3-table-lite.

**License**

Vue 3 Lite Table is licensed under the MIT license.
