import React from 'react';
import {Icon} from "@iconify/react";

const NavigationLinkIcon = ({icon}: { icon: string }) => (<Icon
    height={32}
    icon={icon}
    style={{padding: '0px 5% 0% 8%'}}
    />
);

export default NavigationLinkIcon;
