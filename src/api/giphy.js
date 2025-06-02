import { BaseApi } from 'src/api/base/base-api'

const GIPHY_API_KEY = process.env.GIPHY_API_KEY

export class GiphyApi extends BaseApi {
  constructor() {
    super('https://api.giphy.com/v1/', 'gifs')

    this._defaultParams = {
      api_key: GIPHY_API_KEY,
      limit: 20,
      rating: 'g',
      lang: 'pt-BR',
    }
  }

  /**
   * Busca GIFs com paginação
   * @param {string} query - Termo de busca
   * @param {number} page - Número da página
   * @param {number} pageSize - Tamanho da página
   * @returns {Promise} Promise com os resultados
   */
  async search(query, page = 1, pageSize = 20) {
    const offset = (page - 1) * pageSize
    const response = await this.get('/search', {
      params: {
        ...this._defaultParams,
        q: query,
        limit: pageSize,
        offset,
      },
    })

    return {
      data: response.data,
      pagination: response.pagination,
    }
  }

  /**
   * Busca GIFs em tendência com paginação
   * @param {number} page - Número da página
   * @param {number} pageSize - Tamanho da página
   * @returns {Promise} Promise com os resultados
   */
  async trending(page = 1, pageSize = 20) {
    const offset = (page - 1) * pageSize
    const response = await this.get('/trending', {
      params: {
        ...this._defaultParams,
        limit: pageSize,
        offset,
      },
    })

    return {
      data: response.data,
      pagination: response.pagination,
    }
  }

  /**
   * Busca um GIF por ID
   * @param {string} id - ID do GIF
   * @returns {Promise} Promise com o resultado
   */
  async getById(id) {
    const response = await this.get(`/${id}`, {
      params: this._defaultParams,
    })
    return response.data
  }

  /**
   * Busca GIFs aleatórios
   * @param {string} tag - Tag opcional para buscar GIFs aleatórios
   * @returns {Promise} Promise com os resultados
   */
  async random(tag) {
    const response = await this.get('/random', {
      params: {
        ...this._defaultParams,
        tag,
      },
    })
    return response.data
  }
}

// Exporta uma instância única para ser usada em toda a aplicação
export const giphyApi = new GiphyApi()
