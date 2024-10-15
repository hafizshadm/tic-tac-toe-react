import { useState } from "react"

export default function Player({ initialName, symbol, isActive }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    let editableName = <span className="player-name">{playerName}</span>;

    function changeHandler(event) {
        setPlayerName(event.target.value);
        console.log(playerName);
    }

    function handleEditClick() {
        setIsEditing(editing => !editing);
        console.log(isEditing);
    }

    if (isEditing) {
        editableName = <input type="text" required defaultValue={playerName} onChange={changeHandler} />
    }


    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editableName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}