import { TypeMaterialIconName } from '@/shared/types/icons.types';
import { FC } from 'react';
import * as MaterialIcons from 'react-icons/md'

const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
    
    const IconName = MaterialIcons[name];

    return <IconName /> || <MaterialIcons.MdDragIndicator />

};

export { MaterialIcon };