import * as faFaceFrown from '@fortawesome/free-regular-svg-icons/faFaceFrown';
import * as faHeartCrack from '@fortawesome/free-regular-svg-icons/faHeart';
import * as faFaceSadTear from '@fortawesome/free-regular-svg-icons/faFaceSadTear';

import { Icon } from '@rsuite/icons';
import s from "./NotFoundPage.module.css"

const FaSvgIcon = ({ faIcon, ...rest }) => {
    const { width, height, svgPathData } = faIcon;
    return (
      <svg {...rest} viewBox={`0 0 ${width} ${height}`} width="2em" height="2em" fill="currentColor">
        <path d={svgPathData}></path>
      </svg>
    );
  };


const NotFoundPage = () => {
    return(
        <>
        <div className={s.mainContainer}>
            Page not found
        </div>
        <div className={s.iconContainer} >
      <Icon as={FaSvgIcon} faIcon={faFaceFrown} />
      <Icon as={FaSvgIcon} faIcon={faHeartCrack} />
      <Icon as={FaSvgIcon} faIcon={faFaceSadTear} />
  </div>
        </>
    )
}

export default NotFoundPage