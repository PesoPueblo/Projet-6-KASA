export  function Owner ({host}){
    return(
        <div className="host">
            <p className="host-name">{host.name}</p>
            <img src={host.picture} alt="profile host" className="profil-pict"/>
        </div>
    )

}