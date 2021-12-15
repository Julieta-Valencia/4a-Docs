import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import gql                                            from 'graphql-tag'
import { ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client/core'

import ComponentePrincipal from './components/ComponentePrincipal.vue'
import ComponenteModuloEmergencias from './components/ComponenteModuloEmergencias'
import ComponenteRegistroTecnicos from './components/ComponenteRegistroTecnicos'
import ComponenteFormularioServicio from './components/ComponenteFormularioServicio'
import ComponenteListaTecnicos from './components/ComponenteListaTecnicos'
import ComponenteNotificacionServicio from './components/ComponenteNotificacionServicio'
import ComponenteCotizacion from './components/ComponenteCotizacion'

const routes = [ 
  {
    path: '/',
    name: 'principal',
    component: ComponentePrincipal
  },
  ,
  {
    path: '/emergencias',
    name: 'emergencias',
    component: ComponenteModuloEmergencias
  }
  ,
  {
    path: '/registrar-tecnico',
    name: 'registrarTecnico',
    component: ComponenteRegistroTecnicos
  }
  ,
  {
    path: '/solicitar-servicio',
    name: 'solicitarServicio',
    component: ComponenteFormularioServicio
  }
  ,
  {
    path: '/elegir-tecnico',
    name: 'elegirTecnico',
    component: ComponenteListaTecnicos,
    data: App.data
  },
  {
    path: '/notificacion-servicio',
    name: 'notificacionServicio',
    component: ComponenteNotificacionServicio,
    data: App.data
  },
  {
    path: '/cotizacion',
    name: 'Cotizacion',
    component: ComponenteCotizacion,
    
  }
]
  const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router