<template lang="pug">
a(
  :href=" properties.href + '.html' "
  :title="properties.alt"
)
  img(
    :src='properties.imgSrc'
    :alt="properties.alt"
    width="120"
  )
</template>

<script>
export default {
  delimiters: ['${', '}'],
  name: 'LogoAuthor',
  props: ['properties']
}
</script>
