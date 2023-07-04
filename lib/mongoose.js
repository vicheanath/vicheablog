import { connect, connection } from 'mongoose'
import { initPermissions, initRoles } from './cmd'

const conn = {
  isConnected: false,
}

export async function dbConnect() {
  if (conn.isConnected) {
    return
  }

  const db = await connect(process.env.MONGODB_URI)
  console.log(db.connection.db.databaseName)
  conn.isConnected = db.connections[0].readyState

  initPermissions()
  initRoles()
}

connection.on('connected', () => console.log('Mongodb connected to db'))

connection.on('error', (err) => console.error('Mongodb Errro:', err.message))
