function handleErrorResponse(err) {
  if (err.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    return err.response.data;
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the
    // browser and an instance of
    // http.ClientRequest in node.js
    return {
      status: false,
      message: 'No response'
    };
  } else {
    // Something happened in setting up the request that triggered an Error
    return {
      status: false,
      message: 'Something error'
    };
  }
}

export default handleErrorResponse;
