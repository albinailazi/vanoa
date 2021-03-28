<template>
  <Layout>
    <div class="Home">
      <section class="block_section banner_section" style="background-image: url('content/images/slider.jpg')"
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
      <section class="block_section about_section">
        <div class="container">
          <div class="border_title seperator white">
            <span>V</span>
          </div>
          <div class="row has_gutter">
            <div class="column-6 column-mob-12">
              <div class="about_image">
                <img src="/content/images/hotel.jpg" />
              </div>
            </div>
            <div class="column-6 column-mob-12">
              <div class="about_title">
                <h1>{{ AboutTitle }}</h1>
              </div>
              <div class="about_content">
                <p>{{ AboutDescription }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="block_section services_section">
        <div class="container">
          <div class="services_title">
            <h1>OurServices</h1>
          </div>
        </div>
        <div
          class="row has_gutter"
          v-for="service in services"
          v-bind="services"
          v-bind:key="service._id"
        >
          <div class="column-3 column-mob-12">
            <div class="service_title">
              <h1>{{ service.title }}</h1>
            </div>
            <div class="service_image">
              <img v-bind:src="service.image" />
              <p v-if="!service.image">{{ NoImageSelected }}</p>
            </div>
            <div class="service_content">
              <p>{{ service.description }}</p>
            </div>
          </div>
        </div>
      </section>
      <section class="block_section rooms_section">
        <div class="container">
          <div class="rooms_title">
            <h1>{{ FavoriteRooms }}</h1>
          </div>
          <div
            class="row has_gutter"
            v-for="room in rooms"
            v-bind="rooms"
            v-bind:key="room._id"
          >
            <div class="column-3 column-mob-12">
              <div class="service_image">
                <img v-bind:src="room.image" />
                <p v-if="!room.image">{{ NoImageSelected }}</p>
              </div>
              <div class="room_title">
                <h1>{{ room.title }}</h1>
                <router-link :to="'/singleroom/' + room.slug">
                  {{ BookNow }}
                </router-link>
              </div>
            </div>
          </div>
          <div class="rooms_view">
            <router-link to="/Rooms">
              {{ ViewAllRooms }}
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
import Layout from "../components/Layout";
import API from "../api/api";
export default {
  name: "Index",
  components: {
    Layout,
  },
  data() {
    return {
      Vanoa: "VANOA",
      AboutTitle: "About Us",
      AboutDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rerum voluptates, sequi porro corrupti dignissimos fugit qui alias ea ducimus officiis odio aperiam mollitia? Fuga ratione libero fugit eveniet sunt?",
      OurServices: "OUR SERVICES",
      ServiceTitle: "Service",
      ServiceContent: "Service Content",
      FavoriteRooms: "FAVORITE ROOMS",
      RoomTitle: "Room",
      ViewAllRooms: "VIEW ALL ROOMS",
      BookNow:"Book now",
      rooms: [],
      services: [],
    };
  },
  methods: {
    fetchRooms() {
      API.get("room/get-all")
        .then((response) => {
          console.log(response);
          this.rooms = response.data.rooms;
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
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
    this.fetchRooms();
    this.fetchServices();
  },
};
</script>
