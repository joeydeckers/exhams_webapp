<template>
  <div class="landing">
    <NavbarLanding navbarBackgroundColor = "transparent !important"/>
    <section class="intro">
      <b-container fluid>
        <b-row>
          <b-col>
            <div class="intro-text">
             <h2>Het <strong>online</strong> tentamentraining platform waardoor <strong>jij</strong> je tentamen haalt</h2>
             <p>Zoek hier je tentamentraining die past bij jouw opleiding en universiteit.</p>
             <div class="search">
               <div class="select">
                <i class="fas fa-school"></i>
                <select name="" id="">
                  <option value="">Kies universiteit</option>
                  <option value="">Kies universiteit</option>
                  <option value="">Kies universiteit</option>
                  <option value="">Kies universiteit</option>
                  <option value="">Kies universiteit</option>
                </select>
               </div>
               <div class="select">
                <select name="" id="">
                  <option value="">Kies studie</option>
                </select>
               </div>
               <button class="btn btn-custom">Zoeken</button>
             </div>
           </div>
          </b-col>
          <b-col>
            <div class="landing-bg"></div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>


<script>
  import NavbarLanding from './../components/NavbarLanding'
  export default {
    components:{
      NavbarLanding
    }
  }
</script>
