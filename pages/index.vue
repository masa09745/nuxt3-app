<script setup lang="ts">
const { data: items } = await useFetch("/api/items");
</script>


<template>
  <div>
    <h1>アイテム一覧</h1>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }}
        {{ item.price }}
      </li>
    </ul>
  </div>
</template>