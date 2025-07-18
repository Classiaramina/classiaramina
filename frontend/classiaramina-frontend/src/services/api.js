const API_BASE_URL = 'http://localhost:5000/api'

class ApiService {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    }

    try {
      const response = await fetch(url, config)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      return await response.json()
    } catch (error) {
      console.error('API request failed:', error)
      throw error
    }
  }

  // Companies
  async getCompanies(categoria = null) {
    const params = categoria && categoria !== 'Todas' ? `?categoria=${categoria}` : ''
    return this.request(`/companies${params}`)
  }

  async getCompany(id) {
    return this.request(`/companies/${id}`)
  }

  async createCompany(data) {
    return this.request('/companies', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async updateCompany(id, data) {
    return this.request(`/companies/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

  async deleteCompany(id) {
    return this.request(`/companies/${id}`, {
      method: 'DELETE',
    })
  }

  async getCompanyCategories() {
    return this.request('/companies/categories')
  }

  // Services
  async getServices(categoria = null) {
    const params = categoria && categoria !== 'Todos' ? `?categoria=${categoria}` : ''
    return this.request(`/services${params}`)
  }

  async getService(id) {
    return this.request(`/services/${id}`)
  }

  async createService(data) {
    return this.request('/services', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async updateService(id, data) {
    return this.request(`/services/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

  async deleteService(id) {
    return this.request(`/services/${id}`, {
      method: 'DELETE',
    })
  }

  async rateService(id, rating) {
    return this.request(`/services/${id}/rating`, {
      method: 'POST',
      body: JSON.stringify({ rating }),
    })
  }

  async getServiceCategories() {
    return this.request('/services/categories')
  }

  // Jobs
  async getJobs(tipo = null) {
    const params = tipo && tipo !== 'Todos' ? `?tipo=${tipo}` : ''
    return this.request(`/jobs${params}`)
  }

  async getJob(id) {
    return this.request(`/jobs/${id}`)
  }

  async createJob(data) {
    return this.request('/jobs', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async updateJob(id, data) {
    return this.request(`/jobs/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

  async deleteJob(id) {
    return this.request(`/jobs/${id}`, {
      method: 'DELETE',
    })
  }

  async getJobTypes() {
    return this.request('/jobs/types')
  }

  // Users
  async getUsers() {
    return this.request('/users')
  }

  async getUser(id) {
    return this.request(`/users/${id}`)
  }

  async createUser(data) {
    return this.request('/users', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async updateUser(id, data) {
    return this.request(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

  async deleteUser(id) {
    return this.request(`/users/${id}`, {
      method: 'DELETE',
    })
  }

  // Status
  async getStatus() {
    return this.request('/status')
  }

  // Seed data (for development)
  async seedData() {
    return this.request('/seed-data', {
      method: 'POST',
    })
  }
}

export default new ApiService()

