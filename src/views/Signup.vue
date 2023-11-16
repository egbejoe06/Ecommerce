<template>
  <div class="sign-in sign-up">
    <div class="sg1">Sign up</div>
    <form>
      <div>
        <div class="sg2">
          <label class="sg21">Name</label>
          <div class="sg22" :class="{ error: err4 !== '' }">
            <div class="sg211">
              <div>
                <input required type="text" placeholder="Full Name" v-model="Name" />
              </div>
              <div><img src="../assets/Vector.svg" alt="" /></div>
            </div>
          </div>
          <div class="err">{{ err4 }}</div>
        </div>
        <div class="sg2">
          <label class="sg21">Email</label>
          <div class="sg22" :class="{ error: err5 !== '' }">
            <div class="sg211">
              <div>
                <input
                  required
                  type="email"
                  placeholder="Email address"
                  v-model="SignupEmail"
                />
              </div>
              <div><img src="../assets/Vector.svg" alt="" /></div>
            </div>
          </div>
          <div class="err">{{ err5 }}</div>
        </div>
        <div class="sg2">
          <label class="sg21">Password</label>
          <div class="sg22" :class="{ error: err6 !== '' }">
            <div class="sg211">
              <div>
                <input
                  :type="IsPassword ? 'password' : 'text'"
                  placeholder="Password"
                  v-model="SignupPassword"
                  required
                />
              </div>
              <div @click="showpass()"><img src="../assets/showpass.svg" alt="" /></div>
            </div>
          </div>
          <div class="err">{{ err6 }}</div>
        </div>
        <div class="sg3">
          <div class="sg31">
            <input v-model="terms" type="checkbox" />
            <label class="sg311 sg3111"
              >Terms and conditions agreement should start with an introduction that lets
              users know they’re reading a terms and conditions agreement</label
            >
          </div>
        </div>
        <div>
          <button
            :style="{
              backgroundColor:
                this.SignupEmail.length > 2 && this.SignupPassword.length > 2
                  ? '#4172DC'
                  : '#C4C4C4',
              color:
                this.SignupEmail.length > 2 && this.SignupPassword.length > 2
                  ? 'White'
                  : 'black',
            }"
            @click.prevent="validate2()"
            :disabled="!terms"
            class="sg4"
          >
            Sign up
          </button>
        </div>
        <div class="sg6">
          <div class="sg61"></div>
          <div class="sg62">or</div>
          <div class="sg63"></div>
        </div>
        <div>
          <button @click.prevent="validate3()" :disabled="!terms" class="sg5">
            <div><img src="../assets/Google__G__Logo.png" alt="" /></div>
            <div>Sign up by Google</div>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      IsPassword: true,
      err4: "",
      err5: "",
      err6: "",
      Name: "",
      SignupEmail: "",
      SignupPassword: "",
      terms: false,
    };
  },
  methods: {
    showpass() {
      this.IsPassword = !this.IsPassword;
    },
    validate2() {
      this.err4 = "";
      this.err5 = "";
      this.err6 = "";
      let valid = true;
      if (this.Name.length < 2) {
        this.err4 = "Name cannot be empty";
        valid = false;
      }
      if (this.SignupEmail.length < 2) {
        this.err5 = "Email cannot be empty";
        valid = false;
      }
      if (this.SignupPassword.length < 2) {
        this.err6 = "Password cannot be empty";
        valid = false;
      }
      if (valid) {
        this.$emit("show-popup"),
          {
            SignupEmail: this.SignupEmail,
            Name: this.Name,
          };
      }
    },
    validate3() {
      this.$emit("show-popup");
    },
  },
};
</script>
<style>
.sign-up {
  width: 400px;
  height: 0;
}
.sg3111 {
  width: 350px;
}
</style>
