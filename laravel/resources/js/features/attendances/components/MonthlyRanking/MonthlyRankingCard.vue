<script setup lang="ts">
import RankingHeader from './RankingHeader.vue';
import RankingList from './RankingList.vue';
</script>

<template>
    <div class="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 border border-slate-100 mt-6">
        <RankingHeader />

        <RankingList />

        <p class="text-[11px] text-slate-400 text-center mt-4">
            💡 出社回数が一定数を超えると「殿堂入り」として特設ページに刻まれます！
        </p>
    </div>
</template>

<style scoped>

</style>
