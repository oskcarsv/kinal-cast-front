import { useChannelSettings } from "../../shared/hooks";
import { ChannelSettings } from "../channel/ChannelSettings";
import { LoadingSpinner } from "../LoadingSpinner";
import { PasswordSettings } from "./PasswordSettings";
import { Streamkey } from "./Streamkey";

export const Settings = () => {
    
    const { channelSettings, isFetching, saveSettings } = useChannelSettings()
    
    if (isFetching) {
        
        return <LoadingSpinner/>

    }

    return (
        
        <div className="settings-container">
            <span>Settings</span>
            <ChannelSettings settings={channelSettings} saveSettings={saveSettings} />
            <PasswordSettings/>
            <Streamkey streamKey={channelSettings.streamKey}/>
        </div>

    )

}