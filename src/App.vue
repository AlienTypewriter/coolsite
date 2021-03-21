<template lang="pug">
  .container-fluid
    br
    br
    .row
      .col-8#app
          #nav
            router-link(to="/") Home
            |  | 
            router-link(to="/about") About
            |  | 
            router-link(to="/train") Train
          router-view
      .col-4
        div
          form#form.needs-validation('novalidate' action=".", method="POST")
            fieldset
                header#formheader.translate(data-i18n="app-form")="Application form"
                br
                div
                    label.translate(for="name" data-i18n="name")="Your name"
                    input#name.form-control.input-md.translate(name='name' data-i18n="[placeholder]name-ph" type='text' placeholder="Enter your name" required)
                    label.translate(for="surname" data-i18n="surname")="Your family name"
                    input#surname.form-control.input-md.translate(name='surname' data-i18n="[placeholder]surname-ph" type='text' placeholder="Enter your family name" required)
                    .invalid-feedback.translate(data-i18n="name-fail")="Neither name nor family name can be empty"
                div
                    label.translate(for="email" data-i18n="email")="Your email address"
                    input#email.form-control.input-md.translate(name='email' data-i18n="[placeholder]email-ph" type='email' placeholder="Enter your email address" required)
                    .invalid-feedback.translate(data-i18n="email-fail")="Incorrect email address"
                div
                    label.translate(for="phone" data-i18n="phone")="Your phone number (in +38 (ххх) хххххх format)"
                    input#phone.form-control.input-md.translate(name='phone' data-i18n="[placeholder]phone-ph" type='tel' pattern="0[0-9]{9}$" placeholder="Enter your phone number" required)
                    .invalid-feedback.translate(data-i18n="phone-fail")="Incorrect phone number format"
                div
                    label.translate(for="content" data-i18n="msg")="Your message"
                    textarea#content.form-control.input-md(name='content' required)
                    .invalid-feedback.translate(data-i18n="msg-fail")="Message may not be empty"
                button#submit.btn-block.btn-success.translate(type='submit' data-i18n="submit")="Submit"  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
