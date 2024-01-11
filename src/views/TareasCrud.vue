<template>
    <VueToolbar></VueToolbar>
    <v-container >
        <v-row >

            <v-col class="md6">
          <v-card class="mb-3" v-for="(item, index) in listaTareas" :key="index">
          <v-card-text class="ma-2 pa-2">
              <v-chip
                      class="ml-0"
                      color="pink"
                      label
                      text-color="white"
              >
                  <v-icon start icon="mdi-label"></v-icon>
                  {{item.titulo}}
              </v-chip>
              <p class="mt-5">{{item.descripcion}}</p>
              <v-btn class="mt-5" color="warning" @click="editar(index)">Editar</v-btn>
              <v-btn class="mt-5 ml-5" color="error" @click="eliminartareas(item.id)">Eliminar</v-btn>
          </v-card-text>
          </v-card>
                <!--v-card class="mb-3">
                    <v-card-text class="ma-2 pa-2">
                        <v-chip
                                class="ml-0"
                                color="pink"
                                label
                                text-color="white"
                        >
                            <v-icon start icon="mdi-label"></v-icon>
                            Titulo de Tareas #2
                        </v-chip>
                        <p class="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit.
                            Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique.
                            Mi eget mauris pharetra et.</p>
                        <v-btn class="mt-5" color="warning">Editar</v-btn>
                        <v-btn class="mt-5 ml-5" color="error">Eliminar</v-btn>
                    </v-card-text>
                </v-card!-->
            </v-col >

            <v-col class="md6"  v-if="formAgregar">
               <v-card  class="mb-3 pa-3">
                   <v-form @submit.prevent="agregartareas">
                       <v-text-field label="Titulo de la Tarea" v-model="titulo"></v-text-field>
                       <v-textarea label="Descripcion de Tarea" v-model="descripcion"></v-textarea>
                       <v-btn block="" color="success" type="submit">Agregar Tarea</v-btn>
                   </v-form>
               </v-card>
                </v-col>
            <v-col class="md6"  v-if="!formAgregar" >
                <v-card  class="mb-3 pa-3">
                    <v-form @submit.prevent="editarTarea">
                        <v-text-field label="Titulo de la Tarea" v-model="titulo"></v-text-field>
                        <v-textarea label="Descripcion de Tarea" v-model="descripcion"></v-textarea>
                        <v-btn block="" color="warning" type="submit">Editar Tarea</v-btn>
                    </v-form>
                </v-card>
            </v-col>

        </v-row>


        <v-snackbar
                v-model="snackbar"
        >
            {{ mensaje }}

            <template v-slot:actions>
                <v-btn
                        color="pink"
                        variant="text"
                        @click="snackbar = false"
                >
                    Cerrar
                </v-btn>


            </template>
        </v-snackbar>
    </v-container>
</template>

<script>
    import VueToolbar from "../components/VueToolbar";
    export default {
        name: "TareasCrud" ,
        components: {VueToolbar},
        data(){
            return {
                listaTareas: [
                    {id:1, titulo: 'Titulo de Tarea #1' , descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n' +
                            '                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
                            '                  Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit.\n' +
                            '                  Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique.\n' +
                            '                  Mi eget mauris pharetra et'},
                    {id:2, titulo: 'Titulo de Tarea #2' , descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n' +
                            '                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
                            '                  Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit.\n' +
                            '                  Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique.\n' +
                            '                  Mi eget mauris pharetra et'}
                ],
                titulo:'',
                descripcion:'',
                snackbar: false,
                mensaje: '',
                formAgregar: true,
                indexTarea: ''

            }
        },
        methods: {
            agregartareas(){
                //console.log(this.titulo, this.descripcion);
                if(this.titulo === '' || this.descripcion === ''){
                    this.snackbar= true
                    this.mensaje= 'Llena todos los campos'
                } else{
                    this.listaTareas.push({
                        id: Date.now(),
                        titulo: this.titulo,
                        descripcion: this.descripcion
                    })
                    this.titulo = ''
                    this.descripcion=''
                    this.snackbar= true
                    this.mensaje= 'Todo ok mi Bro'
                }
            },
            eliminartareas(id){
                this.listaTareas= this.listaTareas.filter(e => e.id != id)



            },
            editar(index){
                this.formAgregar= false
                this.titulo= this.listaTareas[index].titulo
                this.descripcion = this.listaTareas[index].descripcion
                this.indexTarea = index
            },
            editarTarea(){
               this.listaTareas[this.indexTarea].titulo = this.titulo
                this.listaTareas[this.indexTarea].descripcion = this.descripcion
                this.formAgregar= true
                this.titulo=''
                    this.descripcion=''
                this.snackbar= true
                this.mensaje= 'Editaste la Tarea'

            }
        }
    }
</script>

<style scoped>

</style>