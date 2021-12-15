<template>
    <div class="main">
        <div class="container">
            <p>Formulario de solicitud de servicios</p>  
             <form v-on:submit.prevent="guardarInformacion" >
                <input type="text" v-model="usuario.nombres" placeholder="Nombres">
                <br>
                <input type="text" v-model="usuario.apellidos" placeholder="Apellidos">
                <br>
                 <select type="text" v-model="usuario.localidad" placeholder="Localidad">
                    <option v-for="localidad in localidades"  v-bind:value="localidad">{{localidad}}</option>
                 </select>
                <br>
                 <input type="text" v-model="usuario.direccion" placeholder="Direccion">
                <br>
                 <input type="text" v-model="usuario.telefono" placeholder="Telefono">
                <br>
                 <input type="text" v-model="usuario.email" placeholder="Email">
                <br>
                 <input type="text" v-model="servicio.descripcion" placeholder="Descripcion">
                <br>                
                <button type="submit">Enviar</button>
            </form>
        </div>              
    </div>
</template>
<script>
export default {
  name: 'ComponenteFormularioServicio',

  data: function(){
      return{
          usuario: {
            nombres: "",
            apellidos: "",
            localidad: "",
            direccion: "",
            telefono: "",
            email: "",
          },
          servicio: {
            descripcion: ""
          },
          localidades: [
              'Usaquen', 'Chapinero', 'Santa Fe', 'San Cristobal',
              'Usme', 'Tunjuelito', 'Bosa', 'Kennedy', 'Fontibon', 
              'Engativa', 'Suba', 'Barrios Unidos', 'Teusaquillo', 'Los Martires',
              'Antonio Nariño', 'Puenta Aranda', 'Candelaria', 'Rafael Uribe', 
              'Ciudad Bolivar', 'Sumapaz'
          ]
      }
  },

  methods:{       
    
    guardarInformacion: function(){
        let fecha = new Date().toJSON().toString()
        let data = {
            nombres: this.usuario.nombres,
            apellidos: this.usuario.apellidos,
            localidad: this.usuario.localidad,
            direccion: this.usuario.direccion,
            telefono: this.usuario.telefono,
            email: this.usuario.email,
            descripcion: this.servicio.descripcion,
            fecha_solicitud: fecha
        }
        //
        this.$emit('actualizarValoresServicio', data);
        this.$router.push({name: "elegirTecnico", params: {'data':JSON.stringify(data) }})
        //console.log('data',data)
    }
  },

  created: function(){
      return true
  }

}
</script>
<style>
    .main{
        margin: 1000%;
        padding: 0%;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container{
        margin-top: 5%;
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
    .container input,select{
        height: 40px;
        width: 100%;

        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;

        border: 1px solid #283747;
    }
    .container button{
        width: 100%;
        height: 40px;

        color: #E5E7E9;
        background: #283747;
        border: 1px solid #E5E7E9;

        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0;
    }
</style>