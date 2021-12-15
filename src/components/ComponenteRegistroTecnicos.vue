<template>
    <div class="main">     
        <div class="container">
            <p>Aqui podras registrarte como técnico</p> 
            <form v-on:submit.prevent="CreateTec" >
                <input type="text" v-model="tecnico.names" placeholder="Nombres">
                <br>
                <input type="text" v-model="tecnico.lastnames" placeholder="Apellidos">
                <br>
                <input type="text" v-model="tecnico.address" placeholder="Direccion">
                <br>
                <input type="text" v-model="tecnico.telephone" placeholder="Telefono">
                <br>
                <input type="text" v-model="tecnico.email" placeholder="Email">
                <br>
                <input type="text" v-model="tecnico.experience" placeholder="Experiencia">
                <br>
                <select type="text" v-model="tecnico.covered_serv" placeholder="ServicioCubierto">
                    <option v-for="serviciocubierto in servicioscubiertos"  :key="serviciocubierto.id">{{serviciocubierto}}</option>
                </select>
                <br>
                <select v-model="tecnico.covered_localities" placeholder="Localidad">
                    <option v-for="localidad in localidades"  :key="localidad.id">{{localidad}}</option>
                </select>               
                <br>
                 <select v-model="tecnico.covered_modules" placeholder="Modulo">
                    <option v-for="modulo in modulocubierto" :key="modulo.id">{{modulo}}</option>
                </select>
                <br> 
                 <select v-model="tecnico.covered_categories" placeholder="Categorias">
                    <option v-for="categoria in categoriascubiertas"  :key="categoria.id">{{categoria}}</option>
                </select>
                <br>                                
                <button type="submit">Registrar</button>
                </form>
            
        </div>
                    
    </div>
</template>
<script>
import gql from "graphql-tag";
export default {
    name: 'ComponenteRegistroTecnicos',
    data: function(){
        return{
            tecnico: {
                names: "",
                lastnames: "",
                address: "",
                telephone: "",            
                email:"", 
                experience:"",
                covered_serv:"",
                covered_localities:[],
                covered_modules:[],
                covered_categories: []  
            },
            localidades: [
                'Usaquen', 'Chapinero', 'Santa Fe', 'San Cristobal',
                'Usme', 'Tunjuelito', 'Bosa', 'Kennedy', 'Fontibon', 
                'Engativa', 'Suba', 'Barrios Unidos', 'Teusaquillo', 'Los Martires',
                'Antonio Nariño', 'Puenta Aranda', 'Candelaria', 'Rafael Uribe', 
                'Ciudad Bolivar', 'Sumapaz'
            ],
            servicioscubiertos: [
                'agua','luz','gas'
            ],
            modulocubierto:[
                'Emergencias'
            ],
            categoriascubiertas:[
                'Tuberia Rota','Fuga de agua','Taponamiento de tuberias','Goteras','Cortocircuito','Cambio de breakers','Sobrecalentamiento de conductores','Fuga de gas','Obstrucción en tuberia de gas',
            ]
        }
    },   
    methods:{       
    
        CreateTec: async function(){
            await this.$apollo.mutate({
                mutation: gql`
                    mutation ($tec: TechnicianInput) {
                    CreateTec(tec: $tec)
                    }
                `,
                variables: {
                    tec: {
                        names: this.tecnico.names,
                        lastnames: this.tecnico.lastnames,
                        address: this.tecnico.address,
                        telephone: this.tecnico.telephone,            
                        email: this.tecnico.email, 
                        experience: this.tecnico.experience,
                        covered_serv: this.tecnico.covered_serv,
                        covered_localities: [this.tecnico.covered_localities],
                        covered_modules: [this.tecnico.covered_modules],
                        covered_categories: [this.tecnico.covered_categories],
                    }                                                   
                
                },
            
            })

            .then((result)=> {
                alert('Registro exitoso')        
            })
            .catch((error) => {
            console.log(error);
            })
                     
        }  
    }
}

</script>
<style>
body {

background-repeat: no-repeat;
background-size:10cm;
background-position:bottom;
   
}

    .main{
        margin: 10%;
        padding: 0%;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container{
        margin-top: 5%;
        border: 0px solid #283747;
        border-radius: 20px;
        width: 50%;
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
    .equipo {
        background-color:cornflowerblue;
        display: flex;
        padding:1em 0;
        text-align: center;
        position: fixed;
        bottom: 0;
        width: 100%;                
    }
   
</style>