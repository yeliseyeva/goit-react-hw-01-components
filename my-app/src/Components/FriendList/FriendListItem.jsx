import s from "./Friends.module.css";

function FriendListItem ({avatar, name, isOnline}) {
    return (
        <>
            <span className={s.status}>
                {isOnline ? <div style={{width:"20px", height:"20px", backgroundColor:"green", borderRadius:"50%"}}></div> : <div style={{width:"20px", height:"20px", backgroundColor:"red", borderRadius:"50%"}}></div>}
            </span>
            <img className={s.avatar} src={avatar} alt="Фото" width="48" />
            <p className="name">{name}</p>
        </>
    )
}


export default FriendListItem;