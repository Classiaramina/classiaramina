import { useState, useEffect } from 'react'
import { Search, MapPin, Phone, Mail, Globe, Star, Filter } from 'lucide-react'
import ApiService from '../services/api.js'

const Companies = () => {
  const [companies, setCompanies] = useState([])
  const [filteredCompanies, setFilteredCompanies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todas')
  const [categories, setCategories] = useState(['Todas'])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    loadCompanies()
    loadCategories()
  }, [])

  useEffect(() => {
    filterCompanies()
  }, [companies, searchTerm, selectedCategory])

  const loadCompanies = async () => {
    try {
      setLoading(true)
      const data = await ApiService.getCompanies()
      setCompanies(data)
      setError(null)
    } catch (err) {
      setError('Erro ao carregar empresas')
      console.error('Error loading companies:', err)
    } finally {
      setLoading(false)
    }
  }

  const loadCategories = async () => {
    try {
      const data = await ApiService.getCompanyCategories()
      setCategories(['Todas', ...data])
    } catch (err) {
      console.error('Error loading categories:', err)
    }
  }

  const filterCompanies = () => {
    let filtered = companies

    if (searchTerm) {
      filtered = filtered.filter(company =>
        company.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.descricao?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.endereco.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedCategory !== 'Todas') {
      filtered = filtered.filter(company => company.categoria === selectedCategory)
    }

    setFilteredCompanies(filtered)
  }

  const CompanyCard = ({ company }) => (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{company.nome}</h3>
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
            {company.categoria}
          </span>
        </div>
        {company.logo_url && (
          <img 
            src={company.logo_url} 
            alt={`Logo ${company.nome}`}
            className="w-16 h-16 object-cover rounded-lg"
          />
        )}
      </div>
      
      {company.descricao && (
        <p className="text-gray-600 mb-4 line-clamp-3">{company.descricao}</p>
      )}
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-600">
          <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
          <span className="text-sm">{company.endereco}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
          <span className="text-sm">{company.telefone}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
          <span className="text-sm">{company.email}</span>
        </div>
        {company.site && (
          <div className="flex items-center text-gray-600">
            <Globe className="w-4 h-4 mr-2 flex-shrink-0" />
            <a 
              href={`https://${company.site}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              {company.site}
            </a>
          </div>
        )}
      </div>
      
      <div className="flex items-center justify-between">
        <span className={`text-xs px-2 py-1 rounded-full ${
          company.status === 'Ativo' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-gray-100 text-gray-800'
        }`}>
          {company.status}
        </span>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Ver Detalhes
        </button>
      </div>
    </div>
  )

  if (loading) {
    return (
      <section id="empresas" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Empresas Cadastradas</h2>
            <p className="text-xl text-gray-600">Carregando empresas...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="empresas" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Empresas Cadastradas</h2>
            <p className="text-xl text-red-600">{error}</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="empresas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Empresas Cadastradas</h2>
          <p className="text-xl text-gray-600">
            Encontre as melhores empresas de Aramina
          </p>
        </div>

        {/* Filtros */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar empresas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{companies.length}</div>
            <div className="text-gray-600">Total de Empresas</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {companies.filter(c => c.status === 'Ativo').length}
            </div>
            <div className="text-gray-600">Empresas Ativas</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">{categories.length - 1}</div>
            <div className="text-gray-600">Categorias</div>
          </div>
        </div>

        {/* Lista de Empresas */}
        {filteredCompanies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCompanies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Nenhuma empresa encontrada
            </h3>
            <p className="text-gray-600">
              Tente ajustar os filtros ou termos de busca
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Companies

