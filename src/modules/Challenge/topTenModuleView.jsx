import React from 'react';

//hooks
import { useTopTen, useCategory } from './hooks';
//context 
import { TopTenConfigProvider } from './context/topten.context';

export const TopTenModuleView = () => {
    const informationTopTen = useTopTen();
    const informationCategory = useCategory()
    return (
        <TopTenConfigProvider topTen={informationTopTen} catogories={informationCategory}>
            components
        </TopTenConfigProvider>
    )
}