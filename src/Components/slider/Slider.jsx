import styled from 'styled-components'
import { Component, useMemo, useState, useEffect, useCallback } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { EffectCoverflow } from 'swiper/modules'
const ImgSlode = styled.img``
const Slidertitle = styled.h3`
color: #000;
font-family: "Montserrat";
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;`

const URL =
	'https://pixabay.com/api/?q=nature&page=1&key=46222803-e5f023d1346374de5c3b0f821&image_type=photo&orientation=horizontal&per_page=12'
const Sliderr = () => {
	const [photoLIst, setPhotoLIst] = useState([])

	// const getPhoto = () => {
	// 	fetch(URL)
	// 		.then((data) => data.json())
	// 		.then((data) => setPhotoLIst(data.hits))
	// 		.catch((error) => console.error(error))
	// 	// console.log(photoLIst[0].largeImageURL)
	// }
	useEffect(() => {
		fetch(URL)
			.then((data) => data.json())
			.then((data) => setPhotoLIst(data.hits))
			.catch((error) => console.error(error))
		// console.log(photoLIst[0].largeImageURL)
	}, [])
	// getPhoto()
	return (
		<>
<Slidertitle>Beautiful nature</Slidertitle>

			<Swiper
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				loop={true}
				slidesPerView={'auto'}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					depth: 100,
					modifier: 2.5,
				}}
				modules={[EffectCoverflow]}
				style={{
                    marginTop: '40px',
                    marginBottom: '48px',
					width: '900px',
					position: 'relative',
				}}
			>
				{photoLIst.map((data) => {
					return (
						<SwiperSlide
							style={{ width: '390px', height: '211px', position: 'relative' }}
							key={data.id}
						>
							<ImgSlode
								style={{
									borderRadius: '7px',
									width: '384px',
									height: '211px',
								}}
								src={data.webformatURL}
							></ImgSlode>
						</SwiperSlide>
					)
					return console.log(data)
				})}
			</Swiper>
		</>
	)
}

export default Sliderr
