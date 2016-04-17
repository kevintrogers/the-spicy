var Post = React.CreateClass({
      getInitialState: function(){
    return {
      content: 'This is an empty blog post. Were this an actual blog post you would either be weeping, laughing, or experiencing a deep spiritual awakening.'
    }
      },
  handleChange: function(e){
    this.setState({
      content: e.target.value
    });
  },

  render: function(){
    return (
      <p>
        
{this.state.content}
      </p>
    )
  }
})
ReactDOM.render(
    </post>, getElementById('post')
    );