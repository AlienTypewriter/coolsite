<template lang="pug">
  div
    img(:src="img")
    h2 {{$t("welcome")}}
    p {{ $t("acc") }}
</template>

<script>
import config from "../../config.json"

export default {
  name: 'Home',
  data: function() {
      return {
        img: config.img
      }
    }
}
</script>
