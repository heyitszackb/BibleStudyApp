import { Person, Meeting, Attendee } from './types';

// Sample People
const people = [
    { name: 'Ryan Florence', image: 'https://bit.ly/ryan-florence' },
    { name: 'Segun Adebayo', image: 'https://bit.ly/sage-adebayo' },
    { name: 'Kent Dodds', image: 'https://bit.ly/kent-c-dodds' },
    { name: 'Prosper Otemuyiwa', image: 'https://bit.ly/prosper-baba' },
    { name: 'Christian Nwamba', image: 'https://bit.ly/code-beast' }
];

// Sample Meetings
const meetings: Meeting[] = [
    {
        name: 'Study of Matthew',
        date: new Date(2023, 10, 15),
        time: '10:00 AM',
        attendees: [
            { person: people[0], isAttending: false },
            { person: people[1], isAttending: false },
            { person: people[2], isAttending: false },
            { person: people[3], isAttending: false },
            { person: people[4], isAttending: false },
        ]
    },
    {
        name: 'Study of 1 Peter',
        date: new Date(2023, 10, 18),
        time: '2:00 PM',
        attendees: [
            { person: people[2], isAttending: true },
            { person: people[3], isAttending: true },
            { person: people[4], isAttending: false },
        ]
    },
    // Additional Meetings
    {
        name: 'Study of Genesis',
        date: new Date(2023, 10, 20),
        time: '3:30 PM',
        attendees: [
            { person: people[0], isAttending: true },
            { person: people[4], isAttending: true },
        ]
    },
    {
        name: 'Study of Ephesians',
        date: new Date(2023, 10, 22),
        time: '11:00 AM',
        attendees: [
            { person: people[1], isAttending: true },
        ]
    },
    {
        name: 'Study of Galatians',
        date: new Date(2023, 10, 25),
        time: '9:00 AM',
        attendees: [
            { person: people[0], isAttending: false },
            { person: people[1], isAttending: false },
            { person: people[3], isAttending: false },
            { person: people[4], isAttending: false },
        ]
    },
    {
        name: 'Study of James',
        date: new Date(2023, 10, 28),
        time: '4:30 PM',
        attendees: [
            { person: people[0], isAttending: true },
            { person: people[1], isAttending: false },
            { person: people[2], isAttending: true },
        ]
    },
];

export { people, meetings };