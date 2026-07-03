import EventsCalendar from "../components/Calendar";
export default function Events() {
  return (
    <div className="bg-background px-8 md:px-16 py-6 md:py-8">
      <h1 className="text-4xl font-black text-content mb-6 md:mb-8">Events</h1>
      <EventsCalendar />
    </div>
  );
}
