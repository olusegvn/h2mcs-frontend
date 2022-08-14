import React from 'react';
import {Icon} from "@iconify/react";

export const NavigationLinkIcon = ({icon}: { icon: string }) => (<Icon
    height={32}
    icon={icon}
    style={{padding: '0px 5% 0% 8%'}}
    />
);

export const StatisticIcon = ({icon}: { icon: string}) => (<Icon
    height={26}
    icon={icon}
    style={{
        opacity: 1,

    }}
    />
);

export const PlaceholderIcon = ({icon}: { icon: string }) => (<Icon
    height={'50vh'}
    icon={icon}
    style={{padding: '0px 5% 0% 8%'}}
    />
);
