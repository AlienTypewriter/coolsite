<template lang="pug">
    div.training
        h3 {{training.name}}
        p {{training.shortdesc}}
        p.trainexpand(@click="expand", v-if="!this.clicked") {{ $t('more') }}
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
