<template lang="pug">
  div
    img(:src="img")
    h2.translate(data-i18n="welcome")
    p.translate(data-i18n="acc")
</template>

<script>
const config = JSON.parse(`{
    "name":"Тренувальні тренінги",
    "domain":"train.com",
    "email_verify":true,
    "menu_color":"teal",
    "img":"train.jpg",
    "menu" : [
        {
            "name":"Home",
            "ukname":"Головна",
            "url":"/",
            "vue_handler":"home"
        },
        {
            "name":"Train",
            "ukname":"Тренування",
            "url":"/train",
            "vue_handler":"train"
        },
        {
            "name":"About",
            "ukname":"Про нас",
            "url":"/about",
            "vue_handler":"about"
        },
        {
            "name":"About2",
            "ukname":"Про нас2",
            "url":"/about2",
            "vue_handler":"about"
        }
    ]
}`)

export default {
  name: 'Home',
  data: function() {
      return {
        img: config.img
      }
    }
}
</script>
