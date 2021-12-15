<template>
  <div id="app" class="app">
    <div class="header">
      <h1>Servicios a tu alcance</h1>
      <nav>
        <button v-on:click="cargarPrincipal"> Inicio </button>      
        <h6>Titular del servicio:{{nombres}}</h6>  
      </nav>
    </div>
    <router-view v-on:actualizarValoresServicio="actualizarValoresServicio"/>
  </div>
</template>

<script>
export default {
  name: 'App',

  data: function(){
    return{      
      nombres           : "",
      apellidos         : "",
      localidad         : "",
      direccion         : "",
      telefono          : "",
      email             : "",     
      modulo            : "",
      serv_domiciliario : "",
      categoria         : "",
      descripcion       : "",
      fecha_solicitud   : "",
    }
  },

  methods:{
    cargarPrincipal: function(){
      this.$router.push({name: "principal"})
    },
    actualizarValoresServicio: function(data){     
      this.nombres         = data.nombres
      this.apellidos       = data.apellidos
      this.localidad       = data.localidad
      this.direccion       = data.direccion
      this.telefono        = data.telefono
      this.email           = data.email
      this.descripcion     = data.descripcion
      this.fecha_solicitud = data.fecha_solicitud
      localStorage.setItem("localidad", data.localidad)      
    }
  },

  created: function(){
    return true
  }

}
</script>

<style>
  body{
    margin: 0 0 0 0;
  }

  .header{
    margin    : 0;
    padding   : 0;
    width     : 100%;
    height    : 2vh; 
    min-height: 100px;

    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(./assets/img/home2.jpg);
    background-position: top;
    background-size: 40%;
    color: #f7f4f4;
    justify-content: space-between;
    align-items    : center;
  }

  .header h1{
    width: 35%;
    text-align: center;
    font-family: "Trebuchet MS";
    font-size: 40px;
  }
  
  .header nav {
    height: 0%;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
  }

  .header nav button{
    color: #e5e7e9;
    background: #283747;
    background-color: rgba(0, 0, 0, 0.63);
    border: 1px solid #28;
    font-size: 15px;
    width: 30%;
    font-family: "Trebuchet MS";
    justify-content: center;
    padding: 20;
  }

    .header h6{
    color: #fcfcfc;
    
    border: 1px solid #28;
    font-size: 15px;
    width: 50%;
    font-family: "Trebuchet MS";
    justify-content: center;
    font-weight: normal;
    padding: 20;
  }

  .header nav button:hover{
    color: #283747;
    background: #e5e7e9;
    border: 1px solid #283747;
  }

  .main-component{
    height: 70vh;
    margin: 20%;
    padding: 0%;
    background: #c0c0c0;
  }
</style>
