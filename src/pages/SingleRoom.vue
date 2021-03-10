<template>
      <div class="mainWrap">
                <section class="block_section banner_section" style="background-image: url('dist/images/singleRoom.jpg');">
                    <div class="banner_content">
                        <div class="banner_logo">
                            <span>V</span>
                        </div>
                        <div class="banner_heading">
                            <h1>VANOA</h1>
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
                                    <h2>Best Rooms</h2>
                                     <!-- <?php foreach ($allRooms as $oneRoom): ?> -->
                                    <ul class="rooms_products">
                                        <li class="rooms_display">
                                             <!-- <?php if ($oneRoom['image']): ?> -->
                                                <img width="60" height="60" src="<?php echo $oneRoom['image']; ?>"  >
                                                    <!-- <?php else: ?> -->
                                                        <p>No image Selected</p>
                                            <!-- <?php endif?> -->
                                            <!-- <a href="singleRoom.php?id=<?php echo $oneRoom['id']; ?>"><?php echo $oneRoom['title']  ?></a>
                                            <span><?php echo $oneRoom['price']  ?></span> -->
                                        </li>
                                    </ul>
                                <!-- <?php endforeach; ?> -->
                                <div class="rooms_reservation">
                                    <p>Reservations</p>
                                    <span>044-100-100</span>
                                </div>
                            </li>
                            </div>
                            <div class="rooms"> 
                                <div class="row has_gutter">
                                    <div class="column-12 column-mob-12">
                                        <div class="rooms_img">
                                            <!-- <?php if ($room['image']): ?> -->
                                                <img src="<?php echo $room['image']; ?>" >
                                                    <!-- <?php else: ?> -->
                                                        <p>No image Selected</p>
                                            <!-- <?php endif?> -->
                                        </div>
                                    </div>
                                </div> 
                            </div>
                            <div class="row has_gutter">
                                <div class="column-7 column-mob-12">
                                    <div class="rooms_title">
                                        <!-- <a href="javascript:void(0)"><?php echo $room['title'] ?></a> -->
                                        <div class="rooms_price">
                                            <!-- <span><?php echo $room['price'] ?></span> -->
                                        </div>
                                    </div>
                                </div>
                                <div class="column-7 column-mob-12">               
                                    <div class="rooms_content">
                                        <!-- <p><?php echo $room['description'] ?></p> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
</template>