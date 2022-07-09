<template>
  <q-page padding> </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useLocalStrorage from '../common/helper';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'MainPage',
  components: {},
  setup() {
    const notes = useLocalStrorage();
    const router = useRouter();
    return { notes, router };
  },
});
</script>

<style scoped></style>
