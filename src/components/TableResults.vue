<template>
  <div>
    <table class="table table-bordered" :class="tableClass">
      <thead>
        <tr>
          <td colspan="4">{{ title }}</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td width="25%" v-for="listas in pontos" :key="listas.id">
            <ul>
              <li v-for="item in listas.lista" :key="item.id">{{ item.valor }}</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "table-results",
  props: {
    tableClass: String,
    pontos: [Array, Object],
    title: String
  }
};
</script>
<style>
ul {
  padding: 0;
  margin: 0 0 0 1em;
}
</style>


