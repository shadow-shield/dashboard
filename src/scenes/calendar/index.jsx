import { useState } from "react"
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core/index.js";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
Box,
List,
ListItem,
ListItemText,
Typography,
useTheme
} from "@mui/material"
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [events, setEvents] = useState([]);

    const handleDateClick = (selected) => {
        const title = prompt("introduzca un nuevo titulo para el evento");
        const calendarApi = selected.view.calendar;
        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            })
        }
    }

    const handleEventClick = (selected) => {
        if (window.confirm(`Are you sure ${selected.title}`)) {
            selected.event.remove();
        }
    };
    return (
        <Box m="20px">
            <Header titulo="CALENDARIO" subtitulo="Agenda de eventos" />
            <Box display="flex" justifyContent="space-between">
                <Box flex="1 1 20%" backgroundColor={colors.primary[400]} p="15px" borderRadius="4px">
                    <Typography variant="h5">Eventos</Typography>
                    <List>
                        {events.map((event) => (
                            <ListItem button key={event.id} sx={{ background: colors.greenAccent[500], margin: "10px", borderRadius: "2px" }}>
                                <ListItemText primary={event.title} secondary={<Typography>
                                    {formatDate(event.start, {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric",
                                    })}
                                </Typography>} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
                {/* calendario */}
                <Box flex="1 1 100%" ml="15px">
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                        initialView="dayGridMonth"
                       
                        eventClick={handleEventClick}
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                        }}
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventsSet={(events) => setEvents(events)}
                        initialEvents={[
                            { id: "1234", title: "All-day-event", date: "2024-09-25" }
                        ]}





                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Calendar;