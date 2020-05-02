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
    
    computed: {},
    
    methods: {
        addCourse(){
            if(this.title == '' || this.time == ''){
                this.mensajeDeError = 'Por favor, rellene el formulario'
            }

            if(!this.title == '' && !this.time == ''){
                this.cursos = {titulo: this.title, tiempo: this.time}
                this.courses.push(this.cursos)
                console.log(this.courses)}
        }
    }
  })