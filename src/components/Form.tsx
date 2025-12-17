import { useState, type ChangeEvent, type FormEvent } from 'react';
import { countries } from "../data/coutries";
import type { SearchType } from '../types';
import Alert from './Alert';


export default function Form() {

    const [search, setSearch] = useState<SearchType>({
        city: '',
        country: ''
    });

    const [alert, setAlert] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (Object.values(search).includes('')) {
            setAlert('Todos los campos son obligatorios');
            return;
        }

        setAlert('');
    };
    
    return (
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-8">
                <label htmlFor="city">Ciudad:</label>
                <input
                    className="p-4 bg-transparent border-[0.3rem] border-white text-white text-[1.8rem] font-normal rounded-xl outline-none"
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Ciudad"
                    value={search.city}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col gap-8">
                <label htmlFor="country">País:</label>
                <select
                    className="p-4 bg-transparent border-[0.3rem] border-white text-white text-[1.8rem] font-normal rounded-xl outline-none"
                    name="country"
                    id="country"
                    value={search.country}
                    onChange={handleChange}
                >
                    <option value="_" disabled className='bg-black'>Seleccione su país</option>
                    {
                        countries.map(country => (
                            <option key={country.code} value={country.code} className='bg-black'>
                                {country.name}
                            </option>
                        ))
                    }
                </select>
            </div>

            <input
                className="bg-primary text-white font-bold text-[1.4rem] uppercase cursor-pointer p-4 rounded-xl"
                type="submit"
                value='Consultar Clima'
            />

            {alert &&
                <Alert>
                    {alert}
                </Alert>}
        </form>
    );
}
