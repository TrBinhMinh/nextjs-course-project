import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/EventList";

function Homepage(props) {
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const events = await getFeaturedEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 1800,
  };
}

export default Homepage;
