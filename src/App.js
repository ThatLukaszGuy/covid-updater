import './App.css';
import Search from './components/Search';
import { Container } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme';
import Header from './components/Header';
import WorldStats from './components/WorldStats';
import About from './components/About';
import Footer from './components/Footer';



function App() {


  return (
    <>
      <ThemeProvider theme={theme}>
        
        <Header />
        <Container maxWidth={false}>
          <div id='world'></div>     
          <WorldStats/>
          <div id='search'></div>
          <Search />
          <div id='about'></div>
          <About/>
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
