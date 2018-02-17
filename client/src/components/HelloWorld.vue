<template>
  <form v-on:submit.prevent="submitComment(comment)">
    <input v-model="comment" placeholder="Enter a comment" />
    <button type="submit" :dsabled="!comment">Submit</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'HelloWorld',
  props: ['comment'],
  data () {
    return {}
  },
  methods: {
    ...mapActions([
      'submitComment'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
