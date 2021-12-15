<template>
    <div class="main">
        <div class="container">
            <p>Este es el componente de emergencias</p>  
             <nav>
                <button v-on:click="cargarFormularioServicio"> Solicitar servicio </button>                        
            </nav>
        </div>              
    </div>
</template>
<script>
export default {
  name: 'ComponenteEmergencias',

  data: function(){
  },

  methods:{       
    cargarFormularioServicio: function(){
      this.$router.push({name: "solicitarServicio"})
    },
    actualizarValoresServicio: function(data){
      console.log('data',data)
      this.nombres = data.nombres
      this.apellidos = data.apellidos
      this.localidad = data.localidad
      this.direccion = data.direccion
      this.telefono = data.telefono
      this.email = data.email
      this.descripcion = data.descripcion
      this.fecha_solicitud = data.fecha_solicitud
      alert("Envio de info exitoso");
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
    }
</style>