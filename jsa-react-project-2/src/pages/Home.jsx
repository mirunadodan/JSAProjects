// rfce + enter = shortcut pt codul initial pt o pagina noua
import React from 'react';
import Layout from '../components/Layout';
import HomeCategory from '../components/HomeCategory';

function Home() {
  return (
    <>
    <Layout>
        <div class="container text-center">
            <div class="row">            
                 <HomeCategory/>
                 <HomeCategory/>
                 <HomeCategory/>
                 <HomeCategory/>   
            </div>
        </div>
    </Layout>
    </>
  )
}

export default Home;