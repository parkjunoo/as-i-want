<template>
  <q-page padding>
    <q-card> 하이 </q-card>
    <q-card> 하이 </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useLocalStrorage from '../common/helper';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'MainPage',
  components: {},
  setup() {
    console.log('!!!!!!!');
    const notes = useLocalStrorage();
    const router = useRouter();
    return { notes, router };
  },
});
</script>

<style scoped></style>
