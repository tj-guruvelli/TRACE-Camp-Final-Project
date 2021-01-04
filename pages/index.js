
import { Link } from 'react-scroll';


import styles from '../styles/Home.module.css'
import mclaren from '../mclaren-imgs/mclaren logo.gif'
import S720 from '../mclaren-imgs/720s.jpg'
import senna from '../mclaren-imgs/giphy.gif'
import LT600 from '../mclaren-imgs/600lt gif.gif'
import speedtail from '../mclaren-imgs/Speedtail.jpg'
import GT from '../mclaren-imgs/Gt Mclaren.gif'
import R620 from '../mclaren-imgs/2020-mclaren-620r.jpg'
import LT765 from '../mclaren-imgs/765lt.jpg'
import Elva from '../mclaren-imgs/elva.jpg'
import End from '../mclaren-imgs/570s mclaren gif.gif'
import GT570S from '../mclaren-imgs/570s Gif.gif'
import Evo from '../mclaren-imgs/evo mclaren gif.gif'
import MP4 from '../mclaren-imgs/Mp4.jpg'
import F1 from '../mclaren-imgs/f1.png'
import P1 from '../mclaren-imgs/wlp1.jpg'
import S650 from '../mclaren-imgs/650s.jpg'
import S570 from '../mclaren-imgs/570s.jpg'
import LT675 from '../mclaren-imgs/675LT.jpg'
import S720W from '../mclaren-imgs/720s-white.jpg'



