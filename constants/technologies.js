import { AiFillHtml5, AiOutlineAntDesign, AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { DiCss3, DiVisualstudio } from "react-icons/di";
import { IoLogoJavascript, IoLogoPython } from "react-icons/io";
import { FaReact, FaTrello } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { TbBrandNextjs, TbBrandTailwind, TbBrandKotlin } from "react-icons/tb";
import { RiFlutterFill } from "react-icons/ri";
import AdobeXDIcon from "public/assets/svg/adobexd.svg";
import HeadlessUiIcon from "public/assets/svg/headlessui.svg";
import MuiIcon from "public/assets/svg/mui.svg";
import LaravelIcon from "public/assets/svg/laravel.svg";
import TensorFlowIcon from "public/assets/svg/tensorflow.svg";
import KotlinIcon from "public/assets/svg/kotlin.svg";
import { DiCodeigniter,DiLaravel } from "react-icons/di";
export const TECHNOLOGIES = [
	{
		category: "Mobile",
		items: [
			{ name: "Kotlin", icon: <TbBrandKotlin size={32} /> },
		]
	},
	{
		category: "Websites",
		items: [
			{ name: "HTML", icon: <AiFillHtml5 size={32} /> },
			{ name: "CSS", icon: <DiCss3 size={32} /> },
			{ name: "JS", icon: <IoLogoJavascript size={32} /> },
			{ name: "React", icon: <FaReact size={32} /> },
			{ name: "Bootstrap", icon: <BsBootstrap size={32} /> },
			{ name: "Laravel", icon: <DiLaravel size={32} /> },
			{ name: "CodeIgniter", icon: <DiCodeigniter size={32} /> }
		]
	},
	{
		category: "Data Science",
		items: [
			{ name: "Python", icon: <IoLogoPython size={32} /> },
			
			
		]
	},
	{
		category: "Other tools",
		items: [
			{ name: "Trello", icon: <FaTrello size={32} /> },
			{ name: "Github", icon: <AiFillGithub size={32} /> },
			{ name: "VsCode", icon: <DiVisualstudio size={32} /> },
		]
	}
];
