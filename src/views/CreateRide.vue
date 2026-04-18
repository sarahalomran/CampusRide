<template>
  <div class="create-ride-container">
    <!-- شريط التنقل -->
    <nav class="navbar">
      <h1>CampusRide.</h1>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/create">Create Ride</router-link></li>
        <li><router-link to="/find">Find Ride</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
        <li><router-link to="/login">Log Out</router-link></li>
      </ul>
    </nav>

    <!-- المحتوى الرئيسي -->
    <div class="ride-form">
      <h2>Plan your next campus ride easily</h2>
      <p>Fill in your ride details below to share your trip with other Imam University students</p>

      <form @submit.prevent="postRide">
        <label>Drop-off Location</label>
        <input v-model="location" type="text" placeholder="King Fahd National Library" required />

        <label>Date & Time</label>
        <input v-model="datetime" type="datetime-local" required />

        <label>Available Seats</label>
        <input v-model="seats" type="number" min="1" max="4" required />

        <div class="buttons">
          <button type="submit">Post Ride</button>
          <button type="button" @click="cancel">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateRide",
  data() {
    return {
      location: "",
      datetime: "",
      seats: 1
    };
  },
  methods: {
    postRide() {
      alert("Ride posted successfully!");
      this.$router.push('/profile');
    },
    cancel() {
      this.$router.push('/');
    }
  }
};
</script>

<style>
.create-ride-container {
  font-family: Arial, sans-serif;
  background-color: #f4f6fa;
  min-height: 100vh;
}

/* شريط التنقل */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #003366;
  color: white;
  padding: 15px 30px;
}

.navbar h1 {
  font-size: 22px;
}

.navbar ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

.navbar ul li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.navbar ul li a:hover {
  text-decoration: underline;
}

/* نموذج الرحلة */
.ride-form {
  max-width: 600px;
  margin: 60px auto;
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.ride-form h2 {
  color: #003366;
  margin-bottom: 10px;
}

.ride-form p {
  margin-bottom: 30px;
  font-size: 16px;
  color: #555;
}

.ride-form label {
  display: block;
  margin-top: 20px;
  font-weight: bold;
}

.ride-form input {
  width: 100%;
  padding: 10px;
  margin-top: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #0055aa;
}
</style>