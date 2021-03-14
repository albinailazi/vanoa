<template>
    <Layout>
   <div class="mainWrap">
                <section class="block_section banner_section" style="background-image: url('content/images/rooms_banner.jpg');">
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
                            <div class="rooms_sidebar" >
                                <li class="top_rooms rooms_price column-mob-12">
                                    <h2>{{BestRooms}}</h2>
                                    <!-- <?php foreach ($allRooms as $room): ?> -->
                                    <ul class="rooms_products">
                                        <li class="rooms_display">
                                             <!-- <?php if ($room['image']): ?> -->
                                                <img width="60" height="60" src="<?php echo $room['image']; ?>"  >
                                                    <!-- <?php else: ?> -->
                                                        <p>{{ NoImageSelected }}</p>
                                            <!-- <?php endif?> -->
                                            <!-- <a href="singleRoom.php?id=<?php echo $room['id']; ?>"><?php echo $room['title'] ?></a> -->
                                            <!-- <span> <?php echo $room['price'] ?></span> -->
                                        </li>
                                    </ul>
                                <!-- <?php endforeach; ?> -->
                            <div class="rooms_reservation">
                                    <p>{{ Reservations }}</p>
                                    <span>044-100-100</span>
                            </div>
                            </li>
                            
                            </div>
                           
                            <!-- <?php foreach ($allRooms as $room): ?> -->
                            <div class="rooms"> 
                                <div class="row has_gutter">
                                    <div class="column-4 column-mob-12" >
                                        <div class="rooms_img">
                                            <!-- <?php if ($room['image']): ?> -->
                                                <img src="<?php echo $room['image']; ?>" >
                                                    <!-- <?php else: ?> -->
                                                        <p>{{ NoImageSelected }}</p>
                                            <!-- <?php endif?> -->
                                        </div>
                                    </div>
                                    <div class="column-8 column-mob-12" >
                                        <div class="rooms_title">
                                            <!-- <a href="singleRoom.php?id=<?php echo $room['id']; ?>"><?php echo $room['title'] ?></a> -->
                                            <div class="rooms_price">
                                                <!-- <span><?php echo $room['price'] ?></span> -->
                                            </div>
                                        </div>
                                        <div class="rooms_content">
                                            <!-- <p><?php echo $room['description'] ?> </p> -->
                                                <div class="room_title ">
                                                    <!-- <a href="singleRoom.php?id=<?php echo $room['id']; ?>">Book now</a> -->
                                                    <router-link to="/SingleRoom">
                                                            {{BookNow}}
                                                    </router-link>
                                                </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        <!-- <?php endforeach; ?> -->
                       
                        </div>
                    </section>
                </div>
            </div>
    </Layout>
</template>

<script>
import Layout from '../components/Layout.vue';
export default {
     components: {
       Layout
   },
  name: "Rooms",
  data() {
    return {
      Vanoa: "VANOA",
      BestRooms: "Best Rooms",
      NoImageSelected: "No Image Selected",
      Reservations: "Reservations",
      BookNow: "BOOK NOW",

    };
  },
};
</script>