<template>
  <div class="login-body">
    <div class="login-content">
      <div class="logo_footer white seperator">
        <span>V</span>
      </div>
      <form
        class="login_box"
        id="register_form"
        @submit.prevent="onSubmit(name, email, subject, message)">
    
        <div class="">
          <label for="title"> Name </label>
          <input type="text" v-model="name" name="name" id="name" />
        </div>
        <div class="">
          <label for="email">Email</label>
          <input type="email" v-model="email" name="email" id="email" />
        </div>
        <div class="">
          <label for="subject">Subject</label>
          <input type="text" v-model="subject" name="subject" id="subject" />
        </div>
        <div class="">
          <label for="message">Message</label>
          <input type="text" v-model="message" name="message" id="message" />
        </div>
        
      

        <div class="register_button">
          <button type="submit" name="submitted">Add Contact</button>
        </div>
      
      </form>
    </div>
  </div>
</template>

<script>
import API, { prepareAuthorization} from "../api/api";

export default {
  name: "AddContact",
  data() {
    return {
      name: null,
      email: null,
      subject: null,
      message: null,
    };
  },
  methods: {

    onSubmit(name, email, subject, message) {
      prepareAuthorization();
      API.post("contact/create", {
        name: name,
        email: email,
        subject: subject,
        message: message,
      })
        .then((response) => {
          console.log(response);
          this.$router.push({ name: "contactDashboard" });
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
};
</script>
