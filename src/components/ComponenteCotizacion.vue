<template>
     
        <div class="cotiza">           
            <div v-if="cotiObjects.length">
                <h5>
                    Lista de precios
                </h5>
                
                <div v-for="cotizacion in cotiObjects" v-bind:key="cotizacion">
                    <h6>
                        {{cotizacion.concept }} {{cotizacion.price}}
                    </h6>
                </div>
                <h5>TOTAL: {{total}}</h5>
            </div>
        </div>

</template>
<script>
import gql from "graphql-tag";
export default {
    name: 'Cotizacion',
    data: function(){
        return{                        
            concepts:['Luz','Suba','Corto circuito'],
            cotiObjects:[],  
            total: 0         

        }
    },   
    
    methods:{     
        
        async obtenerPrecio(concepto,idx){
            console.log('concept', concepto)
            const {data} = await this.$apollo.query({
                query: gql`
                query($concept: String) {
                    searchCoti(concept: $concept) {
                        id
                        concept
                        price
                    }
                }
            `,
                variables: {
                   
                        concept: concepto
                     
                }
            })
            this.total = this.total + data['searchCoti']['price']
            this.cotiObjects.push(data['searchCoti'])
        },
     
        
    },
    mounted () {
        let aux = JSON.parse(this.$route.params.data)        
        Object.keys(aux).map((key) => {
                this.obtenerPrecio(aux[key])                
            });        
    },
}

</script>
<style>

    .cotiza {
        margin          : 10%;
        padding         : 0%;
        height          : 80%;
        width           : 100%;
        display         : flex;
        justify-content : center;
        align-items     : center;
        font-size: 30px;
        color: #0f1316;
        font-family: "Trebuchet MS";
        margin: 0;
        padding: 5%;
        width: 90%;
        height: 100%;
        display: flex;
    }
    .cotiza h6{
        margin          : 10%;
        padding         : 0%;
        height          : 80%;
        width           : 100%;
        display         : flex;
        justify-content : left;
        align-items     : center;
        font-size: 20px;
        color: #0f1316;
        font-family: "Trebuchet MS";
        font-weight: normal;
    }


   
</style>