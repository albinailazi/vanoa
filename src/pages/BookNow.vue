<template>
<Layout>
    <div class="login-body" style="padding-top:150px; padding-bottom:150px;">
    <div class="login-content">
      <div class="logo_footer white seperator">
        <span>V</span>
      </div>
    </div>
    </div>

<h1>{{Room.image}}</h1>


<form
        class="login_box"
        id="box"
        @submit.prevent="payNow(firstname, lastname, city, address, phone, email, idnumber, cardNumber, cardHolder, accountNumber, expMM, expYY, cvv)"
      >

    <div class="usernameContainer">
          <label for="firstname" id="label">Name</label>
          <input type="text" v-model="firstname" name="firstname" id="firstname" />
    </div>

    <div class="usernameContainer">
          <label for="lastname" id="label">Surname</label>
          <input type="text" v-model="lastname" name="lastname" id="lastname" />
    </div>

    <div class="usernameContainer">
          <label for="city" id="label">City</label>
          <input type="text" v-model="city" name="city" id="city" />
    </div>

    <div class="usernameContainer">
          <label for="address" id="label">Address</label>
          <input type="text" v-model="address" name="address" id="address" />
    </div>
    
    <div class="usernameContainer">
          <label for="phone" id="label">Phone</label>
          <input type="text" v-model="phone" name="phone" id="phone" />
    </div>

    <div class="usernameContainer">
          <label for="email" id="label">Email address</label>
          <input type="text" v-model="email" name="email" id="email" />
    </div>

    <div class="usernameContainer">
          <label for="idnumber" id="label">Id number</label>
          <input type="text" v-model="idnumber" name="idnumber" id="idnumber" />
    </div>

     <div class="usernameContainer">
          <label for="cardNumber" id="label">Card Number</label>
          <input type="text" v-model="cardNumber" name="cardNumber" id="cardNumber" />
    </div>

    <div class="usernameContainer">
          <label for="cardHolder" id="label">card holder</label>
          <input type="text" v-model="cardHolder" name="cardHolder" id="cardHolder" />
    </div>

    <div class="usernameContainer">
          <label for="accountNumber" id="label">account no.</label>
          <input type="text" v-model="accountNumber" name="accountNumber" id="accountNumber" />
    </div>

    <div class="usernameContainer">
          <label for="MM" id="label">expiration </label>
          <input type="text" v-model="expMM" placeholder="MM" />
          <input type="text" v-model="expYY" placeholder=" YY" />
    </div>

    <div class="usernameContainer">
          <label for="cvv" id="label">CVV</label>
          <input type="text" v-model="cvv" placeholder="CVV" />
    </div>

    <div class="usernameContainer">
          <label id="label">Total</label>
          <input type="text" value="200" disabled style="text-align:right"/>
    </div>

    <div class="login_button">
          <button type="submit" name="submit"> {{ PayNow }}</button>
        </div>

</form>
</Layout>
    
</template>

<script>
import Layout from "../components/Layout";
import API from "../api/api";
export default {
  name: "Index",
  components: {
    Layout,
  },
  data() {
    return {
      Vanoa: "VANOA",
      AboutTitle: "About Us",
      AboutDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rerum voluptates, sequi porro corrupti dignissimos fugit qui alias ea ducimus officiis odio aperiam mollitia? Fuga ratione libero fugit eveniet sunt?",
      OurServices: "OUR SERVICES",
      ServiceTitle: "Service",
      ServiceContent: "Service Content",
      FavoriteRooms: "FAVORITE ROOMS",
      RoomTitle: "Room",
      ViewAllRooms: "VIEW ALL ROOMS",
      PayNow:"Pay now",
      Room: {},
      firstname:'',
      lastname:'',
      city:'',
      address: '',
      phone: '',
      idnumber: '',
      cardNumber: '',
      cardHolder: '',
      accountNumber: '',
      expMM: '',
      expYY: '',
      cvv: '',
      email: '',
    };
  },
  methods: {
    fetchRoom() {
      API.get("room/get-room", {
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
    payNow(firstname, lastname, city, address, phone, email, idnumber, cardNumber, cardHolder, accountNumber, expMM, expYY, cvv) {

      API.post("reservation/create", {
        firstname: firstname,
        lastname: lastname,
        city: city,
        address: address,
        phone: phone,
        email: email,
        idnumber: idnumber,
        cardNumber: cardNumber,
        cardHolder: cardHolder,
        accountNumber: accountNumber,
        expMM: expMM,
        expYY: expYY,
        cvv: cvv,

      }).then((response) => {
          console.log(response);

        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
    
  mounted() {
    this.fetchRoom();
  },
};
</script>

<style>
#box{
    margin-left:500px;
    margin-right: 500px;
    margin-top:55px;
}

#label{
    float:left;
    font-style: italic;
}

</style>