import React from 'react';
import ReactDOM from 'react-dom';

class WinCheck{

    static showLost(){
        ReactDOM.render(
            <React.StrictMode>
              <div>You Lost</div>
            </React.StrictMode>,
            document.getElementById('lostStatement')
          );
    }

}

export default WinCheck;