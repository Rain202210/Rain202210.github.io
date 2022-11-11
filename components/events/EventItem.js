import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import Button from "../ui/button";
import classes from "./EventItem.module.css";
function EventItem(props) {
  const { title, image, date, location, id } = props;
  const humanDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedLocation = location.replace(",", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + image}></img>
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanDate}</time>
          </div>
        </div>
        <div className={classes.address}>
          <AddressIcon />
          <address>{formattedLocation}</address>
        </div>
      </div>
      <div className={classes.actions}>
        <Button link={exploreLink}>
            <span>Explore events</span>
            <span className={classes.icon}><ArrowRightIcon/></span>
            </Button>
      </div>
    </li>
  );
}
export default EventItem;
