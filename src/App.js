import React from 'react';
import ReactMarkdown from "react-markdown";

function App() {
    const input = `# This is a header

- some bullet points
- more points

## subheader
some paragraph asdkjahsdakshd askjdhaskjd h
sadkjashd asdhjaskdh a aslkdjasldk

[a link which opens in a new tab/window](/)

_italics_

more paragraph asdsad ajksdn asdnaksjhqwkjd asa
asdkasnd,m asdnkasdhaksh ,m,amsndkjashd 

**Bold text**

1. asdasd
1. asdas
1. sgdfg
`

    return (
    <div className="App">
      <ReactMarkdown source={input} linkTarget={'_blank'} />
    </div>
  );
}

export default App;
