<template>
  <div class="landing">
    <NavbarLanding class="fixed-top" navbarBackgroundColor = "transparent !important"/>
    <section class="intro">
      <b-container fluid>
        <b-row>
          <b-col lg="6" md="12" sm="12" style="padding:0">
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
          <b-col lg="6" md="6" style="padding:0">
            <div class="landing-bg"></div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="recent-videos">
      <b-container class="container-custom">
        <h2>Recente tentamentrainingen</h2>
        <div class="videos">
          <b-row>
            <b-col lg = '3' sm="12">
              <div style="background: black;height: 235px;width: 100%; margin-bottom:10;"></div>
            </b-col>
            <b-col lg = '3' sm="12">
              <div style="background: black;height: 235px;width: 100%; margin-bottom:10;"></div>
            </b-col>
            <b-col lg = '3' sm="12">
              <div style="background: black;height: 235px;width: 100%; margin-bottom:10;"></div>
            </b-col>
            <b-col lg = '3' sm="12">
              <div style="background: black;height: 235px;width: 100%; margin-bottom:10;"></div>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>
    <section>
      <b-container>
        <b-row>
         
        </b-row>
      </b-container>
    </section>
  </div>
</template>


<script>
  import NavbarLanding from './../components/NavbarLanding'
  import Video from './../components/Video'
  import router from './../router'

  export default {
    components:{
      NavbarLanding,
      Video
    },
    mounted(){
      if(this.$store.getters.getUserToken){
        router.push('/home');
      }
    }
  }
</script>
