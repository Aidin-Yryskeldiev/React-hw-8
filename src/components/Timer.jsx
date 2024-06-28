import styled from "styled-components";
const Timer = ({ time }) => {
	const formatTime = (time) => {
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;
		return `${minutes.toString().padStart(2, "0")}:${seconds
			.toString()
			.padStart(2, "0")}`;
	};

	return <Time>{formatTime(time)}</Time>;
};

export default Timer;

const Time = styled.h1`
	position: relative;
	top: 270px;
	text-align: center;
	color: white;
	font-size: 100px;
	font-family: Arial, Helvetica, sans-serif;
`;
