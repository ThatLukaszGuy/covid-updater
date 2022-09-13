import './App.css';
import Search from './components/Search/Search'
import { Container } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme';
import Header from './components/Layout/Header';
import WorldStats from './components/WorldStats/WorldStats';
import About from './components/About/About';
import Footer from './components/Layout/Footer';


function App() {


  return (
    <>
      <ThemeProvider theme={theme}>


        <Header />

         
          <Container>
            <div id='world'></div>     
            <WorldStats/>
            <div id='search'></div>
            <Search />
            <div id='about'></div>
            <About/>
          
            <Footer />
          </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
