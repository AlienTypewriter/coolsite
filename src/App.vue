<template lang="pug">
  .container-fluid
    .row
      .col-8#app
          nav.navbar.navbar-expand-lg.navbar-dark(style="background-color:teal")
            router-link(to="/").nav-link.navbar-brand
              strong {{config.domain}}
            button.navbar-toggle.collapsed(type="button", data-toggle="collapse", data-target="#navbar-main")
              span.icon-bar         
            .collapse.navbar-collapse#navbar-main
              ul.navbar-nav.mr-auto
                li.nav-item(v-for="item in config.menu")
                  router-link(:to="item.url").nav-link {{$t(item.name)}}
              ul.navbar-nav.mr-auto(align="right")  
                li.nav-item
                  strong(@click="change('uk')").nav-link UKR
                li.nav-item
                  strong(@click="change('en')").nav-link ENG
          router-view
      .col-4
        div
          form#form.needs-validation('novalidate' action=".", method="POST")
            fieldset
              header#formheader {{$t("app-form")}}
              br
              div
                  label(for="name") {{$t("name")}}
                  input#name.form-control.input-md(name='name'  type='text' :placeholder='$t("name-ph")' required)
                  label(for="surname") {{$t("surname")}}
                  input#surname.form-control.input-md(name='surname' type='text' :placeholder='$t("surname-ph")' required)
                  .invalid-feedback {{$t("name-fail")}}
              div
                  label(for="email") {{$t("email")}}
                  input#email.form-control.input-md(name='email' type='email' :placeholder='$t("email-ph")' required)
                  .invalid-feedback {{$t("email-fail")}}
              div
                  label(for="phone") {{$t("phone")}}
                  input#phone.form-control.input-md(name='phone' type='tel' pattern="0[0-9]{9}$" :placeholder='$t("phone-ph")' required)
                  .invalid-feedback {{$t("phone-fail")}}
              div
                  label(for="content") {{$t("msg")}}
                  textarea#content.form-control.input-md(name='content' required)
                  .invalid-feedback {{$t("msg-fail")}}
              button#submit.btn-block.btn-success(type='submit') {{$t("submit")}}
</template>

<script>
import i18n from "./i18n"
import config from "../config.json"

export default {
  name: "App",
  data: function() {
    return {
      config: config
    }
  },
  methods: {
    change: function(locale) {
      i18n.locale = locale
    }
  }
}
</script>


<style>
@import url(https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css);

body {
    min-height: 100vh;
}
header#formheader{
    text-align: center;
    color: white;
    font-weight: bold;
    background-color: teal;
    text-transform: uppercase;
}
#submit {
    border: hidden;
    font-weight: bold;
    text-transform: uppercase;
}
fieldset {
    border: ridge;
    padding: 3px;
}
legend {
    text-align: center;
    width: fit-content;
}
fieldset label {
    padding-left: 0.5vw;
}
.form-control {
    margin-bottom: 5px;
}
nav a:not(.navbar-brand) {
    text-transform: uppercase;
    color: white;
    font-weight: bold;
}
.jumbotron {
    text-align: center;
}
img {
    width: 100%;
}
h2 {
    color:teal;
    font-weight: bold;
}
.training {
    padding: 3h 0 3vh 0;
    white-space: pre-line;
}
.training h3 {
    color: teal;
}
.trainexpand {
    color: #37a386;
    cursor: pointer;
}
footer {
    padding-top: 2vh;
}
.list-group {
    padding-top: 2vh;
}
</style>