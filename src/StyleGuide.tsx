import './App.css';

function StyleGuide() {
  return (
    <>
        <div>
            <div className="cell closed"></div>
            <div className="cell opened"></div>
            <div className="cell opened text-gBlue">1</div>
            <div className="cell opened text-gGreen">2</div>
            <div className="cell opened text-gRed">3</div>
            <div className="cell opened text-gNavy">4</div>
            <div className="cell opened text-gMaroon">5</div>
            <div className="cell opened text-gTeal">6</div>
            <div className="cell opened text-black">7</div>
            <div className="cell opened text-gDarkGray">8</div>
        </div>
        <div className='m-4'>board</div>
    </>
  );
}

export default StyleGuide;
