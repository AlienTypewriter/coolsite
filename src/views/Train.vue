<template lang="pug">
    .train
        Training(v-for="training in trainings", v-bind:training="training", v-bind:key="training.id")
</template>

<script>
import i18n from "../i18n"
import Training from '@/components/Training.vue'
import config from '../../config.json'

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
        return fetch(config.api_url+'/trainings/locale/'+i18n.locale)
          .then(data=>data.json())
          .then(json => this.trainings = json)
      }
    }
}
</script>