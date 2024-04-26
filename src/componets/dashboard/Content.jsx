import { Route, Routes } from "react-router-dom";

import { Channels } from "../channel/Channels";

import { ChannelView } from "../channel/ChannelView";
import { Settings } from "../settings/Settings";

export const Content = ({ channels, getChannels }) => {
    return (
        <div className="content-container">
            <Routes>
                <Route path="settings" element={<Settings/>}/>
                <Route path="channels" element={<Channels channels={channels} />} />
                <Route path="channel/:id" element={<ChannelView getChannels={getChannels}/>}/>
            </Routes>
        </div>
    )
}