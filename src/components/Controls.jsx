import styled from "styled-components";
const Controls = ({
	isRunning,
	handleStartStop,
	handleReset,
	handleSettings,
}) => {
	return (
		<div>
			<Text>POMODORO</Text>
			<FlexBorder>
				<Border>
					<StarStop onClick={handleStartStop}>
						{isRunning ? "Stop" : "Start"}
					</StarStop>
					<ResetButton onClick={handleReset}>Reset</ResetButton>
					<SettingsButton onClick={handleSettings}>Settings</SettingsButton>
				</Border>
			</FlexBorder>
		</div>
	);
};

export default Controls;

const Text = styled.h1`
	text-align: center;
	font-size: 80px;
	font-family: Arial, Helvetica, sans-serif;
	margin-top: -80px;
	position: relative;
	top: 30px;
`;

const FlexBorder = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 100px;
`;

const Border = styled.div`
	width: 700px;
	height: 300px;
	background-color: #232931;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 50px;
	padding-top: 150px;
`;

const StarStop = styled.button`
	width: 150px;
	height: 40px;
	color: white;
	background-color: blue;
	cursor: pointer;
	border: none;
	font-size: 20px;
	border-radius: 20px;
	&:hover {
		background-color: #0000a5;
	}
`;

const ResetButton = styled.button`
	width: 150px;
	height: 40px;
	color: white;
	background-color: #00ff00;
	cursor: pointer;
	border: none;
	font-size: 20px;
	border-radius: 20px;
	&:hover {
		background-color: #00c100;
	}
`;

const SettingsButton = styled.button`
	width: 150px;
	height: 40px;
	color: white;
	background-color: yellow;
	cursor: pointer;
	border: none;
	font-size: 20px;
	border-radius: 20px;
	&:hover {
		background-color: #bcbc00;
	}
`;
