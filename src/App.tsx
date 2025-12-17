import Form from "./components/Form";

function App() {

    return (
        <>
            <h1 className="text-center text-[3rem] mt-20">Buscador de clima</h1>

            <div className="w-[95%] max-w-400 my-0 mx-auto md:grid md: grid-cols-2 md:items-center md:gap-16 mt-4">
                <Form />
                <p>2</p>
            </div>
        </>
    );
}

export default App;
