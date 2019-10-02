var app4 = new Vue({
    el: '#app',
    data: {
      phones: [
        { text: '55-55-55-55' },
        { text: '55-54-54-54' },
        { text: '55-53-53-53' },
        { text: '55-52-52-52' },
        { text: '55-51-51-51' },
        { text: '55-50-50-50' },
        { text: '55-49-49-49' },
        { text: '55-48-48-48' },
        { text: '55-48-48-48' },
        { text: '55-47-47-47' },
        { text: '55-46-46-46' },
        { text: '55-45-45-45' },
        { text: '55-44-44-44' }        
      ]
    }, 
    methods: {
        previewFiles() {
          this.files = this.$refs.myFiles.files
        }
      }
  })