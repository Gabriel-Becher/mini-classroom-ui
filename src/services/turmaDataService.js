import http from "../../http-common";

class TurmaDataService {
  getAll() {
    return http.get("/turmas");
  }

  get(id) {
    return http.get(`/turmas/${id}`);
  }

  create(data) {
    return http.post("/turmas", data);
  }

  update(id, data) {
    return http.put(`/turmas/${id}`, data);
  }

  delete(id) {
    return http.delete(`/turmas/${id}`);
  }

  deleteAll() {
    return http.delete(`/turmas`);
  }
}

export default new TurmaDataService();
