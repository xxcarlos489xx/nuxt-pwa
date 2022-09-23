<template>
  <div class="container">
    <b-row class="mt-5">
      <b-col>
        <b-card
          border-variant="secondary"
          header="Buscador"
          header-border-variant="secondary"
          align="center"
          >
          <b-row class="my-1">
            <b-col sm="4">
              <label for="name_poke">Ingresa el nombre:</label>
            </b-col>
            <b-col sm="8">
              <b-form-input id="name_poke" @keypress.enter="search()" v-model="search_poke" type="text"></b-form-input>
            </b-col>
            <b-col class="mt-5">
              <button type="button" @click="search()" class="btn btn-primary">Buscar</button>
            </b-col>
          </b-row>
        </b-card>
        <b-card
          border-variant="secondary"
          :header="pokemon.name"
          v-if="exist"
          class="mt-5"
          header-border-variant="secondary"
          align="center"
        >
          <b-card-text>
            <a :href="pokemon.url" target="_blank">{{pokemon.url}}</a>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import {mapActions,mapGetters} from 'vuex';

  export default {
    name: 'NuxtTutorial',
    data() {
      return {
        search_poke:'',
        exist:false,
        pokemon:{
          name:'',
          url:''
        }
      }
    },
    computed:{
      ...mapGetters({
        pokemones: "get_pokemones",
      })
    },
    mounted() {
      this.init(10);
    },
    methods: {
       ...mapActions({
          init: "load_list",
          searchForName:"search_poke"
      }),
      search(){
        if (this.search_poke != '') {
          const find = this.pokemones.find(f=>f.name == this.search_poke)
          if(find){
            this.pokemon.name = find.name
            this.pokemon.url = find.url
            this.exist = true;
          }else{
            alert("Pokemon url api no encontrado")
            this.exist = false;
          }
        }
      }
    },
  }
</script>
