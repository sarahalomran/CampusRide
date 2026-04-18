<template>
  <div class="login-wrapper">
    <!-- الجهة اليسرى: النموذج -->
    <div class="login-form">
      <h1>CampusRide</h1>
      <h2>Log in</h2>
      <form @submit.prevent="login">
        <label>Email</label>
        <input v-model="email" type="email" required />

        <label>Password</label>
        <input v-model="password" type="password" required />

        <div class="options">
          <label><input type="checkbox" /> Remember Me</label>
          <a href="#">Forgot Password?</a>
        </div>

        <button type="submit">Log in</button>

        <!-- رابط التسجيل -->
        <p class="signup-link">
          Don't have an account?
          <router-link to="/signup">Sign up</router-link>
        </p>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
    </div>

    <!-- الجهة اليمنى: الترحيب -->
    <div class="login-side">
      <h2>Welcome back!</h2>
      <p>Your campus ride starts here.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    login() {
      // التحقق من الإيميل الجامعي
      const emailPattern = /^[a-zA-Z0-9._%+-]+@sm\.imamu\.edu\.sa$/;
      if (!emailPattern.test(this.email)) {
        this.error = "يجب أن يكون البريد الجامعي من نطاق @sm.imamu.edu.sa";
        return;
      }

      // التحقق من أن كلمة المرور 6 أرقام فقط
      const passwordPattern = /^\d{6}$/;
      if (!passwordPattern.test(this.password)) {
        this.error = "الرمز يجب أن يكون مكون من 6 أرقام فقط";
        return;
      }

      // إذا تحقق الشرطان → تسجيل الدخول
      localStorage.setItem("userEmail", this.email);
      this.$router.push("/");
    }
  }
};
</script>

<style>
.login-wrapper {
  display: flex;
  height: 100vh;
  font-family: Arial, sans-serif;
}

/* النموذج */
.login-form {
  flex: 1;
  padding: 60px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.login-form h1 {
  font-size: 28px;
  color: #003366;
  margin-bottom: 10px;
}

.login-form h2 {
  font-size: 22px;
  margin-bottom: 30px;
  color: #0055aa;
}

.login-form label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

.login-form input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.options a {
  color: #007bff;
  text-decoration: none;
  font-size: 14px;
}

.options a:hover {
  text-decoration: underline;
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

.signup-link {
  margin-top: 20px;
  font-size: 14px;
}

.signup-link a {
  color: #007bff;
  text-decoration: none;
}

.signup-link a:hover {
  text-decoration: underline;
}

.error {
  color: red;
  margin-top: 15px;
}

/* الجهة اليمنى */
.login-side {
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

.login-side h2 {
  font-size: 28px;
  margin-bottom: 20px;
}

.login-side p {
  font-size: 18px;
}
</style>