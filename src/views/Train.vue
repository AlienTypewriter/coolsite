<template lang="pug">
    .train
        Training(v-for="training in trainings", v-bind:training="training", v-bind:key="training.id")
</template>

<script>
import Training from '@/components/Training.vue'

export default {
    name: 'train',
    data: function() {
      return {
        trainings: []
      }
    },
    created: function() {
      this.getInfo()
    },
    components: {
        Training
    },
    methods: {
      getInfo : function() {
        return fetch('/api/')
          .then(data=>data.json())
          .then(json => this.trainings = json)
      }
    }
}
</script>