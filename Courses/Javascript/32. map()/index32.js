//like forEach method but here you need to create a new array and only then apply map()
// e.g. const cubes=numbers.map(cube) and with for each it would be like this: numbers.ForEach(cube)
//for each changes thearray and map makes a different one just using the previous one

const dates=["2026-8-30", "2025-2-20", "2024-1-10"];
const formattedDates= dates.map(formatDates);
console.log(formattedDates);

function formatDates(element){
    const parts=element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`//parts are parts of splitted array
}