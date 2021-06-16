import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [page, setPage] = useState(`About me`);
  
  return (
    <div>
      <Nav setPage={setPage}></Nav>
      <main>
        {page === `About me` ? 
          <About></About> : null
        }
        {page === `Portfolio` ? 
          <Portfolio></Portfolio> : null
        }
        {page === `Resumé` ? 
          <About></About> : null
        }
        {page === `Contact` ? 
          <ContactForm>
          </ContactForm> : null
        }
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;