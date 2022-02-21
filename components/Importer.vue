<script setup lang="ts">
import { ref } from 'vue'
import Prism from 'prismjs'

const props = defineProps({
  path: {
    default: null,
  },
})

const data = ref("NO CODE")

const getFile = () => import(`./code/${props.path}.ts?raw`)
// const getFile = () => import(`/sample/${props.path}.ts?raw`)
getFile()
  .then(file => {
    console.log(file.default)
    let highlighted = Prism.highlight(file.default, Prism.languages.javascript, 'typescript');
    data.value = highlighted
  })


</script>

<template>
  <div flex="~" w="min" border="~ gray-400 opacity-50 rounded-md">
    <div v-html="data" class="language-ts"></div>
  </div>
</template>
