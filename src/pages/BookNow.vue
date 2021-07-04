<template>
<Layout>

<div class="About">
      <section class="block_section banner_section" style="background-image: url('content/images/payment.png');">
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
        </div>
      </section>
</div>


<img id="imgstyle" v-bind:src="Room.image" />


<form
        class="login_box"
        id="box"
        @submit.prevent="payNow(firstname, lastname, city, address, phone, email, idnumber, cardNumber, cardHolder, accountNumber, expMM, expYY, cvv, from, to)"
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
          <input type="text" v-model="cardNumber" name="cardNumber" id="cardNumber" pattern="[\d]{16}" />
    </div>

    <div class="usernameContainer">
          <label for="cardHolder" id="label">card holder</label>
          <input type="text" v-model="cardHolder" name="cardHolder" id="cardHolder" />
    </div>

    <div class="usernameContainer">
          <label for="MM" id="label">expiration </label>
          <input type="text" v-model="expMM" placeholder="MM"  pattern="[\d]{2}"/>
          <input type="text" v-model="expYY" placeholder=" YY"  pattern="[\d]{2}"/>
    </div>

    <div class="usernameContainer">
          <label for="cvv" id="label">CVV</label>
          <input type="text" v-model="cvv" placeholder="CVV"  pattern="[\d]{3}"/>
    </div>


       <div class="usernameContainer">
          <label id="label" for="from">From:</label>
          <input type="date" v-model="from" style="text-align:right"/>
    </div>

       <div class="usernameContainer">
          <label id="label" for="to">To:</label>
          <input type="date" v-model="to" style="text-align:right"/>
    </div>



      <table v-if="services" class="table table-hover" style="background: rgba(0, 0, 0, 0.01); margin-top:20px;">
        <thead class="thead-default">
          <tr>
                <th></th>
                <th>Service</th>
                <th style="text-align:right">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>{{Room.title}}</td>
            <td style="text-align:right">{{Room.price}} &euro;</td>
          </tr>
          <tr v-for="service in services"
                  v-bind:item="service"
                  v-bind:key="service._id">

                  <td>
                    <input type="checkbox" :id="service.slug" v-model="service.checked" style="width:auto; margin:0" v-on:change="calculateTotalPrice()">
                  </td>
                  <td>
                    <label :for="service.slug">{{ service.title }}</label>
                  </td>
                  <td style="text-align:right">
                    <label :for="service.slug">{{service.price.toFixed(2)}} &euro;</label>
                    
                  </td>

          </tr>
          <tr style="background: rgba(0, 0, 0, 0.075)">
            <!-- <td colspan="2" style="text-align:right; font-weight:bold">Total</td> -->
            <td colspan="3" style="font-size: 19px;font-weight: bold; text-align:right">{{totalPrice}} &euro;</td>
          </tr>
        </tbody>
      </table>

    <div>
      <span style="color:red">{{errorMessage}}</span>
    </div>
     <div class="login_button">
          <button type="submit" > {{ PayNow }}</button>
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
      from: '',
      to:'',
      errorMessage: '',
      serviceName: '',
      services: [],
      totalPrice: 0,
    };
  },
  methods: {
    currentDate(daysToAdd) {

      if(daysToAdd && isNaN(daysToAdd))
        daysToAdd = 0;

      const current = new Date(new Date().getTime()+(daysToAdd*24*60*60*1000));
      let day = current.getDate().toString();
      let month = (current.getMonth() + 1).toString();
      let year = current.getFullYear().toString();

      if(day.length == 1)
        day = "0" + day;

      if(month.length == 1)
        month = "0" + month;

      return `${year}-${month}-${day}`;
    },

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

     fetchServices() {
      API.get("service/get-all")
        .then((response) => {
          console.log(response);
          this.services = response.data.services;
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    payNow(firstname, lastname, city, address, phone, email, idnumber, cardNumber, cardHolder, accountNumber, expMM, expYY, cvv, from, to) {
    //payNow(from, to) {
      this.errorMessage = "";
      API.get('reservation/check', { params: {
        from,
        to
      }}).then((response) => {
        console.log(response)
        if(response.data.exists) {
          this.errorMessage = "Datat jane te zena";
          return;
        }

        let checkedServices = [];

        if(this.services)
          checkedServices = this.services.filter(s=> s.checked);

        const billDetails = {
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
          from: from,
          to: to,
          services: checkedServices,
          room: this.Room
        }
        API.post("reservation/create", {...billDetails})
        .then((response) => {
          console.log(response);
          const _id = response.data.reservation._id;
          this.$router.push({ name: "bill", params: {id: _id }});
        })
        .catch((error) => {
          console.log("error", error);
        });

        })
        .catch((error) => {
          console.log("error", error);
        });

      
    },

    calculateTotalPrice(){
      this.totalPrice = this.Room.price;

      if(this.services){
        this.services.filter(s => s.checked).forEach(s => {
          this.totalPrice -= -s.price;
        })
      }

      if(this.totalPrice)
        this.totalPrice = this.totalPrice.toFixed(2);
    }
  },
    
  mounted() {
    this.fetchRoom();
    this.fetchServices();
    this.calculateTotalPrice();

    this.from = this.currentDate(0);
    this.to = this.currentDate(1);

  },
};
</script>

<style>
#box{
    float:right;
    margin-top: -200px;
    margin-right:220px;


}

#label{
    float:left;
    font-style: italic;
}

