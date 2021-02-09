// import React, { Component } from 'react';
// import axios from 'axios';
// import { render } from 'react-dom';
// import { Card, CardWrapper } from 'react-swipeable-cards';
// import API from "../Utils/API";

// // Create custom end card
// class MyEndCard extends Component {
//   render() {
//     return(
//       <div>You Finished Swiping!</div>
//     );
//   }
// }

// class Cards extends Component {
//   onSwipe(data) {
//     console.log(data.name + " was swiped.");
//   }

//   onSwipeLeft(data) {
//     console.log("I was rejected.", data);
//   }
 
//   onSwipeRight(data) {
//     console.log("I was liked.", data);
//   }

//   getEndCard() {
//     return(
//       <MyEndCard/>
//     );
//   }

//   async getCardData() {
//     const results = await axios.get("http://localhost:3000/movies").then(data => { return data});
//     return results.data
//   }
 
//   // async renderCards() {
//   //   // let data = await this.getCardData();
//   //   let data = [{id: 1, name: "First"},{id: 2, name: "Second"}];
//   //   console.log(typeof data)
//   //   return data.map((d) => {
//   //     console.log(d)
//   //     return(
//   //       <Card
//   //         key={d.id}
//   //         onSwipe={this.onSwipe.bind(this)}
//   //         onSwipeLeft={this.onSwipeLeft.bind(this)}
//   //         onSwipeRight={this.onSwipeRight.bind(this)}
//   //         data={d}>
//   //           <h1>{d.Name}</h1>
            
//   //       </Card>
//   //     );
//   //   });
//   // }
//   renderCards() {
//     let data = [{id: 1, name: "First"},{id: 2, name: "Second"}];
//     console.log(typeof data)
//     return data.map((d) => {
//       return(
//         <Card
//           key={d.id}
//           onSwipe={this.onSwipe.bind(this)}
//           data={d}>
//             {d.name}
//         </Card>
//       );
//     });
//   }
 
//   render() {
//     return(
//       <CardWrapper addEndCard={this.getEndCard.bind(this)}>
//         {this.renderCards()}
//       </CardWrapper>
//     );
//   }
// }
// export default Cards;