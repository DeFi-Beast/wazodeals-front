export function redAction(email) {
    //console.log(test);
    return {
      type: "REDIRECT",
      payload: email,
    };
  }
 
