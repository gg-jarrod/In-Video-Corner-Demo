import {
	BodyText,
	Heading,
	Screen,
	Table,
	Tag,
	Card,
	Label,
	InputGroup,
	InputText,
	InputTextArea,
	IconButton,
	Button,
	Section,
	Tooltip,
} from "pier-design-system";
import { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import logo from "public/gumgum_logo_dark.svg";
import blob from "public/blob.svg";
import box1 from "public/box1.svg";
import box2 from "public/box2.svg";
import circle from "public/circle.svg";
import dots from "public/dots.svg";
import plus from "public/plus.svg";

export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>GumGum In-Video Corner</title>
				<meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' />
			</Head>
			<div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
				<div style={{ minHeight: "100vh" }} className='-d-flex -flex-column'>
					<div className='-bgc-dark-3'>
						<Section style={{ maxWidth: "840px", margin: "0 auto", paddingBottom: "120px" }} className='-p-t-3'>
							<div className='-d-flex -align-items-center -justify-content-center'>
								<Image src={logo} width='144'></Image>
							</div>
							<Heading dark className='-text-a-center -m-v-4'>
								In-Video Corner
							</Heading>
						</Section>
					</div>
					<div style={{ flex: "1", zIndex: "99" }}>
						<Section style={{ maxWidth: "840px", margin: "-120px auto 0 auto" }}>
							<div className='video-container'>
								<svg viewBox='0 0 160 96.45' fill='#050D14'>
									<g id='Layer_1-2' data-name='Layer 1'>
										<path d='M157.83,0H2.17A2.17,2.17,0,0,0,0,2.17V88.92a2.17,2.17,0,0,0,2.17,2.17h9.65l-6,5c-.14.12,0,.31.15.31H8.38a1.57,1.57,0,0,0,1-.33l6.22-5h0L17.71,95a.59.59,0,0,0,.53.29h1.7a.31.31,0,0,0,.33-.41l-1.82-3.74H142l-1.81,3.74c-.1.19.08.41.33.41h1.7a.58.58,0,0,0,.52-.29l2.13-3.86h0l6.23,5a1.56,1.56,0,0,0,1,.33h2.41c.2,0,.29-.19.16-.31l-6-5h9.15A2.17,2.17,0,0,0,160,88.92V2.17A2.17,2.17,0,0,0,157.83,0Z' />
									</g>
								</svg>
								<div className='video-wrapper'>
									<video className='video' controls autoPlay muted loop>
										<source type='video/mp4' src={require("../public/video.mp4")} />
									</video>
								</div>
								<div className='-w-100 -h-100 -pos-absolute -pointer-events-none' style={{ top: "0", zIndex: "-10" }}>
									<div
										style={{
											position: "absolute",
											left: "",
											top: "-12%",
											right: "-35%",
											bottom: "",
											width: "80%",
											height: "80%",
											transform: "rotate(0deg)",
										}}
									>
										<Image src={circle} layout='fill'></Image>
									</div>
									<div
										style={{
											position: "absolute",
											left: "0",
											top: "0",
											right: "",
											bottom: "",
											width: "100%",
											height: "90%",
											transform: "rotate(0deg)",
											backgroundColor: "#25B9EF",
											borderRadius: "99px",
											filter: "blur(36px)",
										}}
									></div>
									<div
										style={{
											position: "absolute",
											left: "0",
											top: "",
											right: "",
											bottom: "0%",
											width: "100%",
											height: "5%",
											transform: "rotate(0deg)",
											backgroundColor: "#050D14",
											borderRadius: "99px",
											filter: "blur(14px)",
										}}
									></div>
								</div>
							</div>
						</Section>
						<Section style={{ maxWidth: "840px", margin: "0 auto 0 auto" }} className='-p-t-4 -p-b-8'>
							<BodyText size='sm' dark>
								In-Video creates a new, scalable space for effective advertising and inventory monetization. In-Video ads are nonlinear and
								shown during the actual video content using SSAI allowing for a less disruptive experience vs. traditional preroll. Source your
								own demand while also leveraging demand from the GumGum team.
							</BodyText>
						</Section>
						<BodyText size='xs' dark style={{ width: "100%", margin: "0 auto", bottom: "0" }} className='-text-a-center -pos-absolute -m-b-4'>
							© Copyright GumGum 2021
						</BodyText>
					</div>
				</div>
				<div className='-pos-absolute -d-flex -align-items-center -justify-content-center -w-100 -h-100 -pointer-events-none' style={{ top: "0" }}>
					<div style={{ width: "100%", minWidth: "1200px", height: "100%" }}>
						<div
							style={{
								position: "absolute",
								left: "",
								top: "12%",
								right: "0%",
								bottom: "",
								width: "8%",
								height: "8%",
								transform: "rotate(0deg)",
							}}
							className='scale'
						>
							<Image src={box1} layout='fill'></Image>
						</div>
						<div
							style={{
								position: "absolute",
								left: "11%",
								top: "50%",
								right: "",
								bottom: "",
								width: "8%",
								height: "8%",
								transform: "rotate(45deg)",
							}}
						>
							<Image src={box2} layout='fill'></Image>
						</div>
						<div
							style={{
								position: "absolute",
								left: "0%",
								top: "",
								right: "",
								bottom: "0%",
								width: "40%",
								height: "25%",
								transform: "",
							}}
						>
							<Image src={dots} layout='fill'></Image>
						</div>
						<div
							style={{
								position: "absolute",
								left: "",
								top: "",
								right: "8%",
								bottom: "24%",
								width: "6%",
								height: "6%",
								transform: "",
							}}
							className='rotate'
						>
							<Image src={plus} layout='fill'></Image>
						</div>
						<div
							style={{
								position: "absolute",
								left: "-13%",
								top: "5%",
								right: "",
								bottom: "",
								width: "40%",
								height: "40%",
							}}
							className='float'
						>
							<Image src={blob} layout='fill'></Image>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
