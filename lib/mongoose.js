import { connect, connection } from 'mongoose'
import { initPermissions, initRoles } from './cmd'

export async function dbConnect() {
  const conn = {
    isConnected: 0,
  }
  if (conn.isConnected) {
    return
  }

  const db = await connect(process.env.MONGODB_URI)
  conn.isConnected = db.connections[0].readyState

  initPermissions()
  initRoles()
}

connection.on('connected', () => console.log('Mongodb connected to db'))

connection.on('error', (err) => console.error('Mongodb Errro:', err.message))
