// import React, { useState } from 'react'
// import "./Carousel.css";
// import { images } from "../Helper/CarouselData"
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

// function Carousel() {

//     const [currImg, setCurrImg] = useState(0);
//     return (
//         <div className="carousel">
//             <div className="carouselInner" style={{backgroundImage: `url(${images[currImg].img})`}}>
//                 <div className="left" onClick={() => {
//                     currImg > 0 && setCurrImg(currImg-1);
//                     }}>
//                     <ArrowBackIosIcon style={{ fontSize: 30}} />
//                 </div>
//                 <div className="center">
//                     <h1>{images[currImg].title}</h1>
//                     <p>{images[currImg].subtitle}</p>
//                 </div>
//                 <div className="right" onClick={() => {
//                     currImg < images.length - 1 && setCurrImg(currImg+1);
//                     }}>
//                     <ArrowForwardIosIcon style={{ fontSize: 30}} />
//                 </div>
//             </div>
//         </div>
//     )
// }

import React, { Component } from 'react' 
import Carousel from 'react-bootstrap/Carousel'
export class BootstrapCarouselDemo extends Component {  
            render() {  
                    return (  
                            <div>  
                             <div className='container-fluid' >  
                              <div className="row title" style={{ marginBottom: "20px" }} >  
                              <div className="col-sm-12">  
                             </div>  
                             </div>  
                             </div>  
                             <div className='container-fluid' >  
                             <Carousel>  
                             <Carousel.Item style={{'height':"300px"}} >  
                             <img style={{'height':"300px"}} className="d-block w-100" alt ="boat" src={'assets/img/boat.jpg'}  />  
                               <Carousel.Caption>  
                                 <h3>First Demo </h3>  
                                 </Carousel.Caption>  
                                     </Carousel.Item  >  
                                     <Carousel.Item style={{'height':"300px"}}> 
                                     <img style={{'height':"300px"}} className="d-block w-100" alt ="Wings" src={'assets/img/wings.jpg'}    />  

                                           <Carousel.Caption>  

                                       <h3>Second Demo</h3>  

                                          </Carousel.Caption>  

                                             </Carousel.Item>  

                                           <Carousel.Item style={{'height':"300px"}}>  

                                           <img style={{'height':"300px"}} className="d-block w-100"  alt ="Rooster"  src={'assets/img/rooster.jpg'}   />  

                                            <Carousel.Caption>  

                                              <h3>Third Demo</h3>  

                                              </Carousel.Caption>  

                                             </Carousel.Item>  

                                            </Carousel>  

                                    </div>  

                            </div>  

                    )  

            }  

    }  

    export default BootstrapCarouselDemo 