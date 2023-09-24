# Slots

这是可选的。但是，如果启用 V 槽模式，则应该能够写入。

### 字段名称

- 描述: <Badge> 要显示在该区块的數據 </Badge>

## 如何使用

::: code-group

```vue [用法1 (对于每个字段进行不同渲染)]
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

```vue [用法2 (所有字段进行相同渲染)]
<template v-for="(col, i) of table.columns" v-slot:[col.field]="data" :key="i">
  <YourComponent>{{ data.value[col.field] }}</YourComponent>
</template>
```

:::
