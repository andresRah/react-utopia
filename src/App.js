import React from 'react'
import { Home } from './pages/Home'

export const App = () => {
  return (
    <div>
      <Home />
    </div>
  )
}

// export const App = () => {
//   const { isAuth } = useContext(Context)
//   return (
//     <div>
//       <GlobalStyle />
//       <Logo />
//       <Router>
//         <NotFound default />
//         <Home path='/' />
//         <Home path='/pet/:categoryId' />
//         <Detail path='/detail/:detailId' />
//         {!isAuth && <NotRegisteredUser path='/login' />}
//         {!isAuth && <Redirect from='/favs' to='/login' />}
//         {!isAuth && <Redirect from='/user' to='/login' />}
//         {isAuth && <Redirect from='/login' to='/' />}
//         <Favs path='/favs' />
//         <User path='/user' />
//       </Router>
//       <NavBar />
//     </div>
//   )
// }
