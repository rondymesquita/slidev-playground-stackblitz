<script setup lang="ts">
import { ref } from 'vue'
import Prism from 'prismjs'


const myfetch = (url) => {
  return new Promise((res) => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        res(this.responseText)
        // document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  })
}

const props = defineProps({
  path: {
    default: null, 
  },
})

const data = ref("asd")

// console.log('>>>', props)
fetch('./code/' + props.path)
.then(result => {
  console.log(result)
  return result.text()
})
.then(async(result) => {
  let f = result
  // console.log('>>', props.path, f)


  let highlighted = Prism.highlight(f, Prism.languages.javascript, 'typescript');

  // console.log(highlighted)
  data.value = highlighted


})
</script>

<template>
  <div flex="~" w="min" border="~ gray-400 opacity-50 rounded-md">
    <!-- <pre class="language-ts">{{data}}</pre> -->
    <div v-html="data" class="language-ts"></div>
  </div>
</template>
