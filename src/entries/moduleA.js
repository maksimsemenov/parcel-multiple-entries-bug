import { logSomething } from '../deps/common'

function startModuleA() {
	setInterval(() => {
		logSomething('Module A')
	}, 1000)
}

startModuleA()
