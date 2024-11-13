import http from "../../http-common";

class AvisosDataService {
  getAll() {
    return http.get("/avisos");
  }

  get(id) {
    return http.get(`/avisos/${id}`);
  }

  create(data) {
    return http.post("/avisos", data);
  }

  update(id, data) {
    return http.put(`/avisos/${id}`, data);
  }

  delete(id) {
    return http.delete(`/avisos/${id}`);
  }

  deleteAll() {
    return http.delete(`/avisos`);
  }
}

export default new AvisosDataService();
