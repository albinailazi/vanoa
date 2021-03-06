<template>
    <footer id="footer" class="main_footer">
            <div class="container">
                <div class="footerWrap">
                    <div class="logo_footer seperator">
                        <span>V</span>
                    </div>
                    <div class="footer_title">
                        <h1>VANOA</h1>
                    </div>
                    <div class="footer_content">
                        <div class="row has_gutter">
                            <div class="column-4">
                                <div class="footer_location">
                                    <a href="#">
                                        <!-- <img v-bind:src="content/images/pin.svg" alt=""> -->
                                        <h3>Street Name, 123 City</h3>
                                    </a>
                                </div>
                            </div>
                            <div class="column-4">
                                <div class="footer_email">
                                    <a href="#">
                                        <!-- <img v-bind:src="content/images/mail.svg" alt=""> -->
                                        <h3>example@mail.com</h3>
                                    </a>
                                </div>
                            </div>
                            <div class="column-4">
                                <div class="footer_phoneNumber">
                                    <a href="#">
                                        <!-- <img v-bind:src="content/images/phone.svg" alt=""> -->
                                        <h3>00 111 222 333</h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="footer_socials block_section">
                            <a href="https://www.facebook.com/">
                                <img v-bind:src="content/images/logo.svg" alt="">
                            </a>
                            <a href="https://www.instagram.com/">
                                <img v-bind:src="content/images/instagram.svg" alt="">
                            </a>
                            <a href="https://twitter.com">
                                <img v-bind:src="content/images/twitter.svg" alt="">
                            </a>
                        </div> -->
                        <div class="footer_contact block_section">
                            <a href="contact.html">CONTACT</a>
                        </div>
                        <div class="footer_copyright block_section">
                            <p>Vanoa - © 2020</p>
                        </div>
                    </div>
                </div>
            </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    //msg: String
  }
}
</script>