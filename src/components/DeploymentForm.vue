<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-7">
        <div class="card shadow-lg border-0 rounded-lg mt-5">
          <div class="card-header">
            <h3 class="text-center font-weight-light my-4">Add Deployment</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="handleSubmit()">
              <div class="row mb-3">
                <div class="form-floating mb-3">
                  <div class="form-floating mb-3 mb-md-0">
                    <input
                      type="text"
                      class="form-control"
                      id="developerName"
                      v-model="devname"
                    />
                    <label for="inputFirstName">Developer name</label>
                  </div>
                </div>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="developeremail"
                  v-model="email"
                />
                <label for="inputEmail">Email address</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="sourceAddress"
                  placeholder=""
                  v-model="sourcelink"
                />
                <label for="inputSourcelink">Source Link</label>
              </div>
              <div class="row mb-3">
                <div class="col-md-6">
                  <div class="form-floating mb-3 mb-md-0">
                    <input
                      type="text"
                      class="form-control"
                      id="ticket"
                      placeholder=""
                      v-model="ticket"
                    />
                    <label for="inputTicket">Ticket No</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-floating mb-3 mb-md-0">
                    <input
                      class="form-control"
                      id="inputPasswordConfirm"
                      type="text"
                     
                      v-model="destination"
                    />
                    <label for="inputWeb">destination name</label>
                  </div>
                </div>
              </div>
              <div class="mt-4 mb-0">
                <div class="d-grid">
                 <input type="submit" value="Submit" class="btn btn-primary btn-block">
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DeploymentForm",
  data() {
    return {
      devname: "",
      email: "",
      sourcelink: "",
      ticket: "",
      destination:""
    };
  },
  methods: {
    handleSubmit() {
      var source = {
        devname: this.devname,
        email: this.email,
        sourcelink: this.sourcelink,
        ticket: this.ticket,
        destinationlink:this.destination
      };
      axios
        .post("/v1/postlink", source)
        .then((res) => {
          console.log(res);
          alert("Source sent to IT infra team for Deployment");
        })
        .catch((err) => {
          var msg = err.response.data.status;
          console.log(msg);
          alert(msg);
        });
      (this.devname = ""),
        (this.email = ""),
        (this.sourcelink = ""),
        (this.ticket = "");
        this.destination=""
    },
  },
};
</script>

<style>
</style>