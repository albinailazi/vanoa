<template>
  <Layout>

  <div class="Home">
    <section
      class="block_section banner_section"
      style="background-image: url('content/images/slider.jpg');"
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

    <!-- <section class="block_section banner_section">
                        <div class="banner_content">
                            <div class="banner_logo">
                                <span>V</span>
                            </div> -->
    <!-- <div class="banner_heading">
                                <h1>{{ Vanoa }}</h1>
                            </div>
                        </div>
                    </section> -->
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
              <!-- <?php 
                                            $page = new ShowPages();
                                            $about = $page->get_Page(1);
                                        ?> -->
              <!-- <h1><?php echo $about['title']; ?></h1> -->
            </div>
            <div class="about_content">
              <p>{{ AboutDescription }}</p>
              <!-- <p><?php echo $about['description']; ?></p> -->
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
        <!-- <?php 
                                $s = new ShowServices();
                                $services = $s->get_Services();

                                foreach ($services as $service):
                            ?> -->
      </div>
      <div class="row has_gutter">
        <div class="column-3 column-mob-12">
          <div class="service_title">
            <h1>{{ ServiceTitle }}</h1>
            <!-- <h1><?php echo $service['title']; ?></h1> -->
          </div>
          <div class="service_image">
            <!-- <?php if ($service['image']): ?>
                                        <img src="<?php echo $service['image']; ?>">
                                            <?php else: ?>
                                                <p>No image Selected</p>
                                    <?php endif?> -->
          </div>
          <div class="service_content">
            <p>{{ ServiceContent }}</p>
            <!-- <p><?php echo $service['description']; ?></p> -->
          </div>
        </div>
      </div>
      <!-- <?php endforeach; ?> -->
    </section>
    <section class="block_section rooms_section">
      <div class="container">
        <div class="rooms_title">
          <h1>{{ FavoriteRooms }}</h1>
        </div>
        <!-- <?php 
                                $r = new ShowRooms();
                                $rooms = $r->get_Rooms();
                                foreach ($rooms as $room):
                            ?> -->
        <div class="row has_gutter">
          <div class="column-3 column-mob-12">
            <div class="service_image">
              <!-- <?php if ($room['image']): ?>
                                        <img src="<?php echo $room['image']; ?>">
                                            <?php else: ?>
                                                <p>No image Selected</p>
                                    <?php endif?> -->
            </div>
            <div class="room_title">
              <h1>{{ RoomTitle }}</h1>
              <!-- <h1><?php echo $room['title']; ?></h1> -->
              <a href="singleRoom.php?id=<?php echo $room['id']; ?>"
                >BOOK NOW</a
              >
            </div>
          </div>
        </div>
        <!-- <?php endforeach; ?> -->
        <div class="rooms_view">
          <a href="rooms.php">VIEW ALL ROOMS</a>
        </div>
      </div>
    </section>
  </div>

  </Layout>
</template>

<script>
import Layout from '../components/Layout';
export default {
  name: "Index",
  components:{
    Layout
  },
  data() {
    return {
      Vanoa: "VANOA",
      AboutTitle: "About",
      AboutDescription: "About Description",
      OurServices: "OUR SERVICES",
      ServiceTitle: "Service",
      ServiceContent: "Service Content",
      FavoriteRooms: "FAVORITE ROOMS",
      RoomTitle: "Room",
    };
  },
};
</script>
