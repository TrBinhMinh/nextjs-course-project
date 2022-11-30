import Link from "next/link";

function EventItem(props) {
  return (
    <li>
      <img src="" alt="" />
      <div>
        <div>
          <div>
            <h2>TITLE</h2>
          </div>
          <div>
            <time>DATE</time>
          </div>
          <div>
            <address>ADDRESS</address>
          </div>
        </div>
        <div>
          <Link href="/">Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
