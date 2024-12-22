import Header from "./_components/Header"

function Provider({children}) {
  return (
    <div>
        <div>
            <Header></Header>
            {children}
        </div>
    </div>
  )
}
export default Provider