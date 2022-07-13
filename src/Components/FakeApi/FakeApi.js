import martillo from '../../assets/martillo.png'
import cable from '../../assets/cable.jpg'
import destornillador from '../../assets/destornillador.jpg'
import borcegos from '../../assets/borcegos.jpg'

    const products = [
        {
            id:1,
            image: <img width='100px' height='100px' src={destornillador}></img>,
            title:'Destornilladores',
            price:"$500",
            category:'herramientas',
            stock: 10,
        },
        {
            id:2,
            image: <img width='100px' height='100px' src={martillo}></img>,
            title:'Martillos',
            price:"$1000",
            category:'herramientas',
            stock: 5,
        },
        {
            id:3,
            image: <img width='100px' height='100px' src={cable}></img>,
            title:'Cable x M',
            price:"$20",
            category:'herramientas',
            stock: 7,
        },
        {
            id:4,
            image: <img width='100px' height='100px' src={borcegos}></img>,
            title:'Borcegos',
            price:"$20",
            category:'indumentaria',
            stock: 7,
        }
    ]

export const getData = (categoryId) => {

  
  return new Promise ((res, rej) => {
    
    const filteredProducts = products.filter((p) => p.category === categoryId)

    setTimeout(()=>{
      
      if(categoryId){
        res(filteredProducts)
      }else{
        res(products)
      }
    }, 2000)
  })
}

export const getDetailedList = (id) => {

  
  return new Promise ((res, rej) => {
    
    const detailedProducts = products.find((p) => p.id === Number (id))

    setTimeout(()=>{
      
      if(id){
        res(detailedProducts)
      }else{
        res(products)
      }
    }, 2000)
  })
}


