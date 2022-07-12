<template>
    <div>
        <h1>Total Confirmed: {{ apiCall.TotalConfirmed }}</h1>
        <h1>Total Deaths: {{ apiCall.TotalDeaths }}</h1>
    </div>
</template>

<script>
export default {
    props: {
        apiCall: Object,
    }
}
</script>

<style lang="scss" scoped>
</style>