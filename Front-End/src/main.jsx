import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import MainRoutes from './routes/mainRoutes/MainRoutes.jsx'
import { Provider } from 'react-redux'
import { store } from './features/Store/store.js'
import { Toaster } from 'react-hot-toast';
createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={MainRoutes}>
            <App />
        </RouterProvider>
        <Toaster />
    </Provider>
)
