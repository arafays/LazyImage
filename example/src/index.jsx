import React from 'react';
import ReactDOM from 'react-dom';
import LazyImage from '../../lib/index.js'

const App = (props) => (
  <div>
    <LazyImage
      blurRadius={10}
      width={600}
      height={190}
      src="https://upload.wikimedia.org/wikipedia/commons/6/69/Very_Large_Telescope_Ready_for_Action_%28ESO%29.jpg"
      low="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Very_Large_Telescope_Ready_for_Action_%28ESO%29.jpg/800px-Very_Large_Telescope_Ready_for_Action_%28ESO%29.jpg"
    />

  </div>
)

ReactDOM.render(<App />,
  document.getElementById('content')
);
