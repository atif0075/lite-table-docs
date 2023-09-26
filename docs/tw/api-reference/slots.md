# Slots

該功能為選項，但如果你採用了插槽模式，你可以利用下列方式插入組件。

### 欄位說明

- 描述: <Badge> 要顯示在該欄位的組件 </Badge>

## 如何使用

::: code-group

```vue [用法1 (對每個欄位進行不同渲染)]
<template v-slot:id="data">
  <YourComponent>{{ data.value.id }}</YourComponent>
</template>
<template v-slot:name="data">
  <YourComponent>{{ data.value.name }}</YourComponent>
</template>
<template v-slot:email="data">
  <YourComponent>{{ data.value.email }}</YourComponent>
</template>
```

```vue [用法2 (對所有欄位進行相同渲染)]
<template v-for="(col, i) of table.columns" v-slot:[col.field]="data" :key="i">
  <YourComponent>{{ data.value[col.field] }}</YourComponent>
</template>
```

:::
