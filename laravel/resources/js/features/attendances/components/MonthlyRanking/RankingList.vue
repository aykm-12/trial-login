<script setup lang="ts">
import { useAttendanceStore } from '../../stores/useAttendanceStore';
import RankingItem from './RankingItem.vue';

const store = useAttendanceStore();
</script>

<template>
    <div v-if="store.sortedRankings.length > 0" class="space-y-2.5">
        <RankingItem
            v-for="(item, index) in store.sortedRankings"
            :key="item.intern_id"
            :item="item"
            :index="index"
        />
    </div>

    <div v-else class="text-center py-6 text-slate-400 text-sm">
        今月の出社データはまだありません。
    </div>
</template>

<style scoped>

</style>
