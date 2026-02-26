import { RouterProvider } from "react-router"
import { router } from "./feature/App.routes"
import "./feature/shared/global.scss"
import { AuthProvider } from "./feature/auth/auth.context"

const App = () => {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  )
}

export default App
