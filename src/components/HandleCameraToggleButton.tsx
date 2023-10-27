import NoPhotographyIcon from '@mui/icons-material/NoPhotography';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useState } from 'react';

export const HandleCameraToggle: React.FC<{ onClick: (setIsCameraOn:any) => void }> = ({ onClick }) => {
    const [isCameraOn, setIsCameraOn] = useState<Boolean>(true);
    return (
        <div onClick={()=>onClick(setIsCameraOn)}>
        {isCameraOn ? <NoPhotographyIcon fontSize="large" color="action"/> : <CameraAltIcon fontSize="large" color="action"/>}
        </div>  
    );
  };