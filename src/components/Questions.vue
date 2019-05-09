<template>
  <div class="questions">
    <article class="question" v-for="question in questions" :key="question.id">
      <h1 class="question__title">{{ question.id }} - {{ question.question}}</h1>
      <ul class="options">
        <li class="options__item" v-for="option in question.options" :key="option.value">
          <input
            type="radio"
            class="options__input"
            :name="question.id"
            :id="question.id + option.value"
            :value="option.value"
            v-model="checked[question.id]"
          >
          <label
            class="options__label"
            :for="question.id + option.value"
          >[ {{ option.value }} ] - {{ option.answer }}</label>
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
export default {
  name: "questions",
  props: {
    questions: Array,
    checked: Array
  }
};
</script>

<style>
.question__title {
  background: #dedede;
  padding: 5px 10px;
}
.options {
  padding: 0px 0px 20px;
  list-style: none;
}
.options__item {
  margin-bottom: 10px;
}
.options__label {
  width: 100%;
  display: block;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #dedede;
  cursor: pointer;
}
.options__input {
  display: none;
}
.options__input:checked + label {
  font-weight: bold;
  background: #c3e6cb;
  color: #155724;
}
.question {
  text-align: left;
}
</style>
