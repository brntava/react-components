const Random = (numbers) => {
    
    const { max, min } = numbers
    const random = Math.floor(Math.random() * (max - min) + min);

    return(
        <>
            <h3>Numero aleatorio {random}</h3>
        </>
    )
} 

export default Random;