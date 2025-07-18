import { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { Users, Building, Briefcase, DollarSign, TrendingUp, Eye, Calendar, Star } from 'lucide-react'

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 1250,
    totalCompanies: 485,
    totalServices: 892,
    totalJobs: 156,
    monthlyRevenue: 15420.50,
    activeAds: 1033
  })

  // Dados de exemplo para gráficos
  const monthlyData = [
    { month: 'Jan', companies: 45, services: 78, jobs: 12 },
    { month: 'Fev', companies: 52, services: 85, jobs: 18 },
    { month: 'Mar', companies: 48, services: 92, jobs: 15 },
    { month: 'Abr', companies: 61, services: 105, jobs: 22 },
    { month: 'Mai', companies: 55, services: 98, jobs: 19 },
    { month: 'Jun', companies: 67, services: 112, jobs: 25 }
  ]

  const categoryData = [
    { name: 'Alimentação', value: 125, color: '#3B82F6' },
    { name: 'Automotivo', value: 89, color: '#10B981' },
    { name: 'Saúde', value: 76, color: '#F59E0B' },
    { name: 'Beleza', value: 95, color: '#EF4444' },
    { name: 'Casa', value: 100, color: '#8B5CF6' }
  ]

  const recentActivities = [
    { id: 1, type: 'company', action: 'Nova empresa cadastrada', name: 'Padaria do João', time: '2 horas atrás' },
    { id: 2, type: 'service', action: 'Novo serviço adicionado', name: 'Limpeza Residencial Pro', time: '4 horas atrás' },
    { id: 3, type: 'job', action: 'Nova vaga publicada', name: 'Desenvolvedor Frontend', time: '6 horas atrás' },
    { id: 4, type: 'payment', action: 'Pagamento aprovado', name: 'Plano Premium - Auto Center', time: '8 horas atrás' },
    { id: 5, type: 'user', action: 'Novo usuário registrado', name: 'Maria Silva', time: '1 dia atrás' }
  ]

  const StatCard = ({ title, value, icon: Icon, color, change }) => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {change && (
            <p className={`text-sm flex items-center mt-1 ${change > 0 ? 'text-green-600' : 'text-red-600'}`}>
              <TrendingUp className="w-4 h-4 mr-1" />
              {change > 0 ? '+' : ''}{change}% este mês
            </p>
          )}
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  )

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Administrativo</h1>
        <p className="text-gray-600">Visão geral do ClassiAramina</p>
      </div>

      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
        <StatCard
          title="Total de Usuários"
          value={stats.totalUsers.toLocaleString()}
          icon={Users}
          color="bg-blue-500"
          change={12}
        />
        <StatCard
          title="Empresas"
          value={stats.totalCompanies}
          icon={Building}
          color="bg-green-500"
          change={8}
        />
        <StatCard
          title="Serviços"
          value={stats.totalServices}
          icon={Star}
          color="bg-purple-500"
          change={15}
        />
        <StatCard
          title="Vagas"
          value={stats.totalJobs}
          icon={Briefcase}
          color="bg-orange-500"
          change={-3}
        />
        <StatCard
          title="Receita Mensal"
          value={`R$ ${stats.monthlyRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
          icon={DollarSign}
          color="bg-emerald-500"
          change={22}
        />
        <StatCard
          title="Anúncios Ativos"
          value={stats.activeAds}
          icon={Eye}
          color="bg-indigo-500"
          change={5}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Gráfico de Cadastros Mensais */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Cadastros Mensais</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="companies" fill="#3B82F6" name="Empresas" />
              <Bar dataKey="services" fill="#10B981" name="Serviços" />
              <Bar dataKey="jobs" fill="#F59E0B" name="Vagas" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Gráfico de Categorias */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Empresas por Categoria</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Atividades Recentes */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Atividades Recentes</h3>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className={`p-2 rounded-full mr-4 ${
                  activity.type === 'company' ? 'bg-blue-100 text-blue-600' :
                  activity.type === 'service' ? 'bg-green-100 text-green-600' :
                  activity.type === 'job' ? 'bg-orange-100 text-orange-600' :
                  activity.type === 'payment' ? 'bg-emerald-100 text-emerald-600' :
                  'bg-purple-100 text-purple-600'
                }`}>
                  {activity.type === 'company' && <Building className="w-4 h-4" />}
                  {activity.type === 'service' && <Star className="w-4 h-4" />}
                  {activity.type === 'job' && <Briefcase className="w-4 h-4" />}
                  {activity.type === 'payment' && <DollarSign className="w-4 h-4" />}
                  {activity.type === 'user' && <Users className="w-4 h-4" />}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.name}</p>
                </div>
              </div>
              <div className="flex items-center text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                <span className="text-sm">{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard

