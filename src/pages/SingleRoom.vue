<template>
<Layout>
      <div class="mainWrap">
                <section class="block_section banner_section" style="background-image: url('content/images/singleRoom.jpg');">
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
                                     <!-- <?php foreach ($allRooms as $oneRoom): ?> -->
                                    <ul class="rooms_products">
                                        <li class="rooms_display">
                                             <!-- <?php if ($oneRoom['image']): ?> -->
                                                <img width="60" height="60" src="<?php echo $oneRoom['image']; ?>"  >
                                                    <!-- <?php else: ?> -->
                                                        <p>{{ NoImageSelected }}</p>
                                            <!-- <?php endif?> -->
                                            <!-- <a href="singleRoom.php?id=<?php echo $oneRoom['id']; ?>"><?php echo $oneRoom['title']  ?></a>
                                            <span><?php echo $oneRoom['price']  ?></span> -->
                                        </li>
                                    </ul>
                                <!-- <?php endforeach; ?> -->
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
                                            <!-- <?php if ($room['image']): ?> -->
                                                <img width="60" height="60" v-bind:src="Room.image" />
                                                <p v-if="!Room.image">{{ NoImageSelected }}</p>
                                            <!-- <?php endif?> -->
                                        </div>
                                    </div>
                                </div> 
                            </div>
                            <div class="row has_gutter">
                                <div class="column-7 column-mob-12">
                                    <div class="rooms_title">
                                        <!-- <a href="javascript:void(0)"><?php echo $room['title'] ?></a> -->
                                        <a href="javascript:void(0)">{{Room.title}}</a>
                                        <div class="rooms_price">
                                            <!-- <span><?php echo $room['price'] ?></span> -->
                                            <span>{{Room.price}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="column-7 column-mob-12">               
                                    <div class="rooms_content">
                                        <!-- <p><?php echo $room['description'] ?></p> -->
                                        <p>{{Room.description}}</p>
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
import Layout from '../components/Layout.vue';
//import API from '../api/api';
export default {
  components: { Layout
   },
  name: "SingleRoom",
  data() {
    return {
      Vanoa: "VANOA",
      NoImageSelected: "No Image Selected",
      BestRoms: "Best Rooms",
      Reservations: "Reservations",
      Room: null,
      
    };
  },

  
};
</script>