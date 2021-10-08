import './App.css';
import Header from './components/Header';
import React, { useState } from 'react';
import Popup from './components/Popup';

function App() {

  const [isOpen, setIsOpen] = useState(true);
  const [data, setData] = React.useState(null);


  const backendLocation = process.env.BACKENDADDRESS||"http://localhost:5050"

  React.useEffect(() => {
    fetch(backendLocation+"/api/testAPI");
  }, []);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <Header/>

      <div className="Content" >
      <p className="mainText">{!data ? "Loading..." : data}</p>

        <p className="mainText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante molestie, euismod lectus quis, ullamcorper justo. Sed vel leo eu velit scelerisque pellentesque. Nunc in lectus at risus ornare molestie. Sed a libero blandit, rhoncus nulla posuere, egestas ante. Etiam ullamcorper blandit erat nec placerat. Cras lectus nibh, cursus id mi ac, elementum feugiat elit. Aliquam erat volutpat. Donec laoreet vestibulum turpis, rutrum auctor neque egestas vel.

Cras imperdiet posuere enim, eget cursus sem. Nulla ante nibh, varius bibendum fermentum a, ultrices vel quam. Suspendisse laoreet luctus mi, non venenatis nisl accumsan sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vehicula mauris est, at lacinia lacus elementum ac. Nunc non leo at sem vulputate tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed imperdiet, turpis ut venenatis malesuada, nulla ipsum hendrerit justo, at euismod metus ipsum non ante. Nulla aliquam convallis nisi eu pharetra. Sed quam ante, aliquet sed ultricies sed, feugiat a purus. In hac habitasse platea dictumst. Mauris tincidunt, tortor eget cursus vestibulum, elit orci malesuada lectus, dignissim dapibus lacus lacus at ante.

Proin ullamcorper ligula rutrum metus venenatis, et sagittis nulla viverra. Sed efficitur arcu tellus, sed ullamcorper erat molestie at. Duis ullamcorper ipsum id felis cursus, ac efficitur leo molestie. Phasellus facilisis ac dui quis pellentesque. Aliquam eget sagittis nibh. Fusce posuere lorem molestie neque varius varius. Sed laoreet metus eget nulla consectetur, non pulvinar orci feugiat. Suspendisse mollis tellus vitae sapien finibus venenatis. Suspendisse viverra tortor est, at bibendum quam dignissim at. Nunc vitae dolor vel purus mattis pulvinar.

Sed aliquam tincidunt sollicitudin. Aenean vel feugiat ligula. Aliquam bibendum urna eget enim porta tincidunt. Sed commodo semper neque eget viverra. Duis ac tincidunt turpis, eu maximus dolor. Maecenas id faucibus arcu. Sed eget rutrum felis. Vestibulum mi mi, gravida nec elit ac, sollicitudin luctus turpis. Nullam blandit rutrum odio at egestas. Suspendisse sodales odio a nulla fermentum, vel fringilla leo lobortis. Duis tincidunt eleifend pharetra. Fusce fringilla accumsan dui id consectetur.

Vestibulum ac velit nibh. Aliquam erat volutpat. Nam sed lacus ut metus aliquet pretium euismod ac eros. Etiam ex elit, efficitur et condimentum quis, faucibus eu massa. Duis bibendum odio sed elementum tincidunt. Etiam interdum suscipit felis sed posuere. Nam vehicula ligula in nulla laoreet, tincidunt lobortis massa sollicitudin. Morbi lobortis sollicitudin condimentum.</p>
        <div>
          {isOpen && <Popup handleClose={togglePopup}s/>}
        </div>
      </div>

    </div>
  );
}

export default App;
