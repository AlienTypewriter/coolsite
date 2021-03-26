import Vue from 'vue'
import $ from 'jquery'
import 'bootstrap'
import App from './App.vue'
import router from './router'
import config from '../config.json'
import i18n from './i18n'

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')

$(async function() {
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