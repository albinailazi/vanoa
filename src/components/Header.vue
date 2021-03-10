<template>
  <header id="header" class="main_header">
    <div class="container">
      <div class="headerWrap">
        <div class="logo_header">
          <router-link class="nav-link" to="/">
            <span>V</span>anoa
          </router-link>
        </div>
        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav class="nav_wrapper">
          <ul>
            <li>
              <router-link class="nav-link" to="/">
                Home
              </router-link>
            </li>
            <li>
              <router-link class="nav-link" to="/rooms">
                Rooms
              </router-link>
            </li>
            <li>
              <router-link class="nav-link" to="/services">
                Services
              </router-link>
            </li>
            <li>
              <router-link class="nav-link" to="/about">
                About
              </router-link>
            </li>
            <li>
              <router-link class="nav-link" to="/contact">
                Contact
              </router-link>
            </li>
            <li>
              <router-link class="nav-link" to="/login">
                Login
              </router-link>
            </li>

            <!-- <li>
              <a href="logout.php">Logout</a>
            </li> -->
            <!-- <li>
              <router-link class="nav-link" to="/login">
                Dashboard/Login
              </router-link>
            </li> -->
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>
