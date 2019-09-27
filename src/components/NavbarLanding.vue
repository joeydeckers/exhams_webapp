<template>
  <div id ="navbarLanding">
    <b-navbar :style = "{backgroundColor: navbarBackgroundColor}" toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Exhams</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <!-- Using 'button-content' slot -->
            <b-navbar-nav>
                <b-nav-item class="accent-color" href="#">Link</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
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
