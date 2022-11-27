var ask = require("readline-sync");
var colors = require("colors");

class Player {
  constructor(name, health, attack) {
    this.name = name;
    this.health = health;
    this.attack = attack;
  }

  lilSpace() {
    const lilSpacing = `
        
        `;
    console.log(lilSpacing);
  }

  bigSpace() {
    const bigSpacing = `                                                        
        `;
    console.log(bigSpacing);
  }

  start() {
    this.lilSpace();
    console.log(
      `
                        l)L   l)L                                     
                         l)    l)                                     
    w)      WW  e)EEEEE  l)    l)   c)CCCC  o)OOO   m)MM MMM  e)EEEEE 
    w)  WW  WW  e)EEEE   l)    l)  c)      o)   OO m)  MM  MM e)EEEE  
    w)  WW  WW  e)       l)    l)  c)      o)   OO m)  MM  MM e)      
    w)WW WWW     e)EEEE l)LL  l)LL  c)CCCC  o)OOO  m)      MM  e)EEEE `.rainbow
    );

    this.lilSpace();
    let nameData = ask.question(` Wait, what is your name? `.brightWhite);
    this.name = nameData;

    this.lilSpace();
    console.log(
      ` ${player.name}`.brightCyan.bold +
        `? Yeah, you definitely spelled your name wrong just then, but lets get moving.`
          .brightWhite
    );

    this.bigSpace();

    console.log(
      `You walk along a crossroads at night and see a middle-aged man sitting on a bench. Next to the bench is a sign. It points to the left to Hangsmans alley and to the right to the Abandoned Tower.`
        .brightWhite
    );
    const leftOrRight = [
      "You walk past him to the left",
      "You walk past him to the right",
      "You sit down next to him on the bench",
      "You ask the man who he is",
    ];
    const index = ask.keyInSelect(leftOrRight, "Which way?".brightWhite);

    this.bigSpace();
    if (index === 0) {
      this.left();
    } else if (index === 1) {
      this.right();
    } else if (index === 2) {
      this.sitDown();
    } else if (index === 3) {
      this.askMan();
    } else {
      this.credits();
    }
  }

