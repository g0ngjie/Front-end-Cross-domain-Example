<template>
  <button
    class="w-100px cursor-pointer px-4 py-1 text-sm font-semibold rounded border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
    :class="textColor"
    @click="emit('click')"
  >
    {{ props.text || "button" }}
  </button>
</template>
<script setup>
const emit = defineEmits(["click"]);
const props = defineProps({
  text: String,
  type: String,
});

const textColor = $ref("text-gray-600");
if (props.type === "danger") textColor = "text-red";
else if (props.type === "info") textColor = "text-blue";
else if (props.type === "success") textColor = "text-green";
</script>
