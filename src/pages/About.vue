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
          <div class="row has_gutter" style="display: inline-block">
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
                <p>{{ Content }}</p>
              </div>
            </div>

                    

          </div>

          <div class="row" style="text-align:left; display:bock; margin-top: 50px; padding-left:50px;">
            <div class="column-6">


              
             <div class="row">
              <div class="column-12 messageContainer">
<h1 style="font-family: 'Roboto', sans-serif;
    font-size: 40px;
    color: #b3430b;
    margin-bottom: 20px;
    font-weight: 300; ">Rate</h1>
                <select style = " padding: 5px 10px;
    margin-bottom: 10px;
    border-color: rgb(177, 126, 100);
    outline: none;" v-model="stars">
                  <option value="0">=== No rating ===</option>
                  <option style="color:rgb(177, 126, 100)" value="1">★</option>
                  <option style="color:rgb(177, 126, 100)" value="2">★★</option>
                  <option style="color:rgb(177, 126, 100)" value="3">★★★</option>
                  <option style="color:rgb(177, 126, 100)" value="4">★★★★</option>
                  <option style="color:rgb(177, 126, 100)" value="5">★★★★★</option>
                </select>
              </div>
              </div>

            <div class="row">
              <div class="column-12 messageContainer">
                <textarea style="width: 100%;border-color: rgb(177, 126, 100); outline: none;" placeholder="Comment..."
                  rows="6"
                  v-model="comment"
                ></textarea>
              </div>
              </div>

              <div class="row">
              <div class="column-12 messageContainer">
                <a style="float: right;
                cursor:pointer;
    background-color: #b17e64;
    padding: 10px 12px 8px 10px;
    color: #fff;" @click="createRating()">Rate now</a>
              </div>
              </div>

            </div>
            

          <div class="row" v-for="rating in Ratings"
                  v-bind:item="rating"
                  v-bind:key="rating._id" >
                  
            <div class="column-12" style="text-align: left;">
              {{rating.username}}
            <hr style="border:5px;">
              <p style="font-style:italic">{{rating.comment}}</p>
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
import API, { prepareAuthorization } from "../api/api";
export default {
  components: { Layout },
  name: "About",
  data() {
    return {
      Vanoa: "VANOA",
      AboutTitle: "About Us",
      Content:'',
      comment: '',
      stars: 0,
      Ratings: [],
       
    };
  },

  methods: {
    createRating(){
      prepareAuthorization();
      API.post("rating/create", {
        comment: this.comment, 
        stars: this.stars
        })
      .then((response) => {
          console.log(response)
          this.comment = "";
          this.stars=0;
          this.getAllRatings();
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getAllRatings(){
      API.get("rating/get-all")
      .then((response) => {
          console.log(response)
          this.Ratings = response.data.ratings;

        })
        .catch((error) => {
          console.log(error);
        });
    },

     getContent() {
      API.get("about/get-content")
        .then((response) => {
          console.log(response)
          this.Content = response.data.content;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

   mounted() {
    this.getContent();
    this.getAllRatings();
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

  //console.log(slides[1], slides.length);
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
