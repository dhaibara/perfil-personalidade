<template>
  <div class="resultados">
    <button class="btn btn-primary" @click="abrirResultado()">Ver resultado</button>
    <div class="resultado" v-show="abrir">
      <div class="fixed" ref="fixedElm">
        <button class="btn close" @click="abrirResultado()">X Fechar</button>
        <h2>Perfil de Personalidade (Ned Hermman)</h2>
        <table id="table-header" ref="tableHead" class="table table-bordered table-dark">
          <thead>
            <tr>
              <th width="25%">
                <div class="perfil__picture">
                  <img src="../assets/aguia.jpg" class="perfil__img">
                </div>
                <div class="perfil__desc">
                  <h3>{{ profiles.perfis[0].valor }}</h3>
                  <h4>{{ total('I') }}%</h4>
                </div>
              </th>
              <th width="25%">
                <div class="perfil__picture">
                  <img src="../assets/lobo.jpg" class="perfil__img">
                </div>
                <div class="perfil__desc">
                  <h3>{{ profiles.perfis[1].valor }}</h3>
                  <h4>{{ total('O') }}%</h4>
                </div>
              </th>
              <th width="25%">
                <div class="perfil__picture">
                  <img src="../assets/gato.jpg" class="perfil__img">
                </div>
                <div class="perfil__desc">
                  <h3>{{ profiles.perfis[2].valor }}</h3>
                  <h4>{{ total('C') }}%</h4>
                </div>
              </th>
              <th width="25%">
                <div class="perfil__picture">
                  <img src="../assets/tubarao.jpg" class="perfil__img">
                </div>
                <div class="perfil__desc">
                  <h3>{{ profiles.perfis[3].valor }}</h3>
                  <h4>{{ total('A') }}%</h4>
                </div>
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="table-pontos" ref="tablePoints" :style="`padding-top: ${altura}`">
        <table-results
          tableClass="table-success"
          :pontos="profiles.pontosFortes"
          title="Pontos Fortes"
        />
        <table-results tableClass="table-warning" :pontos="profiles.melhorias" title="Melhorias"/>
        <table-results tableClass="table-info" :pontos="profiles.motivacoes" title="Motivações"/>
      </div>
    </div>
  </div>
</template>
<script>
import { profiles } from "../store.js";
import TableResults from "./TableResults";
import Perfil from "./Perfil";

export default {
  name: "results",
  components: {
    Perfil,
    TableResults
  },
  data: () => ({
    abrir: false,
    profiles: [],
    altura: "200px"
  }),
  props: {
    checked: Array
  },
  computed: {
    counter() {
      return this.checked.length;
    }
  },
  methods: {
    total(option) {
      return this.checked.filter(val => val === option).length * 4;
    },
    abrirResultado() {
      this.abrir = !this.abrir;
    }
  },
  mounted() {
    this.profiles = profiles[0];
  },
  updated() {
    const total =
      this.$refs.tableHead.clientHeight + this.$refs.fixedElm.clientHeight;

    this.altura = `${total - 20}px`;
  }
};
</script>
    <style>
.resultados {
  position: relative;
}
.resultado {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  padding: 0 20px;
  height: 100vh;
  overflow: scroll;
  background: white;
}
.perfil__picture {
  width: 120px;
  float: left;
  overflow: hidden;
}
.perfil__img {
  width: 100%;
}
.perfil {
  width: 100%;
  clear: both;
  float: left;
  margin-bottom: 20px;
}
.perfil__desc {
  padding: 0 10px;
  overflow: hidden;
}
.fixed {
  position: fixed;
  width: 95vw;
  height: 20vh;
  background: white;
  padding: 20px 0 0;
}
.table {
  width: 95vw;
}
#table-header {
  margin-bottom: 0;
  text-align: center;
}
.table-pontos {
  padding-top: 25%;
}
</style>