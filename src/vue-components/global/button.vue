<template lang="pug">
  button(@click="buttonClicked();")
    i.fa.fa-search
    span &nbsp;{{ title }}
</template>

<script>
export default {
  props: ['buttonConfig'],
  data:function() {
    return {
      title: 'Search'
    }
  },
  methods: {
    buttonClicked() {
      alert('button-clicked');
      if(this.buttonConfig) this.buttonConfig.buttonClicked();
    }
  }
}
</script>

<style lang="css">
</style>
