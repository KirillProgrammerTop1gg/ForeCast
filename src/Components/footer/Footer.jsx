import styled from 'styled-components'
import logo from '../../imgs/logo 2.png'
import inst from '../../imgs/inst.png'
import fasebook from '../../imgs/fasebook.png'
import watsap from '../../imgs/whattapp.png'
const GlawBox = styled.div`
	display: flex;
	padding: 40px 0px 69px 150px;
	gap: 103px;
	/* width: 1440px; */
	/* height: 179px; */
	flex-shrink: 0;
	background: #ffb36c;
`
const BoxImg = styled.div``
const ImgLogo = styled.img`
	width: 90px;
	height: 62px;
`
const BoxInfo = styled.div``
const BoxInfoTxt = styled.p`
	color: #000;
	font-family: 'Montserrat Alternates';
	font-size: 12px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
`
const BoxInfoTitle = styled.h2`
	color: #000;
	font-family: 'Montserrat Alternates';
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
`
const BoxContact = styled.div`

`
const BoxContactTitle = styled.h2`
margin-bottom:10px;
	color: #000;
	font-family: 'Montserrat Alternates';
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
`
const BoxCintactImg = styled.img`
margin-right:20px;
	width: 40.678px;
	height: 40px;
`
const Footerr = () => {
	return (
		<GlawBox>
			<BoxImg>
				<ImgLogo src={logo}></ImgLogo>
			</BoxImg>
			<BoxInfo>
				<BoxInfoTitle>Address</BoxInfoTitle>
				<BoxInfoTxt>Svobody str. 35</BoxInfoTxt>
				<BoxInfoTxt>Kyiv</BoxInfoTxt>
				<BoxInfoTxt>Ukraine</BoxInfoTxt>
			</BoxInfo>
			<BoxContact>
				<BoxContactTitle>Contact us</BoxContactTitle>
				<BoxCintactImg src={inst}></BoxCintactImg>
				<BoxCintactImg src={fasebook}></BoxCintactImg>
				<BoxCintactImg src={watsap}></BoxCintactImg>
			</BoxContact>
		</GlawBox>
	)
}
export default Footerr
