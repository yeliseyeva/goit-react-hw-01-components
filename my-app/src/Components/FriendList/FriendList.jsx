import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import s from "./Friends.module.css";

function FriendList ({friends}) {
    return (
        <ul className={s.list}>
            {friends.map(friend => (<li className={s.item} key={friend.id}><FriendListItem {...friend}/></li>))}
        </ul>

    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,}))
}

export default FriendList;