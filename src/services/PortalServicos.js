import API from '@/components/APIS/API.js'

export default class PortalServicos{

  static getAll(){
    return API.get('/api/servicos')
  }

  static getWithFilter(perfil, categoria){
    if((perfil && categoria) != null){
      return API.get(`/api/servicos?perfil=${perfil}&categoria=${categoria}`)
    }
    if(perfil != null){
      return API.get(`/api/servicos?perfil=${perfil}`)
    }
    if(categoria != null){
      return API.get(`/api/servicos?categoria=${categoria}`)
    }
    return API.get(`/api/servicos?perfil=${perfil}&categoria=${categoria}`)
  }

  static getWithPage(page = 1){
    return API.get('/api/servicos?page='+page)
  }
  static getFilterPerfilCategoria(){
      return API.get('/api/servicos/filters')
  }

}
