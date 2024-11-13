import http from "../../http-common";

class FotoDataService {
  create(data) {
    return http.post("/fotos", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  delete(id) {
    return http.delete(`/fotos/${id}`);
  }

  update(id, data) {
    return http.put("/fotos/" + id, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}
export default new FotoDataService();
