const API_URL = "http://localhost:3000";
import axios from "axios";

export default {
  //Usuários
  async buscarUsuarios() {
    return axios.get(API_URL + "/usuarios").then(response => response.data);
  },

  async salvarUsuario(usuario) {
    return axios
      .post(API_URL + "/usuarios", usuario)
      .then(response => response.data);
  },

  async mudarStatus(usuario) {
    return axios.put(API_URL + "/usuarios", usuario).then(usuario => usuario.data);
  },

  //Produtos
  async buscarProdutos() {
    return axios.get(API_URL + "/produtos").then(produto => produto.data);
  },

  async editarProduto(produto) {
    return axios.put(API_URL + "/produtos", produto).then(produto => produto.data)
  },
  async adicionarProduto(produto) {
    return axios
      .post(API_URL + "/produtos", produto)
      .then(response => response.data);
  },

  async mudarStatus(produto) {
    return axios.put(API_URL + "/produtos", produto).then(produto => produto.data);
  },
  //Compras
  async buscarCompras() {
    return axios.get(API_URL + "/compras").then(compra => compra.data);
  },

  //Clientes
  async buscarClientes() {
    return axios.get(API_URL + "/clientes").then(cliente => cliente.data);
  },

  async salvarCliente(cliente) {
    return axios
      .post(API_URL + "/clientes", cliente)
      .then(response => response.data);
  },

  //Contato
  async buscarContatos() {
    return axios.get(API_URL + "/contato").then(contato => contato.data);
  },

  //Contato Salvar
  async salvarResposta(item) {
    return axios.put(API_URL + "/contato", item).then(contato => contato.data);
  },

  //Login
  async autenticar(usuario) {
    return axios
      .post(API_URL + "/autenticar", usuario)
      .then(autenticar => autenticar.data);
  },

  //Setores
  async buscarSetores() {
    return axios.get(API_URL + "/setores").then(setor => setor.data);
  },

  async salvarSetor(setor) {
    return axios.post(API_URL + "/setores", setor).then(setor => setor.data);
  },

  async setorStatus(setor) {
    return axios.put(API_URL + "/setores", setor).then(setor => setor.data);
  },

};