import React from 'react'
import Button from '@/components/Button'
import { UserService } from 'services/UserService'
import Image from 'next/image'
import AdminLayout from '@/layouts/AdminLayout'

export async function getServerSideProps() {
  const users = await UserService.findAll()
  console.log(users)
  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
    },
  }
}

export default function UsersAdmin({ users }) {
  return (
    <AdminLayout>
      <div className="flex flex-col ">
        <div className="flex w-full flex-col">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-left text-sm font-light text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                <th className="px-4 py-2">No.</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Photo</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => {
                return (
                  <tr
                    key={user._id}
                    className="border-b border-gray-200 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-900"
                  >
                    <td className="border px-4 py-2">{idx + 1}</td>
                    <td className="border px-4 py-2">{user.name}</td>
                    <td className="border px-4 py-2">
                      <img
                        src={user.image}
                        alt={user.name}
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                    </td>
                    <td className="border px-4 py-2">{user.email}</td>
                    <td className="border px-4 py-2">{user.role}</td>
                    <td className="flex gap-2 border px-4 py-2">
                      <Button color="green">Edit</Button>
                      <Button color="red">Delete</Button>
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
