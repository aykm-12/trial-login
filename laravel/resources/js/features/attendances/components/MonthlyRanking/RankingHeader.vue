<script setup lang="ts">
// 現在の月を取得（例: 5月）
const currentMonth = new Date().getMonth() + 1;
</script>

<template>
<div class="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
    <h2 class="text-lg font-black text-slate-800 flex items-center gap-2">
        <span>🏆</span> {{ currentMonth }}月の出社ランキング
    </h2>
    <span class="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
  リアルタイム更新中
</span>
</div>
</template>

<style scoped>

</style>
