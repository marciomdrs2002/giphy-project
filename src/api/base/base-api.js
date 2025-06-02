import axios from 'axios'

export class BaseApi {
  constructor(baseUrl, endpoint = '') {
    this.baseUrl = baseUrl 
    this.endpoint = endpoint
  }

  /**
   * Realiza uma requisição GET
   * @param {string} url - URL do endpoint
   * @param {Object} config - Configurações adicionais do Axios
   * @returns {Promise} Promise com a resposta
   */
  async get(url = '', params = {}) {
    const response = await axios.get(`${this.baseUrl}${this.endpoint}${url}`, params)
    return response.data
  }

  /**
   * Realiza uma requisição POST
   * @param {string} url - URL do endpoint
   * @param {Object} data - Dados a serem enviados
   * @param {Object} config - Configurações adicionais do Axios
   * @returns {Promise} Promise com a resposta
   */
  async post(url = '', data = {}) {
    const response = await axios.post(`${this.baseUrl}${this.endpoint}${url}`, data)
    return response.data
  }

  /**
   * Realiza uma requisição PUT
   * @param {string} url - URL do endpoint
   * @param {Object} data - Dados a serem enviados
   * @param {Object} config - Configurações adicionais do Axios
   * @returns {Promise} Promise com a resposta
   */
  async put(url = '', data = {}) {
    const response = await axios.put(`${this.baseUrl}${this.endpoint}${url}`, data)
    return response.data
  }

  /**
   * Realiza uma requisição DELETE
   * @param {string} url - URL do endpoint
   * @param {Object} config - Configurações adicionais do Axios
   * @returns {Promise} Promise com a resposta
   */
  async delete(url = '') {
    const response = await axios.delete(`${this.baseUrl}${this.endpoint}${url}`)
    return response.data
  }

  /**
   * Realiza uma requisição PATCH
   * @param {string} url - URL do endpoint
   * @param {Object} data - Dados a serem enviados
   * @param {Object} config - Configurações adicionais do Axios
   * @returns {Promise} Promise com a resposta
   */
  async patch(url = '', data = {}, config = {}) {
    const response = await axios.patch(`${this.baseUrl}${this.endpoint}${url}`, data, config)
    return response.data
  }
}
