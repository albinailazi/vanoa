<template>
  <Layout>
    <div class="mainWrap">
      <section
        class="block_section banner_section"
        style="background-image: url('content/images/singleRoom.jpg')"
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
            <div class="rooms">
              <div class="row has_gutter">
                <div class="column-12 column-mob-12">
                  <div class="rooms_img">
                    <img width="600" height="600" v-bind:src="Room.image" />
                    <p v-if="!Room.image">{{ NoImageSelected }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row has_gutter">
              <div class="column-7 column-mob-12">
                <div class="rooms_title">
                  <!-- <a href="javascript:void(0)"><?php echo $room['title'] ?></a> -->
                  <a href="javascript:void(0)">{{ Room.title }}</a>
                  <div class="rooms_price">
                    <!-- <span><?php echo $room['price'] ?></span> -->
                    <span>{{ Room.price }}</span>
                  </div>
                </div>
              </div>
              <div class="column-7 column-mob-12">
                <div class="rooms_content">
                  <!-- <p><?php echo $room['description'] ?></p> -->
                  <p>{{ Room.description }}</p>
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
  components: { Layout },
  name: "singleroom",
  data() {
    return {
      Vanoa: "VANOA",
      NoImageSelected: "No Image Selected",
      BestRooms: "Best Rooms",
      Reservations: "Reservations",
      rooms: [],
      Room: {},
      slug: "",
    };
  },
  methods: {
    fetchRooms() {
      API.get("room/get-all")
        .then((response) => {
          this.rooms = response.data.rooms;
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    fetchRoom() {
      API.get("http://localhost:4000/api/room/get-room", {
        params: {
          slug: this.$route.params.slug,
        },
      })
        .then((res) => {
          this.Room = res.data.room;
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
  mounted() {
    this.fetchRoom();
    this.fetchRooms();
  },
};
</script>
