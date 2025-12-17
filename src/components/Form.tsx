import { countries } from "../data/coutries";


export default function Form() {
    return (
        <form className="flex flex-col gap-8">
            <div className="flex flex-col gap-8">
                <label htmlFor="city">Ciudad:</label>
                <input
                    className="p-4 bg-transparent border-[0.3rem] border-white text-white text-[1.8rem] font-normal rounded-xl outline-none"
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Ciudad"
                />
            </div>
            <div className="flex flex-col gap-8">
                <label htmlFor="country">País:</label>
                <select
                    className="p-4 bg-transparent border-[0.3rem] border-white text-white text-[1.8rem] font-normal rounded-xl outline-none"
                    name="country"
                    id="country">
                    <option value="_" disabled>Seleccione su país</option>
                    {
                        countries.map(country => (
                            <option key={country.code} value={country.code}>
                                {country.name}
                            </option>
                        ))
                    }
                </select>
            </div>

            <input
                className="bg-primary  text-white font-bold text-[1.4rem] uppercase cursor-pointer"
                type="submit"
                value='Consultar Clima'
            />
        </form>
    );
}
