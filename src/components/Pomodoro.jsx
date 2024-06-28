import { useRef, useState, useEffect } from "react";
import Timer from "./Timer";
import Controls from "./Controls";
import Settings from "./Settings";

const Pomodoro = () => {
	const [time, setTime] = useState(25 * 60);
	const [isRunning, setIsRunning] = useState(false);
	const [showSettings, setShowSettings] = useState(false);
	const timerRef = useRef(null);

	const handleStartStop = () => {
		setIsRunning((prevState) => !prevState);
	};

	const handleReset = () => {
		setIsRunning(false);
		setTime(25 * 60);
	};

	const handleSettings = () => {
		setShowSettings((prevState) => !prevState);
	};

	useEffect(() => {
		if (isRunning) {
			timerRef.current = setInterval(() => {
				setTime((prevTime) => prevTime - 1);
			}, 1000);
		} else {
			clearInterval(timerRef.current);
		}

		if (time === 0) {
			clearInterval(timerRef.current);
		}

		return () => clearInterval(timerRef.current);
	}, [isRunning, time]);

	return (
		<div>
			<Timer time={time} />
			<Controls
				isRunning={isRunning}
				handleStartStop={handleStartStop}
				handleReset={handleReset}
				handleSettings={handleSettings}
			/>
			<Settings
				showSettings={showSettings}
				setShowSettings={setShowSettings}
				time={time}
				setTime={setTime}
			/>
		</div>
	);
};

export default Pomodoro;
