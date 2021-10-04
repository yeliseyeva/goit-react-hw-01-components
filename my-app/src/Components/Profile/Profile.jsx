import React from "react";
import PropTypes from "prop-types";
import s from "./Profile.module.css";

console.log(s)

function Profile ({name, tag, location, avatar, stats: {followers, views, likes}}) {
    return (
        <div className={s.profile}>
        <div className={s.description}>
            <img
            src={avatar}
            alt="Аватар пользователя"
            className={s.avatar}
            />
            <p className={s.name}>{name}</p>
            <p className={s.tag}>{tag}</p>
            <p className="location">{location}</p>
        </div>

        <ul className={s.stats}>
            <li className={s.item}>
            <span className={s.label}>Followers</span>
            <span className={s.quantity}>{followers}</span>
            </li>
            <li className={s.item}>
            <span className={s.label}>Views</span>
            <span className={s.quantity}>{views}</span>
            </li>
            <li className={s.item}>
            <span className={s.label}>Likes</span>
            <span className={s.quantity}>{likes}</span>
            </li>
        </ul>
        </div>
    )
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
}

Profile.defaultProps = {
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR06sVT1UvVgK2cW6YgQw0Tts82W76HHJc0sw&usqp=CAU",
}

export default Profile