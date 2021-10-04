import PropTypes from "prop-types";
import s from "./Statistics.module.css";

function Statistics ({title, stats}) {
    const randomIntegerFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const randomColor = () => {
        return `rgb(${randomIntegerFromInterval(0, 255)}, ${randomIntegerFromInterval(0, 255)}, ${randomIntegerFromInterval(0, 255)})`
    }
    return (
        <section className={s.statistics}>
        <h2 className="title">{title}</h2>

        <ul className={s.list}>

            {stats.map(stat => (
                <li className={s.item} key={stat.id} style={{backgroundColor:randomColor()}}>
                <span className="label">{stat.label}</span>
                <span className="percentage">{stat.percentage}%</span>
                </li>
            ))}
            
        </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}

export default Statistics;