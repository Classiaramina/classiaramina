import { useState, useEffect } from 'react'
import { Search, Plus, Edit, Trash2, Eye, Filter, Building, MapPin, Phone, Mail, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const CompanyManagement = () => {
  const [companies, setCompanies] = useState([])
  const [filteredCompanies, setFilteredCompanies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('Todos')
  const [categoryFilter, setCategoryFilter] = useState('Todas')

  // Dados de exemplo
  const sampleCompanies = [
    {
      id: 1,
      nome: 'Padaria Central',
      categoria: 'Alimentação',
      endereco: 'Rua Principal, 123 - Centro',
      telefone: '(16) 3333-1111',
      email: 'contato@padariacentral.com',
      site: 'www.padariacentral.com',
      status: 'Ativo',
      data_cadastro: '2024-01-15',
      plano: 'Profissional'
    },
    {
      id: 2,
      nome: 'Auto Mecânica Silva',
      categoria: 'Automotivo',
      endereco: 'Av. Industrial, 456',
      telefone: '(16) 3333-2222',
      email: 'silva@automecanicanica.com',
      site: null,
      status: 'Ativo',
      data_cadastro: '2024-01-10',
      plano: 'Básico'
    },
    {
      id: 3,
      nome: 'Farmácia Saúde',
      categoria: 'Saúde',
      endereco: 'Rua da Saúde, 789',
      telefone: '(16) 3333-3333',
      email: 'farmacia@saude.com',
      site: 'www.farmaciasaude.com.br',
      status: 'Pendente',
      data_cadastro: '2024-01-20',
      plano: 'Premium'
    },
    {
      id: 4,
      nome: 'Loja Fashion',
      categoria: 'Moda',
      endereco: 'Rua do Comércio, 321',
      telefone: '(16) 3333-4444',
      email: 'contato@fashionloja.com',
      site: null,
      status: 'Inativo',
      data_cadastro: '2024-01-05',
      plano: 'Básico'
    }
  ]

  useEffect(() => {
    setCompanies(sampleCompanies)
    setFilteredCompanies(sampleCompanies)
  }, [])

  useEffect(() => {
    let filtered = companies

    if (searchTerm) {
      filtered = filtered.filter(company =>
        company.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.email.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (statusFilter !== 'Todos') {
      filtered = filtered.filter(company => company.status === statusFilter)
    }

    if (categoryFilter !== 'Todas') {
      filtered = filtered.filter(company => company.categoria === categoryFilter)
    }

    setFilteredCompanies(filtered)
  }, [searchTerm, statusFilter, categoryFilter, companies])

  const getStatusColor = (status) => {
    switch (status) {
      case 'Ativo':
        return 'bg-green-100 text-green-800'
      case 'Pendente':
        return 'bg-yellow-100 text-yellow-800'
      case 'Inativo':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getPlanColor = (plano) => {
    switch (plano) {
      case 'Básico':
        return 'bg-blue-100 text-blue-800'
      case 'Profissional':
        return 'bg-green-100 text-green-800'
      case 'Premium':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const handleStatusChange = (companyId, newStatus) => {
    setCompanies(companies.map(company =>
      company.id === companyId ? { ...company, status: newStatus } : company
    ))
  }

  const categories = ['Todas', 'Alimentação', 'Automotivo', 'Saúde', 'Moda', 'Serviços', 'Educação']
  const statuses = ['Todos', 'Ativo', 'Pendente', 'Inativo']

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Gerenciamento de Empresas</h1>
        <p className="text-gray-600">Gerencie todas as empresas cadastradas na plataforma</p>
      </div>

      {/* Filtros e Busca */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Buscar empresas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {statuses.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Nova Empresa
          </Button>
        </div>
      </div>

      {/* Estatísticas Rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center">
            <Building className="w-8 h-8 text-blue-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Total</p>
              <p className="text-xl font-bold">{companies.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <div>
              <p className="text-sm text-gray-600">Ativas</p>
              <p className="text-xl font-bold">{companies.filter(c => c.status === 'Ativo').length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div>
              <p className="text-sm text-gray-600">Pendentes</p>
              <p className="text-xl font-bold">{companies.filter(c => c.status === 'Pendente').length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div>
              <p className="text-sm text-gray-600">Inativas</p>
              <p className="text-xl font-bold">{companies.filter(c => c.status === 'Inativo').length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lista de Empresas */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Empresa
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Categoria
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contato
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Plano
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cadastro
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCompanies.map((company) => (
                <tr key={company.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{company.nome}</div>
                      <div className="text-sm text-gray-500 flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {company.endereco}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {company.categoria}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <Phone className="w-3 h-3 mr-1" />
                        {company.telefone}
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-3 h-3 mr-1" />
                        {company.email}
                      </div>
                      {company.site && (
                        <div className="flex items-center">
                          <Globe className="w-3 h-3 mr-1" />
                          {company.site}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      value={company.status}
                      onChange={(e) => handleStatusChange(company.id, e.target.value)}
                      className={`text-xs font-medium px-2.5 py-0.5 rounded-full border-0 ${getStatusColor(company.status)}`}
                    >
                      <option value="Ativo">Ativo</option>
                      <option value="Pendente">Pendente</option>
                      <option value="Inativo">Inativo</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPlanColor(company.plano)}`}>
                      {company.plano}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(company.data_cadastro).toLocaleDateString('pt-BR')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <Button size="sm" variant="ghost">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-red-600 hover:text-red-700">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredCompanies.length === 0 && (
        <div className="text-center py-12">
          <Building className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhuma empresa encontrada</h3>
          <p className="text-gray-500">Tente ajustar os filtros ou adicione uma nova empresa.</p>
        </div>
      )}
    </div>
  )
}

export default CompanyManagement

