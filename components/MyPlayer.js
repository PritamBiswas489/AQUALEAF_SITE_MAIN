import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
import videoPoster from '@/assets/images/common-image/video-poster.jpg';
import config from '@/helpers/config';

const { REACT_APP_RESOURCE_URL } = config();

export default function MyPlayer({ homeData }) {
    return (
        <Player
            playsInline
            poster={homeData?.VdoSection?.vdoPlaceholder ? `${REACT_APP_RESOURCE_URL}/${homeData?.VdoSection?.vdoPlaceholder}` : videoPoster.src}
            src={homeData?.VdoSection?.video ? `${REACT_APP_RESOURCE_URL}/${homeData?.VdoSection?.video}` : 'video1.mov'}
        />
    );
}