  right() {
    const right = [
      "You try to leave the room quietly.",
      "You walk into the room and ask the vampire who he is.",
      "You draw your sword and attack the vampire.",
      "You wish someone would help you.",
    ];

    console.log(`
          ⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⡈⠛⢉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⣿⢿⣿⣿⣿⣿⣿⠀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢰⣿⡏⠀⢸⣿⣿⣿⣿⡇⢸⣷⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣼⣿⠁⠀⢸⣿⣿⣿⣿⠁⠀⠙⠻⢿⣿⣶⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠛⠋⠀⠀⠸⣿⣿⣿⡏⠀⠀⠀⠀⠀⠈⠉⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣄⠙⣿⣿⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣦⠈⢿⣿⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⡟⠀⠀⠻⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⠟⠁⠀⠀⠀⠘⢿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢾⣿⠟⠁⠀⠀⠀⠀⠀⠀⠈⢻⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀

`.rainbow);

    this.bigSpace();

    console.log("When you arrive at the tower you hear noises. The wooden door is open and you enter the tower. You go down the stairs and see a room soaked in blood. You look around and see a vampire hanging from the ceiling.".brightWhite);
          console.log(`

                     +
                     +
                    <_>
                   :::::
                   :::::
                   :::::
                   HHHHH
                  :::i:::
                  :::i:::
                  :::i:::
                  :::i:::
                  :::i:::
                  :::i:::
                 ::::i::::
                 ::::i::::
                ***********
               *************
              :::::::::::::::

`.rainbow);


    this.bigSpace();

console.log(`
              __.......__
            .-:::::::::::::-.
          .:::''':::::::''':::.
        .:::'     :::::     ':::. 
   .'\  ::'   ^^^  ':'  ^^^   ::  /'.
  :   \ ::   _.__       __._   :: /   ;
 :     \`: .' ___\     /___ '. :'/     ; 
:       /\   (_|_)\   /(_|_)   /\       ;
:      / .\   __.' ) ( '.__   /. \      ;
:      \ (        {   }        ) /      ; 
 :      '-(     .  ^"^  .     )-'      ;
  '.       \  .'<'-._.-'>'.  /       .'
    '.      \    \;'.';/    /      .'
 '._    '-._       _.-'    _.'
       .''-.__ .''-._.-''. __.-''.
     .'       '.         .'       '.
   .'           '-.   .-'           '.


`.rainbow);

    const index = ask.keyInSelect(
      right,
      "What do you do ?"
        .brightWhite
    );
    
    if (index === 0) {
      this.bigSpace();

           

      console.log(`
                         _,--~~~,
                       .'        '.
                       |           ;
                       |           :
                      /_,-==/     .'
                    /''\*  ;      :      
                  :'    '-        :      
                  '~*,'     .     :      
                     :__.,._  ';  :      
                     '\'    )  '  ',     
                         \-/  '     )     
                         :'          \ _
                          '~---,-~    ',)
     \---,,  ___                   \     /~'\
    \---__ ';~~~-------------~~~(| _-'    ',
 \---, ' \'-._____     _______.---'         \
 \--- '~~-',      ~~~~~~                     ',
\----      )                                   \
\----.  __ /                                    '-
 \----'' -~____
               ~~~~~--------,.___     
                                 '\_

`.rainbow);

 this.bigSpace();

      console.log(`

        __   __
     .-'  "."  '-.
   .'   ___,___   '.
  ;__.-; | | | ;-.__;
  | \  | | | | |  / |
   \ \/'"'"'"'"'\/ /
    \_.-,-,-,-,-._/
     \'-:_|_|_:-'/
      '.       .'
        ''---''

        `.rainbow);

      this.bigSpace();

      console.log(
        "The vampire suddenly stands in front of you and attacks you with his strong claws. You fall straight to the ground and realize how your life is being sucked out. GAME OVER"
          .brightWhite
      );
      this.credits();
    } else if (index === 1) {
      this.bigSpace();

            this.bigSpace();

      console.log(`

                         _,--~~~,
                       .'        '.
                       |           ;
                       |           :
                      /_,-==/     .'
                    /''\*  ;      :      
                  :'    '-        :      
                  '~*,'     .     :      
                     :__.,._  ';  :      
                     '\'    )  '  ',     
                         \-/  '     )     
                         :'          \ _
                          '~---,-~    ',)
          ___                   \     /~'\
    \---__ ';~~~-------------~~~(| _-'    ',
  ---, ' \'-._____     _______.---'         \
 \--- '~~-',      ~~~~~~                     ',
\----      )                                   \
\----.  __ /                                    '-
 \----'' -~____  
               ~~~~~--------,.___     
                                 '\_


                                 `.rainbow);

    this.bigSpace();


      console.log(`

        __   __
     .-'  "."  '-.
   .'   ___,___   '.
  ;__.-; | | | ;-.__;
  | \  | | | | |  / |
   \ \/'"'"'"'"'\/ /
    \_.-,-,-,-,-._/
     \'-:_|_|_:-'/
      '.       .'
        ''---''

        `.rainbow);

      console.log(
        "The vampire suddenly stands in front of you and attacks you with his strong claws. You fall straight to the ground and realize how your life is being sucked out. GAME OVER"
          .brightWhite
      );
      this.credits();
    } else if (index === 2) {
      this.bigSpace();
      this.rightVampire();
    } else if (index === 3) {
      this.bigSpace();
      let usersAns = ask.question(
        ` The man from the bank appears next to you and offers to help you if you solve his riddle. The riddle: Some people despise me and wish I didn't exist. Yet you can do nothing to me. If you yawn, I yawn. If you smile, I smile. What am I? `
          .brightWhite
      );
      if (usersAns.toLowerCase() === "mirror") {



                


        console.log(
          "The man moves his cane and the werewolf stops and slowly falls to the ground. You look around, but the strange man has disappeared. You wonder who he was. The people return to the alley and thank you like a hero. WINNER."
            .brightWhite
        );
        this.bigSpace();

                console.log(`

            ,:' '..;
            '. ,;;'%
            +;;'%%%%%
             /- %,)%%
             '   \ %%
              =  )/ \
              '-'/ / \
                /\/.-.\
               |  (    |
               |  |   ||
               |  |   ||
           _.-----'   ||
          / \________,'|
         (((/  |       |
         //    |       |
        //     |\      |
       //      | \     |
      //       |  \    |
     //        |   \   |
    //         |    \  |
   //          |    |\ |
  //           |    | \|
 //            \    \
c'             |\    \
               | \    \
               |  \    \
               |.' \    \
              _\    \.-' \ 
             (___.-(__.'\/</>
             
             `.rainbow);
        
        
        this.bigSpace();

        this.credits();
      } else {
        this.bigSpace();
        console.log("The answer was mirror".brightWhite);
        this.credits();
      }
    } else {
      this.credits();
    }
  }

