<script setup lang="ts">
import lib from "../../lib/index";
const thing_id = 1419;
const schema_id = 16308;
const resource_id = 4829790;
</script>

<template>
  <div id="test">
    <button @click="lib.openEditModal(thing_id, schema_id, resource_id)">
      Apri
    </button>
  </div>
</template>
