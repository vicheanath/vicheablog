import React from 'react'
import Button from '@/components/Button'
import AdminLayout from '@/layouts/AdminLayout'
import { PermissionService } from 'services/PermissionService'
import { FiEdit, FiEdit2, FiTrash2, FiX } from 'react-icons/fi'
import Model from '@/components/Model'

export async function getServerSideProps() {
  const permission = await PermissionService.findAll()
  return {
    props: {
      permission: JSON.parse(JSON.stringify(permission)),
    },
  }
}

export default function Permission({ permission }) {
  const [isOpened, setIsOpened] = React.useState(false)
  const [data, setData] = React.useState({})
  return (
    <AdminLayout>
      <Model isOpened={isOpened} onClose={() => setIsOpened(false)}>
        <div className="flex w-full flex-col gap-4">
          <div className="flex flex-row gap-5">
            <h1 className="text-2xl font-bold">
              {data._id ? 'Edit Permission' : 'Create Permission'}
            </h1>
            <Button
              color="red"
              onClick={() => {
                setIsOpened(false)
              }}
            >
              <FiX />
            </Button>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col gap-5">
              <label className="text-sm font-light text-gray-600 dark:text-gray-400">Name</label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-indigo-500"
                placeholder="Name"
                value={data.name}
              />

              <Button color="green" leftIcon={<FiEdit />}>
                Create
              </Button>
            </div>
          </div>
        </div>
      </Model>

      <div className="flex flex-col ">
        <div className="flex w-full flex-col">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-left text-sm font-light text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                <th className="px-4 py-2">No.</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {permission?.map((per, idx) => {
                return (
                  <tr key={per._id} className="even:bg-gray-100 dark:even:bg-gray-800">
                    <td className=" px-4 py-2">{idx + 1}</td>
                    <td className=" px-4 py-2">{per.name}</td>
                    <td className=" px-4 py-2">
                      <span className="flex gap-2">
                        <Button
                          onClick={() => {
                            setIsOpened(true)
                            setData(per)
                          }}
                          color="green"
                          leftIcon={<FiEdit2 />}
                        >
                          Edit
                        </Button>
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  )
}
