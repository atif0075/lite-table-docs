# Slots

この機能はオプションです。スロットモードを有効する場合、下記のようなやり方でコンポーネントを利用することができます。

### コラム説明

- 説明: <Badge> コラムに表示させたいコンポーネント </Badge>

## 如何使用

::: code-group

```vue [使用法1 (コラムにそれぞれ違うコンポーネントを利用する場合)]
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

```vue [使用法2 (すべてのコラムに同じコンポーネントを利用する場合)]
<template v-for="(col, i) of table.columns" v-slot:[col.field]="data" :key="i">
  <YourComponent>{{ data.value[col.field] }}</YourComponent>
</template>
```

:::
