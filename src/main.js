import Vue from 'vue'
import $ from 'jquery'
import i18next from 'i18next'
import jqueryI18next from 'jquery-i18next'
import App from './App.vue'
import router from './router'
import config from '../config.json'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
$(async function() {
  let lang = document.cookie.match(/locName=(.{2})/)
  i18next.init({
    lng: lang? lang[1] : "en",
    debug: true,
    resources: {
      en: {
        translation: await fetch('/api/locale/en').then(data=>data.json())
      },
      uk: {
        translation: await fetch('/api/locale/uk').then(data=>data.json())
      }
    }
  }, function() {
    jqueryI18next.init(i18next, $);
    $(".translate").localize();
  });
  $("#submit").on("click", function (event) {
    event.stopPropagation();
    let valid = document.getElementById("form").checkValidity()
    console.log(valid)
    $("#form").addClass("was-validated")
    if (!valid) {
      return false;
    } else if (config.email_verify) {
      let formData = $("#form").serializeArray()
      $.ajax({ 
        url: "/api/regEmail/",
        data: {
          "email":formData.email
        },
        success: function(data) {
          let reply = prompt("Enter the code from the email")
          console.log(reply)
          console.log(data)
          if (reply!==data.code) {
            return false;
          }
        },
        error: function(err) {
            console.log(err)
        },
        type: "POST", 
        dataType: "json"
      })
    }
    return true;
  })
});