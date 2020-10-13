<template>
  <div class="firstScreen">
      <div class="introText">
          <div class="containerText">
              <div class="joker">
                  <h3>
                      THE MOVIE
                  </h3>
                  <h1>
                      JOKER
                  </h1>
              </div>
              <div class="starring">
                  
                  <div class="starring1">
                    <h4>
                      STARRING
                    </h4>
                    <p>
                        JOAQUIN PHOENIX
                    </p>
                  </div>
                  <hr>
                  <div class="starring2">
                    <h4>
                      AWARDS
                    </h4>
                    <p>
                        • GOLDEN GLOBE<br>
                        • SCREEN ACTORS GUILTS AWARD
                    </p>
                  </div>
                  
              </div>
          </div>
      </div>
      <div class="buttonTrailer">
          <button type="button" onclick="document.location='https://www.youtube.com/watch?v=zAGVQLHvwOY&t=4s'" class="btn" ><i class="far fa-play-circle"></i>  WATCH THE TRAILER</button>
          
      </div>
      <div class="partners">
          <div class="About">
              <p class="linkAbout">ABOUT</p>
          </div>
          <div class="partnersIcons">
              <img src="../assets/DC_logo.png" alt="***">
              <img src="../assets/WARNER_BROS_LOGO.png" alt="***">
              <img src="../assets/ROADSHOW_LOGO.png" alt="***">
          </div>
      </div>
  </div>
</template>

<script>
// import About from './views/About'
export default {
name: 'Joker',
components: {
    
}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Stint+Ultra+Condensed&family=Tajawal:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Squada+One&display=swap');


.firstScreen {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: url('../assets/JOKER_O.png');
  background-repeat: no-repeat;
  min-height: 100%;
  min-width: 640px;
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: scroll;
  overflow-x: hidden;

}


    .introText {
    display: flex;
    justify-content: space-around;
    flex-shrink: 0;
    flex-wrap: wrap;
    flex-direction: column;
    }

        .containerText {
        display: flex;
        justify-content: space-around;
        }
            .joker h1 {
                color: #E5FEDF;
                font-family: 'Anton', sans-serif;
                font-size: 100px;
                
                
                
            }
            .joker h3 {
                color: #ffffff;
                font-family: 'Anton', sans-serif;
                font-size: 22px;    
                margin-bottom: -80px;
                margin-left: 80px;
                margin-top: 10px;
                
            }
            hr{
                width: 250px;
                margin-left: 120px;

            }
            .starring{
                margin-right: -100px;
                text-align: center;
            }
            .starring1, .starring2{
                margin-left: 100px;
                margin-top: -15px;
                
            }

            .starring h4{
                color: #ffffff;
                font-family: 'Tajawal', sans-serif;
                font-size: 22px;
                opacity: 70%;
                margin-bottom: 20px;
                
                justify-content: center;
                margin-bottom: -25px;
            }
            .starring p{
                color: #ffffff;
                font-family: 'Stint Ultra Condensed', cursive;
                font-size: 24px;
                opacity: 80%;
                letter-spacing: 2px;
                margin-top: 20px;
                
               
            }

    .buttonTrailer {
    display: flex;
    align-self: stretch;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 40px;
    
    
    }
        .btn{
           background: none;
           color: rgb(240, 240, 240);
           width: 150px;
           height: 40px;
           border: 2px solid #ffffff;
           font-size: 10px;
           border-radius: 50px;
           transition: .5s;
           font-weight: 700;
           margin-left: 250px;
           
           
           

        }
        .btn:focus{
            outline: none;
        }
        .btn:hover{
            background: #666;
            cursor: pointer;
            opacity: .9;
        }

    .partners {
    display: flex;
    align-items: center;
    align-self: stretch;
    justify-content: space-between;
    height: 30px;
    }
        .About{
            transform: rotate(-90deg);
            color: #E5FEDF;
            font-family: 'Squada One', cursive;
            font-size: 100px;
            letter-spacing: -10px;
            margin-left: 100px;
            margin-top: 200px;
            text-decoration: none;
        }
        
        .partnersIcons {
            margin-top: 200px;
            margin-right: 100px;
        }
        .partnersIcons img{
            margin: 10px;
        }
        .linkAbout{
            text-decoration: none;
        }

    @media  screen and (min-width: 768px) and (max-width: 1366px) and (orientation: landscape) {
        .firstScreen {
        background-position: center center; 
        background-attachment: fixed; 
        background-repeat: no-repeat; background-size: cover; 
        }
    }
    @media only screen and (min-width : 320px) and (max-width : 480px) {
        .firstScreen {
        background-position: center center; 
        background-attachment: fixed; 
        background-repeat: no-repeat; background-size: cover; 
        }
        .joker h1{
            font-size: 50px;
            margin-top: 15px;
            display: flex;
        }
        .joker h3{
            font-size: 30px;
            margin-bottom: 5px;
        }
        .starring{
            display: flex;
            flex-wrap: wrap;
        }
    }


</style>