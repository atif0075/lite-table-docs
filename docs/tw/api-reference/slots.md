<script setup>
import * as tw from "/locales/tw.json";
</script>

# Slots

This is optional. However, if you enable V-slot mode, you should be able to write it.

### {{tw.slots_field_name}}

- Description: <Badge> {{tw.slots_field_name_desc}} </Badge>

## Usage

::: code-group

```vue [{{tw.slots_field_name_usage1}}]
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

```vue [{{tw.slots_field_name_usage2}}]
<template v-for="(col, i) of table.columns" v-slot:[col.field]="data" :key="i">
  <YourComponent>{{ data.value[col.field] }}</YourComponent>
</template>
```

:::
