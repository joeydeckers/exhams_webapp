<template>
  <div id ="navbarLanding">
    <b-navbar class="fixed-top " :style = "{backgroundColor: navbarBackgroundColor}" toggleable="lg" type="light" variant="info">
      <b-navbar-brand href="#">Exhams</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <!-- Using 'button-content' slot -->
            <b-navbar-nav>
                <b-nav-item href="#">Over Exhams</b-nav-item>
                <b-nav-item href="#">Contact</b-nav-item>
                <b-nav-item class="accent-color" href="#">Wordt een trainer</b-nav-item>
            </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  export default {
      props: ['navbarBackgroundColor']
  }
</script>
