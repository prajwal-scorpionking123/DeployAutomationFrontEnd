<template>
  <div class="container">
      <table class="table">
  <thead>
    <tr>
       <th scope="col">Sl.No</th>
          <th scope="col">Source Link</th>
          <th scope="col">Ticket ID</th>
          <th scope="col">Request</th>
          <th scope="col">Deploy</th>
          <th scope="col">One Time Password</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(source, index) in sources" :key="index">
          <td>{{ index }}</td>
          <td>{{ source.sourcelink }}</td>
          <td>{{ source.ticket }}</td>
          <td>
            <button
              class="btn btn-dark btn-sm"
              :disabled="source.isrequested"
              @click="sendOtp(source._id)"
            >
              Request Approval
            </button>
          </td>
          <td>
            <button
              class="btn btn-dark btn-sm"
              :disabled="source.isapproved"
              @click.prevent="deploy(source.sourcelink,source.destinationlink,source._id)"
            >
              Deploy
            </button>
          </td>
          <!-- <td><input type="text" name="otp" v-model="otp" /></td> -->
          <td>
            <button
              class="btn btn-dark btn-sm"
              :disabled="source.isvarified"
              @click.prevent="verifyOtp(source._id)"
            >
              Verify OTP
            </button>
          </td>
        </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "RequestComponent",
  data() {
    return {
      sources: null,
      otp: "",
      // isVerified: false,
      // isApproved: false,
      // isRequested: false,
    };
  },
  methods: {
     
    
    verifyOtp(id) {
      var otp = prompt("enter otp");
      var usrOtp = this.$session.get("otp");
      if (usrOtp === otp) {
        alert("Otp Verified..!  Karde Deploy");
        this.isVerified(id,true)
        this.isApproved(id,false)
      }else{
        alert("Otp Barabar Enter kar!");
      }
    },
    getSource() {
      axios
        .get("/v1/getSources")
        .then((res) => {
          console.log(res.data);
          this.sources = res.data.sources;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    isRequested(id,v){
         var value={
          "value":v
      }
      axios.put(`/v1/isrequested/${id}`, value).then((res) => {
          console.log(res)
       
        this.getSource()
      }).catch((err)=>{
          console.log(err)
          alert(err)

      });
    },
    isApproved(id,v){
       var value={
          "value":v
      }
      axios.put(`/v1/isapproved/${id}`, value).then((res) => {
          console.log(res)
         
          
        this.getSource()
      }).catch((err)=>{
          alert(err)

          console.log(err)
      });
    },
    isVerified(id,v){
        var value={
          "value":v
      }
      axios.put(`/v1/isverified/${id}`, value).then((res) => {
          console.log(res)
        
        this.getSource()
      }).catch((err)=>{
          alert(err)

          console.log(err)
      });
    },
    deploy(sourcelink,destination,id) {
      var deployment = {
        sourcelink: sourcelink,
        destinationlink: destination,
      };
      console.log(deployment);
      axios.post("/v1/deployMultiple", deployment).then((res) => {
        alert("Deployment Success");
        console.log(res);
        this.isApproved(id,true)
      });
    },
    sendOtp(id) {
      var email = {
        to: "prajwal.u.patil@gmail.com",
      };
      axios
        .post("/v1/otpmail", email)
        .then((res) => {
          alert("OTP SENT")
          this.$session.set("otp", res.data.otp);
          this.isRequested(id,true)
          this.isVerified(id,false)
        })
        .catch((err) => {
          alert(err)
          console.log(err);
        });
     
    },
  },
  created() {
    this.getSource();
  },
}
</script>

<style>

</style>