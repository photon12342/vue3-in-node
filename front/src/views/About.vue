<template>
  <div class="container">
    {{ state.a }}
  </div>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({ a: "about页面1改动" });
</script>
