import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
}

.App{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;	
}


.fullPage{
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}


body {
	height: 100vh;
	width: 100vw;
    margin: 0;
    

	
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	color: #fefefe;
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 10px;
	font: inherit;
	vertical-align: baseline;
	box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}



    background: #282C34;
    font-family: Opens-sans, Helvetica, Sans-Serif;
    font-size: 10px;
	font-family: source-code-pro, Menlo, Monaco Consolas, "Courier New",

}
`;

export default GlobalStyle;