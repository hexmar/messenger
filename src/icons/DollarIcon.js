import React from 'react';

export class DollarIcon extends React.Component {
    render() {
        const {children, ...restProps} = this.props;
        return (
            <svg 
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                {...restProps}
            >
                <path d="M7.59097 14.7178V13.4062C6.7482 13.3633 6.04459 13.1719 5.47916 12.8301C4.91373 12.4893 4.43375 12.0566 4.03922 11.5342L4.7272 10.9424C5.08951 11.4121 5.49771 11.79 5.95132 12.0781C6.40445 12.3662 6.95132 12.5371 7.59097 12.5898V8.01465L7.39908 7.98242C6.83365 7.88672 6.35904 7.75 5.97525 7.57422C5.59097 7.39844 5.27652 7.18457 5.03091 6.93457C4.7858 6.68359 4.60953 6.39844 4.50308 6.07812C4.39664 5.75781 4.34293 5.41211 4.34293 5.03809C4.34293 4.60059 4.42056 4.21387 4.57535 3.87793C4.72964 3.54199 4.95132 3.25684 5.23892 3.02246C5.52701 2.78809 5.87125 2.60645 6.27115 2.47852C6.67105 2.35059 7.11099 2.27051 7.59097 2.23828V0.925781H8.29507V2.22266C9.03091 2.27637 9.65787 2.45312 10.175 2.75098C10.6925 3.04883 11.1217 3.44336 11.463 3.93457L10.7589 4.46191C10.4816 4.06738 10.1432 3.75 9.74332 3.50977C9.34293 3.27051 8.8605 3.12402 8.29507 3.07031V7.2627L8.56705 7.31055C9.13248 7.40625 9.60709 7.54492 9.99136 7.72656C10.3752 7.9082 10.6872 8.12598 10.9269 8.38184C11.1671 8.63867 11.3376 8.92578 11.4391 9.24609C11.5402 9.56641 11.591 9.91797 11.591 10.3027C11.591 11.2412 11.2951 11.9746 10.7033 12.502C10.111 13.0303 9.30826 13.332 8.29507 13.4062V14.7178H7.59097ZM5.25504 4.99023C5.25504 5.32129 5.30582 5.60352 5.40738 5.83789C5.50845 6.07324 5.6525 6.27539 5.83902 6.44629C6.02554 6.61719 6.25259 6.75586 6.5192 6.8623C6.7858 6.96875 7.08951 7.05469 7.4313 7.11816L7.59097 7.15039V3.05469C6.86588 3.10742 6.29507 3.29395 5.87906 3.61426C5.46304 3.93457 5.25504 4.39258 5.25504 4.99023ZM10.6794 10.3545C10.6794 9.67285 10.4845 9.16211 10.0954 8.82129C9.70572 8.48047 9.14322 8.25684 8.40738 8.15039L8.29507 8.13477V12.5898C9.04166 12.5264 9.62564 12.3027 10.047 11.9199C10.4684 11.5361 10.6794 11.0146 10.6794 10.3545Z" />
            </svg>
        );
    }
}