<template>
    <div>
     <section class="block_section banner_section" style="background-image: url('content/images/services_banner.jpg');">
                <div class="banner_content">
                    <div class="banner_logo">
                        <span>V</span>
                    </div>
                    <div class="banner_heading">
                        <h1>VANOA</h1>
                    </div>
                </div>
            </section>
            <section class="block_section left_section">
                <div class="row">
                    <div class="column-6 column-mob-12">
                        <div class="left_image">
                            <!-- <?php if ($services[0] ['image']): ?> -->
                                <img src="<?php echo $services[0] ['image']; ?>" >
                            <!-- <?php else: ?> -->
                                    <p>No image Selected</p>
                            <!-- <?php endif?>    -->
                        </div>
                    </div>
                    <div class="column-6 column-mob-12">
                        <div class="left_content">
                            <div class="left_title">
                                <!-- <h1><?php echo $services[0] ['title']; ?></h1> -->
                            </div>
                            <div class="left_paragraph">
                                <!-- <p><?php echo $services[0] ['description']; ?></p> -->
                            </div>
                        </div>
                    </div>
              
                </div>
            </section>
     
         <section class="block_section right_section">
            <div class="row" >
                <div class="column-6 column-mob-12">
                    <div class="right_content">
                        <div class="right_title">
                            <!-- <h1><?php echo $services[1] ['title']; ?></h1> -->
                        </div>
                        <div class="right_paragraph">
                           <!-- <p><?php echo $services[1] ['description']; ?></p> -->
                        </div>
                    </div>
                </div>
                <div class="column-6 column-mob-12">
                    <div class="right_image">
                        <!-- <?php if ($services[1] ['image']): ?> -->
                                <img src="<?php echo $services[1] ['image']; ?>" >
                            <!-- <?php else: ?> -->
                                    <p>No image Selected</p>
                            <!-- <?php endif?>    -->
                    </div>
                </div>
            </div>
        </section>
        <section class="block_section left_section">
            <div class="row">
                <div class="column-6 column-mob-12">
                    <div class="left_image">
                         <!-- <?php if ($services[2] ['image']): ?> -->
                                <img src="<?php echo $services[2] ['image']; ?>" >
                            <!-- <?php else: ?> -->
                                    <p>No image Selected</p>
                            <!-- <?php endif?>  -->
                    </div>
                </div>
                <div class="column-6 column-mob-12">
                    <div class="left_content">
                        <div class="left_title">
                            <!-- <h1><?php echo $services[2] ['title']; ?></h1> -->
                        </div>
                        <div class="left_paragraph">
                            <!-- <p><?php echo $services[2] ['description']; ?></p> -->
                        </div>
                    </div>
                </div>
            </div>
       
            </section>
            
            <section class="block_section right_section">
                <div class="row">
                    <div class="column-6 column-mob-12">
                        <div class="right_content">
                            <div class="right_title">
                                 <!-- <h1><?php echo $services[3] ['title']; ?></h1>  -->
                            </div>
                            <div class="right_paragraph">
                                <!-- <p><?php echo $services[3] ['description']; ?></p> -->
                            </div>
                        </div>
                    </div>
                    <div class="column-6 column-mob-12">
                        <div class="right_image">
                            <!-- <?php if ($services[3] ['image']): ?> -->
                                <img src="<?php echo $services[3] ['image']; ?>" >
                            <!-- <?php else: ?> -->
                                    <p>No image Selected</p>
                            <!-- <?php endif?>  -->
                        </div>
                    </div>
                </div>
            </section> 
   
    </div>
</template>

<script>
export default {};
</script>