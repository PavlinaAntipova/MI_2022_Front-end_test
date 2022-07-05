import Dropdown from "components/Dropdown";
import { theme } from "helper/theme";
import { useEffect } from "react";
import { useState } from "react";
import { Circles } from "react-loader-spinner";
import { getBreeds } from "services/catsApi";

const limits = [
    { value: '5', label: 'Limit: 5' },
    { value: '10', label: 'Limit: 10' },
    { value: '15', label: 'Limit: 15' },
    { value: '20', label: 'Limit: 20' },
];

export default function BreedsPage() {
    const [breeds, setBreeds] = useState([]);
    const [optionsBreeds, setOptionsBreeds] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getBreeds().then(data => {
            setBreeds(data);
            const options = data.map(item => ({ value: item.id, label: item.name }));
            setOptionsBreeds(options);
        }).finally(() => { setIsLoading(false) });
    }, []);
    
    return (<>
        {isLoading ? <Circles height="80" width="80" color={theme.mainAccentColor} ariaLabel='loading'
        /> : <>
            <ul>
                {breeds.map(item => <li key={item.id}><img src={item?.image?.url} alt="" /></li>)}
            </ul>
        </>}
            </>);
}