  rightVampire() {

    console.log(`

   _       |\
  [_[[[[[[[| |========================================D
           |/

`);

        this.bigSpace();

    console.log(
      "You draw your sword and swing out for a strong blow. You hit the vampire."
        .brightWhite
    );
    player.health -= vampire.attack;
    vampire.health -= player.attack;
    this.bigSpace();
    console.log(
      "The vampire was hit, but he gets up again. He jumps towards you and hits you with his hard claws. You stagger but are still alive. You take the last blow."
        .brightWhite
    );

        this.bigSpace();

            console.log(`

   _       |\
  [_[[[[[[[| |========================================D
           |/

`.rainbow);

        this.bigSpace();

    vampire.health -= Math.floor(Math.random() * 4 + 9);
    if (vampire.health <= 0) {
      this.bigSpace();

      console.log(`  

               .---.
     |________/     \________
()===|_______( () () )_______>
     |        \  M  /
               |HHH|
               '---'

`).rainbow;

      this.bigSpace();

      console.log(
        "You hit the vampire and he falls to the ground. The people return to the tower and thank you like a hero. WINNER."
          .brightWhite
      );
      this.credits();
    } else {
      this.bigSpace();
      console.log(
        "The vampire dodges your attack and strikes back. You fall straight to the ground and realize how your life is being sucked out. GAME OVER."
          .brightWhite
      );
      this.credits();
    }
  }

  sitDown() {
    let usersAns = ask.question(
      ` You sit on the bench for some time without exchanging a word. After a while he asks you where you want to go. You look at him and tell him you don't know for sure yet. He asks you if you have time for a riddle. You nod and he tells you: Some people despise me and wish I didn't exist. Yet you can do nothing to me. If you yawn, I yawn. If you smile, I smile. What am I? `
        .brightWhite
    );
    if (usersAns.toLowerCase() === "mirror") {
      this.bigSpace();
      console.log(
        "He smiles and suddenly disappears right before your eyes. Where he was sitting there is a note that says: WINNER"
          .brightWhite
      );
      this.credits();
    } else {
      this.bigSpace();
      console.log("The answer was mirror".brightWhite);
      this.credits();
    }
  }

