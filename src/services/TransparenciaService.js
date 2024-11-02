import API from '@/components/APIS/API.js'

export default  class TransparenciaService{
  static getAll(){
    return API.get('/api/transparencia')
  }
  static getFilters(){
    return API.get('/api/transparencia/filters')
  }
  static getWithFilter(filter,page = 1){
    if(page != 1){
      return API.get(`/api/transparencia?tipo=${filter}&page=${page}`)
    }
    return API.get(`/api/transparencia?tipo=${filter}`)
  }
  static getWithPage(page = 1){
    return API.get(`/api/transparencia?page=${page}`)
  }

}