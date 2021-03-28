<template>
  <Layout>
    <div class="About">
      <section
        class="block_section banner_section"
        style="background-image: url('content/images/about.jpg');"
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
              <div class="aboutUs_image">
                <div class="slideshow-container"></div>

                <div class="mySlides fadeSlider">
                  <img
                    v-bind:src="'/content/images/aboutUs_hotel.jpg'"
                    style="width:500px;height:300px;"
                  />
                </div>

                <div class="mySlides fadeSlider">
                  <img
                    :src="'/content/images/bar.jpg'"
                    style="width:500px;height:300px;"
                  />
                </div>

                <div class="mySlides fadeSlider">
                  <img
                    :src="'/content/images/food.jpg'"
                    style="width:500px;height:300px;"
                  />
                </div>

                <div class="mySlides fadeSlider">
                  <img
                    :src="'/content/images/pool.jpg'"
                    style="width:500px;height:300px;"
                  />
                </div>

                <div class="mySlides fadeSlider">
                  <img
                    :src="'/content/images/massage.jpg'"
                    style="width:500px;height:300px;"
                  />
                </div>

                
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
    </div>
  </Layout>
</template>

<script>
import Layout from "../components/Layout.vue";
export default {
  components: { Layout },
  name: "About",
  data() {
    return {
      Vanoa: "VANOA",
      AboutTitle: "About Us",
      AboutDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rerum voluptates, sequi porro corrupti dignissimos fugit qui alias ea ducimus officiis odio aperiam mollitia? Fuga ratione libero fugit eveniet sunt?",
    };
  },
};

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (slides.length == 0) {
    setTimeout(showSlides, 100);
    return;
  }

  console.log(slides[1], slides.length);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
</script>