export default function Home() {
  return (
    <div>

      <body   id="top" >
        <header class="fixedw-full bg-gray-900 text-white md:flex md:justify-between">
            <a class="body font-bold block text-xl px-8 py-4"href="#top">McLarenWiki</a>
            <nav>
                <ul class ="md:flex">
                    <li>
                    <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    >
                    <a class="block px-8 py-4 hover:bg-black px-8 py4 inline-block"href="#about">Evolution</a> 
                    </Link>
                        
                    </li>
                    <li>
                    <Link
                    activeClass="active"
                    to="hobbies"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    >
                        <a class="block px-8 py-4 hover:bg-black px-8 py4 inline-block" href="#hobbies">Latest Editions</a>
                    </Link>
                    </li>
                    
                </ul>
            </nav>
        </header>

        <main >
            <div class={styles.main} >
            <img src={mclaren} class="w-full"/>
            </div>
            <section id ="about" class=" bg-red-900 text-black text-center grid place-items-center" >
                <h2 class="font-bold text-5xl text-white
                transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150 animate-pulse">Evolution of McLaren</h2>
                <img src={Evo} />
                <ul>
                    <li>
                        <div>
                            
                            <p class= "text-lg font-bold italic tracking-wider">Founder: Bruce McLaren</p>
                            <img src={F1} />
                            <h2 class= " font-bold text-4xl"> 1993 McLaren F1</h2>
                            <p className="font-semibold text-lg leading-relaxed">
                              <p>- Three seats with a center seat
                                <p class="animate-pulse" >- Fastest naturally-aspirated production car to date </p>
                                <p>- McLaren's first road car</p>
                                <p>- 6.1L V12, 600HP+, without a Turbo </p>
                                <p>- 100 made</p>
                                <p>- Rear engine bay was made of gold in order to handle the heat from the BMW V12 engine</p>
                                <p>- The F1 pushed McLaren to become the first company to win the Indy 500, Le Mans, and Formula 1</p>
                              </p>
                            </p>
                              <img src={MP4} />
                            <h2 class= "font-bold text-4xl leadind-none">2012 McLaren MP4-12C</h2>
                            <p className="font-semibold text-lg leading-relaxed">
                              <p>- First car created from a new company, McLaren Automotive, which started the rise of road cars</p>
                                <p>- Founded by Ron Dennis that carried and fulfilled Bruce's dream for McLaren</p>
                                <p>- Outengineered its class and beat its competition: Ferrari 458
                              </p>
                              </p>
                              
                              <img src={P1} classname="items-center"/>
                            <h2 class= "font-bold text-4xl ">2014 McLaren P1</h2>
                            <p className="font-semibold text-lg leading-relaxed">
                              <p>- Successor to the F1 </p>
                                <p>- 900HP, 0-60 MPH: 2.8 secs</p>
                                <p>- Body made almost entirely out of carbon-fiber</p>
                                <p>- Revolutionized the car industry with the introduction of hybrid techology by bringing new meaning to hypercar
                              </p>
                              </p>
                              <img src={S650} classname="justify-center"/>
                            <h2 class= "font-bold text-4xl ">2015 McLaren 650S</h2>
                            <p className="font-semibold text-lg leading-relaxed">
                              <p>
                                - 25 HP more than the 12C with new pistons and better-flowing heads</p>
                                <p>- Based on the MP4-12C with 25% new parts
                              </p>
                              </p>
                            <img className="scale-25" src={S570}/>
                            <h2 class= "font-bold text-4xl ">2016 McLaren 570S</h2>
                            <p className="font-semibold text-lg leading-relaxed">
                            <p>
                              - The lightest weight in it's class and the highest power to weight ratio</p>
                              <p>- Includes an open differential and uses brake steer
                            </p>
                            </p>
                            <img src={LT675} />
                            <h2 class= "font-bold text-4xl">2016 McLaren 675LT</h2>
                            <p className="font-semibold text-lg leading-relaxed">
                            <p>
                              - Track-focused version of the 650S</p>
                              <p>- A titanium exhuast system with lightweight wheels and new carbon fiber pieces
                            </p>
                            </p>
                            <img src={S720W} />
                            <h2 class= "font-bold text-4xl "> 2018 McLaren 720S</h2>
                            <p className="font-semibold text-lg leading-relaxed">
                            <p>
                            - Variable Drift Mode: Delivers additional enjoyment</p>
                           <p> - A new bigger engine with 41% new componenets
                            </p>
                            </p>
                            
                            

                        </div>
                    </li>
                </ul>
            </section>
            
            <div class={styles.main} ></div>
            <section id ="hobbies" class= "bg-gray-800 text-white text-center ">
                <h1 class="font-bold text-5xl text-white animate-bounce">Latest Editions</h1>
                <ul class=" flex flex-wrap grid p-10 gap-10 md:grid-cols-3">
                    <li class ="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-green-600 shadow rounded-lg overflow-hidden">
                        <img src={S720} />
                        <div class ="p-4">
                            <h2 class="font-bold text-xl text-black">2018 McLaren 720S </h2>
                            <p>- 4.0L V8</p>
                              <p>- 710 HP</p>
                              <p>- 3167 LB</p>
                              <p>- Topspeed: 212 MPH</p>
                              <p>- 0-60 MPH: 2.5 secs, which was faster than the Bugatti Veyron

                            </p>
                        </div>
                    </li>
                    <li class ="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-green-600 shadow rounded-lg overflow-hidden">
                        <img src={senna} class="w-full" />
                        <div class ="p-4">
                            <h2 class="font-bold text-xl text-black">2018 McLaren Senna</h2>
                            <p>- 4.0L V8</p>
                              <p>- 789 HP</p>
                             <p> - 2641 LB</p>
                              <p>- Topspeed: 211 MPH</p>
                              <p>- Produces 200kg more of downforce than the McLaren P1</p>
                              <p>- Only 500 were made
                            </p>
                        </div>
                    </li>
                    <li class ="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-green-600 shadow rounded-lg overflow-hidden">
                        <img src={LT600} class="w-full" />
                        <div class ="p-4">
                            <h2 class="font-bold text-xl text-black">2018 McLaren 600LT </h2>
                            <p>- Track-focused version of the 570S</p>
                              <p>- 3.8L Twin-Turbocharged V8</p>
                              <p>- 0-60 MPH: 2.9 secs</p>
                              <p>- Topspeed: 204 MPH</p>
                              <p>- Part of the Long Tail lineup
                            </p>
                        </div>
                    </li>
                    <li class ="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-green-600 shadow rounded-lg overflow-hidden">
                        <img src={speedtail} class="w-full" />
                        <div class ="p-4">
                            <h2 class="font-bold text-xl text-black">2018 McLaren SpeedTail</h2>
                            <p>- 250+ MPH Hybrid Hypercar</p>
                              <p>- Successor to the McLaren F1 with the iconic three seats</p>
                              <p>- 0-60 MPH: 2.9 secs</p>
                              <p>- Only 106 were built</p>
                              <p>- McLaren's first Hyper-GT
                            </p>
                        </div>
                    </li>
                    <li class ="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-green-600 shadow rounded-lg overflow-hidden">
                        <img src={GT570S} class="w-full" />
                        <div class ="p-4">
                            <h2 class="font-bold text-xl text-black">2019 McLaren 570GT</h2>
                            <p>- Practical, Fast, and Luxurious</p>
                              <p>- 3.8L Twin-Turbocharged V8</p>
                              <p>- 0-60 MPH: 3.4 secs</p>
                              <p>- Topspeed: 204 MPH</p>
                              <p>- Optimized for the road and longer journeys
                            </p>
                        </div>
                    </li>
                    <li class ="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-green-600 shadow rounded-lg overflow-hidden">
                        <img src={GT} class="w-full" />
                        <div class ="p-4">
                            <h2 class="font-bold text-xl text-black">2019 McLaren GT</h2>
                            <p className="animate-pulse">- One of McLaren's Best Luxury Cars</p>
                              <p>- 4.0L Twin-Turbocharged V8</p>
                              <p>- 0-60 MPH: 3.1 secs</p>
                              <p>- Topspeed: 203 MPH</p>
                              <p>- Focused on creating space and comfort 
                            </p>
                        </div>
                    </li>
                    <li class ="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-green-600 shadow rounded-lg overflow-hidden">
                        <img src={R620} class="w-full" />
                        <div class ="p-4">
                            <h2 class="font-bold text-xl text-black">2020 McLaren 620R</h2>
                            <p>
                              - A 570S GT4 race car for the road</p>
                              <p>- 3.8L Twin-Turbocharged V8, 612HP</p>
                              <p>- 0-60 MPH: 2.9 secs</p>
                              <p>- Topspeed: 200 MPH</p>
                             <p> - Most powerful of the Sports Series range
                            </p>
                        </div>
                    </li>
                    <li class ="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-green-600 shadow rounded-lg overflow-hidden">
                        <img src={LT765} class="w-full" />
                        <div class ="p-4">
                            <h2 class="font-bold text-xl text-black">2020 McLaren 765LT</h2>
                            <p>
                              - Replaces the 675LT as the newest longtail prodcution track car </p>
                             <p> - 4.0L Twin-Turbocharged V8</p>
                              <p>- 0-60 MPH: 2.8 secs</p>
                              <p>- Topspeed: 205 MPH
                            </p>
                        </div>
                    </li>
                    <li class ="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-green-600 shadow rounded-lg overflow-hidden">
                        <img src={Elva} class="w-full" />
                        <div class ="p-4">
                            <h2 class="font-bold text-xl text-black">2020 McLaren Elva</h2>
                            <p className="text-white">
                              - Makes 804 hp and 590 lb-ft of torque</p>
                              <p>- 4.0L Twin-Turbocharged V8</p>
                              <p>- 0-60 MPH: under 3 secs
                              
                            </p>
                        </div>
                    </li>
                </ul>
            </section>

                
            <div class={styles.main} ></div>
            <section id="others" class= "bg-gray-600 text-white">
                <img src={End} class=" w-full" />

                <p class="p-10 gap-10 text-2xl">
                McLaren first started out as a racing company and soon evolved to the streets as Bruce hoped one day.
                </p>
            </section>
        </main>

        <footer class="text-center text-white p-10 bg-gray-900">
            Created by Teja Guruvelli 2020
        </footer>
        
    </body>
    </div>
  )
}
