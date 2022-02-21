<script setup lang="ts">
import { ref } from "vue";
import Prism from "prismjs";

const props = defineProps({
  filename: {
    default: "",
  },
  syntax: {
    default: "",
  },
});

const { filename, syntax } = props;

const data = ref("CODE NOT LOADED");
const raw = ref("CODE NOT LOADED");

const createHighlightedCodeInHTML = (rawCode) => {
  console.log(Object.keys(Prism.languages));
  let highlighted = Prism.highlight(rawCode, Prism.languages[syntax]);
  return highlighted;
};

const path = import.meta.env.DEV
  ? `../public/code/${filename}`
  : `/code/${filename}.txt`;

fetch(path)
  .then((response) => response.text())
  .then((response) => {
    const codeInHTML = createHighlightedCodeInHTML(response);
    data.value = codeInHTML;
    raw.value = response;
  });
</script>

<template>
  <div border="~ gray-400 opacity-50 rounded-md">
    <div v-html="data" class="language-ts line-numbers"></div>
  </div>
</template>
