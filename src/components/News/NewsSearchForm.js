import React, { useState } from 'react';


export default function NewSearchForm({onSubmit}) {

const [query, setQuery] =useState('')


const handleChange = e => setQuery(e.currentTarget.value);

const handleSubmit = e => {
e.preventDefault();

onSubmit(query);
setQuery('');
   };



return (
<div>
       <form onSubmit={handleSubmit}>
         <input
           type="text"
           value={query}
           onChange={handleChange}
         />
         <button type="submit">Искать</button>
       </form>
</div>
)



}















// class NewSearchForm extends Component {
//   state = { query: '' };

//   handleChange = e => this.setState({ query: e.currentTarget.value });

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onSubmit(this.state.query);
//     this.state({ query: '' });
//   };
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type="text"
//           value={this.state.query}
//           onChange={this.handleChange}
//         />
//         <button type="submit">Искать</button>
//       </form>
//     );
//   }
// }