  left() {
    const left = [
      "You try to run away.",
      "You try to talk to the werewolf.",
      "You draw your sword and attack the werewolf.",
      "You wish someone would help you.",
    ];

console.log(`

          ⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⡈⠛⢉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⣿⢿⣿⣿⣿⣿⣿⠀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢰⣿⡏⠀⢸⣿⣿⣿⣿⡇⢸⣷⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣼⣿⠁⠀⢸⣿⣿⣿⣿⠁⠀⠙⠻⢿⣿⣶⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠛⠋⠀⠀⠸⣿⣿⣿⡏⠀⠀⠀⠀⠀⠈⠉⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣄⠙⣿⣿⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣦⠈⢿⣿⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⡟⠀⠀⠻⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⠟⠁⠀⠀⠀⠘⢿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢾⣿⠟⠁⠀⠀⠀⠀⠀⠀⠈⢻⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀


`.rainbow);


    console.log("When you arrive at the Alley, people run towards you full of fear. A big werewolf jumps out from behind them. He looks you in the eye."
        .brightWhite);

   
   
        this.bigSpace();

   

    console.log(`


|.'',                 ,''.|
|.'.'',                                 ,''.'.|
|.'.'.'',                             ,''.'.'.|
|.'.'.'.'',                         ,''.'.'.'.|
|.'.'.'.'.|                         |.'.'.'.'.|
|.'.'.'.'.|===;                 ;===|.'.'.'.'.|
|.'.'.'.'.|:::|',             ,'|:::|.'.'.'.'.|
|.'.'.'.'.|---|'.|, _______ ,|.'|---|.'.'.'.'.|
|.'.'.'.'.|:::|'.|'|???????|'|.'|:::|.'.'.'.'.|
|,',',',',|---|',|'|???????|'|,'|---|,',',',',|
|.'.'.'.'.|:::|'.|'|???????|'|.'|:::|.'.'.'.'.|
|.'.'.'.'.|---|','   /%%%\   ','|---|.'.'.'.'.|
|.'.'.'.'.|===:'    /%%%%%\    ':===|.'.'.'.'.|
|.'.'.'.'.|%%%%%%%%%%%%%%%%%%%%%%%%%|.'.'.'.'.|
|.'.'.'.','       /%%%%%%%%%\       ','.'.'.'.|
|.'.'.','        /%%%%%%%%%%%\        ','.'.'.|
|.'.','         /%%%%%%%%%%%%%\         ','.'.|
|.','          /%%%%%%%%%%%%%%%\          ','.|
|;____________/%%%%%%%%%%%%%%%%%\____________;|

`.rainbow);

      this.bigSpace();


      console.log(`

     ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣄⠤⠐⠂⠘⠗⠦⣄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣀⠤⠊⡟⣷⣄⠀⠀⠀⣄⣠⣿⣄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠔⠉⠀⠀⠀⡜⠈⠃⠀⠀⠀⠾⢾⣿⣿⣷⣄⠀⠀⠀⠀
⠀⠀⠀⢀⠞⠀⠀⠀⠀⢀⣧⡮⡀⣄⠀⣠⣤⢄⢽⣿⣿⣿⡇⠀⠀⠀
⠀⠀⢀⡊⠀⠀⠀⢰⠾⣿⣿⡷⠀⠀⠩⢀⣽⣾⣿⣿⣿⣿⠟⠀⠀⠀
⠀⠀⠸⡷⠀⠀⢀⢼⠒⢸⣿⣯⣿⣜⣵⣿⣿⣿⣿⣿⣿⠋⠀⠀⠀⠀
⠀⠀⢀⣷⢄⠀⠀⠘⣀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀
⠀⠀⠘⢹⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠉⢻⣿⣿⣷⣆⠀⠀
⠀⠀⢠⠀⣀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠀⠀⠀⢻⣿⣿⣿⡀⠀
⠀⢀⣿⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠰⠼⢻⣿⣏⡇⠀
⠀⣿⣿⠒⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠉⠣⡀⠀⠀⠒⡹⠛⠜⠁⠀
⠀⢻⣿⣄⠀⣿⣿⣿⣿⣿⣿⣿⣿⠏⠚⠁⠀⠈⢆⠀⠀⠀⠀⠀⠀⠀
⠀⢸⣿⣿⣷⣿⣿⣿⣿⠟⠛⣿⠋⠀⠀⠀⠀⠀⢸⡀⠀⠀⠀⠀⠀⠀
⠀⢸⣿⣿⣿⣿⡿⠟⠁⠀⠀⠙⢦⡀⣄⣠⠴⠢⣾⣿⣿⣿⣶⣄⠀⠀
⠀⣾⣿⣿⣿⣿⣷⣶⣶⣄⠀⠀⠀⣁⠈⢇⠀⢀⣽⣿⣿⣿⣿⣿⣦⠀
⠀⠈⠙⢿⣿⣿⣿⣿⠛⢿⡄⠀⠸⣿⣦⣈⣷⣿⡏⠙⠛⠛⠻⢿⣿⡆
⠀⠀⣠⣿⣿⡈⢿⣿⡁⡘⠀⠀⠀⣹⣿⣿⠛⠛⠁⠀⠀⠀⠀⠀⢿⠇
⢀⣴⣿⣿⠟⠀⠘⠻⠿⠃⠀⠀⠸⢿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠃⠀
⢸⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣆⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⠿⢿⣿⣿⡿⠿⠂⠀⠀⠀⠀⠀⠀

`.rainbow);

this.bigSpace();


 this.bigSpace();


    const index = ask.keyInSelect(
      left,
      "What do you do ?".brightWhite
    );

      

    if (index === 0) {
      this.bigSpace();

      console.log(`


⣿⣿⣿⣿⣿⣿⣿⡿⠛⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⠏⢹⣿⠀⢠⠾⠿⣿⣿⣿⣇⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣆⠀⠉⠀⠀⣠⣦⣬⣿⣿⣿⣄⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⣼⣿⣿⣿
⣿⣿⣿⣿⣿⣷⡄⠀⠀⢻⣿⡿⠋⠉⠀⠀⠀⠀⠀⠀⣰⡿⣦⣴⣿⣶⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣇⠀⠀⠈⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠈⠁⢀⣿⣿⣿⣿⣿
⣿⣿⣿⠋⢿⣿⣿⣤⣤⣤⣄⠀⠀⠀⠀⠀⠀⠀⢀⣴⣶⣿⣿⣿⠿⠿⠿⣿⣿⣿
⣿⣿⡏⠀⠸⠟⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⡀⠀⠙⠿⣿⠋⠀⠀⣴⣶⣿⣿⣿
⣿⣿⠷⠀⠀⠀⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⣸⣷⡀⠀⠀⠀⢀⣀⠀⠀⣀⠈⢻⣿
⣿⣿⣄⠀⠀⠀⠘⢿⣿⠟⠁⠀⠀⠀⠀⠀⠙⠛⠿⣶⣶⣿⣿⣿⣧⠀⣿⣧⣼⣿
⣿⣿⣿⣷⣶⣤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠹⣿⣿⣿⣿⣴⣿⣿⣿⣿
⣿⣿⣿⣿⣿⠿⣿⣿⠀⠀⠀⠀⢠⣿⣿⣷⣄⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡟⠁⠀⠀⠉⠀⠀⠀⣰⣿⣿⣿⡿⠋⠀⣀⣀⣀⣠⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⡟⠀⠀⠀⣶⣦⣤⣴⣾⣿⣿⣿⡟⠁⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⠁⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣯⣤⣤⣤⣤⣬⣿⣿⣿⣿⣿⣿⣿⣷⣤⣤⣤⣤⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿

`.rainbow);

      this.bigSpace();

      console.log(
        "The werewolf is faster and hits you with its claws. You fall to the ground. Next time I should have asked for help, you think to yourself. GAME OVER."
          .brightWhite
      );
      this.credits();
    } else if (index === 1) {
      this.bigSpace();


      console.log(`


⣿⣿⣿⣿⣿⣿⣿⡿⠛⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⠏⢹⣿⠀⢠⠾⠿⣿⣿⣿⣇⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣆⠀⠉⠀⠀⣠⣦⣬⣿⣿⣿⣄⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⣼⣿⣿⣿
⣿⣿⣿⣿⣿⣷⡄⠀⠀⢻⣿⡿⠋⠉⠀⠀⠀⠀⠀⠀⣰⡿⣦⣴⣿⣶⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣇⠀⠀⠈⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠈⠁⢀⣿⣿⣿⣿⣿
⣿⣿⣿⠋⢿⣿⣿⣤⣤⣤⣄⠀⠀⠀⠀⠀⠀⠀⢀⣴⣶⣿⣿⣿⠿⠿⠿⣿⣿⣿
⣿⣿⡏⠀⠸⠟⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⡀⠀⠙⠿⣿⠋⠀⠀⣴⣶⣿⣿⣿
⣿⣿⠷⠀⠀⠀⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⣸⣷⡀⠀⠀⠀⢀⣀⠀⠀⣀⠈⢻⣿
⣿⣿⣄⠀⠀⠀⠘⢿⣿⠟⠁⠀⠀⠀⠀⠀⠙⠛⠿⣶⣶⣿⣿⣿⣧⠀⣿⣧⣼⣿
⣿⣿⣿⣷⣶⣤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠹⣿⣿⣿⣿⣴⣿⣿⣿⣿
⣿⣿⣿⣿⣿⠿⣿⣿⠀⠀⠀⠀⢠⣿⣿⣷⣄⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⡟⠁⠀⠀⠉⠀⠀⠀⣰⣿⣿⣿⡿⠋⠀⣀⣀⣀⣠⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⡟⠀⠀⠀⣶⣦⣤⣴⣾⣿⣿⣿⡟⠁⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⠁⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣯⣤⣤⣤⣤⣬⣿⣿⣿⣿⣿⣿⣿⣷⣤⣤⣤⣤⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿

`.rainbow);

      this.bigSpace();

      console.log(
        "You call out to the werewolf, but he is in a blood frenzy and hits you with his claws. You fall to the ground. Next time I should have asked for help, you think to yourself. GAME OVER."
          .brightWhite
      );

            this.bigSpace();

      this.credits();
    } else if (index === 2) {
      this.bigSpace();
      this.leftWerewolf();
    } else if (index === 3) {
      this.bigSpace();
      let usersAns = ask.question(
        ` The man from the bank appears next to you and offers to help you if you solve his riddle. The riddle: Some people despise me and wish I didn't exist. Yet you can do nothing to me. If you yawn, I yawn. If you smile, I smile. What am I? `
          .brightWhite
      );
      if (usersAns.toLowerCase() === "mirror") {
        this.bigSpace();
        console.log(
          "The man moves his cane and the werewolf stops and slowly falls to the ground. You look around, but the strange man has disappeared. You wonder who he was. The people return to the alley and thank you like a hero. WINNER."
            .brightWhite
        );
        this.credits();

         this.bigSpace();

        console.log(`

            ,:' '..;
            '. ,;;'%
            +;;'%%%%%
             /- %,)%%
             '   \ %%
              =  )/ \
              '-'/ / \
                /\/.-.\
               |  (    |
               |  |   ||
               |  |   ||
           _.-----'   ||
          / \________,'|
         (((/  |       |
         //    |       |
        //     |\      |
       //      | \     |
      //       |  \    |
     //        |   \   |
    //         |    \  |
   //          |    |\ |
  //           |    | \|
 //            \    \
c'             |\    \
               | \    \
               |  \    \
               |.' \    \
              _\    \.-' \ 
             (___.-(__.'\/</>
             
             `.rainbow);

                

        this.bigSpace();


      } else {
        this.bigSpace();
        console.log("The answer was mirror".brightWhite);
        this.credits();
      }
    } else {
      this.credits();
    }
  }

