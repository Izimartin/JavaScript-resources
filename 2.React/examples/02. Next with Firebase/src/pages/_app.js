import '../../styles/globals.css'
import '../../styles/forms.css'
import '../../styles/profile.css'

import {AuthProvider} from '../context/AuthContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
