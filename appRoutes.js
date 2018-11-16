
import Home from './src/components/views/Home'
import Register from './src/components/views/Register'
import Search from './src/components/views/Search'
import Analyze from './src/components/views/Analyze'

const AppRoutes = {
    Home: { screen: Home, title: 'Início', icon: { name: 'home' } },
    Register: { screen: Register, title: 'Cadastro', icon: { name: 'people' } },
    Search: { screen: Search, title: 'Pesquisa', icon: { name: 'search' } },
    Analyze: { screen: Analyze, title: 'Análise', icon: { name: 'insert-chart', type: 'MaterialIcons' } },
}

export default AppRoutes