<template>
  <Layout>
    <div class="mainWrap">
      <section
        class="block_section banner_section"
        style="background-image: url('content/images/rooms_banner.jpg')"
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
      <div>
        <section class="block_section rooms_section">
          <div class="container">
            <div class="border_title seperator white">
              <span>V</span>
            </div>
            <div class="rooms_sidebar">
              <li class="top_rooms rooms_price column-mob-12">
                <h2>{{ BestRooms }}</h2>
                <ul
                  class="rooms_products"
                  v-for="room in rooms"
                  v-bind="rooms"
                  v-bind:key="room._id"
                >
                  <li class="rooms_display">
                    <img width="60" height="60" v-bind:src="room.image" />
                    <p v-if="!room.image">{{ NoImageSelected }}</p>
                    <router-link :to="'/singleRoom/' + room.slug">
                      {{ room.title }}
                    </router-link>
                    <span> {{ room.price }}</span>
                  </li>
                </ul>
                <div class="rooms_reservation">
                  <p>{{ Reservations }}</p>
                  <span>044-100-100</span>
                </div>
              </li>
            </div>

            <div
              class="rooms"
              v-for="room in rooms"
              v-bind="rooms"
              v-bind:key="room._id"
            >
              <div class="row has_gutter">
                <div class="column-4 column-mob-12">
                  <div class="rooms_img">
                    <img v-bind:src="room.image" />
                    <p v-if="!room.image">{{ NoImageSelected }}</p>
                  </div>
                </div>
                <div class="column-8 column-mob-12">
                  <div class="rooms_title">
                    <router-link :to="'/singleroom/' + room.slug">
                      {{ room.title }}
                    </router-link>
                    <div class="rooms_price">
                      <span>{{ room.price }}</span>
                    </div>
                  </div>
                  <div class="rooms_content">
                    <p>{{ room.description }}</p>
                    <div class="room_title">
                      <router-link :to="'/singleroom/' + room.slug">
                        {{ BookNow }}
                      </router-link>
                    </div>
                  </div>
                </div>
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
  components: {
    Layout,
  },
  name: "Rooms",
  data() {
    return {
      Vanoa: "VANOA",
      BestRooms: "Best Rooms",
      NoImageSelected: "No Image Selected",
      Reservations: "Reservations",
      BookNow: "BOOK NOW",
      rooms: [],
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
  },
  mounted() {
    setTimeout(() => {
      this.fetchRooms();
    }, 3000);
  },
};
</script>
