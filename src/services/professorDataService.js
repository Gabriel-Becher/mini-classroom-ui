import http from "../../http-common";

class ProfessorDataService {
  getAll() {
    return http.get("/professores");
  }

  get(id) {
    return http.get(`/professores${id}`);
  }

  create(data) {
    return http.post("/professores", data);
  }

  update(id, data) {
    return http.put(`/professores${id}`, data);
  }

  delete(id) {
    return http.delete(`/professores${id}`);
  }

  deleteAll() {
    return http.delete(`/professores`);
  }

  findByName(data) {
    return http.get(`/professores?name=${data}`);
  }
}

export default new ProfessorDataService();
