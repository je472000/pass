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
      this.refreshPassword;
      return [...window.crypto.getRandomValues(new Uint32Array(this.passwordLength))]
           .map(value => this.charset[value % this.charset.length])
           .join('');
    }
  }
        
}
