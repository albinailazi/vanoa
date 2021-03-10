<template>
    <div class="mainWrap">
                <section class="block_section contact_section">
                    <div id="map" style="width:100%; height: 400px; display:none;"></div>

                    <!-- <iframe style="width:100%; height: 600px; border:0;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9703.63681699247!2d21.15272827883984!3d42.661079446194044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ee1325c4fbb%3A0x5219d01d01e788dc!2sQendra%2C%20Pristina!5e1!3m2!1sen!2s!4v1594743120327!5m2!1sen!2s" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    <script>
                      var map;
                      function initMap() {
                          return;
                        map = new google.maps.Map(document.getElementById('map'), {
                          center: {lat: -34.397, lng: 150.644},
                          zoom: 8
                        });
                      }
                    </script>
                    <script src="https://maps.googleapis.com/maps/api/js?callback=initMap" async defer>
                    </script> -->
                </section>
                <section class="block_section content_section">
                    <div class="container">
                            <div class="border_title seperator white">
                                <span>V</span>
                            </div>
                            <p class="contact_content">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                            <hr class="contact_line">
                    </div>
                </section>
                <section class="block_section contact_section">
                    <div class="container">
                        <form class="contact_form has_gutter" id="contact_form" action="" method="POST">
                            <div class="row">
                                <div class="column-6 nameContainer">
                                
                                    <label class="">Name</label>
                                    <input type="text" id="name" name="name">
                                </div>
                                <div class="column-6 emailContainer">
                                    <label>Email</label>
                                    <input type="email" id="email" name="email">
                                </div>
                            </div>
                            <div class="row">
                                <div class="column-12 subjectContainer">
                                    <label>Subject</label>
                                    <input type="text" id="subject" name="subject">
                                </div>
                            </div>
                            <div class="row">
                                <div class="column-12 messageContainer">
                                    <label>Message</label>
                                    <textarea rows="3" id="message" name="message"></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div class="column-12">
                                    <button class="contact_button" type="submit" name="submitted">Send</button>  
                                </div> 
                            </div>
                        </form>
                    </div>
                </section>
            </div>
</template>