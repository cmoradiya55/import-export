import React from "react";
import HeaderIcon from "./icon/HeaderIcon";
import SustainabilityIcon from "./icon/SustainabilityIcon";
import QualityFirstIcon from "./icon/QualityFirstIcon";
import InnovativePackagingIcon from "./icon/InnovativePackagingIcon";
import GlobalIcon from "./icon/GlobalIcon";
import GlobalLogisticsIcon from "./icon/GlobalLogisticsIcon";
import FoodSafetyIcon from "./icon/FoodSafetyIcon";
import ExportReadyIcon from "./icon/ExportReadyIcon";

interface AllIconComponentProps {
    width: number;
    height: number;
    icon: string;
    className?: string;
}

export const iconMap: Record<string, any> = {
    headerIcon: HeaderIcon,
    sustainabilityIcon: SustainabilityIcon,
    qualityFirstIcon: QualityFirstIcon,
    innovativePackagingIcon: InnovativePackagingIcon,
    globalLogisticsIcon: GlobalLogisticsIcon,
    globalIcon: GlobalIcon,
    foodSafetyIcon: FoodSafetyIcon,
    exportReadyIcon: ExportReadyIcon,
};

const AllIconComponent = ({
    width,
    height,
    icon,
    className = "",
}: AllIconComponentProps) => {
    const SelectedIcon = iconMap[icon];

    if (!SelectedIcon) return null;

    return (
        <SelectedIcon
            width={width}
            height={height}
            className={className}
        />
    );
};

export default AllIconComponent;








































// import React from 'react'
// import HeaderIcon from './icon/HeaderIcon';
// import SustainabilityIcon from './icon/SustainabilityIcon';
// import QualityFirstIcon from './icon/QualityFirstIcon';
// import InnovativePackagingIcon from './icon/InnovativePackagingIcon';
// import GlobalIcon from './icon/GlobalIcon';
// import GlobalLogisticsIcon from './icon/GlobalLogisticsIcon';
// import FoodSafetyIcon from './icon/FoodSafetyIcon';
// import ExportReadyIcon from './icon/ExportReadyIcon';

// interface AllIconComponentProps {
//     width: number;
//     height: number;
//     color: string;
//     icon: string;
// }

// const AllIconComponent = ({ width, height, color, icon }: AllIconComponentProps) => {
//     return (
//         <>
//             {icon === 'headerIcon' && <HeaderIcon width={width} height={height} color={color} />}
//             {icon === 'sustainabilityIcon' && <SustainabilityIcon width={width} height={height} color={color} />}
//             {icon === 'qualityFirstIcon' && <QualityFirstIcon width={width} height={height} color={color} />}
//             {icon === 'innovativePackagingIcon' && <InnovativePackagingIcon width={width} height={height} color={color} />}
//             {icon === 'globalLogisticsIcon' && <GlobalLogisticsIcon width={width} height={height} color={color} />}
//             {icon === 'globalIcon' && <GlobalIcon width={width} height={height} color={color} />}
//             {icon === 'foodSafetyIcon' && <FoodSafetyIcon width={width} height={height} color={color} />}
//             {icon === 'exportReadyIcon' && <ExportReadyIcon width={width} height={height} color={color} />}

//         </>
//     )
// }

// export default AllIconComponent;