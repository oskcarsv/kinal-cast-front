const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTiXI-GhXoM2RGYF_oefYzGqnnZh5r5FUQqi5AOvrc5w&s'

const ChannelAvatar = ({url}) => {
    return(
        <div className="channels-avatar-container">

            <img src={url === "none" ? imageUrl : url} width='100%' height='100%' alt="Default Avatar" />
        </div>

    )
}

export const ChannelCard = ({

    title,
    id,
    username,
    isOnline,
    avatarUrl,
    navigateToChannelHandler

}) => {
    
    const handleNavigate = () => {
        
        navigateToChannelHandler(id)

    }

    return (
        
        <div className="channels-card" onClick={handleNavigate}>
            <ChannelAvatar url={avatarUrl} />
            <span className="channels-card-title">{title}</span>
            <span className="channels-card-title">{username}</span>
            <span className="channels-card-title" style={{ color: isOnline ? 'green' : 'red' }}>
                {isOnline ? 'Online' : 'Offline'}
            </span>
        </div>

    )

}