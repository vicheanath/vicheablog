import AdminLayout from '@/layouts/AdminLayout'

const Dashboard = () => {
  return (
    <AdminLayout>
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Dashboard</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Welcome back, Admin</p>
      </div>
    </AdminLayout>
  )
}

export default Dashboard
