import Product from "@/components/product"
const productos: Array<Object> = [
  {
    name: "product1",
    id: 1
  },
  {
    name: "producto 2",
    id: 2
  }
]
export default function Products() {
  return (
    <main className="">
      <h1>Lista de Productos actuales</h1>
      {productos.map((prod) => (
        <Product data={prod} key={prod.id}></Product>
      ))}
    </main>
  )
}