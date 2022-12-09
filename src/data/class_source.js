const API_ENDPOINT = {
  DETAILPAGE: (id) => `https://satupersen2.herokuapp.com/api/classes/${id}?populate=*`,
};
class ClassSource {
  static async home() {
    const response = await fetch('https://satupersen2.herokuapp.com/api/classes?populate=*https://satupersen2.herokuapp.com/api/classes');
    const responseJson = await response.json();
    return responseJson.data;
  }
  static async detailClass(id) {
    const response = await fetch(API_ENDPOINT.DETAILPAGE(id));
    return response.json();
  }
  // static async postComment(comment) {
  //   const a = await fetch(API_ENDPOINT.POST,{
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(comment),
  //   });
  //   // return a;
  //   const response = await fetch(API_ENDPOINT.POST, a);
  //   console.log(response);
  // }
}

export default ClassSource;
