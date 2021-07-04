<template>
  <div class="login-body">
    <div class="login-content">
      <div class="logo_footer white seperator">
        <span>V</span>
      </div>
      <form
        class="login_box"
        id="register_form"
        @submit.prevent="onSubmit(title, description, image, slug)"
      >
       
        <div class="">
          <label for="title"> Title </label>
          <input type="text" v-model="title" name="title" id="title" />
        </div>
        <div class="">
          <label for="description">Description</label>
          <input
            type="text"
            v-model="description"
            name="description"
            id="description"
          />
        </div>
        <div class="">
          <label for="image">Image</label>
          <input type="text" v-model="image" name="image" id="image" />
        </div>

        <div class="">
          <label for="slug">Slug</label>
          <input type="text" v-model="slug" name="slug" id="slug" />
        </div>

        <div class="">
          <label for="slug">Price</label>
          <input type="text" v-model="price" name="price" id="price" />
        </div>

        <div class="register_button">
          <button type="submit" name="submitted">Add Service</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import API, { prepareAuthorization } from "../../api/api";

export default {
  name: "AddService",
  data() {
    return {
      title: null,
      description: null,
      image: null,
      slug: null,
    };
  },
  methods: {
    onSubmit(title, description, image, slug) {
      prepareAuthorization();
      API.post("service/create", {
        title: title,
        description: description,
        image: image,
        slug: slug,
      })
        .then((response) => {
          console.log(response);
          this.$router.push({ name: "serviceDashboard" });
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
};
</script>
