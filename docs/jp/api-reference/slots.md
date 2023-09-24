# Slots

これはオプションです。しかし、あなたが有効にした場合 V-slot モード、あなたはそれを書くべきであるべきです。

### 字段名称

- 説明する: <Badge> ブロックに表示されるデータ </Badge>

## 如何使用

::: code-group

```vue [使用法1 (各フィールドの異なるレンダリング)]
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

```vue [使用法2 (すべてのフィールドは同じレンダリングを実行します)]
<template v-for="(col, i) of table.columns" v-slot:[col.field]="data" :key="i">
  <YourComponent>{{ data.value[col.field] }}</YourComponent>
</template>
```

:::
