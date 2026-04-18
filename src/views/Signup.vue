<template>
  <div class="signup-wrapper">
    <!-- الجهة اليسرى: النموذج -->
    <div class="signup-form">
      <h1>CampusRide</h1>
      <h2>Sign Up</h2>
      <form @submit.prevent="register">
        <label>Email</label>
        <input v-model="email" type="email" required />

        <label>Password (6-digit code)</label>
        <input v-model="password" type="password" required />

        <label>Confirm Password</label>
        <input v-model="confirmPassword" type="password" required />

        <label>Phone Number</label>
        <input v-model="phone" type="tel" required />

        <button type="submit">Create Account</button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
    </div>

    <!-- الجهة اليمنى: الترحيب -->
    <div class="signup-side">
      <h2>Welcome to CampusRide!</h2>
      <p>Create your account and start your campus journey.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      error: ""
    };
  },
  methods: {
    register() {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@sm\.imamu\.edu\.sa$/;
      const passwordPattern = /^\d{6}$/;
      const phonePattern = /^\d{10}$/;

      if (!emailPattern.test(this.email)) {
        this.error = "البريد يجب أن يكون جامعي @sm.imamu.edu.sa";
        return;
      }

      if (!passwordPattern.test(this.password)) {
        this.error = "كلمة المرور يجب أن تكون 6 أرقام فقط";
        return;
      }

      if (this.password !== this.confirmPassword) {
        this.error = "كلمة المرور وتأكيدها غير متطابقين";
        return;
      }

      if (!phonePattern.test(this.phone)) {
        this.error = "رقم الجوال يجب أن يكون مكون من 10 أرقام";
        return;
      }

      // حفظ البيانات مؤقتًا
      localStorage.setItem("userEmail", this.email);
      localStorage.setItem("userPhone", this.phone);
      alert("تم إنشاء الحساب بنجاح!");
      this.$router.push("/");
    }
  }
};
</script>

<style>
.signup-wrapper {
  display: flex;
  height: 100vh;
  font-family: Arial, sans-serif;
}

/* النموذج */
.signup-form {
  flex: 1;
  padding: 60px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.signup-form h1 {
  font-size: 28px;
  color: #003366;
  margin-bottom: 10px;
}

.signup-form h2 {
  font-size: 22px;
  margin-bottom: 30px;
  color: #0055aa;
}

.signup-form label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

.signup-form input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

button {
  background-color: #007bff;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0055aa;
}

.error {
  color: red;
  margin-top: 15px;
}

/* الجهة اليمنى */
.signup-side {
  flex: 1;
  background-color: #003366;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;
  text-align: center;
}

.signup-side h2 {
  font-size: 28px;
  margin-bottom: 20px;
}

.signup-side p {
  font-size: 18px;
}
</style>