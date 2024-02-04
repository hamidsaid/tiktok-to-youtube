
<template>
  <section>

    <div class="flex items-center justify-center h-min">
      <div class="text-center">
        <p>Tiktok To Youtube Automation</p>

        <form @submit.prevent = "submitUrl">
          <InputGroup class="mt-3">
            <InputGroupAddon>url</InputGroupAddon>
            <InputText placeholder="Tiktok Url" v-model="url" />
          </InputGroup>

          <div class="mt-3">
            <Button type="submit" label="Post"/>
          </div>
        </form>


      </div>
    </div>

  </section>
</template>

<script setup>
import { ref } from "vue";

const url = ref(null);

const submitUrl = () => {
  console.log(url.value);
}
</script>


<style scoped></style>
