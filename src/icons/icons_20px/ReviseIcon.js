import React from 'react';
import { Svg } from '../Svg/Svg';

export class ReviseIcon extends React.Component {
    render() {
        const {children, ...restProps} = this.props;
        return (
            <svg
                version="1.1" 
                id="Слой_1" 
                xmlns="http://www.w3.org/2000/svg" 
                xmlnsXlink="http://www.w3.org/1999/xlink" 
                x="0px" 
                y="0px"
                viewBox="0 0 20 20" 
                xmlSpace="preserve"
                {...restProps}
            >
                <g>
                    <path d="M18.4,15.4c-0.1-0.1-0.3-0.1-0.4-0.1c-0.1,0-0.3,0-0.4,0.1L16,17c-0.1,0.1-0.3,0.1-0.4,0.1H4.5c-0.1-0.5-0.5-0.9-1-1V3.8
                        c0-0.4-0.1-0.7-0.4-1L1.4,1.1c-0.2-0.2-0.5-0.2-0.7,0s-0.2,0.5,0,0.7C1.3,2.4,1.9,3,2.5,3.5c0,0,0.1,0.1,0.1,0.2c0,0.1,0,0.1,0,0.1
                        c0,0.1,0,5,0,12.3c-0.6,0.2-1,0.8-1,1.4c0,0.8,0.7,1.5,1.5,1.5c0.6,0,1.2-0.4,1.4-1h11.2c0.4,0,0.7-0.1,1-0.3l1.7-1.6
                        C18.6,15.9,18.6,15.6,18.4,15.4z M3.1,18c-0.3,0-0.5-0.2-0.5-0.5S2.8,17,3.1,17s0.5,0.2,0.5,0.5S3.4,18,3.1,18z"/>
                    <path d="M15.6,5h-4h-3h-3c-0.6,0-1,0.4-1,1v10h11V5z M10.6,6v2h-1V6H10.6z M14.6,15h-9V6h3v3h3V6h3V15z"/>
                </g>
            </svg>
        );
    }
}
