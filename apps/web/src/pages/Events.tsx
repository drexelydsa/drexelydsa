import { Calendar } from "../components";
export default function Events() {
  return (
    <div id="events" className="bg-background px-8 md:px-16 py-6 md:py-8">
      <div className="bg-background max-w-4xl mx-auto items-start mx-auto flex flex-col gap-6 md:gap-8">
        <h1 className="text-4xl font-black text-content mb-6 md:mb-8">
          Events
        </h1>
        <Calendar />
      </div>
    </div>
  );
}
