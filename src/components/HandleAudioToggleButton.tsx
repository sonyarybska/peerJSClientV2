import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import { useState } from 'react';

export const HandleAudioToggle: React.FC<{ onClick: (setIsAudioOn:any) => void }> = ({ onClick }) => {
    const [isAudioOn, setIsAudioOn] = useState<Boolean>(true);
    return (
        <div onClick={()=>onClick(setIsAudioOn)}>
        {isAudioOn ? <MicOffIcon fontSize="large" color="action"/> : <MicIcon fontSize="large" color="action"/>}
        </div>  
    );
  };