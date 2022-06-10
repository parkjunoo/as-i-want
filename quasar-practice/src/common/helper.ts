import { ref, watch, onMounted, onUnmounted } from 'vue';

const useLocalStrorage = (key: string, defaultValue: string[]) => {
  const value = ref(defaultValue);
  const read = () => {
    const v = window.localStorage.getItem(key);
    if (v != null) value.value = JSON.parse(v);
  };

  read();

  onMounted(() => {
    window.addEventListener('storage', read);
  });

  onUnmounted(() => {
    window.removeEventListener('storage', read);
  });

  const write = () => {
    window.localStorage.setItem(key, JSON.stringify(value.value));
  };

  watch([value], write, { deep: true });

  return value;
};

export default () => {
  return useLocalStrorage('notes', []);
};
