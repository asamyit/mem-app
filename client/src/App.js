import React, {useEffect} from 'react'
import {Container} from '@material-ui/core'
import { useDispatch } from 'react-redux'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
import { getPosts } from './actions/posts'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export default function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getPosts())
  },[dispatch])
  return (
      <BrowserRouter>
        <Container maxWidth="lg">
          <NavBar />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/auth' exact component={Auth}/>
          </Switch>
        </Container>
      </BrowserRouter> 
  )
}
