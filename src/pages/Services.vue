<template>
  <Layout>
    <div>
      <section
        class="block_section banner_section"
        style="background-image: url('content/images/services_banner.jpg')"
      >
        <div class="banner_content">
          <div class="banner_logo">
            <span>V</span>
          </div>
          <div class="banner_heading">
            <h1>{{ Vanoa }}</h1>
          </div>
        </div>
      </section>
      <div 
          v-for="(service, index) in services"
                  v-bind:item="services"
                  v-bind:index = "index"
                  v-bind:key="service._id"
      >
      <section class="block_section left_section" v-if="index == 0 || index == 2">
        <div class="row">
          <div class="column-6 column-mob-12">
            <div class="left_image">
              <img v-bind:src="service.image" />
              <p v-if="!service.image">{{ NoImageSelected }}</p>
            </div>
          </div>
          <div class="column-6 column-mob-12">
            <div class="left_content">
              <div class="left_title">
                <h1>{{service.title}}</h1> 
              </div>
              <div class="left_paragraph">
                <p>{{service.description}}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="block_section right_section" v-if="index == 1 || index == 3">
        <div class="row">
          <div class="column-6 column-mob-12">
            <div class="right_content">
              <div class="right_title">
                <h1>{{service.title}}</h1> 
              </div>
              <div class="right_paragraph">
                <p>{{service.description}}</p>
              </div>
            </div>
          </div>
          <div class="column-6 column-mob-12">
            <div class="right_image">
             <img v-bind:src="service.image" />
              <p v-if="!service.image">{{ NoImageSelected }}</p>
            </div>
          </div>
        </div>
      </section>
 
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "../components/Layout.vue";
import API from "../api/api";
export default {
  components: { Layout },
  name: "Services",
  data() {
    return {
      Vanoa: "VANOA",
      NoImageSelected: "No Image Selected",
      services: [],
    };
  },
  methods: {
    fetchServices() {
      API.get("service/get-all")
        .then((response) => {
          console.log(response);
          this.services = response.data.services;
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
  mounted() {
    this.fetchServices();
  },
};
</script>