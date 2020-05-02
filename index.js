new Vue({
    el: '#app',
    
    data () {
      return {
          courses: [],
          title: '',
          time: '',
          cursos: {},
          mensajeDeError: ''
      }
    },
    
    computed: {
        totalTime () {
            if (!this.courses.length) { return 0 }
            
            return this.courses.reduce((a, b) => a + parseInt(b.tiempo), 0)
          }
    },
    
    methods: {
        addCourse(){
            if(this.title == '' || this.time == ''){
                this.mensajeDeError = 'Por favor, rellene el formulario'
            }

            if(!this.title == '' && !this.time == ''){
                this.courses.push({
                    titulo: this.title,
                    tiempo: this.time
                })
            }
        }
    }
  })