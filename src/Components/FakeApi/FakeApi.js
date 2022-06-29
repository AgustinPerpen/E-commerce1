import martillo from '../../assets/martillo.png'
import cable from '../../assets/cable.jpg'
import destornillador from '../../assets/destornillador.jpg'

    const products = [
        {
            id:1,
            image: <img width='50px' height='50px' src={destornillador}></img>,
            title:'Destornilladores',
            price:"$500",
            stock: '5',
        },
        {
            id:2,
            image: <img width='50px' height='50px' src={martillo}></img>,
            title:'Martillos',
            price:"$1000",
            stock: '5',
        },
        {
            id:3,
            image: <img width='50px' height='50px' src={cable}></img>,
            title:'Cable x M',
            price:"$20",
            stock: '5m',
        }
    ]

export const getData = new Promise ((res, rej) =>{

    let condition = true
    setTimeout(()=>{
      if(condition){
        res(products)
      }else{
        rej('Error')
      }
    },2000)
  })
