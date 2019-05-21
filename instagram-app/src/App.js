import React from 'react';
import dummyData from './dummy-data';
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
    };
  }

  componentDidMount () {
    this.setState({data: dummyData})
  }

  render () {
    return (
      <div className="App">
        <SearchBar/>
        <PostContainer data={this.state.data} />
      </div>
    );
  }
  
}

export default App;
