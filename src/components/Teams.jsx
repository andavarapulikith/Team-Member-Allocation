const Teams=(props)=>{
    return (
        <select className='form-select form-select-lg' value={props.selectedteam} onChange={props.handleteamselectionchange}>
        <option value='TeamA'>Team A</option>
        <option value='TeamB'>Team B</option>
        <option value='TeamC'>Team C</option>
        <option value='TeamD'>Team D</option>
    </select>
    )
}
export default Teams;