<template>
  <div class="find-ride-container">
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

    <!-- نموذج البحث -->
    <div class="search-form">
      <h2>Quick Ride Search</h2>

      <form @submit.prevent="searchRide">
        <label>Pickup Location</label>
        <input v-model="pickup" type="text" placeholder="Building 324, Gate 8 – Imam University" required />

        <label>Drop-off Location</label>
        <input v-model="dropoff" type="text" placeholder="King Fahd National Library" required />

        <label>Date & Time</label>
        <input v-model="datetime" type="datetime-local" required />

        <label>Seats Needed</label>
        <input v-model="seats" type="number" min="1" max="4" required />

        <label>Gender Preference</label>
        <select v-model="gender">
          <option>Any</option>
          <option>Female</option>
          <option>Male</option>
        </select>

        <label>Ride Type</label>
        <select v-model="rideType">
          <option>One-way</option>
          <option>Round-trip</option>
        </select>

        <button type="submit">Search Ride</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "FindRide",
  data() {
    return {
      pickup: "",
      dropoff: "",
      datetime: "",
      seats: 1,
      gender: "Any",
      rideType: "One-way"
    };
  },
  methods: {
    searchRide() {
      alert("Searching for rides...");
      // ممكن تضيفين توجيه أو نتائج لاحقًا
    }
  }
};
</script>

<style>
.find-ride-container {
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

/* نموذج البحث */
.search-form {
  max-width: 600px;
  margin: 60px auto;
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.search-form h2 {
  color: #003366;
  margin-bottom: 20px;
}

.search-form label {
  display: block;
  margin-top: 20px;
  font-weight: bold;
}

.search-form input,
.search-form select {
  width: 100%;
  padding: 10px;
  margin-top: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.search-form button {
  background-color: #007bff;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 30px;
  width: 100%;
}

.search-form button:hover {
  background-color: #0055aa;
}
</style>