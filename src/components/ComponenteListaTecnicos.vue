<template>
  <div class="main">
    <div class="container">
      <p>Buscando tecnicos por localidad:{{localidad}}</p>

      <form v-on:submit.prevent="DetailTechnician">
        <select v-model="localidad" placeholder="Localidad">
          <option v-for="localidad in localidades" v-bind:key="localidad">
            {{localidad}}
          </option>
        </select>
        <select v-model="servicio" placeholder="Servicio" @change="onChangeServicio">
  
          <option v-for="servicio in servicios" v-bind:key="servicio">
            {{servicio}}
          </option>
        </select>
        <select v-model="categoria" placeholder="Categoria">
          <option v-for="categoria in categorias" v-bind:key="categoria">
            {{categoria}}
          </option>
        </select>

        <button>Buscar</button>

      </form>
    </div>
  </div>

  <div class="caja">
    <template v-if="DetailTechnician.length">
    <div v-for="tec in DetailTechnician" v-bind:key="tec">
      <div class="tecnico">
        <img src="../assets/img/technical-icon.png" />
        <h3>{{tec.names }} {{tec.lastnames}}</h3>
        <p>{{tec.experience}}</p>
        <p><img src="../assets/img/whatsapp-icon.png" />{{tec.telephone}}</p>
        <p>{{tec.email}}</p>
        <button class="boton" @click="createService(tec.id)">
          Elegir técnico
        </button>
      </div>
    </div>
    </template>
  </div>
</template>
<script>

import gql from "graphql-tag";
export default {

  name: 'ComponenteListaTecnicos',
  data: function(){

    return{
      service_Id : "",
      usuario : "",
      localidad: "",
      categoria: "",
      servicio: "",
      tecnico: "",
      nombres: "",

      localidades: [
        'Usaquen', 'Chapinero', 'Santa Fe', 'San Cristobal',
        'Usme', 'Tunjuelito', 'Bosa', 'Kennedy', 'Fontibon',
        'Engativa', 'Suba', 'Barrios Unidos', 'Teusaquillo', 'Los Martires',
        'Antonio Nariño', 'Puenta Aranda', 'Candelaria', 'Rafael Uribe',
        'Ciudad Bolivar', 'Sumapaz'
      ],
      servicios: [
        'agua','luz','gas'
      ],
      DetailTechnician: []
    }
  },

  apollo : {
    DetailTechnician : {
      query: gql`
        query($tec: SelectTechnician) {
          DetailTechnician(tec: $tec) {
            id
            names
            lastnames
            address
            telephone
            email
            experience
            covered_serv
            covered_modules
            covered_categories
          }
        }
      `,
      variables(){
        return {
          tec : {
            localidad : this.localidad,
            categoria : this.categoria,
            servicio  : this.servicio
          }
        }
      }  
    }
  },

  methods:{

    onChangeServicio(event) {

      switch (this.servicio) {
        case "agua":
          this.categorias = ['Fuga de agua','Goteras','Tuberia rota']
          break;
        case "luz":
          this.categorias = ['Corto circuito','Olor a quemado','Tacos electricidad']
          break;
        case "gas":
          this.categorias = ['Fuga de gas','Taponamiento punto']
          break;
        default:
          this.categorias = []
      }
    },

    /*DetailTechnician: function(){
      var jsons={
        localidad: this.localidad,
        categoria: this.categoria,
        servicio: this.servicio
      }
      // uso directo directamente en el evento requerido

      axios.post('https://app-backend-g5.herokuapp.com/technicians/', jsons)
            
        .then(response => {
          this.tecnico = response.data
          console.log(response.data)
        })
        .catch(error => {
          console.log(error.response)
        });
    },
    */
    createService: async function(id){
      let fecha = new Date().toISOString().slice(0, 10);
      await this.$apollo.mutate({
        mutation : gql`
          mutation ($ser: ServiceInput!) {
            createService(Ser: $ser) {
              service_id
              message
            }
          }
        `,
        variables : {
          ser : {
            names       : this.usuario.nombres,
            lastnames   : this.usuario.apellidos,
            locality    : this.usuario.localidad,
            address     : this.usuario.direccion,
            telephone   : this.usuario.telefono,
            email       : this.usuario.email,
            tech_id     : id,
            module      : "emergencia",
            dom_service : this.servicio,
            category    : this.categoria,
            description : this.usuario.descripcion,
            app_date    : fecha
          }            
        }
      })
        .then((result)=> {
          console.log(result) 
          })
        .catch((error) => {
          console.log(error);
          })
    

      this.$router.push({name: "Cotizacion", params: {'data': JSON.stringify({localidad: this.localidad, 
                                                          categoria: this.categoria, servicio: this.servicio}) }})
    },
  },

  mounted () {    
    this.usuario = JSON.parse(this.$route.params.data)
  },

  created: function(){
    return true
  }

}
</script>
<style>
.main {
  margin: 0;
  padding: 0%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  border: 3px solid #283747;
  border-radius: 10px;
  width: 25%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.tecnico {
  margin: 0 auto;
  float: left;
  border: 1px solid #ccc;
  margin: 20px;
  width: 300px;
  text-align: center;
  border-radius: 10px;
  padding: 10px;
}

.tecnico > img {
  width: 120px;
  margin: 15px;
}

.caja {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.boton {
  width: 50%;
  height: 40px;

  color: #e5e7e9;
  background: #283747;
  border: 1px solid #e5e7e9;

  border-radius: 5px;
  padding: 10px 25px;
  margin: 5px 0;
}
</style>
