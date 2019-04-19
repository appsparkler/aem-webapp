<template lang="pug">
img(:src='properties.imgSrc' :alt="properties.alt")
</template>

<script>
export default {
  props: ['properties']
}
</script>
