import styled from 'styled-components'
import logo from '../../imgs/logo 2.png'
import inst from '../../imgs/inst.png'
import fasebook from '../../imgs/fasebook.png'
import watsap from '../../imgs/whattapp.png'
const GlawBox = styled.div`
	display: flex;
	padding: 40px 0px 69px 150px;
	margin-top: 48px;
	gap: 103px;
	/* width: 1440px; */
	/* height: 179px; */
	flex-shrink: 0;
	background: #ffb36c;
	@media (max-width: 1200px) {
		gap: 100px;
		padding: 40px 0px 64px 100px;
	}
	@media (max-width: 768px) {
		padding-left: 50px;
		gap: 24px;
		justify-content:center;
		padding: 40px 0px 64px 0px;
	}
`
const SecondGlawBox = styled.div`
	display: flex;
	gap: 103px;
	@media (max-width: 1200px) {
		gap: 100px;
	}
	@media (max-width: 768px) {
		gap: 25px;
		flex-direction: column;
		align-items:center;
	}
`
const BoxImg = styled.div``
const ImgLogo = styled.img`
	width: 90px;
	height: 62px;
	@media (max-width: 1200px) {
		width: 58px;
		height: 40px;
	}
	@media (max-width: 768px) {
		width: 50px;
		height: 34.483px;
		flex-shrink: 0;
	}
`
const BoxInfo = styled.div``
const BoxInfoTxt = styled.p`
	color: #000;
	font-family: 'Montserrat Alternates';
	font-size: 12px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	@media (max-width: 1200px) {
		color: #000;
		font-family: 'Montserrat Alternates';
		font-size: 10px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}
	@media (max-width: 768px) {
		color: #000;
		font-family: 'Montserrat Alternates';
		font-size: 8px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}
`
const BoxInfoTitle = styled.h2`
	color: #000;
	font-family: 'Montserrat Alternates';
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	margin-bottom:10px;
	@media (max-width: 1200px) {
		color: #000;
		font-family: 'Montserrat Alternates';
		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		margin-bottom:15px;
	}
	@media (max-width: 768px) {
		color: #000;
font-family: "Montserrat Alternates";
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;
		margin-bottom:15px;
	}
`
const BoxContact = styled.div`
	@media (max-width: 1200px) {
	}
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`
const BoxContactImg = styled.div`
column-gap: 20px;
gap: 20px;
row-gap:20px;
	@media (max-width: 1200px) {
		gap: 20px;
		row-gap:20px;
		column-gap: 20px;
	}
	@media (max-width: 768px) {
		column-gap: 20px;
		gap: 20px;
		row-gap:20px;
	}
`

const BoxContactTitle = styled.h2`
	margin-bottom: 10px;
	margin-left: 10px;
	color: #000;
	font-family: 'Montserrat Alternates';
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	@media (max-width: 1200px) {
		color: #000;
		font-family: 'Montserrat Alternates';
		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}
	@media (max-width: 768px) {
		color: #000;
		font-family: 'Montserrat Alternates';
		font-size: 12px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}
`
const BoxCintactImg = styled.img`
	margin-left:10px;
	margin-right:10px;
	width: 40.678px;
	height: 40px;
	@media (max-width: 1200px) {
		width: 35px;
		height: 35px;
		flex-shrink: 0;
	}
	@media (max-width: 768px) {
		width: 35px;
		height: 35px;
		flex-shrink: 0;
	}
`
const BoxCintactA = styled.a`
	width: 40.678px;
	height: 40px;
	@media (max-width: 1200px) {
		width: 35px;
		height: 35px;
	}
	@media (max-width: 768px) {
		width: 35px;
		height: 35px;
	}
`
const Footerr = () => {
	return (
		<GlawBox>
			<BoxImg>
				<ImgLogo src={logo}></ImgLogo>
			</BoxImg>
			<SecondGlawBox>
				<BoxInfo>
					<BoxInfoTitle>Address</BoxInfoTitle>
					<BoxInfoTxt>Svobody str. 35</BoxInfoTxt>
					<BoxInfoTxt>Kyiv</BoxInfoTxt>
					<BoxInfoTxt>Ukraine</BoxInfoTxt>
				</BoxInfo>
				<BoxContact>
					<BoxContactTitle>Contact us</BoxContactTitle>
					<BoxContactImg>
						{' '}
					<BoxCintactA href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><BoxCintactImg src={inst}></BoxCintactImg></BoxCintactA>	
					<BoxCintactA href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">	<BoxCintactImg src={fasebook}></BoxCintactImg></BoxCintactA>
					<BoxCintactA href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><BoxCintactImg src={watsap}></BoxCintactImg></BoxCintactA>	
					</BoxContactImg>
				</BoxContact>
			</SecondGlawBox>
		</GlawBox>
	)
}
export default Footerr
