<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
// import { parseComponent } from "vue-template-compiler";
import { parse, compileScript } from "@vue/compiler-sfc";
import { script } from "./sfcScript.js";
export default {
    name: "App",
    data() {
        return {
            parsed: null,
            compiled: null
        };
    },
    created() {
        const parsed = parse(script);
        const compiled = compileScript(parsed, null);
        console.log(parsed, compiled);
    }
};
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
