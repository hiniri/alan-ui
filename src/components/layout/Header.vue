<template>
    <div>
        <el-button @click="changeSide">change left</el-button>
    </div>
</template>
<script lang="ts" setup>

const emit = defineEmits<{ (e: 'changeSide'): void }>()

const changeSide = () => {
    console.log("header, changeSize")
    emit('changeSide')
}

</script>
