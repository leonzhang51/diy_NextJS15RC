import axios from 'axios'
export async function GET() {
  const res = await axios.get('https://fakestoreapi.com/products')

  return Response.json({ data: res.data })
}
