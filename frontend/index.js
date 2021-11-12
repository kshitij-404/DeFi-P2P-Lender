fileChange = (event) => {
    var file = event.target.files[0];
  
    const fileReader = new FileReader();
    
    fileReader.addEventListener('loadend', (evt) => {
    
      if (evt.target.readyState == FileReader.DONE) {
        const hash = CryptoJS.SHA256(fileReader.result);
        console.log(hash.toString());
      }
      
    });
    fileReader.readAsDataURL(file);
  }
