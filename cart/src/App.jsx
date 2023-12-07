import React,{useState} from 'react'
import Nav from './components/Nav'
import Card from './components/Card'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  let [cart,setCart] = useState(0);
  let product = [
    {
      name:"Lash Fill Mascara",
      price:2
    },
    {
      name:"Smudge Me Not Liquid Lipstick",
      price:5
    },
    {
      name:"Glow Me Foundation",
      price:10
    },
    {
      name:"Lumi Spark Highlighter",
      price:5
    },
    {
      name:"Sharp Look Contour",
      price:9
    },
    {
      name:"Bold Eyes Kajal",
      price:2
    },
    {
      name:"Blush Me Up Palette",
      price:3
    },
    {
      name:"Matte Finish Compact",
      price:5
    }

  ]
  return <>
    <Nav cart={cart} setCart={setCart}/>
    <Header/>
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        {
                product.map((e,i)=>{
                  return <Card cart={cart} setCart={setCart} product={e} />
                })
              }
        </div>
      </div>
    </section>
    <Footer/>
  </>
}

export default App