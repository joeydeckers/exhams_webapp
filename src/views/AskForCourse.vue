<template>
  <div>
      <b-container>
          <b-row>
              <b-col v-for="university in universities" :key = "university.id" lg="4">
                  {{university.name}}
              </b-col>

          </b-row>
      </b-container>
  </div>
</template>

<script>

export default {
    data(){
        return{
            universities:[
                {
                    name: 'Leiden universiteit',
                    url: 'universiteit-leiden'
                },
                {
                    name: 'Universiteit van Amsterdam',
                    url: 'universiteit-van-amsterdam'
                },
                {
                    name: 'Utrecht universiteit',
                    url: 'universiteit-utrect'
                },
                {
                    name: 'Technische universiteit Delft',
                    url: 'technische-universiteit-delft'
                },
                {
                    name: 'Technische universiteit Eindhoven',
                    url: 'technische-universiteit-eindhoven'
                },
                {
                    name: 'Rijksuniversiteit Groningen',
                    url: 'rijksuniversiteit-groningen'
                },
                {
                    name: 'Erasmus Universiteit',
                    url: 'erasmus-universiteit'
                },
                {
                    name: 'Tilburg University',
                    url: 'tilburg-university'
                },
                {
                    name: 'Maastricht University',
                    url: 'maastricht-university'
                },
                {
                    name: 'Radboud Universiteit',
                    url: 'radboud-universiteit'
                },
                {
                    name: 'Vrije universiteit',
                    url: 'vrije-universiteit'
                },
                {
                    name: 'Wageningen universiteit',
                    url: 'wageningen-universiteit'
                },
                {
                    name: 'Universiteit Twente',
                    url: 'universiteit-twente'
                }
            ]
        }
    }

}
</script>

<style>

</style>