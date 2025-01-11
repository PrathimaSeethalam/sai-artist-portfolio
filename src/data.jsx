import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { SiAdobephotoshop, SiAdobeillustrator, SiAdobexd , SiAdobeindesign, SiAdobeaftereffects} from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
// import "./assets/1st main.jpg";
import img1 from '../public/1st main.jpg';
import extraImage from "../public/2nd main.jpg";
import extraImage3 from "../public/11th main .jpg";
import img2 from "../public/First-Project/1.perspective illus.jpg";
import img3 from "../public/First-Project/1st main 2.jpg";
import img4 from "../public/First-Project/1st sub 4.jpg";
import img5 from "../public/First-Project/1st sub 3.jpg";
import img6 from "../public/First-Project/1st sub 5.jpg";
import img7 from "../public/First-Project/1st sub 6.jpg";
import img8 from "../public/First-Project/4th sub 7rd.jpg";
import img9 from "../public/Second-Project/1.jpg"
import img10 from "../public/Second-Project/3.jpg"
import img14 from "../public/Second-Project/4.jpg"
import img15 from "../public/Second-Project/5.jpg"
import img16 from "../public/Second-Project/6.jpg"
import img17 from "../public/Third-Project/3rd sub  4th.jpg"
import img18 from "../public/Third-Project/3rd sub 1nd one.jpg"
import img19 from "../public/Third-Project/3rd sub 2 mock.jpg"
import img20 from "../public/Fourth-Project/1st main 2.jpg"
import img21 from "../public/Fifth-Project/4TH MAIN 1ST ONE.jpg"
import img22 from "../public/Fifth-Project/4TH MAIN 2ND ONE.jpg"
import img23 from "../public/Fifth-Project/4TH MAIN 3rd one (2).jpg"
import img24 from "../public/Fifth-Project/4TH MAIN 3rd one.jpg"
import img25 from "../public/Fifth-Project/4TH MAIN 4th one.jpg"
import img26 from "../public/Fifth-Project/4th sub 1.jpg"
import img27 from "../public/Fifth-Project/4th sub 2nd.jpg"
import img28 from "../public/Fifth-Project/4th sub 5th.jpg"
import img29 from "../public/Sixth-Project/5 th sub 7th one.jpg"
import img30 from "../public/Sixth-Project/5th sub 1st.jpg"
import img31 from "../public/Sixth-Project/5th sub 2nd one.jpg"
import img32 from "../public/Sixth-Project/5th sub 3rd one.jpg"
import img33 from "../public/Sixth-Project/5th sub 6th  one (1).jpg"
import img34 from "../public/Sixth-Project/5th sub 6th  one.jpg"
import img35 from "../public/Seventh-Project/7th main 1st one .jpg"
import img36 from "../public/Seventh-Project/7th sub 2th one.jpeg"
import img37 from "../public/Seventh-Project/7th sub 3rd one.jpeg"
import img38 from "../public/Seventh-Project/7th sub 4th one.jpeg"
import img39 from "../public/Seventh-Project/7th sub 5th one.jpeg"
import img40 from "../public/Seventh-Project/7th sub 6th main.jpeg"
import img41 from "../public/Eigth-Project/8th main 2nd one.jpg"
import img42 from "../public/Eigth-Project/8th main 4rd one.jpg"
import img43 from "../public/Eigth-Project/8th main 6th one.jpg"
import img44 from "../public/Eigth-Project/8th sub 1.jpg"
import img45 from "../public/Eigth-Project/8th sub 3nd one.jpg"
import img46 from "../public/Eigth-Project/8th sub 6th one.jpg"
import img47 from "../public/Eigth-Project/8th sub 8.jpg"
import img48 from "../public/Eigth-Project/8th sub 9th .jpg"
import img49 from "../public/Eigth-Project/8th sub 10 .jpg"

import img50 from "../public/Ninth-Project/9th main 2nd .jpg"
import img51 from "../public/Ninth-Project/9th sub 1.jpg"
import img52 from "../public/Ninth-Project/9th sub 3rd one .jpg"
import img53 from "../public/Ninth-Project/9th sub 4th .jpg"
import img54 from "../public/Ninth-Project/9th sub 6th.jpeg"
import img55 from "../public/Ninth-Project/9th sub 7.jpg"

import img56 from "../public/Tenth-Project/10 th main 2rd one.jpg"
import img57 from "../public/Tenth-Project/10 th sub 1.jpg"
import img58 from "../public/Tenth-Project/10sub 4th .jpg"
import img59 from "../public/Tenth-Project/10th sub 2nd .jpg"
import img60 from "../public/Tenth-Project/10th sub 3rd one.jpg"

