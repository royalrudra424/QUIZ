class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question=  new Question()
      question.display();
    }
  }

  play(){

    question.hide()
     
    background("cyan")
     
    textSize(24)
    fill("black")
    text(" RESULT OF THE QUIZZZZZ" , 250,50 )
    
    Contestant.getPlayerInfo()
    
    if( allContestants  !== undefined){

      var ypos = 280

      //Name1 : answer
      //Name2 : answer

      textSize(24)
      fill("blue")
      text(" NOTE: CORRECT ANSWER IS IN GREEN COLOR " , 100,240 )

      for(var plr in allContestants){
        var correctans = "2"

        if(correctans === allContestants[plr].answer){
          fill("green")
        }
        else{
          fill("red ")
        }

        ypos = ypos+ 30
        textSize(24)
      
        text( allContestants[plr].name + ": " + allContestants[plr].answer, 350,ypos )
      }
    
    }

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
