import API from '@/components/APIS/API.js'

export default  class NoticiasService{
  static getAll(){
    return API.get('/api/noticias')
  }
  static getFilters(){
    return API.get('/api/noticias/filters')
  }
  static getWithFilter(filter,page = 1){
    if(page != 1){
      return API.get(`/api/noticias?tipo=${filter}&page=${page}`)
    }
    return API.get(`/api/noticias?tipo=${filter}`)
  }
  static getWithPage(page = 1){
    return API.get(`/api/noticias?page=${page}`)
  }

}
