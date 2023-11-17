export type Person = {
    name: string;
    image: string;
    prayerRequest: string;
}

export type Meeting = {
    name: string;
    date: Date;
    time: string;
    attendees: Attendee[];
}

export type Attendee = {
    person: Person;
    isAttending: boolean;
}