import img61 from "../public/Eleventh-Project/10th sub 1.jpg"
import img62 from "../public/Eleventh-Project/10th.jpg"
import img63 from "../public/Eleventh-Project/11th sub 1st .jpg"
import img64 from "../public/Eleventh-Project/11th sub 2rd one.jpg"
import img65 from "../public/Eleventh-Project/11th sub 6.jpeg"
import img66 from "../public/Eleventh-Project/11th sub 7.jpeg"
import img67 from "../public/Eleventh-Project/11thsub 2 nd.jpg"

import img68 from "../public/Thirteenth-Project/13th main.jpg"
import img69 from "../public/Thirteenth-Project/13th sub 2 .jpg"
import img70 from "../public/Thirteenth-Project/13th sub 2nd one.jpg"
import img71 from "../public/Thirteenth-Project/13th sub 4.jpg"
import img72 from "../public/Thirteenth-Project/13 sub 5.jpg"

 import img73 from "../public/Fourteenth-Project/14th sub  2nd one.jpg"
 import img74 from "../public/Fourteenth-Project/14th sub 1.jpg"
 import img75 from "../public/Fourteenth-Project/14th sub 3rd one.jpg"
 import img76 from "../public/Fourteenth-Project/14th sub 4.jpg"

  import img77 from "../public/Fifteenth-Project/15th sub 2.jpg"

 import img78 from "../public/Seventeenth-Project/14th sub  3rd mockup.jpg"
 import img79 from "../public/Seventeenth-Project/14th sub 3rd.jpeg"
 import img80 from "../public/Seventeenth-Project/17 th sub 1.jpeg"
 import img81 from "../public/Seventeenth-Project/17th sub 1.jpg"
//  import img82 from "../public/Seventeenth-Project/13 sub 5.jpg"

import img82 from "../public/Twelth-Project/12th sub 1.png"
import img83 from "../public/Twelth-Project/12th sub 2.png"
import img84 from "../public/Twelth-Project/12th sub 3.png"
import img85 from "../public/Twelth-Project/12th sub 4.png"
import img86 from "../public/Twelth-Project/12th sub 5.png"
import img87 from "../public/Twelth-Project/12th sub 6.png"

import img88 from "../public/Sixteenth-Project/image (1).png"
import img89 from "../public/Sixteenth-Project/image (2).png"

import img89 from "../public/Sixteenth-Project/image (1).png"
import img90 from "../public/Sixteenth-Project/image (2).png" 
import img91 from "../public/Sixteenth-Project/image (2).png"
import img92 from "../public/Sixteenth-Project/image (2).png"
import img93 from "../public/Sixteenth-Project/image (2).png"
import img94 from "../public/Sixteenth-Project/image (2).png" 
import img95 from "../public/Sixteenth-Project/image (2).png"



export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'Photoshop',
    icon: <SiAdobephotoshop />,
    text: 'I have basic Photoshop skills, including image editing, manipulation, and applying effects with clipping masks. I am familiar with essential tools such as the Clone Stamp Tool, Type Tool, Fill Bucket Tool, Eyedropper Tool, and Gradient Tool. My work primarily involves designing posters, creating banners, and crafting caricatures, combining creativity with technical expertise to produce visually appealing results.',
  },
  {
    id: nanoid(),
    title: 'Illustrator',
    icon: <SiAdobeillustrator />,
    text: 'I have basic skills in Adobe Illustrator, including familiarity with tools such as the Symbol Sprayer Tool, Type Tool, and Gradient Tool. My work includes creating posters, brochures, visiting cards, character designs, and digital art, including a notable piece featuring Sri Sai Baba. I strive to combine creativity and technical proficiency to deliver visually engaging designs.',
  },
  {
    id: nanoid(),
    title: 'Figma',
    icon: <IoLogoFigma />,
    text: 'Figma is a versatile UI and UX design software that offers a wider range of options compared to Adobe XD. I have experience designing a web page in Figma, leveraging its powerful tools and features to create user-friendly and visually appealing designs.',
  },
  {
    id: nanoid(),
    title: 'Adobe XD',
    icon: <SiAdobexd />,
    text: 'Adobe XD is a UI and UX design software by Adobe. I have designed user interfaces and user experiences for two apps: Spotify and BookMyShow, utilizing the softwares capabilities to create intuitive and visually engaging designs',
  },
  {
    id: nanoid(),
    title: 'Adobe In design',
    icon: <SiAdobeindesign />,
    text: 'InDesign is a book designing software that I have experience using. I have created a poster and a leaflet with it, leveraging its tools to produce professional and visually appealing designs.',
  },
  {
    id: nanoid(),
    title: 'Adobe After Effects',
    icon: <SiAdobeaftereffects />,
    text: 'This is a video editing software where I have worked on effects such as Shatter and CCSphere, as well as creating logo animations. My experience involves using these tools to deliver dynamic and visually engaging video content.',
  },

];

