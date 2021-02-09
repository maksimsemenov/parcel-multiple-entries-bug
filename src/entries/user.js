import { renderRootComponent } from '../utils/render'
import { User } from '../views/User'

renderRootComponent(User)

if (module.hot) {
	module.hot.accept()
}
