import Header from './components/Header'
import Footer from './components/Footer'
import Result from './components/Result'
import Tips from './components/Tips'
import Limitations from './components/Limitations'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Result />
        <Tips />
        <Limitations />
      </main>
      <Footer />
    </>
  )
}
export default App
