<template>
  <div class="container">
    <Navbar />
    <NewChatForm />
  </div>
</template>

<script>
import { watch } from "@vue/runtime-core";
import Navbar from "../components/Navbar.vue";
import NewChatForm from "../components/NewChatForm.vue";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";
export default {
  components: { Navbar, NewChatForm },
  setup() {
    const { user } = getUser();
    const router = useRouter();

    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });

    return { user };
  },
};
</script>

<style>
</style>