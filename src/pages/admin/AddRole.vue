<template>
  <div class="login-body">
    <div class="login-content">
      <div class="logo_footer white seperator">
        <span>V</span>
      </div>
      <form
        class="login_box"
        id="register_form"
        @submit.prevent="onSubmit(name)"
      >
        <!-- <?php echo $res && $res != '' ? '<p style="color:red">'. $res .'</p>' : ''; ?> -->
        <div class="">
          <label for="name"> Name </label>
          <input type="text" v-model="name" name="name" id="name" />
        </div>

        <div class="register_button">
          <button type="submit" name="submitted">Add Role</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import API, { prepareAuthorization } from "../../api/api";

export default {
  name: "AddRole",
  data() {
    return {
      name: null,
    };
  },
  methods: {
    onSubmit(name) {
      prepareAuthorization();
      API.post("role/create", {
        name: name,
      })
        .then((response) => {
          console.log(response);
          this.$router.push({ name: "roleDashboard" });
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
};
</script>
