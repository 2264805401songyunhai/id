import React, { Component } from 'react'
import loadable from '@/utils/loader'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.less'

<<<<<<< HEAD
const Login = loadable(() => import('@/pages/Login'))
=======
const Login = loadable(() => import('@/pages/login'))
>>>>>>> a0a94efafc83113ca30795177c0e023c4aa6a9c8
const Home = loadable(() => import('@/pages/home'))
const Register = loadable(() => import('@/pages/register'))

export default class extends Component {
	render() {
		return (
			<>
				<BrowserRouter>
					<Switch>
						<Route path='/register' component={Register} />
						<Route path='/home' component={Home} />
						<Route path='/' component={Login} />
					</Switch>
				</BrowserRouter>
			</>
		)
	}
}
