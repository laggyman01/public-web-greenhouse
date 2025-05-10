<script setup lang="ts">
import Footer from '~/components/footer.vue';

</script>

<template>
    <!-- <client-only> -->
        <Narbar>
            <slot></slot>
        </Narbar>
        <Footer>
            <slot></slot>
        </Footer>
    <!-- </client-only> -->
</template>