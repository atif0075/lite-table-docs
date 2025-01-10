# Slots

This is optional. However, if you enable V-slot mode, you should be able to write it.

### Header

- Description: <Badge> Custom header by v-slot </Badge>

## Usage
- Slot name: `vtl-header-<field-name>`

```vue
<template v-slot:vtl-header-id="data">
  <YourComponent>{{ data.value }}</YourComponent>
</template>
<template v-slot:vtl-header-name="data">
  <YourComponent>{{ data.value }}</YourComponent>
</template>
<template v-slot:vtl-header-email="data">
  <YourComponent>{{ data.value }}</YourComponent>
</template>
```


### Field's name

- Description: <Badge> Show Row data's scope </Badge>

## Usage

::: code-group

```vue [Custom everywhere]
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

```vue [Same everywhere]
<template v-for="(col, i) of table.columns" v-slot:[col.field]="data" :key="i">
  <YourComponent>{{ data.value[col.field] }}</YourComponent>
</template>
```

:::
