<template lang="pug">
div.container.home-page
  div.row
    div.col-4
      CardAuthor(
        :resource="resources.HomePage_Card"
      )
    div.col-4
      CardAuthor(
        :resource="resources.HomePage_Card1"
      )
    div.col-4
      CardAuthor(
        :resource="resources.HomePage_Card2"
      )
</template>
<script>
import LogoAuthor from "components/global/LogoAuthor";
import config from "./config.js";
import CardAuthor from "components/content/Card";
import { getResources } from "scripts/shared";
//
export default {
  components: { LogoAuthor, CardAuthor },
  data() {
    return {
      config
    };
  },
  computed: {
    resources: getResources
  }
};
</script>

<style lang="scss" scoped>
div.home-page {
  margin-top: 55px;
}
div.vue-new-parsys-container {
  height: 30px;
  border: 1px blue solid;
}
div.list-group a.list-group-item {
  text-transform: capitalize;
}
</style>
