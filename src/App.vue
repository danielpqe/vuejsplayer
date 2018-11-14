<template lang="pug">
  #app
    section.section
      nav.nav.has-shadow
        .container
          input.input.is-large(type="text",placeholder="Buscar canciones",v-model="searchQuery")
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times Cancelar
          p
            small {{searchMessage}}

      .container.results
        .columns
          .column(v-for="track in tracks") {{track.name}}-{{track.artist}}


</template>

<script>
  const tracks=[
    {name:'muchacha',artist:'Espinetta'},
    {name:'welcome jungle',artist:'GnR'},
    {name:'Bohemian',artist:'Fredicito'}
  ]
export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks:[]
    }
  },
  computed:{
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  methods:{
    search(){
      this.tracks=tracks
    }
  }

}
</script>

<style lang="scss">
  @import './scss/main.scss';
  .results{
    margin-top:50px;
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