  leftWerewolf() {
    console.log(
      "You draw your sword and swing out for a strong blow. You hit the werewolf."
        .brightWhite
    );

        this.bigSpace();

            console.log(`

   _       |\
  [_[[[[[[[| |========================================D
           |/

`.rainbow);

        this.bigSpace();
    player.health -= werewolf.attack;
    werewolf.health -= player.attack;
    this.bigSpace();
    console.log(
      "The werewolf was hit, but he gets up again. He runs towards you and hits you with his hard claws. You stagger but are still alive. You take the last blow."
        .brightWhite
    );
    werewolf.health -= Math.floor(Math.random() * 4 + 9);
    if (werewolf.health <= 0) {
      this.bigSpace();


      console.log(`  

               .---.
     |________/     \________
()===|_______( () () )_______>
     |        \  M  /
               |HHH|
               '---'

`.rainbow);

      this.bigSpace();


      console.log(
        "You hit the werewolf and he falls to the ground. The people return to the alley and thank you like a hero. WINNER."
          .brightWhite
      );
      this.credits();
    } else {
      this.bigSpace();


            console.log(`

   _       |\
  [_[[[[[[[| |========================================D
           |/

`.rainbow);

        this.bigSpace();
      console.log(
        "The werewolf blocks your attack and strikes back. You fall to the ground and die. GAME OVER."
          .brightWhite
      );
      this.credits();
    }
  }

