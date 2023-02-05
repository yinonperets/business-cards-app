import useName from "./useName"

const CustomName = () => {
    const {name, setName} = useName();

    return (
        <div>
            <p>Name: {name}</p>
            <input type="text" onChange={(e)=>setName(e.target.value)} />
        </div>
    )
}

export default CustomName