<template>
  <div class="profile-container">
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

    <!-- محتوى الملف الشخصي -->
    <div class="profile-content">
      <h2>Sarah Alomran</h2>
      <h3>Student Rider – Imam University</h3>
      <p>
        I’m a student at Imam Mohammad Ibn Saud University who uses CampusRide to commute safely and easily between classes.
        I value verified rides, convenience, and connecting with other students for efficient campus travel.
      </p>

      <h4>RIDE STATISTICS</h4>
      <ul>
        <li>Rides Completed: 12</li>
        <li>Active Rides: 2</li>
        <li>Average Rating: 4.8</li>
      </ul>

      <h4>CONTACT INFORMATION</h4>
      <p>✉ 445000664@sm.imamu.edu.sa</p>
      <p>📞 +966 501501787</p>
      <p>📍 Riyadh, Saudi Arabia</p>

      <h4>ACCOUNT DETAILS</h4>
      <ul>
        <li>Verified Student (University ID)</li>
        <li>Member Type: Rider</li>
        <li>Joined CampusRide: October 2025</li>
        <li>Default Location: College of Computer Science – Gate 8</li>
      </ul>

      <h4>ACHIEVEMENTS</h4>
      <ul>
        <li>Completed verified rides on CampusRide.</li>
        <li>Always joined rides on time.</li>
        <li>Earned positive feedback from peers.</li>
        <li>Improved ride accuracy with verified locations.</li>
      </ul>

      <div class="actions">
        <button>Edit Profile</button>
        <button>View My Rides</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile"
};
</script>

<style>
.profile-container {
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

/* محتوى الملف الشخصي */
.profile-content {
  max-width: 700px;
  margin: 60px auto;
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.profile-content h2 {
  color: #003366;
  margin-bottom: 5px;
}

.profile-content h3 {
  color: #0055aa;
  margin-bottom: 20px;
}

.profile-content p {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.profile-content h4 {
  margin-top: 30px;
  color: #003366;
}

.profile-content ul {
  margin: 10px 0 20px 20px;
}

.actions {
  display: flex;
  gap: 20px;
  margin-top: 30px;
}

.actions button {
  background-color: #007bff;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.actions button:hover {
  background-color: #0055aa;
}
</style>