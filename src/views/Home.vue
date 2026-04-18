<template>
  <div class="home-container">
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
    <div class="home-content">
      <div class="text-section">
        <h2>Welcome to CampusRide!</h2>
        <h3>Student Ride-Sharing Platform for Imam University</h3>
        <p>
          CampusRide helps Imam University students connect, coordinate, and share rides easily and safely.
          From carpooling to class, to sharing costs with verified students, we make every trip simpler and smarter.
        </p>
        <router-link to="/create">
          <button>Start Your Campus Ride Today!</button>
        </router-link>
      </div>

      <div class="image-section">
        <!-- ممكن تضيفين صورة هنا لاحقًا -->
        <div class="mock-illustration">📱🚗📍</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style>
.home-container {
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

/* المحتوى الرئيسي */
.home-content {
  display: flex;
  justify-content: space-between;
  padding: 60px;
  align-items: center;
}

.text-section {
  max-width: 50%;
}

.text-section h2 {
  font-size: 32px;
  color: #003366;
  margin-bottom: 10px;
}

.text-section h3 {
  font-size: 20px;
  color: #0055aa;
  margin-bottom: 20px;
}

.text-section p {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 30px;
}

.text-section button {
  background-color: #007bff;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}

.text-section button:hover {
  background-color: #0055aa;
}

/* القسم الأيمن */
.image-section {
  max-width: 40%;
  text-align: center;
}

.mock-illustration {
  font-size: 60px;
  color: #003366;
}
</style>