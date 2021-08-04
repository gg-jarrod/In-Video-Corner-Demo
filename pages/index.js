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

export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>GumGum In-Video Corner</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<div style={{ minHeight: "100vh" }} className='-d-flex -flex-column'>
				<div className='-bgc-dark-3'>
					<Section style={{ maxWidth: "840px", margin: "0 auto", paddingBottom: "120px" }}>
						<div className='-d-flex -align-items-center -justify-content-center'>
							<Image src={logo} width='144'></Image>
						</div>
						<Heading size='sm' dark className='-text-a-center'>
							GumGum In-Video Corner
						</Heading>
					</Section>
				</div>
				<div style={{ flex: "1" }}>
					<Section style={{ maxWidth: "840px", margin: "-120px auto 0 auto" }}>
						<div className='video-container'>
							<svg viewBox='0 0 160 96.45' fill='#050D14'>
								<g id='Layer_1-2' data-name='Layer 1'>
									<path d='M157.83,0H2.17A2.17,2.17,0,0,0,0,2.17V88.92a2.17,2.17,0,0,0,2.17,2.17h9.65l-6,5c-.14.12,0,.31.15.31H8.38a1.57,1.57,0,0,0,1-.33l6.22-5h0L17.71,95a.59.59,0,0,0,.53.29h1.7a.31.31,0,0,0,.33-.41l-1.82-3.74H142l-1.81,3.74c-.1.19.08.41.33.41h1.7a.58.58,0,0,0,.52-.29l2.13-3.86h0l6.23,5a1.56,1.56,0,0,0,1,.33h2.41c.2,0,.29-.19.16-.31l-6-5h9.15A2.17,2.17,0,0,0,160,88.92V2.17A2.17,2.17,0,0,0,157.83,0Z' />
								</g>
							</svg>
							<div className='video-wrapper'>
								<video className='video' controls autoPlay muted>
									<source type='video/mp4' src={require("../public/video.mp4")} />
								</video>
							</div>
						</div>
					</Section>
					<Section style={{ maxWidth: "840px", margin: "0 auto 0 auto" }}>
						<BodyText size='sm' dark>
							In-Video creates a new, scalable space for effective advertising and inventory monetization. In-Video ads are nonlinear and shown
							during the actual video content using SSAI allowing for a less disruptive experience vs. traditional preroll. Source your own demand
							while also leveraging demand from the GumGum team.
						</BodyText>
					</Section>
					<Section style={{ width: "100%", margin: "0 auto", bottom: "0" }} className='-pos-absolute'>
						<BodyText size='xs' dark className='-text-a-center'>
							© Copyright GumGum 2021
						</BodyText>
					</Section>
				</div>
			</div>
		</Fragment>
	);
}
