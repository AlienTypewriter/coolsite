<template lang="pug">
    div.training
        h3 {{training.name}}
        p {{training.shortdesc}}
        p.translate.trainexpand(data-i18n="more", @click="expand", v-if="!this.clicked") more
</template>

<script>

export default {
    name: 'Training', 
    props: ['training'],
    data : function() {
      return {
        clicked:false
      }
    },
    methods: {
      expand: function() {
        this.training.shortdesc=this.training.ldesc
        this.clicked=true
      }
    }
}
</script>
