import { Client } from 'pg'

const client = new Client({
  connectionString: 'postgresql://postgres:%25R%26YY9uank7%2B2.Y@db.zwywvqbcjsxnehaawilz.supabase.co:5432/postgres',
  ssl: {
    rejectUnauthorized: false
  }
})

async function connectDB() {
  try {
    await client.connect()
    console.log('✅ Connected to Supabase PostgreSQL database successfully.')

    // Optional test query
    const res = await client.query('SELECT NOW()')
    console.log('Server time:', res.rows[0])

    await client.end()
  } catch (err) {
    console.error('❌ Connection error:', err.stack)
  }
}

connectDB()