  askMan() {
    const askMan = [
      "You accept his help and together you make your way to the tower.",
      "You accept his help and together you make your way to the alley.",
      "You don't accept his help and head for the tower.",
      "You don't accept his help and head for the alley.",
    ];
    const index = ask.keyInSelect(
      askMan,
      "He looks at you and stands up. He says: My name is Gabriel of Dawn. I can help you on your way. You wonder what you would need his help with."
        .brightWhite
    );
    if (index === 0) {
      this.bigSpace();
      console.log(
        "When you arrive at the tower you hear noises. The wooden door is open and you enter the tower. You go down the stairs and see a room soaked in blood. You look around and see a vampire hanging from the ceiling."
          .brightWhite
      );

      this.right();
    } else if (index === 1) {
      this.bigSpace();
      this.left();
    } else if (index === 2) {
      this.bigSpace();
      this.right();
    } else if (index === 3) {
      this.bigSpace();
      this.left();
    } else {
      this.credits();
    }
  }

  credits() {
    console.log(
      `
      ---------------------------------------------------------------------------
      |                                CREDITS                                  |
      |                              -----------                                |
      |                                                                         |
      |            Script & Logic Writer: Edgar,Marvin,George,Othman            |
      |                                                                         |
      |                                                                         |
      |             Lead UI/UX Designer: Edgar,Marvin,George,Othman             |
      |                                                                         |
      |                                                                         |
      |               Lead Game Tester: Edgar,Marvin,George,Othman              |
      |                                                                         |
      |                                                                         |
      |           This game was made possible by contributions to your          |
      |               PGDS(Public Game Dev Service) station from                |
      |                      Players Like You. Thank You.                       |
      |                                                                         |
      |                                                                         |
      ---------------------------------------------------------------------------
      `.brightYellow.bgBlack
    );
    this.bigSpace();
  }
}
const player = new Player("", 100, 90);
const vampire = new Player("Vampire", 100, 99);
const werewolf = new Player("Werewolf", 100, 99);

player.start();
