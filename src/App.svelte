<script lang="ts">  
import {slide} from "svelte/transition"
import {elasticInOut} from "svelte/easing"

let todos:any[] = []
let input:string=""

function addTodo(){
    if(input){
        todos=[...todos,{
            "todoName": input,
            "id" : Math.random().toString().substr(2,9)
        }]
    }
    input=""; 
}

function removeTodo(id: string){

    const index= todos.findIndex(todo=>todo.id == id)
    todos.splice(index,1)
    todos=todos;

}
</script>
<svelte:head>
    <link
    rel="stylesheet"
    type="text/css"
    href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"
  />
  
</svelte:head>
<main class="container is-fluid">
    <div class="columns us-centered is-vcentered is-mobile">
        <div class="column is-narrow" style="width: 70%">
            <h1 class="has-text-centered title">
                 Svelte TODO
            </h1>
            <form
                class="field has-addons"
                style="justify-content: center"
        on:submit|preventDefault="{addTodo}">
                <div class="control">
                    <input bind:value="{input}" class="input" type="text" placeholder="TODO"/>
                </div>
                <div class="control">
                    <button class="button is-primary">
                        <span class="icon is-small"> 
                            ADD
                        </span>
                    </button>
                </div>
            </form>
        </div>
    </div>
    <ul class:list={todos.length}>
        {#each todos as todo (todo.id) }
            <li class="list-item" transition:slide="{{duration: 300, easing: elasticInOut}}">
                <div class="is-flex" style="align-items: center">
                <span class="is-pulled-left">{todo.todoName}</span>
                    <button class="button is-danger" onclick={()=>removeTodo(todo.id)}>
                        <span class="icon is-small">
                            DEL
                        </span>
                    </button>
                </div>
            </li>
                {:else}
                <li class="has-text-centered" transition:slide="{{delay: 600, duration: 300, easing: elasticInOut}}">
                    Nothing here !
                </li>
        {/each}
    </ul>
</main> 