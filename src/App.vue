<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <nav class="col-md-4 sidebar">
        <header class="col-md-4 sidebar-sticky">
          <h1 class="title">
            Perfil de personalidade
            <small class="text-muted">(Ned Hermman)</small>
          </h1>
          <div class="alert alert-primary" role="alert">Respostas: {{ counterWrapper }}</div>
          <results :checked="checked" v-show="counter === 25"/>
        </header>
      </nav>
      <questions class="col-md-6" :questions="questions" :checked="checked"/>
    </div>
  </div>
</template>

<script>
import { questions as perguntas } from "./store.js";
import Questions from "./components/Questions";
import Results from "./components/Results";

export default {
  name: "App",
  components: {
    Questions,
    Results
  },
  data: () => ({
    questions: [],
    checked: []
  }),
  computed: {
    counter() {
      return parseInt(this.checked.length) - 1 < 0
        ? 0
        : parseInt(this.checked.length) - 1;
    },
    counterWrapper() {
      return `${this.counter} de 25`;
    }
  },
  mounted() {
    this.questions = perguntas;
  }
};
</script>
<style>
#app {
  padding: 20px;
}
.sidebar-sticky {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  padding: 0;
  background: #fff;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
}
</style>

