import ellipse from "../assets/icon-ellipsis.svg";
import "./Card.scss";

const Card = ({ title, main, sub, icon, color }: CardProps) => {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <div className="card-banner">
        <img src={icon} alt={title} />
      </div>
      <div className="card-content">
        <div className="card-content__header">
          <h2>{title}</h2>
          <a href="#">
            <img src={ellipse} alt="" />
          </a>
        </div>
        <div className="card-content__text">
          <p className="card-content__this-week">{main}hrs</p>
          <p className="card-content__last-week">Last Week - {sub}hrs</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

interface CardProps {
  title: string;
  main: number;
  sub: number;
  icon: any;
  color: any;
}
