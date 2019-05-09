<template>
  <div class="perfil">
    <div class="perfil__picture">
      <!-- Não consigo colocar referencia da imagem pelo codesandbox -->
      <img src="../assets/aguia.jpg" class="perfil__img" v-if="perfil.id === 1">
      <img src="../assets/lobo.jpg" class="perfil__img" v-if="perfil.id === 2">
      <img src="../assets/gato.png" class="perfil__img" v-if="perfil.id === 3">
      <img src="../assets/tubarao.jpg" class="perfil__img" v-if="perfil.id === 4">
      <dl>
        <dt>{{ perfil.title }}:</dt>
        <dd>{{ percent }}%</dd>
        <dt>Lema:</dt>
        <dd>{{ perfil.slogan }}</dd>
      </dl>
    </div>
    <div class="perfil__desc">
      <table class="table">
        <thead>
          <tr>
            <th width="33%" class="table-success">Pontos Fortes</th>
            <th width="33%" class="table-warning">Pontos Melhoria</th>
            <th width="33%" class="table-info">Motivações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="items in perfil.table" :key="items.id">
            <td v-for="item in items.cols" :key="item">{{ item }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { profiles } from "../store.js";

export default {
  name: "perfil",
  data: () => ({
    profiles: []
  }),
  props: {
    percent: Number,
    profileID: Number
  },
  computed: {
    perfil() {
      return this.profiles.find(x => x.id === this.profileID);
    }
  },
  mounted() {
    this.profiles = profiles;
  }
};
</script>

<style>
td:first-child {
  background: #c3e6cb;
}
td:nth-child(2n) {
  background: #ffeeba;
}
td:last-child {
  background: #bee5eb;
}
</style>
