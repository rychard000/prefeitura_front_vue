import API from '@/components/APIS/API.js'

export default class EstruturaOrganizacional{

  static getAll(){
    return API.get('/api/estrutura-organizacional')
  }

  static getById(id){
    return API.get('/api/estrutura-organizacional/'+id)
  }
  static getFilters(){
    return API.get('/api/estrutura-organizacional/filters')
  }
  static getWithFilter(filter,page = 1){
    if(page != 1){
      return API.get(`/api/estrutura-organizacional?tipo=${filter}&page=${page}`)
    }
    return API.get(`/api/estrutura-organizacional?tipo=${filter}`)
  }

  static getWithPage(page = 1){
      return API.get(`/api/estrutura-organizacional?page=${page}`)
  }

  static getGabinetePrefeito(){
    return API.get('/api/gabinete/prefeito')
  }

  static getGabineteVicePrefeito(){
    return API.get('/api/gabinete/vice-prefeito')
  }

}
