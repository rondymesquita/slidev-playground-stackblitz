<script setup lang="ts">
import { ref } from 'vue'

import Prism from 'prismjs'

const props = defineProps({
  path: {
    default: null, 
  },
})

const data = ref("asd")

console.log('>>>', props)
fetch(props.path)
.then(result => result.text())
.then((result) => {
  let f = result.trim()
  console.log('>>', f)


  let highlighted = Prism.highlight(f, Prism.languages.javascript, 'typescript');

  console.log(highlighted)
  data.value = highlighted


})
</script>

<template>
  <div flex="~" w="min" border="~ gray-400 opacity-50 rounded-md">
    <!-- <pre class="language-ts">{{data}}</pre> -->
    <div v-html="data" class="language-ts"></div>
  </div>
</template>
