function createGane(){
let score=0;
function incresescore(points){
    score+=points;
    console.log(`+${points}pts`);
}
function decreesescore(points){
    score-=points;
    console.log(`-${points}pts`);
}
function getScore(){
    return score;
}
return{incresescore,decreesescore,getScore};
}
const game= createGane();

game.incresescore(3);
game.decreesescore(4);
console.log(`the finale score is ${game.getScore()}pts`);