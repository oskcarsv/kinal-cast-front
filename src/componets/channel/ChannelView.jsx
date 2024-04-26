import { useEffect } from "react";
import { ReactFlvPlayer } from 'react-flv-player';
import { useParams } from "react-router-dom";
import { useChannelDetails } from "../../shared/hooks";
import { LoadingSpinner } from '../LoadingSpinner';
import { ChannelDescription } from "./ChannelDescription";

export const Stream = ({ streamUrl }) => {
    
    return (
        
        <div className="channel-video-container">
            <ReactFlvPlayer width='100%' heigth='100%' url={streamUrl} />
        </div>

    )

}

export const ChannelView = ({ getChannels }) => {
    
    const { isFetching, getChannelDetails, channelDetails } = useChannelDetails();

    const { id } = useParams()

    useEffect(() => {
        
        getChannelDetails(id)

    }, [])
    
    if (isFetching) {
        
        return <LoadingSpinner/>

    }

    return (
        
        <div className="channel-container">
            <div className="channel-video-description-section">
                {channelDetails.data.isOnline ? (
                    
                    <Stream streamUrl={channelDetails.data.streamUrl}/>

                ) : (
                        
                        <div className="channel-offline-placeholder">
                            <span>Channel is offline</span>
                        </div>    
                    
                )}

                <ChannelDescription
                
                    channelId={channelDetails.data.id}
                    title={channelDetails.data.title}
                    description={channelDetails.data.description}
                    username={channelDetails.data.username}
                    getChannels={getChannels}
                    
                />
            </div>
        </div>
    )

}