<template>
  <q-page class="row items-center justify-evenly">
    <q-header class="items-center" v-model="header" reveal elevated
      >Todo
    </q-header>
    <q-card class="my-card">
      <div class="todo-title">TodoList Practice</div>
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>
      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from '../components/models';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    return {};
  },
});
</script>

<style lang="sass" scoped></style>
