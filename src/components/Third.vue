<template>
  <div id="app">
    <h1>#Third</h1>
    <h2>From：{{ from }}</h2>
    <button name="first" v-on:click="toFirst"/>
    <button name="second" v-on:click="toSecond"/>
    <button name="third" v-on:click="toThird"/>
  </div>
</template>

<script>
export default {
  name: "first",
  computed: {
    from() {
      return this.$store.state.from
    }
  },
  methods: {
    toFirst() {
      this.$store.dispatch("setFrom", { from: "third"})
      this.$router.push("/first")
    },
    toSecond() {
      this.$store.dispatch("setFrom", { from: "third"})
      this.$router.push("/second")
    },
    toThird() {
      this.$store.dispatch("setFrom", { from: "third"})
      this.$router.push("/third")
    }
  }
}
</script>

<style>

</style>

