import { renderRootComponent } from '../utils/render'
import { Profile } from '../views/Profile'

renderRootComponent(Profile)

if (module.hot) {
	module.hot.accept()
}
