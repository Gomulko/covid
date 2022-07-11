<template>
    <div>
        <pre>{{ apiCall }}</pre>
    </div>
</template>

<script>
export default {
    data() {
        return {
            info: ''
        }
    },

    props: {
        apiCall: String,
    }
}
</script>

<style lang="scss" scoped>
</style>