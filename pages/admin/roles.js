import React from 'react'
import Button from '@/components/Button'
import Image from 'next/image'
import AdminLayout from '@/layouts/AdminLayout'
import { FiEdit2, FiTrash2 } from 'react-icons/fi'

export async function getServerSideProps() {
  const roles = []
  return {
    props: {
      roles: JSON.parse(JSON.stringify(roles)),
    },
  }
}

export default function Role({ roles }) {
  return (
    <AdminLayout>
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
              {roles.map((user, idx) => {
                return (
                  <tr
                    key={user._id}
                    className="border-b border-gray-200 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-900"
                  >
                    <td className="border px-4 py-2">{idx + 1}</td>
                    <td className="border px-4 py-2">{user.name}</td>

                    <td className="flex gap-2 border px-4 py-2">
                      <Button color="green" leftIcon={<FiEdit2 />}>
                        Edit
                      </Button>
                      <Button color="red" leftIcon={<FiTrash2 />}>
                        Delete
                      </Button>
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
