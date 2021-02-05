import { logSomething } from '../deps/common'

function startModuleA() {
	setInterval(() => {
		logSomething('Module B')
	}, 1000)
}

startModuleA()
