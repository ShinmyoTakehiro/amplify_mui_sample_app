import React, { useState, useCallback } from "react";
import FullCalendar, { DateSelectArg, EventApi } from "@fullcalendar/react";
import { Container } from "@mui/material";

import dayGridPlugin from "@fullcalendar/daygrid";
import allLocales from "@fullcalendar/core/locales-all";
import interactionPlugin from "@fullcalendar/interaction";
import { schedule } from "../_mock_/index";
const Calendar: React.FC = () => {
	const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
	const handleEvents = useCallback((events: EventApi[]) => {
		console.log("events:", events); // 確認用
		setCurrentEvents(events);
	}, []);
	return (
		<Container maxWidth={false} sx={{ py: 8 }}>
			<FullCalendar
				plugins={[dayGridPlugin, interactionPlugin]}
				initialView="dayGridMonth"
				initialEvents={schedule}
				locales={allLocales}
				locale="ja"
				eventsSet={handleEvents}
			/>
		</Container>
	);
};

export default Calendar;
