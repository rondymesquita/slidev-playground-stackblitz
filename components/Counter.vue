<script setup lang="ts">
import { ref } from 'vue'

// const fetch = (url) => {
//   console.log('>>> called', url)
// 	return new Promise((resolve, reject) => {
// 	https.get(url, (resp) => {

// 			let data = '';

// 			resp.on('data', (chunk) => {
// 				data += chunk;
// 			});
// 			resp.on('end', () => {
// 				console.log(data);
//         resolve('DONE')
// 				// resolve(JSON.parse(data))
// 			});

// 		}).on("error", (err) => {
// 			reject(err)
// 		});
// 	})
// }

const props = defineProps({
  path: {
    default: null,
  },
})

const data = ref("")

console.log('>>>', props)
fetch("/" + props.path)
.then(result => result.text())
.then((result) => {
  let f = result
  console.log(f)
  data.value = f
})
</script>

<template>
  <div flex="~" w="min" border="~ gray-400 opacity-50 rounded-md">
    <pre>
      {{data}}
    </pre>
  </div>
</template>