export const projects = [
  {
    id: nanoid(),
    slug: "first-project",
    img: './1st main.jpg',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'First Project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
    extraImages: [img2, img3, img4, img5, img6, img7, img8],
  },
  {
    id: nanoid(),
    slug: "second-project",
    img: './2nd main.jpg',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'Second Project',
     extraImages: [img9, img10, img14, img15, img16],
    text: 'These banners were designed for promotional ads and advertising campaigns.They feature companies such as Canon, Myntra, Dairy Milk, and tourism-related banners, among others.',
  },
  {
    id: nanoid(),
    slug: "third-project",
    img: './3RD MAIN.jpg',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'Third Project',
    extraImages: [img17, img18, img19],
    text: 'This package design for company brands was created during the 5th semester.The brand names include Mobispace, Snow White, Smile Life, and Choco Monster.',
  },
  {
    id: nanoid(),
    slug: "fourth-project",
    img: './4TH MAIN (2).jpg',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'Fourth Project',
    extraImages: [img20, img21],
    text: 'Caricature work depicting an unusual portrayal of a person. The face bears some resemblance to the individual, while the body is illustrated in a cartoonish style.',
  },
  {
    id: nanoid(),
    slug: "fifth-project",
    img: './5TH MAIN.jpg',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'Fifth project',
    extraImages: [img22, img23, img24, img25, img26, img27, img28],
    text: 'This is a series of ads for Canon, W.H.O., and Myntra.',
  },
  {
    id: nanoid(),
    slug: "sixth-project",
    img: './6 TH MAIN.jpg',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'Sixth Project',
    extraImages: [img28, img29, img30, img31, img32, img33, img34],
    text: 'The logofolios from the final year project include NEOASH, an eco-friendly building material designed for construction purposes, and Urban Glow, which was originally a cosmetic brand but has been rebranded as a watch company.',
  },
  {
    id: nanoid(),
    slug: "seventh-project",
    img: './7th main.jpg',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'Seventh Project',
    extraImages: [img35, img36, img37, img38, img39, img40],
    text: 'These are some types of photographs, including portrait photography, product photography, and micro photography.',
  },
  {
    id: nanoid(),
    slug: "eigth-project",
    img: './8th main.jpg',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'Eigth Project',
    extraImages: [img41, img42, img43, img44, img45, img46, img47, img48, img49],
    text: 'Posters created for advertising campaigns.',
  },
  {
    id: nanoid(),
    slug: "ninth-project",
    img: './9th Main .jpg',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'Ninth Project',
    extraImages: [img50, img51, img52, img53, img54, img55],
    text: 'These are some of my portraits and digital artworks, featuring my teachers, Allu Arjun, Mahesh Babu, and Sai Baba.',
  },
  {
    id: nanoid(),
    slug: "tenth-project",
    img: './10th main .jpg',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'Tenth Project',
    extraImages: [img56, img57, img58, img59, img60],
    text: 'This is the event design work created for the Sunburn event.',
  },
  {
    id: nanoid(),
    img: './11th main .jpg',
    slug: "eleventh-project",
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'Eleventh project',
    extraImages: [img61, img62, img63, img64, img65, img66, img67],
    text: 'This is a storyboard I created, inspired by stories of my own. The first story, Siddharth Roy, is about a blind musician. The second is a short story about the Brahmin Coffee Bar.',
  },
  {
    id: nanoid(),
    img: './12th main.jpg',
    slug: "twelth-project",
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'Twelth Project',
    extraImages: [img82, img83, img84, img85, img86, img87],
    text: 'This is my final year branding project brand guidelines.',
  },
  {
    id: nanoid(),
    img: './13th main.webp',
    slug: "thirteenth-project",
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'Thirteenth Project',
    extraImages: [img68, img69, img70, img71, img72],
    text: 'These are the wall murals I designed, which include wayfinding murals, a mural art of Buddha, and a typographical mural of a heart.',
  },
  {
    id: nanoid(),
    img: './14th main.jpg',
    slug: "fourteenth-project",
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'Fourteenth Project',
    extraImages: [img73, img74, img75, img76],
    text: 'These are digital artworks created using Photoshop and Illustrator.',
  },
  {
    id: nanoid(),
    img: './15th main.png',
    slug: "fifteenth-project",
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'Fifteenth project',
    extraImages: [img77],
    text: 'AI-generated images created with a camera-like effect.',
  },
  {
    id: nanoid(),
    img: './16th main.png',
    slug: "sixteenth-project",
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'Sixteenth project',
    extraImages: [img88,img89],
    text: "This are the AI photos generated of camera",
  },
  {
    id: nanoid(),
    img: './17th main.webp',
    slug: "seventeenth-project",
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'Seventeenth project',
    extraImages: [img78, img79, img80, img81],
    text: 'These are indoor advertisement design works.',
  },
];

