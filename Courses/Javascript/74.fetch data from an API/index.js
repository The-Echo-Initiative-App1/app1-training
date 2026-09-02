async function fetchData() {
    try {
        const dogimonname = document.getElementById("dogimonname").value.toLowerCase();
        const response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${dogimonname}`);

        if (!response.ok) {
            throw new Error("could not fetch resource");
        }

        const data = await response.json();
        const dogimonSprite = data[0].img;

        const imgele = document.getElementById("dogimonsprite");
        imgele.src = dogimonSprite;
        imgele.style.display="block"
    
    } 
    catch (error) {
        console.error(error);
    }
}
