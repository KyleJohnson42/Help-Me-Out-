import React from 'react';

import HandyIcon from '../HandyIcon';
import MessageButton from '../MessageButton';

function ToolCard({ tool, user }) {



  const { tool_name, tool_photos } = tool;
  const { name, photo, handy } = tool.tool_owner;
  return (
    <div className="tool-card">
      <div className="user-name-and-score-div">
        <div className="tool-user-avatar-div"><img className="tool-avatar-img" src={photo} alt={name} /></div>
        <div className="tool-user-name-div">{name}</div>
        <div className="tool-handy-div">
          <div className="tool-handy-emblem">
            <HandyIcon score={handy} usedIn={'-tools'} />
          </div>
          <div>{handy}</div>
        </div>
      </div>
      <div className="tool-name-image-and-message-div">
        <div className="tool-name-div">{tool_name}</div>
        <div className="tool-image-div"><img className="tool-card-tool-img" src={tool_photos[0]} alt={tool_name} /></div>
        <MessageButton user={user} otherUser={tool.tool_owner} usedIn="-card-footer" />
      </div>
    </div>
  );
}


export default ToolCard;