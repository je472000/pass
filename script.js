// Assignment code here
export default {
  data: function() {
    return{
      passwordlength: 16,
      refreshPassword: false,
      optiondata: [
        {
          name: 'lowercase',
        status: true,
      chars: 'abcdefghijklmnopqrstuvwxyz'       
     },
     {
       name: 'uppercase',
       status: true,
       chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
     },
     {
       name: 'numbers',
       status: true,
       chars: '0123456789'
     },
     {
       name: 'specialchar',
       status: true,
      chars: '!@#$%^&*'
     }
      ]
    }
  },
  computed: {
    charset() {
      return [...this.optiondata]
          .map(element => {
            if(element.status === true)
                 return element.chars;
          }).join('');
    },
    generatePassword() {
      return [...window.crypto.getRandomValues(new Uint32Array(this.passwordLength))]
           .map(value => this.charset[value % this.charset.length])
           .join('');
    }
  }
        
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
