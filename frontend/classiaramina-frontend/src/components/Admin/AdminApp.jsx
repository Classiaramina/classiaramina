import { useState } from 'react'
import AdminLayout from './AdminLayout.jsx'
import Dashboard from './Dashboard.jsx'
import CompanyManagement from './CompanyManagement.jsx'

const AdminApp = () => {
  const [currentPage, setCurrentPage] = useState('dashboard')

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />
      case 'companies':
        return <CompanyManagement />
      case 'services':
        return <div className="p-6"><h1 className="text-2xl font-bold">Gerenciamento de Serviços</h1><p className="text-gray-600 mt-2">Em desenvolvimento...</p></div>
      case 'jobs':
        return <div className="p-6"><h1 className="text-2xl font-bold">Gerenciamento de Vagas</h1><p className="text-gray-600 mt-2">Em desenvolvimento...</p></div>
      case 'users':
        return <div className="p-6"><h1 className="text-2xl font-bold">Gerenciamento de Usuários</h1><p className="text-gray-600 mt-2">Em desenvolvimento...</p></div>
      case 'payments':
        return <div className="p-6"><h1 className="text-2xl font-bold">Gerenciamento de Pagamentos</h1><p className="text-gray-600 mt-2">Em desenvolvimento...</p></div>
      case 'reports':
        return <div className="p-6"><h1 className="text-2xl font-bold">Relatórios</h1><p className="text-gray-600 mt-2">Em desenvolvimento...</p></div>
      case 'content':
        return <div className="p-6"><h1 className="text-2xl font-bold">Gerenciamento de Conteúdo</h1><p className="text-gray-600 mt-2">Em desenvolvimento...</p></div>
      case 'settings':
        return <div className="p-6"><h1 className="text-2xl font-bold">Configurações</h1><p className="text-gray-600 mt-2">Em desenvolvimento...</p></div>
      default:
        return <Dashboard />
    }
  }

  return (
    <AdminLayout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderPage()}
    </AdminLayout>
  )
}

export default AdminApp

