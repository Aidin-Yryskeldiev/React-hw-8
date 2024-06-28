import { useState } from "react";
import styled from "styled-components";

const Settings = ({ showSettings, setShowSettings, time, setTime }) => {
	const [inputTime, setInputTime] = useState(Math.floor(time / 60));

	const handleSubmitSettings = () => {
		setShowSettings(false);
		setTime(inputTime * 60);
	};

	const handleCloseSettings = () => {
		setShowSettings(false);
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			handleSubmitSettings();
		}
	};

	return (
		<div>
			{showSettings && (
				<FlexInput>
					<Modal>
						<CloseButton onClick={handleCloseSettings}>Х</CloseButton>
						<Input
							type="number"
							value={inputTime}
							onChange={(e) => setInputTime(parseInt(e.target.value))}
							onKeyDown={handleKeyDown}
						/>
						<SaveButton onClick={handleSubmitSettings}>Save</SaveButton>
					</Modal>
				</FlexInput>
			)}
		</div>
	);
};

export default Settings;

const FlexInput = styled.div`
	display: flex;
	justify-content: center;
`;

const Modal = styled.div`
	width: 400px;
	height: 200px;
	background-color: white;
	margin-top: -260px;
	z-index: 1000;
	border-radius: 30px;
`;

const Input = styled.input`
	width: 200px;
	height: 30px;
	border-radius: 10px;
	position: relative;
	top: 20px;
	margin-left: 100px;
	padding-left: 10px;
	color: white;
	background-color: #3d3e42;
	border: none;
`;

const CloseButton = styled.button`
	background-color: white;
	border: none;
	font-size: 30px;
	cursor: pointer;
	position: relative;
	top: 10px;
	margin-left: 90%;
`;

const SaveButton = styled.button`
	width: 130px;
	height: 30px;
	color: white;
	background-color: aqua;
	cursor: pointer;
	border: none;
	font-size: 20px;
	border-radius: 20px;
	position: relative;
	top: 60px;
	margin-left: 130px;
	&:hover {
		background-color: #00bbbb;
	}
`;
