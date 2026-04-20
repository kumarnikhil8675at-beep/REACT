import React from 'react';
import Nav from './components/nav';

function App() {
  let a=[{user:"hanuman",bio:"Software developer and designer with full potiencial",pic:"https://i.pinimg.com/1200x/d4/44/df/d444df58c379881d1686a131193d6f32.jpg"},{user:"sharma",bio:"creater of the year and create new element",pic:"https://i.pinimg.com/736x/e8/fa/8b/e8fa8be856b6b79f1b9222a2f2af70a8.jpg"},{user:"hanuman",bio:"this is fiel system",pic:"https://i.pinimg.com/1200x/d4/44/df/d444df58c379881d1686a131193d6f32.jpg"}];

  return (<div>
      <div>
        {a.map((element,index)=>(<Nav user={`${element.user}`} bio={`${element.bio}`} pic={`${element.pic}`}/>))}
      </div>
    </div>
  )
}

export default App;