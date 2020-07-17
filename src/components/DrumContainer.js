import React , { Component } from 'react'
// import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

class DrumContainer extends Component {
    constructor(props){
        super(props);

        this.myref= [];
        this.state ={
            triggerSound : true ,
            triggerBand: false , 
            
            displayed : '' ,
            sounds:{
                bankOne : [{
                    keyCode: 81,
                    keyTrigger: 'Q',
                    id: 'Heater-1',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
                  }, {
                    keyCode: 87,
                    keyTrigger: 'W',
                    id: 'Heater-2',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
                  }, {
                    keyCode: 69,
                    keyTrigger: 'E',
                    id: 'Heater-3',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
                  }, {
                    keyCode: 65,
                    keyTrigger: 'A',
                    id: 'Heater-4',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
                  }, {
                    keyCode: 83,
                    keyTrigger: 'S',
                    id: 'Clap',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
                  }, {
                    keyCode: 68,
                    keyTrigger: 'D',
                    id: 'Open-HH',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
                  }, {
                    keyCode: 90,
                    keyTrigger: 'Z',
                    id: "Kick-n'-Hat",
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
                  }, {
                    keyCode: 88,
                    keyTrigger: 'X',
                    id: 'Kick',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
                  }, {
                    keyCode: 67,
                    keyTrigger: 'C',
                    id: 'Closed-HH',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
                  },
                ] ,
                
                 bankTwo : [{
                  keyCode: 81,
                  keyTrigger: 'Q',
                  id: 'Chord-1',
                  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
                }, {
                  keyCode: 87,
                  keyTrigger: 'W',
                  id: 'Chord-2',
                  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
                }, {
                  keyCode: 69,
                  keyTrigger: 'E',
                  id: 'Chord-3',
                  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
                }, {
                  keyCode: 65,
                  keyTrigger: 'A',
                  id: 'Shaker',
                  url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
                }, {
                  keyCode: 83,
                  keyTrigger: 'S',
                  id: 'Open-HH',
                  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
                }, {
                  keyCode: 68,
                  keyTrigger: 'D',
                  id: 'Closed-HH',
                  url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
                }, {
                  keyCode: 90,
                  keyTrigger: 'Z',
                  id: 'Punchy-Kick',
                  url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
                }, {
                  keyCode: 88,
                  keyTrigger: 'X',
                  id: 'Side-Stick',
                  url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
                }, {
                  keyCode: 67,
                  keyTrigger: 'C',
                  id: 'Snare',
                  url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
                }]
            }
        }

    }
    check = ()=>{
      this.setState({
        triggerBand : !this.state.triggerBand
      })
    }
    handleClick = (name , key)=>{
        this.myref.forEach(ele=>{
          if(key === ele.id){
            ele.play();
          }
        })


        this.setState({
            displayed : name
        })
       }
       soundControls = ()=>{
         this.setState({
           triggerSound : !this.state.triggerSound
         })
       }
    render (){
        let name = this.state.sounds.bankOne.map((ele,indx)=>{

          return (
            <button tabIndex="0" className="drum-pad" onClick={()=>this.handleClick(ele.id , ele.keyTrigger)} key={indx}>
                    {ele.keyTrigger}
                    <audio src={ele.url} className="clip" aria-label={`press the ${ele.keyTrigger} sound is ON`} name={ele.id} ref={(input)=> this.myref[indx] = input} id={ele.keyTrigger}/>
            </button>
            )
          })

        let name2 = this.state.sounds.bankTwo.map((ele,indx)=>{

          return (
            <button tabIndex="0" className="drum-pad" onClick={()=>this.handleClick(ele.id , ele.keyTrigger)} key={indx}>
                    {ele.keyTrigger}
                    <audio src={ele.url} className="clip" aria-label={`press the ${ele.keyTrigger} sound is ON`} name={ele.id} ref={(input)=> this.myref[indx] = input} id={ele.keyTrigger}/>
            </button>
            )
          })

        let empty = this.state.sounds.bankTwo.map((ele,indx)=>{

          return (
            <button className="drum-pad" key={indx} tabIndex="0">
                    {ele.keyTrigger}
                    <audio src={ele.url} className="clip" aria-label={`press the ${ele.keyTrigger} sound is Off`} name="" ref={(input)=> this.myref[indx] = input} id={ele.keyTrigger}/>
            </button>
            )
          })
      
        
        if(this.state.triggerSound){
          
          document.addEventListener("keyup" , (e)=>{

              this.myref.forEach(ele=>{
                if(e.key.toUpperCase() === ele.id){
                   ele.play(); 
                   this.setState({
                     displayed : ele.getAttribute("name")
                  })
                }
              })
          }
        )
        
        }

        return(
            <main id="drum-machine" className="d-flex main-split">
                <section className="button-group" aria-label="drum pad">
                  {this.state.triggerSound ? this.state.triggerBand ? name : name2 : empty}
                </section>
                <section className="other-Content" aria-label="drum pad controlls and display name">
                  <p className="display-drumpad-content" tabIndex="0" id="display">
                    {this.state.displayed ? this.state.displayed : "Sound"}
                  </p>
                  <div aria-label="controls for the Drum machine" className="d-flex btngroup">
                    <div className="controls" aria-label="controls for the sound">
                      <label htmlFor="sound">{this.state.triggerSound ? "Sound ON" : "Sound OFF"}</label>
                      <input id="sound" onChange={this.soundControls}  type="checkbox" role="switch" aria-label={this.state.triggerSound ? "press to turn sound OFF" : "press to turn sound ON"} className="switch"/>
                    </div>
                    <div className="controls"  aria-label="controls for the machine type" name="label in the right">
                      <label htmlFor="machine">{this.state.triggerBand ? "Machine TWO" : "Machine ONE"}</label>
                      <input type="checkbox" id="machine" onChange={this.check} role="switch" aria-label={"press to change the music machine"} name="" className="switch"/>                      
                    </div>
                  </div>
                </section>
            </main>
        )
    }
} 
export default DrumContainer ; 
