<template>
    <div class="main">
        <div class="container">
            <p>Este es el componente principal</p>  
             <nav>
                <button v-on:click="cargarModuloEmergencias"> Emergencias </button>  
                <button v-on:click="cargarRegistroTecnico"> Registro de técnicos </button>       
            </nav>
        </div>              
    </div>
</template>

<script>
export default {
  name: 'ComponentePrincipal',

  data: function(){
  },

  methods:{   
    cargarModuloEmergencias: function(){
      this.$router.push({name: "emergencias"})
    },
    cargarRegistroTecnico: function(){
      this.$router.push({name: "registrarTecnico"})
    }
  },

  created: function(){
      return true
  }

}
</script>
<style>
    .main{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Trebuchet MS";
    }
    .container{
        border: 3px solid #283747;
        border-radius: 10px;
        width: 25%;
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: "Trebuchet MS";
    }
</style>