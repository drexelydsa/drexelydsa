import { Calendar, PageLayout } from "../components";
export default function Events() {
  return (
    <PageLayout>
      <div className="flex flex-col gap-6 md:gap-8">
        <h1 className="text-4xl font-black text-content">Events</h1>
        <p className="text-content text-lg md:text-xl">
          Here are our upcoming events! Please note that this is from our{" "}
          <a
            href="https://actionnetwork.org/groups/drexel-ydsa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline active:text-background-secondary transition-colors duration-300"
          >
            Action Network
          </a>{" "}
          calendar, so not every event may be listed here. Please check our
          social media for more information on events.
        </p>
        <Calendar />
      </div>
    </PageLayout>
  );
}
