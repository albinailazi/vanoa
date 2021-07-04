<template>
<div style="padding:20px 50px;">

    <h1 style="font-size: 30px; font-style: italic; margin:40px 0;">Billing information</h1>

<table class="table-left" style="49%; font-size: 18px;">
    <thead>
        <tr>
            <th>{{Reservation.firstname}} {{Reservation.lastname}}</th>
        </tr>
        <tr>
            <th>{{Reservation.address}}, {{Reservation.city}}</th>
        </tr>
        <tr>
            <th>{{Reservation.phone}}</th>
        </tr>
        <tr>
            <th>{{Reservation.email}}</th>
        </tr>
    </thead>
</table>

<table class="table-right" style="49%; font-size: 18px;">
    <thead>
        <tr>
            <th>{{Vanoa}}</th>
        </tr>
        <tr>
            <th>{{VanoaAddress}}, {{Reservation.city}}</th>
        </tr>
        <tr>
            <th>{{VanoaPhone}}</th>
        </tr>
        <tr>
            <th>{{VanoaEmail}}</th>
        </tr>
    </thead>
</table>


<table v-if="Reservation.services" class="table table-hover" style="background: rgba(0, 0, 0, 0.01); margin-top:20px;">
        <thead class="thead-default">
          <tr>
                <th style="text-align:left; font-weight:bold;">Product</th>
                <th style="text-align:right; font-weight:bold;">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align:left">{{Reservation.room.title}}</td>
            <td style="text-align:right">{{Reservation.room.price}} &euro;</td>
          </tr>
          <tr v-for="service in Reservation.services"
                  v-bind:item="service"
                  v-bind:key="service._id">
            <td style="text-align:left">
              <label>{{ service.title }}</label>
            </td>
            <td style="text-align:right">
              <label>{{service.price.toFixed(2)}} &euro;</label>
            </td>

          </tr>
          <tr style="background: rgba(0, 0, 0, 0.075)">
            <td style="font-weight:bold; text-align:left;">Total</td>
            <td style="font-size: 19px;font-weight: bold; text-align:right">{{totalPrice}} &euro;</td>
          </tr>
        </tbody>
      </table>



      <div style="margin-top: 50px; text-align:left;">
          Reservation date: {{billDate}}
      </div>

</div>




</template>

<script>
import API from "../api/api";
export default {
  name: "Index",
  data() {
    return {
      Vanoa: "VANOA",
      VanoaPhone: "00 111 222 333",
      VanoaAddress:"Prishtine",
      VanoaEmail: "vanoa@gmail.com",
      totalPrice: 0,
      Reservation: {
          room: {},
          services: []
      },
      billDate: '',
    };
  },
  methods: {
    getBillDate() {

      const current = new Date(this.Reservation.createdAt);
      let day = current.getDate().toString();
      let month = (current.getMonth() + 1).toString();
      let year = current.getFullYear().toString();

      if(day.length == 1)
        day = "0" + day;

      if(month.length == 1)
        month = "0" + month;

      this.billDate = `${day}.${month}.${year}`;
    },

    calculateTotalPrice(){
      this.totalPrice = this.Reservation.room.price;

      if(this.Reservation.services){
        this.Reservation.services.forEach(s => {
          this.totalPrice -= -s.price;
        })
      }

      this.totalPrice = this.totalPrice.toFixed(2);
    },

    getBillDetails(){
        API.get('reservation/get', { params: {
        _id: this.$route.params.id,
      }}).then((response) => {
        console.log(response)
            this.Reservation = response.data.reservation;
            this.calculateTotalPrice();
            this.getBillDate();
            setTimeout(() => {
                 print();
            }, 1000)
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  },
    
  mounted() {
    this.getBillDetails();
  },
};
</script>

<style>

.table-left, .table-right{
    margin-bottom: 30px;
}

.table-left{
    float:left;
}

.table-right{
    float: right;
}


.table-left td, .table-left th{
    text-align: left;
    padding:5px 0;
}

.table-right td, .table-right th{
    text-align: right;
    padding:5px 0;
}

</style>
