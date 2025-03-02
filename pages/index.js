import { Link } from "react-scroll";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "../styles/Home.module.css";
import S720 from "../mclaren-imgs/720s.jpg";
import senna from "../mclaren-imgs/giphy.gif";
import LT600 from "../mclaren-imgs/600lt gif.gif";
import speedtail from "../mclaren-imgs/Speedtail.jpg";
import GT from "../mclaren-imgs/Gt Mclaren.gif";
import R620 from "../mclaren-imgs/2020-mclaren-620r.jpg";
import LT765 from "../mclaren-imgs/765lt.jpg";
import Elva from "../mclaren-imgs/elva.jpg";
import End from "../mclaren-imgs/flyingdoors.gif";
import GT570S from "../mclaren-imgs/570s Gif.gif";
import Evo from "../mclaren-imgs/evo mclaren gif.gif";
import MP4 from "../mclaren-imgs/Mp4.jpg";
import F1 from "../mclaren-imgs/f1.png";
import P1 from "../mclaren-imgs/wlp1.jpg";
import S650 from "../mclaren-imgs/650s.jpg";
import S570 from "../mclaren-imgs/570s.jpg";
import LT675 from "../mclaren-imgs/675LT.gif";
import S720W from "../mclaren-imgs/720s-white.jpg";
import logo from "../mclaren-imgs/logo.png";

// Carousel component
function HeroCarousel() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		fade: true,
	};

	return (
		<section id="carousel" className="h-screen relative overflow-hidden">
			<Slider {...settings}>
				{/* F1 Slide */}
				<div className="relative h-screen">
					<div className="absolute inset-0">
						<img
							src={F1}
							alt="McLaren F1"
							className="w-full h-full object-cover"
						/>
						<div className="absolute inset-0 bg-black bg-opacity-60"></div>
					</div>
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="text-center px-4 max-w-4xl">
							<h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
								McLaren F1
							</h2>
							<p className="text-xl text-white mb-6">
								The legendary supercar that revolutionized the automotive world
							</p>
						</div>
					</div>
				</div>

				{/* P1 Slide */}
				<div className="relative h-screen">
					<div className="absolute inset-0">
						<img
							src={P1}
							alt="McLaren P1"
							className="w-full h-full object-cover"
						/>
						<div className="absolute inset-0 bg-black bg-opacity-60"></div>
					</div>
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="text-center px-4 max-w-4xl">
							<h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
								McLaren P1
							</h2>
							<p className="text-xl text-white mb-6">
								Hybrid hypercar that redefined what's possible
							</p>
						</div>
					</div>
				</div>

				{/* 720S Slide */}
				<div className="relative h-screen">
					<div className="absolute inset-0">
						<img
							src={S720}
							alt="McLaren 720S"
							className="w-full h-full object-cover"
						/>
						<div className="absolute inset-0 bg-black bg-opacity-60"></div>
					</div>
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="text-center px-4 max-w-4xl">
							<h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
								McLaren 720S
							</h2>
							<p className="text-xl text-white mb-6">
								The heart of the Super Series with revolutionary aerodynamics
							</p>
						</div>
					</div>
				</div>

				{/* Senna Slide */}
				<div className="relative h-screen">
					<div className="absolute inset-0">
						<img
							src={senna}
							alt="McLaren Senna"
							className="w-full h-full object-cover"
						/>
						<div className="absolute inset-0 bg-black bg-opacity-60"></div>
					</div>
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="text-center px-4 max-w-4xl">
							<h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
								McLaren Senna
							</h2>
							<p className="text-xl text-white mb-6">
								The ultimate track-focused road-legal McLaren
							</p>
						</div>
					</div>
				</div>
			</Slider>

			{/* Banner with scroll-down indicator */}
			<div className="absolute bottom-6 left-0 right-0 flex justify-center">
				<div
					onClick={() => {
						const heritageSection = document.getElementById("heritage");
						heritageSection.scrollIntoView({ behavior: "smooth" });
					}}
					className="animate-bounce bg-white bg-opacity-20 p-2 w-10 h-10 ring-1 ring-white ring-opacity-20 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-30 transition-all duration-300"
				>
					<svg
						className="w-6 h-6 text-white"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						></path>
					</svg>
				</div>
			</div>
		</section>
	);
}

