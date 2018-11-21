<template lang="pug">
  #app
    pm-header
    pm-notification(v-show="showNotification")
      p(slot="body") No se encontraron resultados
    pm-loader(v-show="isLoading")
    section.section(v-show="!isLoading")
      nav.nav.has-shadow
        .container
          input.input.is-large(type="text",placeholder="Buscar canciones",v-model="searchQuery")
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times Cancelar
      .container
        p
          small {{searchMessage}} {{selectedTrack}}

      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            pm-track(v-bind:class="{ 'is-active': t.id===selectedTrack }",v-bind:track="t",v-on:select="setSelectedTrack")

    pm-footer
</template>

<script>
import trackService from '@/services/track'
import PmFooter from '@/components/layout/Footer.vue'
import PmHeader from '@/components/layout/Header.vue'
import PmTrack from '@/components/Track.vue'
import PmLoader from '@/components/shared/Loader.vue'
import PmNotification from '@/components/shared/Notification.vue'


export default {
  name: 'app',
  components:{
    PmFooter,
    PmHeader,
    PmTrack,
    PmLoader,
    PmNotification
  },
  data () {
    return {
      searchQuery: '',
      tracks:[],
      isLoading:false,
      showNotification:false,
      selectedTrack:''
    }
  },
  computed:{
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  watch:{
    showNotification(){
      if (this.showNotification){
        setTimeout(()=>{
          this.showNotification=false;
        },3000)
      }
    }
  },
  methods:{
    search(){
      if (this.searchQuery) {
        this.isLoading=true
        trackService.search(this.searchQuery)
          .then(res => {
            this.showNotification=res.tracks.total===0
            this.tracks = res.tracks.items
            this.isLoading=false

          })
      }
    },
    setSelectedTrack(id){
      this.selectedTrack=id

    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
  .results{
    margin-top:50px;
  }

  .is-active {
    border: 3px #23d160 solid;
  }
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/

/*h1, h2 {*/
  /*font-weight: normal;*/
/*}*/

/*ul {*/
  /*list-style-type: none;*/
  /*padding: 0;*/
/*}*/

/*li {*/
  /*display: inline-block;*/
  /*margin: 0 10px;*/
/*}*/

/*a {*/
  /*color: #42b983;*/
/*}*/
</style>
