import React from "react"
import PropTypes from "prop-types"
import "../style/nav.scss"
import {
	faFacebook,
	faLinkedin,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


// icon in search bar on website top
export const SearchIcon = (props) => {
	return (
		<svg className="search-icon" t="1588361174310" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1786" xmlnsXlink="http://www.w3.org/1999/xlink" width={props.searchSize} height={props.searchSize}>
			<defs>
				<style type="text/css">
				</style>
			</defs>
			<path d="M768 448a362.666667 362.666667 0 1 0-725.333333 0 362.666667 362.666667 0 0 0 725.333333 0z m-640 0a277.333333 277.333333 0 1 1 554.666667 0 277.333333 277.333333 0 0 1-554.666667 0z m739.925333 525.568l-194.304-196.949333 60.757334-59.904 194.304 196.949333-60.757334 59.904z" fill={props.searchColor} p-id="1787">
			</path>
		</svg>
	)
}

SearchIcon.propTypes = {
	size: PropTypes.number,
	color: PropTypes.string
}

SearchIcon.defalutProps = {
	size: 100,
	color: "#525A65"
}

//"hacking space" logo on nav bar
export const LogoIcon = (props) => {
	return (
		<svg className="logo-icon" version="1.0" xmlns="http://www.w3.org/2000/svg" width={props.logoSize} height={props.logoSize} viewBox="0 0 700.000000 700.000000" preserveAspectRatio="xMidYMid meet">

			<g transform="translate(0.000000,700.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
				<path d="M2470 4388 c-14 -5 -37 -10 -52 -10 -24 1 -29 -5 -42 -51 -10 -33
-12 -55 -6 -61 13 -13 13 -29 0 -21 -5 3 -19 -9 -30 -27 -16 -25 -19 -42 -14
-72 5 -32 4 -38 -9 -33 -11 4 -23 -13 -45 -66 -117 -277 -109 -250 -89 -290
12 -23 14 -24 25 -9 9 14 11 12 11 -15 1 -28 5 -33 26 -33 29 0 49 27 70 97
19 62 34 76 115 102 l65 21 -62 -3 c-60 -3 -83 6 -45 17 52 16 158 34 165 27
4 -4 3 -20 -3 -36 -8 -22 -7 -31 4 -44 8 -9 21 -43 30 -75 13 -53 13 -61 0
-71 -13 -9 -13 -13 5 -33 10 -13 25 -45 31 -73 13 -53 20 -58 44 -33 9 8 21
12 27 8 8 -4 9 1 3 17 -4 13 -7 105 -6 204 l1 180 30 9 c36 10 41 26 9 26 -20
1 -68 27 -60 33 2 1 -3 18 -11 37 -8 19 -20 62 -27 95 -6 33 -15 74 -20 90 -4
17 -11 42 -14 58 -5 20 -12 27 -31 27 -13 0 -27 5 -30 10 -8 13 -32 12 -65 -2z
m35 -243 l18 -65 -23 -25 c-22 -23 -22 -25 -4 -26 18 0 18 -1 -1 -9 -27 -11
-58 -12 -51 -1 3 5 -3 11 -14 14 -20 5 -20 7 6 79 24 64 41 98 49 98 2 0 11
-29 20 -65z m-104 -18 c-6 -6 -11 -20 -11 -31 0 -14 -3 -17 -10 -10 -7 7 -5
21 7 44 9 20 18 29 21 21 2 -7 -1 -18 -7 -24z m-101 -97 c0 -5 -4 -10 -10 -10
-5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m70 0 c0 -5 -4 -10 -10
-10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m310 -281 c0 -10 -4
-19 -10 -19 -5 0 -10 12 -10 26 0 14 4 23 10 19 6 -3 10 -15 10 -26z"></path>
				<path d="M3414 4358 c-5 -7 -9 -20 -9 -28 0 -8 -6 -15 -13 -15 -14 0 -32 -23
-32 -42 0 -7 7 -10 15 -7 12 5 15 -2 15 -31 0 -35 -19 -42 -21 -7 -2 31 -29
-91 -45 -203 -9 -60 -18 -124 -21 -141 -3 -18 0 -35 6 -38 6 -4 11 -27 11 -52
0 -37 3 -44 19 -44 11 0 27 -3 35 -6 25 -9 57 73 63 163 6 70 20 103 44 103 5
0 13 -10 18 -22 5 -13 39 -70 75 -127 36 -57 66 -115 66 -128 0 -12 6 -23 13
-23 7 0 20 -12 29 -27 20 -33 56 -37 80 -9 30 37 22 70 -46 173 -35 54 -80
128 -100 165 l-37 67 68 56 c37 32 103 82 146 112 42 30 77 59 77 64 0 12 -27
12 -35 -1 -3 -5 -11 -10 -17 -10 -6 0 -3 11 6 25 17 27 14 45 -8 45 -7 0 -39
-18 -71 -41 -32 -22 -68 -44 -79 -49 -12 -4 -54 -33 -95 -64 -71 -53 -111 -74
-77 -40 21 20 20 23 -3 17 -17 -4 -18 -1 -10 39 4 25 11 57 14 71 8 31 -2 35
-20 10 -12 -16 -14 -14 -22 16 -10 38 -26 50 -39 29z m326 -107 c0 -13 -29
-35 -37 -28 -7 8 15 37 28 37 5 0 9 -4 9 -9z"></path>
				<path d="M1769 4353 c-14 -3 -37 -76 -38 -123 0 -8 -9 -50 -21 -92 -11 -42
-29 -134 -39 -205 -19 -126 -19 -128 0 -145 10 -9 19 -24 19 -35 1 -17 1 -17
14 0 12 16 14 15 19 -13 4 -16 13 -30 20 -30 17 0 33 51 47 150 19 129 6 117
115 118 110 1 104 11 75 -122 -17 -78 -27 -213 -13 -178 6 16 23 15 23 -2 0
-28 30 -27 41 2 20 56 23 57 29 17 5 -40 5 -40 12 -10 50 212 122 625 111 635
-3 3 -8 -1 -10 -8 -7 -18 -33 5 -33 29 0 12 -7 19 -18 19 -15 0 -20 -14 -30
-87 -13 -99 -29 -177 -31 -150 -1 24 -21 11 -21 -14 0 -18 -8 -19 -105 -19
l-105 0 0 29 c0 16 4 41 9 54 6 14 13 52 17 85 6 57 5 60 -13 56 -14 -4 -23 2
-31 20 -12 26 -14 27 -43 19z m-19 -150 c-10 -16 -11 -15 -6 7 3 14 6 34 7 45
1 13 3 11 6 -7 2 -15 -1 -35 -7 -45z m-10 -87 c0 -8 -4 -18 -10 -21 -5 -3 -10
3 -10 14 0 12 5 21 10 21 6 0 10 -6 10 -14z m-23 -88 c-3 -8 -6 -5 -6 6 -1 11
2 17 5 13 3 -3 4 -12 1 -19z m315 -95 c-3 -16 -7 -22 -10 -15 -4 13 4 42 11
42 2 0 2 -12 -1 -27z m40 -158 c-2 -14 -6 -25 -8 -25 -2 0 -4 11 -4 25 0 14 4
25 9 25 4 0 6 -11 3 -25z"></path>
				<path d="M3969 4353 c-24 -4 -27 -9 -35 -66 -4 -34 -6 -77 -5 -96 2 -24 0 -31
-10 -26 -9 6 -11 -2 -6 -33 3 -24 1 -40 -4 -36 -5 3 -9 -8 -9 -23 0 -16 -4
-33 -8 -38 -5 -6 -15 -72 -21 -148 -11 -121 -11 -141 2 -155 10 -11 13 -28 10
-44 -4 -23 -1 -29 22 -38 14 -5 28 -10 30 -10 2 0 14 20 28 43 21 38 25 61 30
188 5 97 15 184 33 264 41 190 41 191 5 209 -16 9 -31 15 -33 15 -2 -1 -15 -4
-29 -6z m-53 -660 c-10 -10 -19 5 -10 18 6 11 8 11 12 0 2 -7 1 -15 -2 -18z"></path>
				<path d="M4203 4352 c-29 -3 -34 -8 -43 -45 -7 -23 -18 -64 -26 -91 -7 -27
-11 -60 -8 -73 4 -15 2 -28 -5 -33 -16 -9 -27 -61 -41 -197 -8 -78 -8 -117 -1
-130 9 -15 11 -12 11 17 1 19 3 31 5 25 1 -5 8 -29 15 -51 l12 -41 38 24 c36
24 37 26 43 101 10 114 38 275 52 290 10 11 16 3 34 -40 12 -29 26 -62 31 -73
71 -157 110 -269 110 -312 0 -42 20 -51 63 -31 28 13 34 24 50 87 21 81 37 99
38 44 0 -21 11 21 23 92 26 146 51 258 72 324 19 60 19 81 0 55 -12 -15 -17
-16 -27 -7 -10 10 -10 15 0 27 10 12 8 17 -9 26 -34 18 -72 9 -81 -20 -11 -40
-48 -207 -67 -308 -10 -51 -22 -92 -28 -92 -14 1 -64 134 -53 140 8 6 -14 73
-70 215 -16 41 -23 50 -42 47 -12 -1 -32 6 -43 16 -13 11 -33 16 -53 14z"></path>
				<path d="M3046 4338 c-20 -11 -51 -37 -122 -100 -22 -21 -45 -38 -50 -38 -16
-1 -46 -51 -40 -66 3 -8 2 -13 -3 -10 -16 10 -31 -82 -31 -190 0 -97 1 -106
15 -88 8 10 15 14 15 7 0 -6 3 -19 7 -29 4 -12 3 -15 -5 -10 -25 15 -11 -34
19 -69 30 -34 67 -49 56 -22 -14 34 -18 51 -10 39 25 -33 79 -62 117 -62 30 0
37 3 26 10 -11 7 -7 10 17 10 36 0 142 52 170 82 15 18 10 17 -32 -7 -27 -16
-56 -33 -63 -38 -7 -5 -16 -7 -20 -3 -3 4 14 24 38 44 94 77 113 106 91 141
-8 12 -22 3 -69 -40 -64 -60 -116 -89 -154 -88 -22 0 -22 1 -3 9 14 6 6 8 -30
7 l-50 -2 -13 60 c-23 108 -1 185 77 268 58 64 180 108 236 87 37 -14 45 13
14 47 -49 53 -154 80 -203 51z"></path>
				<path d="M4976 4343 c-19 -3 -56 -31 -107 -82 -43 -43 -81 -76 -84 -73 -3 3
-8 -9 -11 -26 -4 -18 -10 -32 -14 -32 -27 0 -49 -158 -36 -264 10 -80 43 -115
122 -131 33 -7 58 -17 56 -24 -3 -16 93 -14 127 4 36 18 41 13 42 -44 0 -25 3
-40 6 -33 7 18 20 15 26 -8 7 -28 21 -25 50 9 18 22 25 46 31 102 8 88 52 238
72 246 20 7 18 23 -3 24 -28 2 38 16 80 18 20 0 37 6 37 11 0 6 -4 10 -10 10
-5 0 -7 7 -4 15 4 10 -5 20 -30 30 -41 18 -81 21 -56 5 12 -8 10 -10 -10 -11
-14 0 -34 -2 -45 -5 -51 -11 -164 -20 -202 -16 -33 3 -43 1 -43 -10 0 -24 39
-58 68 -59 23 0 22 -2 -12 -12 -48 -15 -57 -34 -19 -42 57 -13 58 -14 32 -43
-15 -17 -10 -14 14 7 55 51 45 22 -14 -44 -64 -69 -129 -106 -129 -74 0 7 -19
32 -41 57 -41 44 -42 45 -37 107 7 78 44 150 114 221 66 66 100 74 167 39 61
-31 67 -31 67 0 0 17 4 23 15 19 12 -5 12 0 5 28 -6 18 -10 34 -10 35 0 2 -17
11 -38 22 -39 20 -127 32 -176 24z m77 -70 c-7 -2 -21 -2 -30 0 -10 3 -4 5 12
5 17 0 24 -2 18 -5z m7 -493 c0 -5 -9 -14 -20 -20 -22 -12 -27 -1 -8 18 14 14
28 16 28 2z"></path>
				<path d="M2068 4314 c-5 -4 -8 -16 -8 -28 0 -14 3 -17 11 -9 6 6 9 19 7 28 -1
9 -6 13 -10 9z"></path>
				<path d="M2057 4217 c-11 -29 -9 -53 4 -40 6 6 9 21 7 34 -3 21 -4 22 -11 6z"></path>
				<path d="M3154 3929 c-16 -17 -49 -44 -73 -60 -25 -16 -38 -29 -31 -29 22 0
87 49 115 86 32 42 28 44 -11 3z"></path>
				<path d="M2551 3814 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"></path>
				<path d="M4572 3760 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"></path>
				<path d="M3440 3478 c-14 -5 -36 -10 -50 -10 -22 0 -29 -7 -44 -49 -13 -39
-15 -53 -5 -65 10 -12 6 -18 -12 -16 -16 2 -41 -77 -34 -107 6 -27 4 -31 -14
-31 -12 0 -21 -4 -21 -10 0 -5 -27 -74 -60 -154 -58 -138 -60 -148 -51 -193 5
-26 9 -38 10 -27 0 12 8 24 16 28 11 4 15 -2 15 -25 0 -27 3 -30 27 -27 22 2
33 13 50 48 12 25 22 53 22 63 1 30 44 63 106 82 33 9 65 19 70 21 6 2 -20 3
-57 1 -65 -3 -88 5 -50 17 43 13 157 34 164 30 12 -8 9 -39 -4 -53 -11 -10
-10 -15 3 -24 9 -7 18 -23 22 -37 3 -14 10 -43 16 -65 8 -32 7 -41 -5 -48 -18
-10 -19 -41 0 -34 10 4 19 -12 32 -59 10 -35 22 -64 26 -64 3 0 14 7 22 16 9
8 21 12 26 9 7 -5 8 3 3 22 -4 15 -7 107 -7 203 l-1 174 33 10 c35 10 43 26
13 26 -55 0 -69 26 -106 190 -35 155 -33 150 -60 150 -13 0 -27 5 -30 10 -8
13 -32 12 -65 -2z m33 -231 c21 -67 21 -76 0 -99 -14 -16 -15 -21 -4 -28 10
-5 5 -10 -17 -15 -23 -5 -36 -2 -51 12 -19 18 -19 19 11 101 16 45 33 82 37
82 4 0 15 -24 24 -53z m-108 -46 c-7 -32 -25 -43 -25 -16 0 8 5 15 10 15 6 0
10 10 10 22 0 12 3 19 6 15 3 -3 3 -19 -1 -36z m-101 -86 c-4 -8 -8 -15 -10
-15 -2 0 -4 7 -4 15 0 8 4 15 10 15 5 0 7 -7 4 -15z m76 11 c0 -3 -4 -8 -10
-11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m310 -292 c0 -8 -4
-12 -10 -9 -5 3 -10 13 -10 21 0 8 5 12 10 9 6 -3 10 -13 10 -21z"></path>
				<path d="M2760 3473 c0 -3 7 -15 16 -24 16 -17 15 -20 -15 -36 -94 -52 -93
-51 -86 -86 4 -18 16 -41 26 -53 10 -11 19 -26 19 -32 0 -7 6 -12 14 -12 18 0
27 -23 15 -41 -5 -8 -9 -27 -9 -44 0 -23 -3 -27 -10 -15 -7 11 -8 2 -4 -28 5
-32 4 -42 -6 -40 -19 4 -29 -43 -30 -150 -3 -169 -3 -167 25 -180 14 -7 31
-12 38 -12 24 0 48 82 50 170 2 47 6 90 9 96 4 6 40 23 80 39 57 23 86 43 133
90 33 33 69 79 79 103 10 23 25 42 33 42 15 0 15 -1 18 65 5 91 -13 103 -162
111 -63 3 -110 10 -115 16 -5 9 -11 8 -22 -1 -13 -11 -16 -11 -16 2 0 8 -7 18
-16 21 -21 8 -64 8 -64 -1z m280 -167 c0 -7 -20 -32 -45 -55 -50 -46 -47 -54
5 -16 41 30 44 31 31 6 -29 -53 -201 -150 -201 -113 0 5 10 14 23 20 17 8 18
11 5 11 -19 1 -23 25 -12 80 8 39 38 60 101 71 74 12 93 11 93 -4z"></path>
				<path d="M2376 3405 c-37 -30 -72 -53 -76 -50 -18 11 -100 -106 -100 -144 0
-29 59 -91 90 -96 103 -14 197 -46 206 -69 12 -31 -25 -74 -92 -107 -55 -27
-78 -33 -135 -33 -46 -1 -70 -5 -74 -14 -17 -45 88 -142 153 -142 14 0 15 2 2
10 -15 9 -16 9 35 25 8 2 17 -1 21 -7 4 -7 10 -5 16 6 5 9 17 16 28 16 51 0
179 143 180 200 0 45 -129 155 -224 190 l-29 11 24 25 c31 33 136 83 192 90
33 5 44 11 43 23 0 9 -5 19 -11 23 -5 4 0 8 13 8 12 0 22 5 22 10 0 16 -62 50
-90 50 -15 0 -30 4 -35 9 -6 5 -28 12 -50 15 -37 6 -44 3 -109 -49z m172 -57
c-3 -7 -18 -15 -34 -18 -16 -4 -60 -26 -97 -49 -37 -24 -70 -41 -72 -39 -9 9
42 49 106 83 66 35 104 44 97 23z"></path>
				<path d="M4354 3428 c-4 -13 -8 -44 -10 -70 -1 -26 -4 -51 -7 -55 -7 -11 -27
-122 -27 -148 0 -11 0 -28 0 -37 -1 -10 0 -59 0 -109 1 -77 -2 -94 -18 -113
-11 -11 -23 -38 -26 -59 -6 -33 -4 -38 16 -46 13 -5 49 -5 83 0 33 5 110 16
170 24 61 9 121 19 135 22 l25 5 -30 13 -30 13 31 1 c36 1 59 18 69 48 5 18 1
24 -21 29 -26 7 -183 0 -305 -13 -67 -7 -69 -3 -47 72 10 37 12 38 18 15 5
-23 7 -22 23 18 13 32 22 42 39 42 13 0 69 9 126 20 141 27 199 59 137 74 -14
4 -23 11 -20 17 4 6 -35 7 -115 3 l-122 -7 7 49 c4 27 9 52 11 56 3 4 29 10
59 13 54 7 68 28 17 25 -44 -3 -62 -1 -62 9 0 4 55 12 122 17 117 9 122 10
142 37 21 28 21 29 2 43 -16 11 -60 14 -202 14 -181 0 -183 0 -190 -22z"></path>
				<path d="M4020 3432 c-9 -4 -29 -19 -45 -33 -17 -15 -55 -47 -85 -73 -82 -69
-90 -78 -90 -96 0 -9 -5 -21 -12 -28 -8 -8 -14 -58 -16 -137 -4 -107 -2 -125
11 -125 8 0 18 -7 21 -16 8 -21 8 -24 -4 -24 -5 0 -10 8 -10 17 0 9 -3 14 -6
10 -20 -19 50 -127 82 -127 18 0 18 5 -2 35 -21 32 -15 32 22 -1 16 -14 39
-30 52 -35 29 -11 92 -12 74 -1 -8 6 6 13 38 20 54 13 129 52 152 79 7 9 -12
2 -43 -16 -63 -35 -98 -41 -59 -10 60 49 120 113 120 128 0 9 -4 22 -9 30 -8
12 -22 3 -69 -40 -60 -56 -115 -89 -149 -89 -15 0 -16 2 -3 10 11 8 2 10 -34
8 -47 -3 -50 -2 -58 27 -5 17 -10 64 -11 105 -2 67 1 80 27 120 40 63 85 108
129 131 52 27 131 41 162 29 37 -14 45 13 14 47 -46 50 -148 78 -199 55z"></path>
				<path d="M4115 3010 c-10 -11 -39 -34 -64 -51 -30 -20 -37 -28 -21 -24 32 10
88 52 101 77 13 24 7 23 -16 -2z"></path>
			</g>
		</svg>
	)
}

export const SocialIcon = () => {
	return (
		<div>
			<a href="https://www.facebook.com/min.gong.10"><FontAwesomeIcon className="facebook-icon" icon={faFacebook} size="2x" /></a>
			<a href="https://www.linkedin.com/in/mingong1"><FontAwesomeIcon className="linkedIn-icon" icon={faLinkedin} size="2x" /></a>
			<a href="https://twitter.com/MinGong9"><FontAwesomeIcon className="twitter-icon" icon={faTwitter} size="2x" /></a>
		</div>

	)
}

export const favicon = () => {
	return (
		<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			viewBox="0 0 841.9 595.3" style="enable-background:new 0 0 841.9 595.3;" xmlSpace="preserve">
			<g>
				<path d="M290.6,238.4c0.5,0,0.3-0.3,0.3-0.6c0.5-0.1,0.6,0.4,1,0.6c0.4-1.1,0.6-1.3-0.1-1.7c-0.3-0.1-0.7-0.2-1-0.3
		c-0.4-0.1-0.5,0.1-0.6,0.4c0.2,0.3,0.7,0.3,0.7,0.8c-0.3-0.1-0.8-0.2-1-0.4c-0.6-0.5-1.2-0.1-1.9,0.4c-0.5-0.8-0.3-0.6-0.8-0.8
		c-0.1,0.1-0.2,0.3-0.2,0.5c0,0.1,0.1,0.3,0.2,0.5c0,0.1-0.1,0.2-0.1,0.4c-0.1-0.1-0.2-0.2-0.2-0.3c0.1-1.2-1.1-2.5-1-4
		c0.1-1,0-2.1,0.1-3.1c0.1-0.8,0-1.7-0.1-2.4c-0.1-0.9-0.1-0.5-0.1-1.4c0.1-0.1,0.1-0.3,0.1-0.4c0-0.1,0-0.3,0.1-0.4
		c0.6-0.5,0-1.2,0.6-1.9c1-1,1.4-1.1,1.3-1.5c-0.2-1.6,1.8-1,1.5-3c-0.1-0.1-0.1-0.3-0.1-0.4c0.7-1.2-0.2-1.7,1-2.4
		c1.6-1-0.4-1.5,0.8-2.4c0.6-0.5,0.8-1,0.6-1.7c-0.2-0.8,0.3-1.3,0.4-2c0.1-0.3,0.4-0.6,0.8-0.7c0.7-0.4,0.8-0.8,0.5-1.4
		c-0.3-0.7-0.6-0.9,0.1-1.5c0.3-0.3,0.7-0.7,0.9-1.2c0.2-0.9,1.4-0.8,1-1.8c-0.7-1.9,1.5-2.4,1.7-4.3c0.1-1,0.4-1.9,1.2-2.5
		c0.8-0.7-0.4-1.7,0.9-2.6c0.8-0.5-0.3-1.7,1-2.8c0.3-0.3,0.3-1.3,0.3-1.6c0.1-0.6-0.1-0.8-0.7-0.6c-0.2,0.1-0.4,0.1-0.6,0.3
		c-0.3,0.2-0.7,0.1-1,0.1c-0.2-0.1-0.5,0-0.7,0c-0.3,0.1-0.5,0.2-0.8,0.2c-0.7,0.1-1.4,0-2,0.6c-0.1,0.1-0.3,0.1-0.6,0
		c-0.6,0-1.2,0.1-1.8,0.4c-0.4,0.2-1.2,0.2-1.9,0.3c-2.1,0.5-4.9,1.1-6.9,1.9c-0.6,0.2-1.2,0.7-1.8,1c-1,0.4-1.8,1-2.5,1.8
		c-0.5,0.5-2.9,1.9-3.2,2.2c-1.6,1-2.4,0.1-3.4,0c-1.4-0.1-1.4-1.8-2.4-3.4c-0.1-0.1-0.3-0.3-0.3-0.5c-0.4-1.2-0.8-2.4-1.2-3.6
		c-0.3-1.2,0.6-0.1,3.2-0.8c0.5-0.1,3.8-0.5,5.2-1c0.7-0.3,1.4-0.3,2.1-0.5c5.5-1.2,6.1-1.4,7.1-1.5c0.6,0,1.1-0.3,1.7-0.6
		c0.6-0.1,1.2-0.3,1.9-0.3c1.2,0,1.9-0.8,2.8-0.6c1.1,0.3,1.2-0.3,1.7-0.3c1,0.1,1.7-0.4,2.1-0.3c0.6,0.3,1.2-0.1,1.8-0.3
		c0.4-0.1,0.8-0.1,1.2-0.1c0.6,0,1.2-0.1,1.9-0.2c1-0.1,2.1-0.3,3.1-0.3c0.6-0.1,1.2,0,1.8-0.1c0.5-0.1,1.1-0.5,1.9-0.6
		c0.4-0.1,0.8,0,1.2-0.1c1.7-0.2,3.4-0.6,5.1-0.6c0.5,0,1-0.2,1.5-0.2c0.5-0.1,2.5-0.2,2.5-0.2c0.7-0.1,1.4-0.1,2.1-0.1
		c0.4,0.1,0.8-0.1,1.2-0.1c1-0.1,1.9,0,2.8-0.4c0.2-0.1,2.1,0,4.4-0.1c2.7-0.1,4-0.3,4-0.3c2-0.1,1.9,0.2,3.2,0.1
		c0.6-0.1,1.2,0.1,1.7,0.1c0.5,0,1-0.1,1.5-0.1c1,0.1,1.4,0.5,2.2,0.2c0.4-0.1,1,0.3,1.1,0.8c0.4,1.4,1,2.3,1,4.3
		c0,0.4-0.3,0.5-0.8,0.3c-0.1-0.1-0.3-0.2-0.5-0.1c-0.8,0.1-1.5-0.2-2.3-0.3c-0.7-0.1-1.3-0.1-2-0.3c-0.8-0.2-1.4-0.1-2.2,0
		c-0.5,0.1-1.9-0.3-3.2-0.5c-0.5-0.1-0.7,0.7-1.9,0.3c-1.1-0.4-1.4,0.1-1.8,0.1c-3.4-0.1-3.4-0.2-3.9-0.1c-1,0.3-1.8,0.1-3.9,0.3
		c-6.7,0.5-5.3,0.4-6.3,0.6c-0.3,0.1-0.6,0.2-1,0.1c-1-0.1-1.7,0.9-1.9,0.9c-1,0.1-1.3,1-1.8,1.7c-0.7,1.1-0.4,1.3-0.6,1.8
		c-0.5,1.5,0,1.4-1.5,2.9c-0.3,0.3-0.7,0.5-0.7,1c0,0.6-0.3,1.2-1,1.2c-0.6,0.1-0.5,0.8-0.5,1.3c0.1,0.7-0.1,1.1-0.8,1.3
		c-0.3,0.2-0.5,0.5-0.7,0.8c-0.3,0.6-0.1,1.2-0.3,1.7c-0.2,0.6-0.5,1-1,1.4c-0.5,0.5-0.7,1.1-0.4,1.7c0.3,0.7-0.1,1.2-0.8,1.6
		c-0.6,0.4-0.6,0.7-0.8,1.2c-0.4,1.4,0,1.4-0.1,2c-0.1,0.5-0.1,1.2-0.7,1.3c-0.8,0.1-0.9,0.5-0.7,1.3c0.3,0.8-0.5,0.8-1,2.1
		c-0.1,0.3-0.3,0.5-0.6,0.7c-0.5,0.3-0.5,0.8-0.3,1.3c0.3,0.6,0.3,0.6-0.3,1c-0.8,0.5-0.8,0.5-0.5,1.5c0.1,0.5-0.2,1.3-0.3,1.9
		c-0.1,0.3-0.1,0.5-0.4,0.7c-0.8,0.3-1.1,1.6-0.6,2.3c0.3,0.5,0.3,0.5-0.1,1c-0.9,0.8,0.1,1.3-0.7,2.8c-0.1,0.1-0.1,0.3-0.1,0.5
		c0.3,0.7-0.3,0.6-0.4,3.1c0,0.3,0,0.5-0.2,0.7c-0.9,0.8,0.6,1.3-0.3,2.6c-0.2,0.3-0.1,0.8-0.2,1.2c-0.1,1.2,0.1,1.9,0,2.8
		c-0.1,0.8-0.3,1.6-0.4,2.3c-0.1,0.6-0.7,0.9-1.2,1.2c-0.1,0.1-0.5,0-0.5-0.1c-0.2-0.4-0.5-0.7-0.6-1.2c0-0.7-0.1-1.4-0.2-2
		C291.1,238.9,290.8,238.7,290.6,238.4z M286.4,229.4c0.1,0,0.1,0,0.3-0.1l-0.2-0.5c-0.1,0-0.1,0.1-0.2,0.1L286.4,229.4z M296,215.6
		c0-0.1,0-0.1-0.1-0.1c-0.5-0.1-0.8,0.1-1.2,0.3c-0.1,0-0.2,0.2-0.1,0.3c0.2,0.4-0.1,0.7-0.3,1c-0.1,0.3-0.1,0.9-0.2,1.2
		c-0.1,0.3-0.3,0.5-0.3,0.8c0,0.8-0.3,1.6-0.5,2.3c-0.1,0.1-0.1,0.1-0.1,0.2l0.4,0.9c0,0,0.4-0.1,0.4-0.1c0.2-0.7,0.3-1.4,0.5-2.1
		c0.1-0.4-0.1-0.9,0.2-1.3c0.1,0,0-0.1,0-0.2c-0.2-0.3-0.1-0.5,0.1-0.7c0.8-0.9,0.5-2.1,0.7-2.3C295.7,215.8,295.8,215.7,296,215.6z
		 M297.8,209.8c0.6-0.6,1-0.9,0.7-1.3c-0.1-0.1-0.3-0.3-0.5,0.1C297.6,209.6,297.7,209.4,297.8,209.8z M299.1,206.3h-0.1
		c-0.1,0.2-0.2,0.5,0.1,0.8V206.3z M302.2,199.5c0.2-0.3,0.4-0.5,0.5-0.8c0.1-0.1,0-0.4-0.1-0.6c-0.3-0.1-0.4,0.1-0.5,0.3
		C302,198.8,302,199.1,302.2,199.5z M304.2,195.1c-0.1,0-0.1,0-0.2-0.1c0,0.1-0.1,0.1,0.1,0.2C304.2,195.3,304.2,195.2,304.2,195.1z
		"/>
				<path d="M333.7,234.9c-6.7,0.6-9.3-4.9-10.6-9.6c-2.4,1.9-3.9,4.8-6,7c-0.2,0.2-0.3,0.5-0.4,0.7c-0.8,0.8-2,1.3-2.3,2.3
		c-0.5,0.1-0.6-0.2-0.8-0.2c-0.3,0.4-0.3,1.2-0.7,1.5c-1.9,0.5-2.5-0.8-4.3-0.9c-0.3-1.1-1.5-1.3-2.2-2.1c-0.7-1.8-1.1-5.2,0-6.9
		c-0.3-2.3,1.1-5.5,1.9-7.8c0.4-1.1,0.8-2.2,1.3-3.2c0.6-1,1-2.1,1.5-2.9c1.3-1.8,3.8-2.2,4.8-4.3c1.5,0,1.8-1.2,3.2-1.3
		c0.4-0.1,0.3-0.8,0.7-0.8c1.5-0.2,1.9,1.3,2.8,1.9c0.6,0.4,1.4,0.3,1.8,1c0.6,0.3,0.5-0.3,1.1-0.2c0.8,1.9,3.3,2.1,4.3,3.9
		c-0.4,1-1.9,0.9-2.6,0.8c-1-0.1-1.7-1.1-3.4-0.8c-2.5,0.4-6.5,4-8.1,6c-0.1,0.1,0,0.3,0,0.4c-0.1,0.1-0.4-0.1-0.5,0
		c-0.3,0.5-0.6,1.3-0.6,1.9c-1.1,0.7-1.4,1.9-1.9,3.4c-0.6,1.7-1.1,3.9-1.5,6c1.8-1.5,3.1-3.7,4.5-5.8c0.7-1.1,1.6-1.9,2.5-3
		c1.3-1.7,2.4-3.4,4.5-4.4c-0.2-1,0.7-2.1,1.5-2.8c2.8,1,6,1.5,7.7,3.4c-0.4,0.6-0.9,1.1-1.4,1.5c-0.8,4.7-1.4,11.3,2.3,13.2
		c1-0.2,1.6-0.8,2.6-0.9C335,233.5,333.3,233.1,333.7,234.9z"/>
				<path d="M332,231.7c0.3-1-0.3-2.1,0-3c0.3-1.6,1.6-3,2.1-4.5c0.4-1.3,0.6-2.6,1.1-3.9c1.2-3.3,2.5-7.2,3.7-10.8
		c1.6,0.9,3.2,1.7,4.9,2.4c0.2,0.3,0.6,0.3,0.4,1c3.7-1.7,7-0.1,11.2-1.3c0.3,0.8-0.8,1.3-1.8,1.9c-0.5,0.4-0.6,0.2-0.7,0.3
		c-1,0.5-1,0.5-1.9,0.8c-0.8,0.3-1.7,0.8-2.3,1.3c-0.5,0.3-1.7,0.1-2.2,0.5c-0.4,0.3-1.2,0.4-1.5,0.8c-0.3,0.3-1.4,0.9-1.8,1.3
		c-0.3,0.3-0.8,0.4-1.1,0.7c-0.7,0.8,0.2,2.9-1,3.6c-0.6,1.9-1.6,3.4-2.6,5.2c-0.8,1.5-0.8,3.9-1.9,6
		C334.5,233.5,334.6,231.7,332,231.7z"/>
				<path d="M377.7,234.9c-6.7,0.6-9.3-4.9-10.6-9.6c-2.4,1.9-3.9,4.8-6,7c-0.2,0.2-0.3,0.5-0.4,0.7c-0.8,0.8-2,1.3-2.3,2.3
		c-0.5,0.1-0.6-0.2-0.8-0.2c-0.3,0.4-0.3,1.2-0.7,1.5c-1.9,0.5-2.5-0.8-4.3-0.9c-0.3-1.1-1.5-1.3-2.2-2.1c-0.7-1.8-1.1-5.2,0-6.9
		c-0.3-2.3,1.1-5.5,1.9-7.8c0.4-1.1,0.8-2.2,1.3-3.2c0.6-1,1-2.1,1.5-2.9c1.3-1.8,3.8-2.2,4.8-4.3c1.5,0,1.8-1.2,3.2-1.3
		c0.4-0.1,0.3-0.8,0.7-0.8c1.5-0.2,1.9,1.3,2.8,1.9c0.6,0.4,1.4,0.3,1.8,1c0.6,0.3,0.5-0.3,1.1-0.2c0.8,1.9,3.3,2.1,4.3,3.9
		c-0.4,1-1.9,0.9-2.6,0.8c-1-0.1-1.7-1.1-3.4-0.8c-2.5,0.4-6.5,4-8.1,6c-0.1,0.1,0,0.3,0,0.4c-0.1,0.1-0.4-0.1-0.5,0
		c-0.3,0.5-0.6,1.3-0.6,1.9c-1.1,0.7-1.4,1.9-1.9,3.4c-0.6,1.7-1.1,3.9-1.5,6c1.8-1.5,3.1-3.7,4.5-5.8c0.7-1.1,1.6-1.9,2.5-3
		c1.3-1.7,2.4-3.4,4.5-4.4c-0.2-1,0.7-2.1,1.5-2.8c2.8,1,6,1.5,7.7,3.4c-0.4,0.6-0.9,1.1-1.4,1.5c-0.8,4.7-1.4,11.3,2.3,13.2
		c1-0.2,1.6-0.8,2.6-0.9C378.9,233.5,377.2,233.1,377.7,234.9z"/>
				<path d="M397.3,228c-0.1,0.5,0.1,1.1,0,1.5c-0.1,0.4-0.3,0.6-0.4,0.9c-0.4,3.7,0.6,6.9,2.7,9.1c0.7,0,1.2,0.2,1.5,0.5
		c-0.4,0.8-1.8,0.6-2.6,0.4c-0.4-0.1-0.9-0.4-1.5-0.7c-0.6-0.3-1.3-0.9-1.9-1.5c-0.1-0.1-0.3,0.1-0.4,0c-0.1-0.1,0.1-0.3,0-0.4
		c-1.5-1.6-3-3.9-3.2-6.7c0.8-1.3,0.3-3.4,0.6-5.1c0.1-0.3,0.3-0.6,0.4-0.8c0.5-1.4,0.1-3.3,1.3-3.7c-0.4-0.5-0.3-1.7,0.2-1.9
		c-0.8,0.3-1.5,1.2-2.3,1.9c-0.8,0.8-1.5,1.7-2.3,2.2c-0.4,0.9-0.8,2-1.9,2.3c-1,2.8-3.2,4.4-4.5,6.9c-1.2-0.3-0.8,1.1-1.8,1.1
		c-0.1,0.7-0.7,0.9-0.6,1.7c-0.8-0.3-0.8-1.4-2.2-1.1c-0.3-1.3-2.4-1.6-2.8-2.9c0.1-1.3,0.8-2,1.1-3h-0.2l1-2
		c0.1-0.1,0.2-0.1,0.3-0.2c0-0.2,0.1-0.3,0.2-0.5c0.1-0.1,0.1-0.2,0.1-0.3c1.9-5.1,4.4-10.1,6.2-15.8c1.2-0.3,4.4,0.9,6.5,1.2
		c-0.4,0.3-0.8,1.3,0,1.5c-0.3,0.4-1,0.6-1.5,0.8c-0.2,0.8,0.3,0.9,0.2,1.7c0,0.7-0.7,0.7-0.8,1.1c-0.8,3.9-3.5,5.8-4.4,9.6
		c0.7-0.4,1.2-1.2,1.8-1.9c2.4-3,5.5-6.2,8.4-9.2c1.1-1.2,2.1-2.4,3.4-3.4c0.3-1.6,0.4-2,1.1-3.3c2.3-0.6,3.9,1.3,6.1,1.3
		c0.1,1.6-0.6,2.4-1.3,3.3c-0.5,2.6-1.9,5.2-2.6,6.9c-0.8,1.8-2,4.2-2.8,6.5c-0.2,0.3-0.1,0.9-0.3,1.3
		C397.9,227.5,397.4,227.8,397.3,228z"/>
				<path d="M417.2,228.2c-0.1,0.8-0.8,0.8-1.1,1.3c-0.3,0.3-0.8,0.9-0.9,1.3c-0.4,1.3-1.4,1.5-2.2,2.3c-1.2,1.5-3.3,3.6-6.6,3.4
		c-0.4-0.1-0.8-0.4-1.3-0.8c-0.5-0.4-1-0.8-1.6-1.4l-0.2-0.2c-0.2-0.1-0.2-0.2-0.1-0.3v-0.1c-0.3-0.3-0.6-0.2-0.5-0.8
		c0.3-1.3-0.2-1.8,0.1-2.9c0.8-0.1,0.3-1.3,0.7-1.7c-0.1-1.3,0.8-3.8,1.5-4.4c-0.2-0.8,0-1.7,0.6-1.9c-0.5-1.3,0.3-2.7,1.2-3.3
		c0.3,0.8-0.8,0.4-0.3,1.3c1.3-1.3,1.3-3.2,1.9-4.8c0.6-1.7,1.3-3.3,1.8-4.8c-0.1-0.3-0.4-0.2-0.7-0.2c0.1-0.5,0.3-0.8,0.5-1.2
		c-1.3-0.3-2,0.1-3.5,0c-0.8-0.2-0.1,0.8-0.6,0.8c-2.3-1-2.2-2.2-4.4-3.4c-0.1-0.7-0.1-1.2,0.1-1.8c3.2,0.8,6,0.3,9.8-0.6
		c1.3-2.1,2.5-4.3,3.5-6.6c-0.1-0.3-0.4-0.4-0.4-0.8c1.1-0.9,1.2-2.7,2.3-3.6c0.2-1.8,0.4-3.3,1.8-4.6c1.4,1.3,3.3,1.7,4.7,3
		c0.5,2.4-1.9,3.5-1.5,5.9c-0.8,0.8-1,2.1-1.1,3.5c-0.1,0.3-0.4,0.6-0.7,0.8c0.8,1.4,1.3,1.3,2.2,1.3c2.8-0.1-1.4,0.5,2.1,0.3
		c1.5-0.1,8.7-0.6,10.1,0.2c-6.3,2.1-7.5,2.5-13.1,3.4c-0.6,0.2-1,0.3-1.7,0.4c-2.5,0.2,0.3,0.7-2.3,1.9c1.2,2-1.4,3.2-0.8,4.9
		c-0.9-0.3-0.3,0.6-1.1,0.5c0.8,1-0.4,1.4-0.3,2.4c-0.4,0.3-0.5,0.8-1.2,0.8c0.8,1.3-0.9,1.6-0.4,3.1c-1.4,0.3-1,2.1-2.3,2.5
		c0.8,0.5-0.4,0.3,0,1.1c-0.7,0.1-1,0.4-1.4,0.7c-0.2,0.8,0.9-0.2,0.8,0.8c0.1,0.7-1.2,2.4-1.8,2.5c0.9,0.8-0.5,1.2-0.3,2.4
		c-0.9-0.1-0.9,0.8-1,1.6c1.6-0.1,4.2-1.4,5.4-2.1C414.6,230,415.7,228.2,417.2,228.2z M407.5,213.9c-0.2-0.5,0.8-0.3,0.8-0.8
		C408.8,213.3,408,214.6,407.5,213.9z M408.8,212.4c-0.3,0.8,0.2-0.5,0.2-0.6C409.3,210.8,408.9,212.3,408.8,212.4z"/>
				<path d="M419.3,230.6c-0.3-1.9-1.3-3.7-1.1-5.6c0.1-0.5,0.5-0.8,0.7-1.5c0.3-1,0.2-2.4,0.4-3.2c0.3-0.9,1.7-1.4,1.5-3
		c1.6-1.6,2.3-4,4.1-5.4c-0.1-0.6,0.3-0.5,0.2-1.1c1-0.3,1-1.5,2.2-1.5c0.4-0.4,0.5-1.1,1.1-1.3c1.8,1.5,4.1,2.5,5.8,4.1
		c-0.8,1.3-2,0.2-3.2,0.4c-0.3,0.1-0.5,0.7-1.1,0.4c0.2,0.7,1,0.8,1.5,1.1c0.2,0.2,0.3,0.5,0.6,0.7c1.2,0.8,2.7,1.9,3.3,3.4
		c1.5,0.9,2.6,2.3,3.4,3.9c0.3,0.4,0.5,0.9,1.1,1.1c-0.1,0.3-0.1,2,0.6,2.2c-0.1,3.7-3,6.3-5.4,8.4c-0.8,0.7-0.7,0.7-1.7,1.3
		c-1.5,0.8-2.8,1.5-4.8,1.8c-1.8,0.2-2.7-0.1-4.4-0.9c-2.3-1-4.4-2.4-5.4-4.7C418.5,230.5,418.9,230.6,419.3,230.6z M424.2,220.9
		c-0.1,0.1,0.1,0.3,0,0.4c-0.1,0.2-0.6,0.3-0.7,0.5c-0.2,0.3,0.6,1.2-0.4,0.8c0.5,2.2-1.9,3.3-0.6,4.9c-0.4,0-0.6,0.2-0.7,0.4
		c0.9,0.5-0.1,1.7,0.2,2.8c0.4,1.6,1.9,2.5,3.3,2.6c2.7,0.2,5.8-2.7,7.1-4.3c0.8-0.9,1-1.3,1-1.9c-0.7-1.4-1.3-2.9-2.3-3.9
		c0.5,0,0.1-0.8,0.3-1.1c-1.7-1.4-2.5-3.7-4.8-4.5c-0.8,0.8-1.3,2.3-1.9,3.2C424.6,221,424.3,220.9,424.2,220.9z"/>
			</g>
		</svg>
	)
}