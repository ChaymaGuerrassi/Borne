import http from '../http-common'

class CategoriesDataService{
    getAll(){
        return http.get('/category')
    }
    getAllPlates(){
        return http.get('/plates')
    }
    //Donnée par id
    get(id){
        return http.get(`category/${id}`)
    }
}


export default new CategoriesDataService