export default function Home() {
	return (
		<div id="top">
			<header className="fixed w-full bg-black bg-opacity-80 shadow-lg text-white z-50">
				<div className="container mx-auto px-4">
					<div className="flex items-center justify-between py-4">
						<a href="#top" className="flex items-center">
							<img src={logo} alt="McLaren Logo" className="h-8 mr-2" />
							<span className="font-bold text-xl">McLaren Automotive</span>
						</a>

						<div className="hidden md:flex items-center space-x-3">
							<Link
								to="carousel"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								className="py-2 px-4 text-white font-semibold transition-all duration-300 cursor-pointer rounded hover:bg-yellow-600 hover:scale-125"
							>
								Home
							</Link>
							<Link
								to="heritage"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								className="py-2 px-4 text-white font-semibold transition-all duration-300 cursor-pointer rounded hover:bg-yellow-600 hover:scale-125"
							>
								Heritage
							</Link>
							<Link
								to="latest"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								className="py-2 px-4 text-white font-semibold transition-all duration-300 cursor-pointer rounded hover:bg-yellow-600 hover:scale-125"
							>
								Models
							</Link>
						</div>

						<button className="md:hidden focus:outline-none">
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								></path>
							</svg>
						</button>
					</div>
				</div>
			</header>

			<main>
				{/* Add the carousel here */}
				<HeroCarousel />

				<section
					id="heritage"
					className="py-20 bg-gradient-to-b from-gray-800 to-black text-white"
				>
					{/* Evolution Banner with Evo gif as background */}
					<div className="relative h-48 mb-16 overflow-hidden">
						<img
							src={Evo}
							alt="McLaren Evolution"
							className="w-full h-full object-cover"
						/>
						<div className="absolute inset-0 bg-black bg-opacity-60"></div>
						<div className="absolute inset-0 flex items-center justify-center">
							<h2 className=" animate-pulse text-5xl font-bold text-white">
								The Evolution of McLaren
							</h2>
						</div>
					</div>

					<div className="container mx-auto px-4">
						<p className="text-xl text-center mb-10 text-gray-300">
							Founder: Bruce McLaren
						</p>

						<div className="relative">
							{/* Line down the middle with higher contrast */}
							<div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-orange-600"></div>

							{/* F1 - 1993 */}
							<div className="mb-24 md:mb-16 relative">
								<div className="flex flex-col md:flex-row items-center">
									<div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
										<div className="bg-gradient-to-r from-orange-600 to-red-600 inline-block px-3 py-1 rounded-full text-white text-sm font-semibold mb-3">
											1993
										</div>
										<h3 className="text-3xl font-bold mb-4">McLaren F1</h3>
										<p className="text-gray-300 mb-4">
											The legendary McLaren F1 redefined what was possible in a
											road car. With its central driving position, gold-lined
											engine bay, and record-breaking performance, it remains
											one of the most iconic supercars ever created.
										</p>
										<ul className="space-y-2 text-gray-300">
											<li>Three seats with center driving position</li>
											<li>
												Fastest naturally-aspirated production car to date
											</li>
											<li>6.1L BMW V12, 627 bhp @ 7400 rpm</li>
											<li>0-60 mph in 3.2 seconds, top speed of 241 mph</li>
											<li>Gold-lined engine bay for heat management</li>
											<li>Only 106 units produced</li>
											<li>First car to win Indy 500, Le Mans, and Formula 1</li>
										</ul>
									</div>
									<div className="md:w-1/2 pl-0 md:pl-12">
										<img
											src={F1}
											alt="McLaren F1"
											className="rounded-lg shadow-lg transform transition duration-500 hover:scale-125"
										/>
									</div>
								</div>
							</div>

							{/* MP4-12C - 2012 */}
							<div className="mb-24 md:mb-16 relative">
								<div className="flex flex-col md:flex-row-reverse items-center">
									<div className="md:w-1/2 md:pl-12 md:text-left mb-8 md:mb-0">
										<div className="bg-gradient-to-l from-orange-600 to-red-600 inline-block px-3 py-1 rounded-full text-white text-sm font-semibold mb-3">
											2012
										</div>
										<h3 className="text-3xl font-bold mb-4">McLaren MP4-12C</h3>
										<p className="text-gray-300 mb-4">
											First car created from a new company, McLaren Automotive,
											which started the rise of road cars. Founded by Ron Dennis
											that carried and fulfilled Bruce's dream for McLaren.
										</p>
										<ul className="space-y-2 text-gray-300">
											<li>3.8L Twin-Turbo V8, 616 bhp</li>
											<li>0-60 mph in 3.1 seconds</li>
											<li>
												Outengineered its class and beat its competition:
												Ferrari 458
											</li>
											<li>Revolutionary ProActive Chassis Control system</li>
											<li>Carbon fiber MonoCell chassis</li>
										</ul>
									</div>
									<div className="md:w-1/2 pr-0 md:pr-12">
										<img
											src={MP4}
											alt="McLaren MP4-12C"
											className="rounded-lg shadow-lg transform transition duration-500 hover:scale-125"
										/>
									</div>
								</div>
							</div>

							{/* P1 - 2014 */}
							<div className="mb-24 md:mb-16 relative">
								<div className="flex flex-col md:flex-row items-center">
									<div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
										<div className="bg-gradient-to-r from-orange-600 to-red-600 inline-block px-3 py-1 rounded-full text-white text-sm font-semibold mb-3">
											2014
										</div>
										<h3 className="text-3xl font-bold mb-4">McLaren P1</h3>
										<p className="text-gray-300 mb-4">
											Successor to the F1, the P1 pushed the boundaries of
											hybrid technology and aerodynamic performance.
										</p>
										<ul className="space-y-2 text-gray-300">
											<li>3.8L Twin-Turbo V8 + Electric Motor, 903 bhp</li>
											<li>0-60 mph in 2.8 seconds</li>
											<li>Body made almost entirely out of carbon-fiber</li>
											<li>
												Revolutionized the car industry with hybrid technology
											</li>
											<li>Active aerodynamics producing 600kg of downforce</li>
											<li>Limited to 375 units</li>
										</ul>
									</div>
									<div className="md:w-1/2 pl-0 md:pl-12">
										<img
											src={P1}
											alt="McLaren P1"
											className="rounded-lg shadow-lg transform transition duration-500 hover:scale-125"
										/>
									</div>
								</div>
							</div>

							{/* 650S - 2015 */}
							<div className="mb-24 md:mb-16 relative">
								<div className="flex flex-col md:flex-row items-center">
									<div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
										<div className="bg-gradient-to-r from-orange-600 to-red-600 inline-block px-3 py-1 rounded-full text-white text-sm font-semibold mb-3">
											2015
										</div>
										<h3 className="text-3xl font-bold mb-4">McLaren 650S</h3>
										<p className="text-gray-300 mb-4">
											Building on the success of the MP4-12C, the 650S pushed
											performance and refinement to new heights.
										</p>
										<ul className="space-y-2 text-gray-300">
											<li>3.8L Twin-Turbo V8, 641 bhp</li>
											<li>
												25 HP more than the 12C with new pistons and
												better-flowing heads
											</li>
											<li>Based on the MP4-12C with 25% new parts</li>
											<li>Improved aerodynamics with P1-inspired front end</li>
											<li>0-60 mph in 2.9 seconds</li>
										</ul>
									</div>
									<div className="md:w-1/2 pl-0 md:pl-12">
										<img
											src={S650}
											alt="McLaren 650S"
											className="rounded-lg shadow-lg transform transition duration-500 hover:scale-125"
										/>
									</div>
								</div>
							</div>

							{/* 570S - 2016 */}
							<div className="mb-24 md:mb-16 relative">
								<div className="flex flex-col md:flex-row-reverse items-center">
									<div className="md:w-1/2 md:pl-12 md:text-left mb-8 md:mb-0">
										<div className="bg-gradient-to-l from-orange-600 to-red-600 inline-block px-3 py-1 rounded-full text-white text-sm font-semibold mb-3">
											2016
										</div>
										<h3 className="text-3xl font-bold mb-4">McLaren 570S</h3>
										<p className="text-gray-300 mb-4">
											The first of McLaren's Sports Series, bringing supercar
											performance to a new segment.
										</p>
										<ul className="space-y-2 text-gray-300">
											<li>3.8L Twin-Turbo V8, 562 bhp</li>
											<li>
												The lightest weight in its class and the highest
												power-to-weight ratio
											</li>
											<li>
												Includes an open differential and uses brake steer
												technology
											</li>
											<li>Carbon fiber MonoCell II chassis</li>
											<li>
												More accessible but no less impressive performance
											</li>
										</ul>
									</div>
									<div className="md:w-1/2 pr-0 md:pr-12">
										<img
											src={S570}
											alt="McLaren 570S"
											className="rounded-lg shadow-lg transform transition duration-500 hover:scale-125"
										/>
									</div>
								</div>
							</div>

							{/* 675LT - 2016 */}
							<div className="mb-24 md:mb-16 relative">
								<div className="flex flex-col md:flex-row-reverse items-center">
									<div className="md:w-1/2 md:pl-12 md:text-left mb-8 md:mb-0">
										<div className="bg-gradient-to-l from-orange-600 to-red-600 inline-block px-3 py-1 rounded-full text-white text-sm font-semibold mb-3">
											2016
										</div>
										<h3 className="text-3xl font-bold mb-4">McLaren 675LT</h3>
										<p className="text-gray-300 mb-4">
											Track-focused version of the 650S with significant weight
											reduction and aerodynamic improvements.
										</p>
										<ul className="space-y-2 text-gray-300">
											<li>3.8L Twin-Turbo V8, 666 bhp</li>
											<li>Titanium exhaust system with lightweight wheels</li>
											<li>New carbon fiber pieces for weight reduction</li>
											<li>
												Extended "Longtail" aerodynamic profile for increased
												downforce
											</li>
											<li>0-60 mph in 2.9 seconds</li>
											<li>Limited production run</li>
										</ul>
									</div>
									<div className="md:w-1/2 pr-0 md:pr-12">
										<img
											src={LT675}
											alt="McLaren 675LT"
											className="rounded-lg shadow-lg transform transition duration-500 hover:scale-125"
										/>
									</div>
								</div>
							</div>

							{/* Updated 720S entry to use the white version in addition */}
							<div className="mb-24 md:mb-16 relative">
								<div className="flex flex-col md:flex-row items-center">
									<div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
										<div className="bg-gradient-to-r from-orange-600 to-red-600 inline-block px-3 py-1 rounded-full text-white text-sm font-semibold mb-3">
											2018
										</div>
										<h3 className="text-3xl font-bold mb-4">McLaren 720S</h3>
										<p className="text-gray-300 mb-4">
											Next-generation Super Series model with revolutionary
											aerodynamics and performance.
										</p>
										<ul className="space-y-2 text-gray-300">
											<li>4.0L Twin-Turbo V8, 710 bhp</li>
											<li>
												0-60 mph in 2.5 seconds (faster than the Bugatti Veyron)
											</li>
											<li>
												Variable Drift Mode for additional driving enjoyment
											</li>
											<li>A new bigger engine with 41% new components</li>
											<li>
												Revolutionary "eye socket" headlight design doubling as
												air intakes
											</li>
											<li>
												Monocage II carbon fiber structure for exceptional
												rigidity
											</li>
										</ul>
									</div>
									<div className="md:w-1/2 pr-0 md:pr-12">
										<img
											src={S720W}
											alt="McLaren 720S White"
											className="rounded-lg shadow-lg transform transition duration-500 hover:scale-110"
										/>
									</div>
								</div>
							</div>

							{/* 600LT - 2018 */}
							<div className="mb-24 md:mb-16 relative">
								<div className="flex flex-col md:flex-row-reverse items-center">
									<div className="md:w-1/2 md:pl-12 md:text-left mb-8 md:mb-0">
										<div className="bg-gradient-to-l from-orange-600 to-red-600 inline-block px-3 py-1 rounded-full text-white text-sm font-semibold mb-3">
											2018
										</div>
										<h3 className="text-3xl font-bold mb-4">McLaren 600LT</h3>
										<p className="text-gray-300 mb-4">
											Track-focused version of the 570S with "Longtail"
											aerodynamics.
										</p>
										<ul className="space-y-2 text-gray-300">
											<li>3.8L Twin-Turbocharged V8, 592 bhp</li>
											<li>0-60 mph in 2.9 seconds</li>
											<li>Top speed: 204 mph</li>
											<li>Part of the Long Tail lineup</li>
											<li>Distinctive top-exit exhausts</li>
											<li>Significant weight reduction versus 570S</li>
										</ul>
									</div>
									<div className="md:w-1/2 pr-0 md:pr-12">
										<img
											src={LT600}
											alt="McLaren 600LT"
											className="rounded-lg shadow-lg transform transition duration-500 hover:scale-125"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<div className={styles.main}></div>
				<section
					id="latest"
					className="py-20"
					style={{
						background: "linear-gradient(to bottom, #f97316, #9a3412, #000000)",
						position: "relative",
						zIndex: 1,
					}}
				>
					<div className="container mx-auto px-4">
						<h2 className="text-4xl font-bold  animate-bounce text-center mb-6 text-black">
							Latest Editions
						</h2>
						<p className="text-xl text-center text-black text-opacity-90 mb-16 max-w-3xl mx-auto">
							Explore our cutting-edge lineup of performance vehicles, each
							representing the pinnacle of automotive engineering and design.
						</p>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
							{/* McLaren 765LT Flip Card */}
							<div className={`${styles.flipCard}`}>
								<div className={styles.flipCardInner}>
									{/* Front */}
									<div
										className={`${styles.flipCardFront} rounded-xl overflow-hidden shadow-2xl`}
									>
										<div className="relative w-full h-full">
											<img
												src={LT765}
												alt="McLaren 765LT"
												className="w-full h-full object-cover"
											/>
											<div className="absolute inset-0 bg-black bg-opacity-30"></div>
											<div className="absolute bottom-0 left-0 p-6">
												<h3 className="text-3xl font-bold text-white">765LT</h3>
												<p className="text-xl text-white opacity-90">2020</p>
											</div>
										</div>
									</div>
									{/* Back */}
									<div className={`${styles.flipCardBack} rounded-xl`}>
										<h3 className="text-2xl font-bold mb-4 text-black">
											McLaren 765LT
										</h3>
										<div className="grid grid-cols-2 gap-4 mb-6">
											<div>
												<p className="text-sm text-gray-500">Engine</p>
												<p className="font-medium text-black">
													4.0L Twin-Turbo V8
												</p>
											</div>
											<div>
												<p className="text-sm text-gray-500">Power</p>
												<p className="font-medium text-black">755 bhp</p>
											</div>
											<div>
												<p className="text-sm text-gray-500">0-60 mph</p>
												<p className="font-medium text-black">2.8 seconds</p>
											</div>
											<div>
												<p className="text-sm text-gray-500">Top Speed</p>
												<p className="font-medium text-black">205 mph</p>
											</div>
										</div>
										<p className="text-gray-700">
											Replaces the 675LT as the newest longtail production track
											car. With more power, less weight and enhanced
											aerodynamics, the 765LT continues McLaren's legendary
											Longtail lineage.
										</p>
									</div>
								</div>
							</div>

							{/* Speedtail Flip Card */}
							<div className={styles.flipCard}>
								<div className={styles.flipCardInner}>
									{/* Front */}
									<div className={styles.flipCardFront}>
										<img
											src={speedtail}
											alt="McLaren Speedtail"
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 bg-black bg-opacity-30"></div>
										<div className="absolute bottom-0 left-0 p-6">
											<h3 className="text-3xl font-bold text-white">
												Speedtail
											</h3>
											<p className="text-xl text-white opacity-90">2019</p>
										</div>
									</div>
									{/* Back */}
									<div className={styles.flipCardBack}>
										<h3 className="text-2xl font-bold mb-4 text-black">
											McLaren Speedtail
										</h3>
										<div className="grid grid-cols-2 gap-4 mb-6">
											<div>
												<p className="text-sm text-gray-500">Engine</p>
												<p className="font-medium text-black">
													Hybrid Powertrain
												</p>
											</div>
											<div>
												<p className="text-sm text-gray-500">Power</p>
												<p className="font-medium text-black">1,036 bhp</p>
											</div>
											<div>
												<p className="text-sm text-gray-500">Top Speed</p>
												<p className="font-medium text-black">250+ mph</p>
											</div>
											<div>
												<p className="text-sm text-gray-500">Production</p>
												<p className="font-medium text-black">
													Limited to 106 units
												</p>
											</div>
										</div>
										<p className="text-gray-700">
											Successor to the McLaren F1 with the iconic three-seat
											layout. This hyper-GT combines extraordinary acceleration,
											aerodynamic excellence and a top speed of 250+ mph, making
											it the fastest McLaren road car ever.
										</p>
									</div>
								</div>
							</div>

							{/* McLaren GT Flip Card */}
							<div className={styles.flipCard}>
								<div className={styles.flipCardInner}>
									{/* Front */}
									<div className={styles.flipCardFront}>
										<div className="relative w-full h-full">
											<img
												src={GT}
												alt="McLaren GT"
												className="w-full h-full object-cover"
											/>
											<div className="absolute inset-0 bg-black bg-opacity-30"></div>
											<div className="absolute bottom-0 left-0 p-6">
												<h3 className="text-3xl font-bold text-white">GT</h3>
												<p className="text-xl text-white opacity-90">2019</p>
											</div>
										</div>
									</div>
									{/* Back */}
									<div className={styles.flipCardBack}>
										<h3 className="text-2xl font-bold mb-4 text-black">
											McLaren GT
										</h3>
										<div className="grid grid-cols-2 gap-4 mb-6">
											<div>
												<p className="text-sm text-gray-500">Engine</p>
												<p className="font-medium text-black">
													4.0L Twin-Turbo V8
												</p>
											</div>
											<div>
												<p className="text-sm text-gray-500">Power</p>
												<p className="font-medium text-black">612 bhp</p>
											</div>
											<div>
												<p className="text-sm text-gray-500">0-60 mph</p>
												<p className="font-medium text-black">3.1 seconds</p>
											</div>
											<div>
												<p className="text-sm text-gray-500">Top Speed</p>
												<p className="font-medium text-black">203 mph</p>
											</div>
										</div>
										<p className="text-gray-700">
											One of McLaren's best luxury cars, focused on creating
											space and comfort for long-distance touring. The GT
											combines supercar performance with grand tourer refinement
											and practicality, including a surprising amount of luggage
											space.
										</p>
									</div>
								</div>
							</div>

							{/* 620R Flip Card */}
							<div className={styles.flipCard}>
								<div className={styles.flipCardInner}>
									{/* Front */}
									<div className={styles.flipCardFront}>
										<img
											src={R620}
											alt="McLaren 620R"
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 bg-black bg-opacity-30"></div>
										<div className="absolute bottom-0 left-0 p-6">
											<h3 className="text-3xl font-bold text-white">620R</h3>
											<p className="text-xl text-white opacity-90">2020</p>
										</div>
									</div>
									{/* Back */}
									<div className={styles.flipCardBack}>
										<h3 className="text-2xl font-bold mb-4 text-black">
											McLaren 620R
										</h3>
										<div className="grid grid-cols-2 gap-4 mb-6">
											<div>
												<p className="text-sm text-gray-500">Engine</p>
												<p className="font-medium text-black">
													3.8L Twin-Turbo V8
												</p>
											</div>
											<div>
												<p className="text-sm text-gray-500">Power</p>
												<p className="font-medium text-black">612 bhp</p>
											</div>
											<div>
												<p className="text-sm text-gray-500">0-60 mph</p>
												<p className="font-medium text-black">2.9 seconds</p>
											</div>
											<div>
												<p className="text-sm text-gray-500">Top Speed</p>
												<p className="font-medium text-black">200 mph</p>
											</div>
										</div>
										<p className="text-gray-700">
											A 570S GT4 race car for the road. The most powerful Sports
											Series McLaren features motorsport-derived suspension,
											aerodynamics, and a stripped-out interior focused on track
											performance.
										</p>
									</div>
								</div>
							</div>

							{/* Elva Flip Card */}
							<div className={styles.flipCard}>
								<div className={styles.flipCardInner}>
									{/* Front */}
									<div className={styles.flipCardFront}>
										<img
											src={Elva}
											alt="McLaren Elva"
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 bg-black bg-opacity-30"></div>
										<div className="absolute bottom-0 left-0 p-6">
											<h3 className="text-3xl font-bold text-white">Elva</h3>
											<p className="text-xl text-white opacity-90">2020</p>
										</div>
									</div>
									{/* Back */}
									<div className={styles.flipCardBack}>
										<h3 className="text-2xl font-bold mb-4 text-black">
											McLaren Elva
										</h3>
										<div className="grid grid-cols-2 gap-4 mb-6">
											<div>
												<p className="text-sm text-gray-500">Engine</p>
												<p className="font-medium text-black">
													4.0L Twin-Turbo V8
												</p>
											</div>
											<div>
												<p className="text-sm text-gray-500">Power</p>
												<p className="font-medium text-black">804 bhp</p>
											</div>
											<div>
												<p className="text-sm text-gray-500">Torque</p>
												<p className="font-medium text-black">590 lb-ft</p>
											</div>
											<div>
												<p className="text-sm text-gray-500">0-60 mph</p>
												<p className="font-medium text-black">&lt; 3 seconds</p>
											</div>
										</div>
										<p className="text-gray-700">
											An open-cockpit roadster with no roof, windscreen, or
											windows for the purest driving experience. Features
											innovative Active Air Management System to direct airflow
											over the cockpit.
										</p>
									</div>
								</div>
							</div>

							{/* Senna Flip Card */}
							<div className={styles.flipCard}>
								<div className={styles.flipCardInner}>
									{/* Front */}
									<div className={styles.flipCardFront}>
										<img
											src={senna}
											alt="McLaren Senna"
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 bg-black bg-opacity-30"></div>
										<div className="absolute bottom-0 left-0 p-6">
											<h3 className="text-3xl font-bold text-white">Senna</h3>
											<p className="text-xl text-white opacity-90">2018</p>
										</div>
									</div>
									{/* Back */}
									<div className={styles.flipCardBack}>
										<h3 className="text-2xl font-bold mb-4 text-black">
											McLaren Senna
										</h3>
										<div className="grid grid-cols-2 gap-4 mb-6">
											<div>
												<p className="text-sm text-gray-500">Engine</p>
												<p className="font-medium text-black">
													4.0L Twin-Turbo V8
												</p>
											</div>
											<div>
												<p className="text-sm text-gray-500">Power</p>
												<p className="font-medium text-black">789 bhp</p>
											</div>
											<div>
												<p className="text-sm text-gray-500">Weight</p>
												<p className="font-medium text-black">2,641 lb</p>
											</div>
											<div>
												<p className="text-sm text-gray-500">Production</p>
												<p className="font-medium text-black">
													Limited to 500 units
												</p>
											</div>
										</div>
										<p className="text-gray-700">
											Named after Formula 1 legend Ayrton Senna, this
											track-focused hypercar produces 200kg more downforce than
											the McLaren P1. Its advanced aerodynamics generate 800kg
											of downforce for incredible cornering ability.
										</p>
									</div>
								</div>
							</div>

							{/* McLaren 570GT Flip Card (using GT570S image) */}
							<div className={styles.flipCard}>
								<div className={styles.flipCardInner}>
									{/* Front */}
									<div className={styles.flipCardFront}>
										<div className="relative w-full h-full">
											<img
												src={GT570S}
												alt="McLaren 570GT"
												className="w-full h-full object-cover"
											/>
											<div className="absolute inset-0 bg-black bg-opacity-30"></div>
											<div className="absolute bottom-0 left-0 p-6">
												<h3 className="text-3xl font-bold text-white">570GT</h3>
												<p className="text-xl text-white opacity-90">2019</p>
											</div>
										</div>
									</div>
									{/* Back */}
									<div className={styles.flipCardBack}>
										<h3 className="text-2xl font-bold mb-4 text-black">
											McLaren 570GT
										</h3>
										<div className="grid grid-cols-2 gap-4 mb-6">
											<div>
												<p className="text-sm text-gray-500">Engine</p>
												<p className="font-medium text-black">
													3.8L Twin-Turbo V8
												</p>
											</div>
											<div>
												<p className="text-sm text-gray-500">Power</p>
												<p className="font-medium text-black">562 bhp</p>
											</div>
											<div>
												<p className="text-sm text-gray-500">0-60 mph</p>
												<p className="font-medium text-black">3.4 seconds</p>
											</div>
											<div>
												<p className="text-sm text-gray-500">Top Speed</p>
												<p className="font-medium text-black">204 mph</p>
											</div>
										</div>
										<p className="text-gray-700">
											Practical, fast, and luxurious. The 570GT is optimized for
											the road and longer journeys, offering additional storage
											space and refined suspension for greater comfort without
											sacrificing McLaren's legendary performance.
										</p>
									</div>
								</div>
							</div>

							{/* McLaren 720S White Flip Card */}
							<div className={styles.flipCard}>
								<div className={styles.flipCardInner}>
									{/* Front */}
									<div className={styles.flipCardFront}>
										<div className="relative w-full h-full">
											<img
												src={S720W}
												alt="McLaren 720S"
												className="w-full h-full object-cover"
											/>
											<div className="absolute inset-0 bg-black bg-opacity-30"></div>
											<div className="absolute bottom-0 left-0 p-6">
												<h3 className="text-3xl font-bold text-white">720S</h3>
												<p className="text-xl text-white opacity-90">2018</p>
											</div>
										</div>
									</div>
									{/* Back */}
									<div className={styles.flipCardBack}>
										<h3 className="text-2xl font-bold mb-4 text-black">
											McLaren 720S
										</h3>
										<div className="grid grid-cols-2 gap-4 mb-6">
											<div>
												<p className="text-sm text-gray-500">Engine</p>
												<p className="font-medium text-black">
													4.0L Twin-Turbo V8
												</p>
											</div>
											<div>
												<p className="text-sm text-gray-500">Power</p>
												<p className="font-medium text-black">710 bhp</p>
											</div>
											<div>
												<p className="text-sm text-gray-500">Weight</p>
												<p className="font-medium text-black">3,167 lb</p>
											</div>
											<div>
												<p className="text-sm text-gray-500">Top Speed</p>
												<p className="font-medium text-black">212 mph</p>
											</div>
										</div>
										<p className="text-gray-700">
											With 0-60 mph in just 2.5 seconds (faster than the Bugatti
											Veyron), the 720S features Variable Drift Mode and a new
											bigger engine with 41% new components. Revolutionary
											aerodynamics enable both incredible performance and
											efficiency.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Combined McLaren Heritage and Engineering Excellence section */}
				<section id="philosophy" className="bg-gray-800 text-white py-16">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto text-center">
							<h2 className="text-3xl animate-pulse font-bold mb-6">
								McLaren Heritage & Engineering Excellence
							</h2>
							<p className="mb-6">
								McLaren first started out as a racing company and soon evolved
								to the streets as Bruce hoped one day.
								<br></br>
								Every McLaren is a testament to the racing heritage, innovative
								engineering, and uncompromising pursuit of automotive
								perfection.
							</p>
						</div>
					</div>
				</section>

				{/* Keep the visual section with the End image */}
				<section id="others" className="bg-gray-600 text-white">
					<img src={End} className="w-full" />
				</section>
			</main>

			{/* Simple footer with just the credit */}
			<footer className="bg-black text-white py-4 text-center">
				<p className="text-gray-500">
					@ 2020 Website created by Teja Guruvelli
				</p>
			</footer>
		</div>
	);
}
