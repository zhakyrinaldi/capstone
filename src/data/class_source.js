class ClassSource {
    static async home() {
      const response = await fetch('https://api-satupersen.netlify.app/kelas.json');
      const responseJson = await response.json();
      return responseJson.kelas;
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