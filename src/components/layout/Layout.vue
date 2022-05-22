<template>
    <el-container class="outer_container">
        <el-header class="header" :height="dynamicHeaderHeight">
            <Header @change-side="changeSide"></Header>
        </el-header>
        <el-container class="inner_container">
            <el-aside class="lefter" :style="dynamicSideStyle" :width="dynamicLeftWidth"></el-aside>
            <el-container class="content_container">
                <el-main class="center">
                    {{ dynamicHeaderHeight }}
                    {{ dynamicLeftWidth }}
                </el-main>
            </el-container>
        </el-container>
    </el-container>
</template>
<script lang="ts" setup>
import {
    ref, computed, onMounted, getCurrentInstance
} from 'vue'
import Header from '@/components/layout/Header.vue'
const headerHeight = ref(80);
// 获取当前实例
// 顶部菜单 高度
const dynamicHeaderHeight = computed(() => {
    return headerHeight.value + "px";
});

let lefterWidth = ref(300);
const dynamicLeftWidth = computed(() => {
    return lefterWidth.value + "px";
});
// 左侧菜单 高度
const dynamicSideStyle = computed(() => {
    return {
        height: 'calc(100vh - ' + dynamicHeaderHeight.value + ')'
    }
});

const changeSide = () => {
    debugger
    lefterWidth.value = lefterWidth.value === 300 ? 54 : 300
    console.log("layout, changeSide")
}

onMounted(() => {
    console.log(headerHeight.value)
    console.log(dynamicSideStyle)
    const { proxy: _this } = getCurrentInstance() as any
    console.log("instance", _this.headerHeight)
})
</script>
<style scoped>
.outer_container {
    background-color: cadetblue;
}

.outer_container .header {
    background-color: cornflowerblue;
}

.inner_container {
    background-color: tomato;
}

.inner_container .lefter {
    background-color: violet;
}

.content_container {
    background-color: bisque;
}

.content_container .center {
    background-color: yellowgreen;
}
</style>