#imgstyle{
    width: 500px;
    height: 300px;
    margin-top:30px;
    box-shadow: 10px 10px 40px 5px rgb(0 0 0 / 50%);
    vertical-align: middle;
    max-width: 100%;
}



</style>

<style>


.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
}

.table th,
.table td {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #eceeef;
}

.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #eceeef;
}

.table tbody + tbody {
  border-top: 2px solid #eceeef;
}

.table .table {
  background-color: #fff;
}

.table-sm th,
.table-sm td {
  padding: 0.3rem;
}

.table-bordered {
  border: 1px solid #eceeef;
}

.table-bordered th,
.table-bordered td {
  border: 1px solid #eceeef;
}

.table-bordered thead th,
.table-bordered thead td {
  border-bottom-width: 2px;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}

.table-hover tbody tr:hover {
  background-color: rgba(0, 0, 0, 0.075);
  cursor: pointer;
}

.table-active,
.table-active > th,
.table-active > td {
  background-color: rgba(0, 0, 0, 0.075);
}

.table-hover .table-active:hover {
  background-color: rgba(0, 0, 0, 0.075);
}

.table-hover .table-active:hover > td,
.table-hover .table-active:hover > th {
  background-color: rgba(0, 0, 0, 0.075);
}

.table-success,
.table-success > th,
.table-success > td {
  background-color: #dff0d8;
}

.table-hover .table-success:hover {
  background-color: #d0e9c6;
}

.table-hover .table-success:hover > td,
.table-hover .table-success:hover > th {
  background-color: #d0e9c6;
}

.table-info,
.table-info > th,
.table-info > td {
  background-color: #d9edf7;
}

.table-hover .table-info:hover {
  background-color: #c4e3f3;
}

.table-hover .table-info:hover > td,
.table-hover .table-info:hover > th {
  background-color: #c4e3f3;
}

.table-warning,
.table-warning > th,
.table-warning > td {
  background-color: #fcf8e3;
}

.table-hover .table-warning:hover {
  background-color: #faf2cc;
}

.table-hover .table-warning:hover > td,
.table-hover .table-warning:hover > th {
  background-color: #faf2cc;
}

.table-danger,
.table-danger > th,
.table-danger > td {
  background-color: #f2dede;
}

.table-hover .table-danger:hover {
  background-color: #ebcccc;
}

.table-hover .table-danger:hover > td,
.table-hover .table-danger:hover > th {
  background-color: #ebcccc;
}

.thead-inverse th {
  color: #fff;
  background-color: #292b2c;
}

.thead-default th {
  color: #464a4c;
  background-color: #eceeef;
}

.table-inverse {
  color: #fff;
  background-color: #292b2c;
}

.table-inverse th,
.table-inverse td,
.table-inverse thead th {
  border-color: #fff;
}

.table-inverse.table-bordered {
  border: 0;
}

.table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
  -ms-overflow-style: -ms-autohiding-scrollbar;
}

.table-responsive.table-bordered {
  border: 0;
}

</style>