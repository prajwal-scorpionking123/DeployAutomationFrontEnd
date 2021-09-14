<template>
  <div class="container">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <div class="card shadow-lg border-0 rounded-lg mt-5">
            <div class="card-header">
              <h3 class="text-center font-weight-light my-4">Login</h3>
            </div>
            <div class="card-body">
              <form @submit.prevent="login()">
                <div class="form-floating mb-3">
                  <input
                    class="form-control"
                    id="inputEmail"
                    type="text"
                    v-model="Username"
                    placeholder="name@example.com"
                  />
                  <label for="inputEmail">Username</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    class="form-control"
                    id="inputPassword"
                    v-model="Password"
                    type="password"
                    placeholder="Password"
                  />
                  <label for="inputPassword">Password</label>
                </div>
                <div class="form-floating mb-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      value="developer"
                       v-model="userType"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Developer
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      value="admin"
                      v-model="userType"
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Admin
                    </label>
                  </div>
                </div>
                <div
                  class="
                    d-flex
                    align-items-center
                    justify-content-between
                    mt-4
                    mb-0
                  "
                >
                  <input type="submit" class="btn btn-primary" value="Login" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      Username: "",
      Password: "",
      userType:"",
    };
  },
  methods: {
    login() {
      // if(this.userType=="admin"){
      //   this.$router.push({ path: "/Dashboard" });
      // }else{
      // this.$router.push({ path: "/DeploymentForm" });
      // }
      const log = {
        Username: this.Username,
        Password: this.Password,
      };
      axios
        .post("/v1/login", log)
        .then((res) => {
          console.log(res.value);
          this.$fire({
            title: "Success",
            text: "Successfully Logged In",
            type: "success",
            timer: 3000,
          });
           if(this.userType=="admin"){
              this.$router.push({ path: "/Dashboard" });
           }else{
             this.$router.push({ path: "/DeploymentForm" });
             }
        })
        .catch((err) => {
          this.$fire({
            title: "Failed",
            text: err.response.data.status,
            type: "warning",
            timer: 3000,
            reverseButton: true,
          }).then((r) => {
            console.log(r.value);
          });
        });
      (this.Username = ""), (this.Password = "");
    },
  },
};
</script>

<style>
</style>