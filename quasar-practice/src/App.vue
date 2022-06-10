<template>
  <div>
    <PageContainer>
      <router-view />
    </PageContainer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageContainer from './layouts/PageContainer.vue';

export default defineComponent({
  components: { PageContainer },
  name: 'App',
});
</script>
